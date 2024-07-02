import 'frida-il2cpp-bridge'

export const hook = (Mod) => {
    setTimeout(_=>{
        console.log('start hook');
        Il2Cpp.perform(() => {
            console.log(Mod.var.test,1);
            console.log(Il2Cpp.unityVersion);

            let lib = Il2Cpp.Domain.assembly('Assembly-CSharp').image;
            lib.class('GearEngine.OperatingSystem.Native.NativeInfo').method('GetDeviceID').implementation = ()  => {
                // console.log('GetDeviceID Hook');
                // return Il2Cpp.String.from(uuid());
                return Il2Cpp.String.from("6666");
            }
            
            lib.class('GearEngine.AssetBundles.InitializationInterface').method('CheckVersion').implementation = function(){
                console.log(this.field('_assetBundleVersion').value,this.field('_codeVersion').value,this.field('_version').value);
                this.field('_codeVersion').value = 219;
                this.field('_assetBundleVersion').value = Il2Cpp.String.from('212.0');
                // this.field('_isUpdateFakeComplete').value = true;
                this.method('InitApplicationContext').invoke();
                return this.method('CheckVersion').invoke()
            }

            lib.class('ApplicationInterface').method('CheckNewBaseVersion').implementation = function(v){
                console.log(v.field('<BasePackageVersion>k__BackingField').value);
                // v.field('<BasePackageVersion>k__BackingField').value = Il2Cpp.String.from('27');
                // console.log(v.field('<BasePackageVersion>k__BackingField').value);
                this.method('CheckNewBaseVersion').invoke(v);
            }

            var get = 0;
                lib.class('Data.ServerListData').method("get_serverItemDatas").implementation = function () {
                if(get < 3){
                    lib.class('SDKService').field('platform').value.method('GetServerList').invoke()
                    get++;
                }
                let data = this.method("get_serverItemDatas").invoke();
                return data;
            };

            lib.class('GearEngine.Platform.PolymerizeSDkInterface').method('OnGetServerListCompleted').implementation = function(data){
                let json = data.method('ToJson').invoke();
                let jsonarray = JSON.parse(json.toString().slice(1, -1));
                let dataarray = JSON.parse(jsonarray.data);
                dataarray.list.push({
                    "ServerTime": "2024-03-07",
                    "desc": "游戏将在3月6日10:00—11:00进行停服更新，请勇者大大耐心等待",
                    "developid": "90001",
                    "host": "192.168.2.5:6001",
                    "id": 114001,
                    "is_bonus": "0",
                    "is_hot": "1",
                    "is_new": "1",
                    "is_top": "1",
                    "mergedto": "",
                    "name": "内网测试2.5",
                    "num": "",
                    "open_time": "1970-01-01 08:00:00",
                    "sort_index": 136,
                    "status": "1",
                    "subType": "",
                    "subTypeSort": 1,
                    "type": "all"
                });
                dataarray.list.push({
                    "ServerTime": "2024-03-07",
                    "desc": "游戏将在3月6日10:00—11:00进行停服更新，请勇者大大耐心等待",
                    "developid": "90002",
                    "host": "192.168.3.17:6001",
                    "id": 114002,
                    "is_bonus": "0",
                    "is_hot": "1",
                    "is_new": "1",
                    "is_top": "1",
                    "mergedto": "",
                    "name": "内网测试3.17",
                    "num": "",
                    "open_time": "1970-01-01 08:00:00",
                    "sort_index": 137,
                    "status": "1",
                    "subType": "",
                    "subTypeSort": 1,
                    "type": "all"
                });
                dataarray.list.push({
                    "ServerTime": "2024-03-07",
                    "desc": "游戏将在3月6日10:00—11:00进行停服更新，请勇者大大耐心等待",
                    "developid": "90003",
                    "host": "192.168.3.131:6001",
                    "id": 114003,
                    "is_bonus": "0",
                    "is_hot": "1",
                    "is_new": "1",
                    "is_top": "1",
                    "mergedto": "",
                    "name": "内网测试3.131",
                    "num": "",
                    "open_time": "1970-01-01 08:00:00",
                    "sort_index": 138,
                    "status": "1",
                    "subType": "",
                    "subTypeSort": 1,
                    "type": "all"
                });
                dataarray.list.push({
                    "ServerTime": "2024-03-07",
                    "desc": "游戏将在3月6日10:00—11:00进行停服更新，请勇者大大耐心等待",
                    "developid": "90004",
                    "host": "104.167.247.127:6001",
                    "id": 114004,
                    "is_bonus": "0",
                    "is_hot": "1",
                    "is_new": "1",
                    "is_top": "1",
                    "mergedto": "",
                    "name": "线上开发测试",
                    "num": "",
                    "open_time": "1970-01-01 08:00:00",
                    "sort_index": 139,
                    "status": "1",
                    "subType": "",
                    "subTypeSort": 1,
                    "type": "all"
                });
                jsonarray.data = JSON.stringify(dataarray);
                let jsonstr = JSON.stringify(jsonarray);
                var jdata = lib.class('LitJson.JsonMapper').method('ToObject').overload('System.String').invoke(Il2Cpp.String.from(jsonstr))
                this.method('OnGetServerListCompleted').invoke(jdata);
            }

            lib.class('Proto.MPtEncode').method('Encode').overload('System.Byte[]','System.Int32','System.Int32').implementation = function(a,b,c){
                //干掉请求包加密
            }
    
            lib.class('Proto.MPtEncode').method('Encode').overload('System.Byte[]').implementation = function(a){
                //干掉请求包加密
            }
    
            function littleEndianUint32(byteArray) {
                // 创建一个与byteArray等长的ArrayBuffer
                const buffer = new ArrayBuffer(byteArray.length);
                // 创建一个Uint8Array视图，用于填充数据
                const uint8View = new Uint8Array(buffer);
                for (let i = 0; i < byteArray.length; i++) {
                    uint8View[i] = byteArray[i];
                }
                // 创建一个DataView视图，用于读取Uint32数据
                const dataView = new DataView(buffer);
                // 读取Uint32数据，指定0为起始位置，true表示使用小端字节序
                return dataView.getUint32(0, true);
            }
    
            function littleEndianUint16(byteArray) {
                // 创建一个与byteArray等长的ArrayBuffer
                const buffer = new ArrayBuffer(byteArray.length);
                // 创建一个Uint8Array视图，用于填充数据
                const uint8View = new Uint8Array(buffer);
                for (let i = 0; i < byteArray.length; i++) {
                    uint8View[i] = byteArray[i];
                }
                // 创建一个DataView视图，用于读取Uint16数据
                const dataView = new DataView(buffer);
                // 读取Uint16数据，指定0为起始位置，true表示使用小端字节序
                return dataView.getUint16(0, true);
            }
    
            lib.class('Proto.CRC').method('GetCrc32').overload('System.Byte[]','System.UInt32','System.UInt32','System.UInt32').implementation = function(a,b,c,d){
                if(a.length >= 5){
                    const byteArray = new Uint8Array([a.get(b), a.get(b+1)]);
                    const uint16 = littleEndianUint16(byteArray)
                    const byteArray2 = [a.get(b-4),a.get(b-3),a.get(b-2),a.get(b-1)];
                    const uint32 = littleEndianUint32(byteArray2);
                    if(uint32 > 99999 && uint16 < 99999)return 807399086;               
                }
                
                let crc32 = this.method('GetCrc32').invoke(a,b,c,d)
                return crc32;
            }

            
            // Il2Cpp.trace()
            // .assemblies(Il2Cpp.Domain.assembly('Assembly-CSharp'))
            // .filterClasses(klass => klass.name.indexOf('BaseVersionCheck') > -1)
            // // .filterClasses(klass => klass.name.indexOf('GearEngine') > -1 || klass.namespace.indexOf('GearEngine') > -1)
            
            // .filterMethods(method => method.name != 'Update' && method.name != 'OnGUI')
            // .and()
            // .attach("detailed");
        });

        /*
            GearEngine.Network.NewTaskProtocolHandler.TaskUpdate

            Il2Cpp.perform(() => {
                let lib = Il2Cpp.Domain.assembly('Assembly-CSharp').image;
                let NetManager = lib.class('NetManager').field('_instance').value;
                let ApplicationNetworker = NetManager.field('_networker').value;
                let newTaskProtocolHandler = ApplicationNetworker.field('newTaskProtocolHandler').value;
                newTaskProtocolHandler.method('TaskUpdate').invoke(3610,1,2,10000000);
                newTaskProtocolHandler.method('TaskReward').invoke(3610,6);
            });


            Il2Cpp.perform(() => {
                let lib = Il2Cpp.Domain.assembly('Assembly-CSharp').image;
                let NetManager = lib.class('NetManager').field('_instance').value;
                let ApplicationNetworker = NetManager.field('_networker').value;
                let newTaskProtocolHandler = ApplicationNetworker.field('newTaskProtocolHandler').value;
                newTaskProtocolHandler.method('TaskUpdate').invoke(40206,1,2,0);
                newTaskProtocolHandler.method('TaskReward').invoke(40206,14);
                ApplicationNetworker.field('activityBlindboxProtocolHandler').value.method('Buy').invoke(1);
            });

            Il2Cpp.perform(() => {
                let lib = Il2Cpp.Domain.assembly('Assembly-CSharp').image;
                let NetManager = lib.class('NetManager').field('_instance').value;
                let ApplicationNetworker = NetManager.field('_networker').value;
                let newTaskProtocolHandler = ApplicationNetworker.field('loginProtocolHandler').value;
                newTaskProtocolHandler.method('StartRecord').invoke(2);
            });
        */
        // Il2Cpp.trace()
        //     .assemblies(Il2Cpp.Domain.assembly('Assembly-CSharp'))
        //     .filterMethods(method => method.name == 'TaskUpdate' || method.name == 'TaskReward')
        //     .and()
        //     .attach("detailed");

        /*
            Il2Cpp.perform(() => {
                var lib = Il2Cpp.Domain.assembly('Assembly-CSharp').image;
                let NetManager = lib.class('NetManager').field('_instance').value;
                let ApplicationNetworker = NetManager.field('_networker').value;
                let dungeonProtocolHandler = ApplicationNetworker.field('dungeonProtocolHandler').value;
                let newInnersProtocolHandler = ApplicationNetworker.field('newInnersProtocolHandler').value;
                
                let level = 1000 + 5;
                let SystemInt32 = Il2Cpp.Image.corlib.class('System.Byte')
                let GenericList = Il2Cpp.Image.corlib.class('System.Collections.Generic.List`1')
                let SystemInt32List = GenericList.inflate(SystemInt32);
                let ids = SystemInt32List.new();

                ids.method('Add').invoke(3);
                ids.method('Add').invoke(2);
                ids.method('Add').invoke(1);

                dungeonProtocolHandler.method("LocalStart").invoke(0, 35, level, 0, 0);
                dungeonProtocolHandler.method("LocalEnd").invoke(35, level, 0, 0, 0, 0, 3);
                newInnersProtocolHandler.method('Star').invoke(ids);
                dungeonProtocolHandler.method("Leave").invoke();
            });

            let _秘境当前层数 = 1;
            let _秘境结束层数 = 100;
            let _一键秘境定时器 = false;
            if (_一键秘境定时器) clearInterval(_一键秘境定时器);
            _一键秘境定时器 =  setInterval(() => {
                Il2Cpp.perform(() => {
                    var lib = Il2Cpp.Domain.assembly('Assembly-CSharp').image;
                    let NetManager = lib.class('NetManager').field('_instance').value;
                    let ApplicationNetworker = NetManager.field('_networker').value;
                    let dungeonProtocolHandler = ApplicationNetworker.field('dungeonProtocolHandler').value;
                    let newInnersProtocolHandler = ApplicationNetworker.field('newInnersProtocolHandler').value;
                    console.log(_秘境当前层数,_秘境结束层数)
                    if(_秘境当前层数 <= _秘境结束层数){
                        let level = 1000 + _秘境当前层数;
                        let SystemInt32 = Il2Cpp.Image.corlib.class('System.Byte')
                        let GenericList = Il2Cpp.Image.corlib.class('System.Collections.Generic.List`1')
                        let SystemInt32List = GenericList.inflate(SystemInt32);
                        let ids = SystemInt32List.new();

                        ids.method('Add').invoke(3);
                        ids.method('Add').invoke(2);
                        ids.method('Add').invoke(1);

                        dungeonProtocolHandler.method("LocalStart").invoke(0, 35, level, 0, 0);
                        dungeonProtocolHandler.method("LocalEnd").invoke(35, level, 0, 0, 0, 0, 3);
                        newInnersProtocolHandler.method('Star').invoke(ids);
                        dungeonProtocolHandler.method("Leave").invoke();
                        _秘境当前层数++;
                    }else{
                        clearInterval(_一键秘境定时器);
                    }
                });
            }, 200);
*/
    },1000)
}