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
                if (Mod.var._盲盒定时器)this.method("HideLoadin").invoke();
            };
            // 屏蔽盲盒动画
            lib.class('GearEngine.Network.ActivityBlindboxProtocolHandler').method('OnMoreBuy').implementation = function(a,b){
            }
        });
    // },1000)
}