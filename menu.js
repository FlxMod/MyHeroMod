import { Mod } from './mod'
import 'frida-il2cpp-bridge'

export const getMenu = (m) => {
    return [
        {
            'type': 'tab',
            'item': [
                {
                    'title': '常用功能',
                    'item': [
                        {
                            'type': 'switch',
                            'title': '自动杀死所有怪物',
                            'val': false,
                            'callback': (res) => {
                                Mod.var._自动杀死怪物 = res.val;
                            }
                        },
                        {
                            'type': 'button',
                            'title': '手动触发杀死所有怪物',
                            'callback': () => {
                                Mod.flag.killMonster = true;
                            }
                        },
                        {
                            'type': 'button',
                            'title': '卡星界点我',
                            'callback': () => {
                                Il2Cpp.perform(() => {
                                    var lib = Il2Cpp.Domain.assembly('Assembly-CSharp').image;
                                    let NetManager = lib.class('NetManager').field('_instance').value;
                                    let ApplicationNetworker = NetManager.field('_networker').value;
                                    let dungeonTeamProtocolHandler = ApplicationNetworker.field('dungeonTeamProtocolHandler').value;
                                    dungeonTeamProtocolHandler.method('DungeonQuit').invoke();
                                });
                            }
                        },
                        {
                            'type': 'button',
                            'title': '测试添加100buff',
                            'callback': () => {
                                Il2Cpp.perform(() => {
                                    let lib = Il2Cpp.Domain.assembly('Assembly-CSharp').image;
                                    let BattleManager = lib.class('Battle.BattleManager').method('get_Instance').invoke();
                                    let MyheroGroup = BattleManager.method('GetMyHero').invoke();
                                    MyheroGroup.method('AddGloableBuff').invoke(100);
                                });
                            }
                        },
                        {
                            'type': 'switch',
                            'title': '无敌buff',
                            'val': false,
                            'callback': (res) => {
                                if(res.val == true){
                                    Mod.timer._无敌buff = setInterval(()=>{
                                        Il2Cpp.perform(() => {
                                            let lib = Il2Cpp.Domain.assembly('Assembly-CSharp').image;
                                            let BattleManager = lib.class('Battle.BattleManager').method('get_Instance').invoke();
                                            let MyheroGroup = BattleManager.method('GetMyHero').invoke();
                                            MyheroGroup.method('AddGloableBuff').invoke(211);
                                        },3000);
                                    },Mod.var._盲盒延迟);
                                }else{
                                    if(Mod.timer._无敌buff)clearInterval(Mod.timer._无敌buff);
                                }
                            }
                        },
                    ]
                },
                {
                    'title': '起号功能',
                    'item': [
                        {
                            'type': 'button',
                            'title': '一键EX3',
                            'callback': (val) => {
                                Il2Cpp.perform(() => {
                                    var lib = Il2Cpp.Domain.assembly('Assembly-CSharp').image;
                                    let NetManager = lib.class('NetManager').field('_instance').value;
                                    let ApplicationNetworker = NetManager.field('_networker').value;
                                    let newTaskProtocolHandler = ApplicationNetworker.field('newTaskProtocolHandler').value;
                                    let ids = [
                                        3000, 3001, 3002, 3003, 3004, 3005, 3006, 3007, 3008, 3009, 3010, 3011, 3012, 3013, 3014, 3015, 3099, 3100, 3101, 3102, 3103, 3104, 3105, 3106, 3107, 3108, 3109, 3110, 3111, 3112, 3113, 3114, 3115, 3116, 3117, 3118, 3119, 3120, 3121, 3122, 3123, 3124, 3125, 3126, 3127, 3128, 3129, 3130, 3132, 3133, 3134, 3135, 3136, 3150, 3151, 3152, 3153, 3154, 3172, 3173, 3174, 3175, 3190, 3191, 3192, 3193, 3200, 3201, 3203, 3204, 3205, 3206, 3207, 3220, 3221, 3222, 3223, 3224, 3225, 3229, 3230, 3236, 3237, 3238, 3240, 3241, 3242, 3243, 3244, 3231, 3232, 3245, 3233, 3246, 3234, 3235, 3301, 3302, 3247, 3249, 3250, 3251, 3252, 3253, 3254, 3255, 3256, 3259, 3260, 3261, 3262, 3263, 3264, 3265, 3266, 3267, 3268, 3271, 3272, 3273, 3274, 3275, 3380, 3390, 3391, 3392, 3401, 3402, 3403, 3404, 3405, 3406, 3420, 3421, 3422, 3423, 3424, 3425, 3426, 3427, 3428, 3429, 3440, 3441, 3500, 3600, 3601, 3602, 3603, 3604, 3605, 3606, 3607, 3608, 3609, 3610, 3611, 3612, 3613, 3614, 3615, 3616, 3617, 3620, 3621, 3622, 3623, 3624, 3625, 3626, 3627, 3628, 3629, 3630, 3631, 3632, 3633, 3634, 3635, 3636, 3637, 3650, 3651, 3652, 3653, 3654, 3655, 3656, 3700, 3701, 3702, 3703, 3710, 3711, 3712, 3713, 3720, 3721, 3722, 3723, 3730, 3731, 3732, 3740, 3741, 3742, 3743, 3744, 3745, 3750, 3751, 3752, 3753, 3754, 3755, 3756, 3757, 3780, 3781, 3782, 3783, 3784, 3785, 3800, 3801, 3802, 3803, 3804, 3805, 3820, 3821, 3822, 3823, 3824, 3829, 3830, 3831, 3832, 3833, 3840, 3841, 3842, 3850, 3860, 3861, 3862, 3870, 3871, 3872, 3874, 3875, 3876, 3877, 3878, 3879, 3880, 3881, 3885, 3886, 3887, 3888, 3890, 3891, 3892, 3895, 3896, 3897, 3898, 3900, 3901, 3902, 3903, 3904, 3905, 3906, 3907, 3908, 3909, 3910, 3911, 3912, 3913, 3914, 3915, 3916, 3917, 3918, 3950, 3951, 3952, 3953, 3954, 3955, 3956, 3957, 3958, 3960
                                    ];
                                    ids.forEach((id) => {
                                        newTaskProtocolHandler.method('TaskUpdate').invoke(id, 1, 2, 100000000);
                                        newTaskProtocolHandler.method('TaskReward').invoke(id, 6);
                                    });
                                });
                            }
                        },
                        {
                            'type': 'button',
                            'title': '一键S++',
                            'callback': (val) => {
                                Il2Cpp.perform(() => {
                                    var lib = Il2Cpp.Domain.assembly('Assembly-CSharp').image;
                                    let NetManager = lib.class('NetManager').field('_instance').value;
                                    let ApplicationNetworker = NetManager.field('_networker').value;
                                    let newTaskProtocolHandler = ApplicationNetworker.field('newTaskProtocolHandler').value;
                                    let ids = [
                                        3099, 3100, 3129, 3390, 3272, 3392, 3101, 3253, 3102, 3103, 3104, 3105, 3106, 3107, 3108, 3109, 3110, 3111, 3112, 3113, 3114, 3115, 3121, 3132, 3150, 3151, 3152, 3153, 3154, 3172, 3173, 3174, 3175, 3190, 3201, 3237, 3238, 3240, 3241, 3242, 3243, 3244, 3134, 3203, 3204, 3220, 3229, 3236, 3250, 3251, 3252, 3254, 3256, 3259, 3260, 3261, 3380, 3011, 3401, 3403, 3404, 3420, 3421, 3422, 3423, 3424, 3440, 3441, 3600, 3601, 3602, 3603, 3621, 3622, 3623, 3650, 3651, 3700, 3710, 3720, 3829, 3740, 3741, 3781, 3405, 3406, 3262, 3604, 3624, 3652, 3742, 3782, 3743, 3263, 3605, 3625, 3231, 3730, 3745, 3785, 3784, 3783, 3232, 3606, 3626, 3701, 3711, 3721, 3653, 3830, 3831, 3832, 3833, 3860, 3861, 3862, 3870, 3871, 3872, 3874, 3875, 3245, 3264, 3273, 3274, 3391, 3607, 3627, 3654, 3206, 3731, 3876, 3880, 3885, 3886, 3888, 3890, 3265, 3608, 3628, 3655, 3702, 3712, 3722, 3895, 3896, 3897, 3898, 3703, 3713, 3723
                                    ];
                                    ids.forEach((id) => {
                                        newTaskProtocolHandler.method('TaskUpdate').invoke(id, 1, 2, 100000000);
                                        newTaskProtocolHandler.method('TaskReward').invoke(id, 6);
                                    });
                                });
                            }
                        },
                        {
                            'type': 'button',
                            'title': '一键执照任务',
                            'callback': (val) => {
                                // 执照
                                Il2Cpp.perform(() => {
                                    var lib = Il2Cpp.Domain.assembly('Assembly-CSharp').image;
                                    let NetManager = lib.class('NetManager').field('_instance').value;
                                    let ApplicationNetworker = NetManager.field('_networker').value;
                                    let newTaskProtocolHandler = ApplicationNetworker.field('newTaskProtocolHandler').value;
                                    let ids = [
                                        21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21009, 21500, 21501, 21502, 21503, 21504, 21505, 21506, 22001, 22002, 22003, 22004, 22005, 22006, 22007, 22008, 22009, 22010, 22011, 22012, 22013, 22014, 22015, 22016, 22017, 22018, 22019, 22020, 22021, 22022, 22023, 22024, 22025, 22026, 22027, 22028, 22029, 22030, 22031, 22032, 22033, 22034, 22035, 22036, 22037, 22038, 22041, 22042, 22043, 22044, 22045, 22046, 22047, 22048, 22049, 22050, 22051, 22052, 22053, 22054, 22055, 22056, 22057, 22058, 22059, 22060, 22061, 22062, 22063, 22064, 22065, 22066, 22067, 22068
                                    ];
                                    ids.forEach((id) => {
                                        newTaskProtocolHandler.method('TaskUpdate').invoke(id, 1, 2, 100000000);
                                        newTaskProtocolHandler.method('TaskReward').invoke(id, 9);
                                    });
                                });
                            }
                        },
                        {
                            'type': 'text',
                            'val': '新号第一天小秘境只能到120 大秘境30 否则封号'
                        },
                        {
                            'type': 'input',
                            'title': '秘境开始层数',
                            'val': Mod.var._秘境开始层数.toString(),
                            'callback': (res) => {
                                Mod.var._秘境开始层数 = parseInt(res.val);
                            }
                        },
                        {
                            'type': 'input',
                            'title': '秘境结束层数',
                            'val': Mod.var._秘境结束层数.toString(),
                            'callback': (res) => {
                                Mod.var._秘境结束层数 = parseInt(res.val);
                            }
                        },
                        {
                            'type': 'button',
                            'title': '一键小秘境',
                            'callback': (val) => {
                                Mod.var._秘境当前层数 = Mod.var._秘境开始层数;
                                if (Mod.var._一键秘境定时器) clearInterval(Mod.var._一键秘境定时器);
                                Mod.var._一键秘境定时器 = setInterval(() => {
                                    Il2Cpp.perform(() => {
                                        var lib = Il2Cpp.Domain.assembly('Assembly-CSharp').image;
                                        let NetManager = lib.class('NetManager').field('_instance').value;
                                        let ApplicationNetworker = NetManager.field('_networker').value;
                                        let dungeonProtocolHandler = ApplicationNetworker.field('dungeonProtocolHandler').value;
                                        let newInnersProtocolHandler = ApplicationNetworker.field('newInnersProtocolHandler').value;

                                        if (Mod.var._秘境当前层数 <= Mod.var._秘境结束层数) {
                                            let level = 1000 + Mod.var._秘境当前层数;
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
                                            Mod.var._秘境当前层数++;
                                        } else {
                                            clearInterval(Mod.var._一键秘境定时器);
                                            toast('一键小秘境完成');
                                        }
                                    });
                                }, 100);
                            }
                        },
                    ]
                },
                {
                    'title': '抽奖区',
                    'item': [
                        {
                            'type': 'text',
                            'val': '盲盒抽奖'
                        },
                        {
                            'type': 'input',
                            'title': '盲盒ID',
                            'val': Mod.var._盲盒ID.toString(),
                            'callback': (res) => {
                                Mod.var._盲盒ID = parseInt(res.val);
                            }
                        },
                        {
                            'type': 'button',
                            'title': '单抽',
                            'callback': (val) => {
                                Il2Cpp.perform(() => {
                                    var lib = Il2Cpp.Domain.assembly('Assembly-CSharp').image;
                                    let NetManager = lib.class('NetManager').field('_instance').value;
                                    let ApplicationNetworker = NetManager.field('_networker').value;
                                    let activityBlindboxProtocolHandler = ApplicationNetworker.field('activityBlindboxProtocolHandler').value;
                                    activityBlindboxProtocolHandler.method('Buy').invoke(Mod.var._盲盒ID);
                                });
                            }
                        },
                        {
                            'type': 'button',
                            'title': '十连',
                            'callback': (res) => {
                                Il2Cpp.perform(() => {
                                    var lib = Il2Cpp.Domain.assembly('Assembly-CSharp').image;
                                    let NetManager = lib.class('NetManager').field('_instance').value;
                                    let ApplicationNetworker = NetManager.field('_networker').value;
                                    let activityBlindboxProtocolHandler = ApplicationNetworker.field('activityBlindboxProtocolHandler').value;
                                    activityBlindboxProtocolHandler.method('MoreBuy').invoke(Mod.var._盲盒ID);
                                });
                            }
                        },
                        {
                            'type': 'input',
                            'title': '自动盲盒延迟',
                            'val': Mod.var._盲盒延迟.toString(),
                            'callback': (res) => {
                                Mod.var._盲盒延迟 = parseInt(res.val);
                            }
                        },
                        {
                            'type': 'switch',
                            'title': '自动十连',
                            'val': false,
                            'callback': (res) => {
                                if(res.val == true){
                                    Mod.var._盲盒定时器 = setInterval(()=>{
                                        Il2Cpp.perform(() => {
                                            var lib = Il2Cpp.Domain.assembly('Assembly-CSharp').image;
                                            let NetManager = lib.class('NetManager').field('_instance').value;
                                            let ApplicationNetworker = NetManager.field('_networker').value;
                                            let activityBlindboxProtocolHandler = ApplicationNetworker.field('activityBlindboxProtocolHandler').value;
                                            activityBlindboxProtocolHandler.method('MoreBuy').invoke(Mod.var._盲盒ID);
                                        });
                                    },Mod.var._盲盒延迟);
                                }else{
                                    if(Mod.var._盲盒定时器)clearInterval(Mod.var._盲盒定时器);
                                }
                            }
                        },

                    ]
                },
                {
                    'title': '关于',
                    'item': [
                        {
                            'type': 'text',
                            'val': 'Mod: ' + Mod.name
                        },
                        {
                            'type': 'text',
                            'val': 'Version: ' + Mod.version
                        },
                        {
                            'type': 'text',
                            'val': 'Build: ' + Mod.build
                        },
                        {
                            'type': 'text',
                            'val': 'CoreVersionCode: ' + runtime.coreVersionCode
                        },
                        {
                            'type': 'button',
                            'title': 'Dump',
                            'callback': (val) => {
                                Il2Cpp.perform(() => {
                                    console.log(Il2Cpp.unityVersion);
                                    console.log('DumpStart');
                                    Il2Cpp.dump();
                                    console.log('DumpComplete');
                                });
                            }
                        }
                    ]
                }
            ],
            'default': 1
        }
    ]
}   