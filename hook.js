import 'frida-il2cpp-bridge'

export const hook = (Mod) => {
    // setTimeout(_=>{
        console.log('start hook');
        Il2Cpp.perform(() => {
            console.log(Mod.var.test,1);
            console.log(Il2Cpp.unityVersion);
            let lib = Il2Cpp.Domain.assembly('Assembly-CSharp').image;
            // Hook获取设备码
            lib.class('GearEngine.OperatingSystem.Native.NativeInfo').method('GetDeviceID').implementation = ()  => {
                // return Il2Cpp.String.from(uuid());
                return Il2Cpp.String.from('1231231231561');
            }
            // 隐藏加载
            lib.class("UISystem.UIManager").method("ShowLoading").overload("System.String").implementation = function (e) {
                this.method("ShowLoading").overload("System.String").invoke(e);
                // if (Mod.var._盲盒定时器)this.method("HideLoadin").invoke();
                this.method("HideLoadin").invoke();
            };
            // 屏蔽盲盒动画
            lib.class('GearEngine.Network.ActivityBlindboxProtocolHandler').method('OnMoreBuy').implementation = function(a,b){
            }

            // 屏蔽开拓奖励弹窗
            lib.class('GearEngine.Network.PioneerAcademyProtocolHandler').method('OnNodeReward').implementation = function(a,b){
                if(!Mod.var._开拓定时器)this.method('OnNodeReward').invoke(a,b)
            }

            // 屏蔽分解弹窗
            lib.class('GearEngine.Network.ItemProtocolHandler').method('OnResolve').implementation = function(a,b){
                if(!Mod.var._开拓定时器)this.method('OnResolve').invoke(a,b)
            }

            // 屏蔽任务奖励弹窗
            lib.class('GearEngine.Network.NewTaskProtocolHandler').method('OnTaskReward').implementation = function(a,b){
                if(!Mod.var._隐藏任务奖励弹窗)this.method('OnTaskReward').invoke(a,b)
            }

            
            

            lib.class('Battle.BattleManager').method('Update').implementation = function () {
                this.method('Update').invoke();
                if (Mod.triggerFlag('killMonster')){
                    this.method('KillAllMonster').invoke();
                }
            }

            lib.class("MonsterAiController").method("Shoot").implementation = function () {
                if (Mod.var._自动杀死怪物) Mod.flag.killMonster = true;
                this.method('Shoot').invoke();
            }
            
            antiBan(Mod);

            Il2Cpp.trace()
            .assemblies(Il2Cpp.Domain.assembly('Assembly-CSharp'))
            .filterClasses(klass => klass.name.indexOf('ProtocolHandler') > -1)
            // .filterClasses(klass => klass.name.indexOf('GearEngine') > -1 || klass.namespace.indexOf('GearEngine') > -1)
            
            // .filterMethods(method => method.name != 'Update' && method.name != 'OnGUI')
            .and()
            .attach("detailed");
        });
    // },1000)
}

// 阻止日志上传 可防止部分封号检测
const antiBan = (Mod) => {
    let lib = Il2Cpp.Domain.assembly('Assembly-CSharp').image;
    
    lib.class("Battle.BattleLog").method("UpLoad").implementation = function () {
        Mod.debugLog('Battle.BattleLog UpLoad');
    }
    lib.class("Battle.BattleLog").method("UpLoadDuration").implementation = function () {
        Mod.debugLog('Battle.BattleLog UpLoadDuration');
    }
    lib.class("Battle.BattleLog").method("UpLoadFinish").implementation = function () {
        Mod.debugLog('Battle.BattleLog UpLoadFinish');
    }
    lib.class("Battle.BattleServerLog").method("Send").implementation = function () {
        Mod.debugLog('Battle.BattleServerLog Send');
    }
}