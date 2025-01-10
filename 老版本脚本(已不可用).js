import 'frida-il2cpp-bridge';
//老版本已不可用 屎山代码仅供参考-240113
export function start() {
        var __USERLEVEL__ = (data.N2O0o0 - 9527) / 114514;
        var Mod = {
            name: 'DDDDPro',
            version: '240503',
            area: 'CN',
            rolesubmit: false,
            classes: {
                Transfiguration: false,
                BattleHero: false
            },
            Menu: false,
            flag: {
                needRefresh: false,
                recover: false,
                killMonster: false,
                autocard: false,
                task: false,
                task2: false,
                quickDungeon: false,
                quickDungeon2: false,
                hiddenLoading: false
            },
            // 菜单变量
            val: {
                buffId: 1501004,
                // 自定义BuffID
                buffId2: 1900001,
                // 基础功能
                id_101: false,
                flag_id_101: false,
                id_102: false,
                id_103: false,
                id_103_time: 0,
                id_102_time: 0,
                id_105_time: 0,
                id_104_time: 0,
                id_104: false,
                id_105: false,
                id_111: true,
                id_111a: 150,
                id_112: false,
                id_112_time: 0,
                flag_addbuff: false,
                flag_addbuff2: false,
                // 清空Buff
                id_203: false,
                // 伤害调整
                id_301: false,
                id_302: 5,
                id_303: false,
                id_304: 5,
                //修改时装
                flag_id_401: false,
                costumeids: '26963,26965,26969,26970,26971',
                //修改武器
                id_501: false,
                weaponId: 14143,
                id_503: false,
                flag_id_503: false,
                //修改技能
                skillIndex: 7,
                skillId: 401010,
                id_601: false,
                flag_id_604: false,
                modify: { skill: {} },
                dev101: false,
                dev102: false,
                dev103: false,
                dev1032: false,
                dev104: false,
                dev105: false,
                dev106: false,
                dev107: false,
                dev108: false,
                dev109: 0,
                dev110: false,
                dev111: false,
                dev112: true,
                finishTime: 60,
                cardlevel: 1,
                autocardtime: 0,
                dev114: 0,
                dev115: 1000,
                dev118: false,
                dev119: false,
                dev120: false,
                innersLevel: 1,
                dev124: false,
                dev125: false,
                dev125a: 0,
                dev126: 0,
                dev127: 0,
                dev128: false,
                dev129: false,
                dev130: false,
                dev131: false,
                dev132: false,
                vip100: 1,
                vip101: 1000,
                vip102: 1,
                vip103: false,
                vip104: false,
                vip105: false,
                vip105a: 0,
                vip106: true,
                vip107: true,
            },
            vip: {
                index: 0,
                treasureNum: 1,
                BreakDown: false,
                start: false,
                quit: false,
                check: false,
                keycheck: false,
                keyids: [],
                keyindex: 0
            },
            svip: {
                start: 1,
                end: 20,
            },
            MessageManager: false
        }

        var __TASK__ = {};

        let __VIP__MENU = [
            {
                'type': 'tab',
                'title': '刷~~~',
                'item': [
                    {
                        'id': 'vip100',
                        'type': 'input',
                        'title': '奖励id',
                        'val': Mod.val.vip100
                    },
                    {
                        'id': 'vip101',
                        'type': 'input',
                        'title': '延迟(毫秒)',
                        'val': Mod.val.vip101
                    },
                    {
                        'id': 'vip102',
                        'type': 'input',
                        'title': '小秘境最高层数',
                        'val': Mod.val.vip102
                    },
                    {
                        'id': 'vip103',
                        'type': 'switch',
                        'title': '开启刷宝箱',
                    },
                    {
                        'id': 'vip104',
                        'type': 'switch',
                        'title': '开启刷钥匙',
                    },
                    {
                        'id': 'vip106',
                        'type': 'switch',
                        'title': '保留红钥匙',
                        'enable': Mod.val.vip106
                    },
                    {
                        'id': 'vip107',
                        'type': 'switch',
                        'title': '自动关闭获取奖励弹窗',
                        'enable': Mod.val.vip107
                    }
                ]
            },
            {
                'type': 'tab',
                'title': '高级功能',
                'item': [
                    {
                        'type': 'category',
                        'title': '快捷功能'
                    },
                    {
                        'id': 'dev125',
                        'type': 'switch',
                        'title': '免体力',
                        'enable': Mod.val.dev125
                    },
                    {
                        'id': 'dev101',
                        'type': 'switch',
                        'title': '小秘境开局跳boss房',
                        'enable': Mod.val.dev101
                    },
                    {
                        'id': 'dev120',
                        'type': 'switch',
                        'title': '资源关开局跳2体力房',
                        'enable': Mod.val.dev120
                    },
                    {
                        'id': 'dev111',
                        'type': 'switch',
                        'title': '自动杀死所有怪物',
                        'enable': Mod.val.dev111
                    },
                    {
                        'id': 'dev119',
                        'type': 'switch',
                        'title': '自动分解',
                        'enable': Mod.val.dev119
                    },
                    {
                        'id': 'dev112',
                        'type': 'switch',
                        'title': '锁定通关时间',
                        'enable': Mod.val.dev112
                    },
                    {
                        'id': 'dev113',
                        'type': 'input',
                        'title': '通关时间',
                        'val': Mod.val.finishTime
                    },
                    {
                        'id': 'dev124',
                        'type': 'button',
                        'title': '一键完成4个公会任务'
                    },
                    {
                        'id': 'dev130',
                        'type': 'button',
                        'title': '一键完成悬赏'
                    },
                    {
                        'type': 'category',
                        'title': '地宫&矿洞扫荡'
                    },
                    {
                        'id': 'dev1002',
                        'type': 'webview',
                        'data': '<p style="color: white;font-size: 12px;">填写你可以打的最高层数,然后点下面的按钮扫荡</p>',
                    },
                    {
                        'id': 'dev121',
                        'type': 'input',
                        'title': '小秘境最高通关层数',
                        'val': Mod.val.innersLevel
                    },
                    {
                        'id': 'dev122',
                        'type': 'button',
                        'title': '扫荡藏宝地宫'
                    },
                    {
                        'id': 'dev123',
                        'type': 'button',
                        'title': '扫荡暗金矿洞'
                    },
                    {
                        'type': 'category',
                        'title': '变身'
                    },
                    {
                        'id': 'dev1003',
                        'type': 'webview',
                        'data': '<p style="color: white;font-size: 12px;">仅小秘境、大秘境、深渊狩猎、单人钥匙副本、单人星界、暗金矿洞可变身</p>',
                    },
                    {
                        'id': 'dev102',
                        'type': 'switch',
                        'title': '变身望月忍',
                        'enable': Mod.val.dev102
                    },
                    {
                        'id': 'dev103',
                        'type': 'button',
                        'title': '修改望月忍属性'
                    },
                    {
                        'type': 'category',
                        'title': '修改奖励'
                    },
                    {
                        'id': 'dev1002',
                        'type': 'webview',
                        'data': '<p style="color: white;font-size: 12px;">【不确定稳定性】0为不修改奖励id  21密藏宝箱 24矿房宝箱 101到103暗金宝箱(小秘境层数不够时掉不了这个奖励) 1BOSS房宝箱 13精英房宝箱 1和13需开启先获取31奖励</p>',
                    },
                    {
                        'id': 'dev110',
                        'type': 'switch',
                        'title': '先获取31奖励',
                        'enable': Mod.val.dev110
                    },
                    {
                        'id': 'dev109',
                        'type': 'input',
                        'title': '修改小秘境奖励id',
                        'val': Mod.val.dev109
                    },
                    {
                        'type': 'category',
                        'title': '宝箱抽奖'
                    },
                    {
                        'id': 'dev1004',
                        'type': 'webview',
                        'data': '<p style="color: white;font-size: 12px;">1000命运武器箱 1001命运2技能箱 101命运技能箱 祝福武器ID填 你想抽的武器的id，ID在修改武器那打开查看武器ID后点开图鉴然后在日志查看武器ID。在宝箱界面 才会显示抽奖结果</p>',
                    },
                    {
                        'id': 'dev126',
                        'type': 'input',
                        'title': '宝箱id',
                        'val': Mod.val.dev126
                    },
                    {
                        'id': 'dev127',
                        'type': 'input',
                        'title': '祝福武器ID(抽技能不用填)',
                        'val': Mod.val.dev127
                    },
                    {
                        'id': 'dev128',
                        'type': 'button',
                        'title': '单抽'
                    },
                    {
                        'id': 'dev129',
                        'type': 'button',
                        'title': '十连'
                    },
                    {
                        'id': 'yijianfenjie',
                        'type': 'button',
                        'title': '一键分解'
                    },
                    {
                        'type': 'category',
                        'title': '领取奖励'
                    },
                    {
                        'id': 'dev114',
                        'type': 'input',
                        'title': '任务id',
                        'val': Mod.val.dev114
                    },
                    {
                        'id': 'dev115',
                        'type': 'input',
                        'title': 'task_condition',
                        'val': Mod.val.dev115
                    },
                    {
                        'id': 'dev116',
                        'type': 'button',
                        'title': '获取任务奖励'
                    },
                    {
                        'id': 'dev117',
                        'type': 'button',
                        'title': '仅完成不领取'
                    },
                    {
                        'id': 'dev134',
                        'type': 'button',
                        'title': '一键战士特训完成',
                    },
                    {
                        'id': 'dev135',
                        'type': 'button',
                        'title': '一键游侠特训完成',
                    },
                    {
                        'id': 'dev136',
                        'type': 'button',
                        'title': '一键法师特训完成',
                    },
                    {
                        'id': 'dev137',
                        'type': 'button',
                        'title': '一键牧师特训完成',
                    },
                    {
                        'id': 'dev138',
                        'type': 'button',
                        'title': '一键忍者特训完成',
                    },
                    {
                        'id': 'dev133',
                        'type': 'button',
                        'title': '新回归一键完成',
                    },
                    {
                        'id': 'dev118',
                        'type': 'button',
                        'title': '大自然的馈赠'
                    },
                ],
            },
            {
                'type': 'tab',
                'title': '基础功能',
                'item': [
                    {
                        'id': '101',
                        'type': 'switch',
                        'title': '100%冷却缩减(有1sCD)',
                        'enable': Mod.val.id_101
                    },
                    {
                        'id': '102',
                        'type': 'switch',
                        'title': '无敌Buff',
                        'enable': Mod.val.id_102
                    },
                    {
                        'id': '103',
                        'type': 'switch',
                        'title': '无限回血',
                        'enable': Mod.val.id_103
                    },
                    {
                        'id': '104',
                        'type': 'switch',
                        'title': '秘境祝福(回蓝)',
                        'enable': Mod.val.id_104
                    },
                    {
                        'id': '105',
                        'type': 'switch',
                        'title': '+100%移速',
                        'enable': Mod.val.id_105
                    },
                    {
                        'id': '111',
                        'type': 'switch',
                        'title': '自动拾取',
                        'enable': Mod.val.id_111
                    },
                    {
                        'id': '111a',
                        'type': 'input',
                        'title': '拾取循环次数',
                        'val': Mod.val.id_111a
                    },
                    {
                        'id': '112',
                        'type': 'switch',
                        'title': '强袭(加伤+攻速)',
                        'enable': Mod.val.id_112
                    },
                    {
                        'type': 'category',
                        'title': '祭坛之力'
                    },
                    {
                        'id': '106',
                        'type': 'button',
                        'title': '安杜马里的祝福'
                    }, {
                        'id': '107',
                        'type': 'button',
                        'title': '克罗塞尔的祝福'
                    }, {
                        'id': '108',
                        'type': 'button',
                        'title': '斯托拉斯的祝福'
                    }, {
                        'id': '109',
                        'type': 'button',
                        'title': '炎魔的祝福'
                    }, {
                        'id': '110',
                        'type': 'button',
                        'title': '樱华剑姬的祝福'
                    }
                ]
            },
            {
                'type': 'tab',
                'title': 'Buff',
                'item': [
                    {
                        'id': '201',
                        'type': 'input',
                        'title': 'BuffID',
                        'val': Mod.val.buffId2
                    },
                    {
                        'id': '202',
                        'type': 'button',
                        'title': '添加Buff'
                    },
                    {
                        'id': '203',
                        'type': 'button',
                        'title': '清空Buff'
                    }
                ]
            },
            {
                'type': 'tab',
                'title': '起号功能',
                'item': [
                    {
                        'id': 'svip1000',
                        'type': 'webview',
                        'data': '<p style="color: white;font-size: 12px;">新号第一天小秘境120左右 大秘境30左右 不然可能会封号。使用一键大秘境或小秘境后需要切换角色或者重新进游戏</p>',
                    },
                    {
                        'id': 'svip100',
                        'type': 'input',
                        'title': 'Start',
                        'val': Mod.svip.start
                    },
                    {
                        'id': 'svip101',
                        'type': 'input',
                        'title': 'End',
                        'val': Mod.svip.end
                    },
                    {
                        'id': 'svip102',
                        'type': 'button',
                        'title': '一键s++&新手任务',
                    },
                    {
                        'id': 'svip103',
                        'type': 'button',
                        'title': '一键小秘境',
                    },
                    {
                        'id': 'svip104',
                        'type': 'button',
                        'title': '一键大秘境',
                    },
                    {
                        'id': 'svip105',
                        'type': 'button',
                        'title': '一键领取星界荣誉',
                    },
                    {
                        'id': 'svip106',
                        'type': 'button',
                        'title': '一键领取技能试炼奖励',
                    },
                ]
            },
            {
                'type': 'tab',
                'title': '伤害调整',
                'item': [
                    {
                        'id': '301',
                        'type': 'switch',
                        'title': '伤害翻倍',
                        'enable': Mod.val.id_301
                    }, {
                        'id': '302',
                        'type': 'input',
                        'title': '伤害倍率',
                        'val': Mod.val.id_302
                    }, {
                        'id': '303',
                        'type': 'switch',
                        'title': '护盾伤害翻倍',
                        'enable': Mod.val.id_303
                    }, {
                        'id': '304',
                        'type': 'input',
                        'title': '护盾伤害倍率',
                        'val': Mod.val.id_304
                    }
                ]
            },
            {
                'type': 'tab',
                'title': '修改武器',
                'item': [
                    {
                        'id': '5001',
                        'type': 'webview',
                        'data': '<p style="color: white;font-size: 12px;">开启查看武器ID后,在图鉴里查看武器就会在日志里输出技能ID</p>',
                    },
                    {
                        'id': '501',
                        'type': 'switch',
                        'title': '查看武器ID'
                    },
                    {
                        'id': '502',
                        'type': 'input',
                        'title': '武器ID',
                        'val': Mod.val.weaponId
                    },
                    {
                        'id': '503',
                        'type': 'switch',
                        'title': '启用修改武器'
                    },
                ]
            },
            {
                'type': 'tab',
                'title': '修改技能',
                'item': [
                    {
                        'id': '6001',
                        'type': 'webview',
                        'data': '<p style="color: white;font-size: 12px;">开启查看技能ID后,在装备技能的界面查看技能就会在日志里输出技能ID</p>',
                    },
                    {
                        'id': '601',
                        'type': 'switch',
                        'title': '查看技能ID'
                    },
                    {
                        'id': '602',
                        'type': 'input',
                        'title': '技能位(1-9)',
                        'val': Mod.val.skillIndex
                    },
                    {
                        'id': '603',
                        'type': 'input',
                        'title': '技能ID',
                        'val': Mod.val.skillId
                    },
                    {
                        'id': '604',
                        'type': 'button',
                        'title': '修改技能'
                    }
                ]
            },
            {
                'type': 'tab',
                'title': '魂卡扫荡',
                'item': [
                    {
                        'id': '7001',
                        'type': 'webview',
                        'data': '<p style="color: white;font-size: 12px;">只能扫荡已通关的难度, 会消耗次数</p>',
                    },
                    {
                        'id': '701',
                        'type': 'button',
                        'title': '简单'
                    },
                    {
                        'id': '702',
                        'type': 'button',
                        'title': '普通'
                    },
                    {
                        'id': '703',
                        'type': 'button',
                        'title': '困难'
                    },
                    {
                        'id': '704',
                        'type': 'button',
                        'title': '极难'
                    },
                    {
                        'id': '705',
                        'type': 'button',
                        'title': '噩梦'
                    },
                    {
                        'id': '706',
                        'type': 'button',
                        'title': '深渊'
                    },
                    {
                        'id': '707',
                        'type': 'button',
                        'title': '地狱'
                    },
                    {
                        'id': '708',
                        'type': 'button',
                        'title': '试炼Ⅰ'
                    },
                    {
                        'id': '709',
                        'type': 'button',
                        'title': '试炼Ⅱ'
                    },
                    {
                        'id': '710',
                        'type': 'button',
                        'title': '试炼Ⅲ'
                    },
                    {
                        'id': '711',
                        'type': 'button',
                        'title': '试炼Ⅳ'
                    },
                ]
            },
            {
                'type': 'tab',
                'title': '异界传送(危险)',
                'item': [
                    {
                        'id': 'dev1001',
                        'type': 'webview',
                        'data': '<p style="color: white;font-size: 12px;">已知开宝箱过早会封号!!! 谨慎使用(不能进去就传送,需要等2-3分钟再传送去开宝箱)</p>',
                    },
                    {
                        'type': 'category',
                        'title': '阿米'
                    },
                    {
                        'id': 'dev131',
                        'type': 'button',
                        'title': '银宝箱'
                    },
                    {
                        'id': 'dev132',
                        'type': 'button',
                        'title': '金宝箱'
                    },
                    {
                        'type': 'category',
                        'title': '克罗塞尔'
                    },
                    {
                        'id': 'dev104',
                        'type': 'button',
                        'title': '金宝箱'
                    },
                    {
                        'id': 'dev107',
                        'type': 'button',
                        'title': '银宝箱'
                    },
                    {
                        'id': 'dev108',
                        'type': 'button',
                        'title': '宝箱'
                    },
                    {
                        'id': 'dev105',
                        'type': 'button',
                        'title': 'boss门前左'
                    },
                    {
                        'id': 'dev106',
                        'type': 'button',
                        'title': 'boss门前右'
                    }
                ],
            },
            {
                'type': 'tab',
                'title': '关于',
                'item': [
                    {
                        'id': '9002',
                        'type': 'webview',
                        'data': '<p style="color: white;">内部版脚本，请勿外传！</p><p style="color: white;"><b>LoaderVersion : ' + version + '</b></p><p style="color: white;"><b>ModVersion : ' + Mod.version + '</b></p></p><p style="color: white;"><b>ModLevel : VIP</b></p><p style="color: white;"><b>TG Group : t.me/FlxSNXMod</b></p>',
                    }
                ],
                'enable': true
            },
        ];
        var _次数 = 1000;
        var _已刷次数 = 1;
        var _雕像ID = 40201;
        var zuan = false;
        var hunzhu = false;
        var _金额 = 53200;
        var _金币 = 500000;
        var _钻石 = 20000;
        var _粉钻 = 10000;
        var _刷钻延迟 = 10;
        var _魂珠6级 = false;
        var _商品ID = 1;
        var _购买配置 = '[4,999],[39,999],[40,999]';
        var _商品购买次数 = 1;
        var _打印商品ID = false;
        var _盲盒ID = 11;

        var _自动魂卡属性ID = 24;
        var _自动魂卡星级条件 = 4;
        var _自动魂卡数值条件 = 22;
        var _自动魂卡最大重置次数 = 100;
        var _自动魂卡重置次数 = 0;
        var _自动魂卡开关 = false;

        console.log('当前时间：' + data.time);
        if ('undefined' != typeof data.zuantime && data.time <= data.zuantime) {
            zuan = true;
            setTimeout(() => {
                zuan = false;
            }, (data.zuantime * 1000) - (data.time * 1000))
        }
        if ('undefined' != typeof data.hunzhu) {
            hunzhu = true;
        }else if ('undefined' != typeof data.huntime && data.time <= data.huntime) {
            hunzhu = true;
            setTimeout(() => {
                hunzhu = false;
            }, (data.huntime * 1000) - (data.time * 1000))
        }
        
        var shuainterval = false;
        let __SVIP__MENU = [
            {
                'type': 'tab',
                'title': '一键魂卡升级',
                'item': [
                    {
                        'id': 'zdhk_help',
                        'type': 'webview',
                        'data': '<p style="color: white;font-size: 12px;">开启一键魂卡升级后,给魂卡解锁后开始一键升级</p><p style="color: white;font-size: 12px;">魂卡满足星级条件和数值条件的其中一个就会停止。如果你只想要5星,把数值条件设置得很高即可,如果只想要数值也同理</p><p style="color: white;font-size: 12px;">默认的属性ID是爆伤,要改成其他的请看群文件的属性ID表</p>',
                    },
                    {
                        'id': 'zdhk_sx',
                        'type': 'input',
                        'title': '属性ID',
                        'val': _自动魂卡属性ID
                    },
                    {
                        'id': 'zdhk_xj',
                        'type': 'input',
                        'title': '星级条件',
                        'val': _自动魂卡星级条件
                    },
                    {
                        'id': 'zdhk_tj',
                        'type': 'input',
                        'title': '数值条件',
                        'val': _自动魂卡数值条件
                    },
                    {
                        'id': 'zdhk_max',
                        'type': 'input',
                        'title': '最大重置次数',
                        'val': _自动魂卡最大重置次数
                    },
                    {
                        'id': 'zdhk',
                        'type': 'switch',
                        'title': '开关',
                    },
                ]
            },
            {
                'type': 'tab',
                'title': '刷???',
                'item': [
                    {
                        'type': 'category',
                        'title': '一键购买'
                    },
                    {
                        'id': 'goodscfg',
                        'type': 'input',
                        'title': '购买配置',
                        'val': _购买配置
                    },
                    {
                        'id': 'buygoods3',
                        'type': 'button',
                        'title': '购买钻石商店',
                    },
                    {
                        'id': 'buygoods4',
                        'type': 'button',
                        'title': '购买材料商店',
                    },
                    {
                        'id': 'buygoods5',
                        'type': 'button',
                        'title': '购买活动商店',
                    },
                    {
                        'id': 'buygoods6',
                        'type': 'button',
                        'title': '商店多买',
                    },
                    {
                        'type': 'category',
                        'title': '刷新手活动'
                    },
                    {
                        'id': 'zuan1',
                        'type': 'input',
                        'title': '次数',
                        'val': _次数
                    },
                    {
                        'id': 'zuan4',
                        'type': 'input',
                        'title': '延迟',
                        'val': _刷钻延迟
                    },
                    {
                        'id': 'zuan2',
                        'type': 'button',
                        'title': '开始',
                    },
                    {
                        'id': 'zuan3',
                        'type': 'input',
                        'title': 'ID',
                        'val': _雕像ID
                    },
                    {
                        'type': 'category',
                        'title': '修改钻石粉钻充值条(自慰)'
                    },
                    {
                        'id': 'jine',
                        'type': 'input',
                        'title': '充值金额',
                        'val': _金额
                    },
                    {
                        'id': 'jinbi',
                        'type': 'input',
                        'title': '金币',
                        'val': _金币
                    },
                    {
                        'id': 'fenzuan',
                        'type': 'input',
                        'title': '粉钻',
                        'val': _粉钻
                    },
                    {
                        'id': 'zuanshi',
                        'type': 'input',
                        'title': '钻石',
                        'val': _钻石
                    },
                    {
                        'id': 'xiugaixianshi',
                        'type': 'button',
                        'title': '修改充值&粉钻&钻石&金币显示',
                    },
                    {
                        'type': 'category',
                        'title': '🐖'
                    },
                    {
                        'id': 'hunzhu',
                        'type': 'switch',
                        'title': '🐽',
                    },
                    {
                        'type': 'category',
                        'title': '多买商品'
                    },
                    {
                        'id': 'printgoodsid',
                        'type': 'switch',
                        'title': '打印商品ID',
                    },
                    {
                        'id': 'goodsid',
                        'type': 'input',
                        'title': '商品ID',
                        'val': _商品ID
                    },
                    {
                        'id': 'goodsnum',
                        'type': 'input',
                        'title': '_商品购买次数',
                        'val': _商品购买次数
                    },
                    {
                        'id': 'buygoods',
                        'type': 'button',
                        'title': '开始购买',
                    },
                    {
                        'id': 'buygoods2',
                        'type': 'button',
                        'title': '购买材料商店',
                    },
                    {
                        'type': 'category',
                        'title': '购买盲盒'
                    },
                    {
                        'id': 'mangheid',
                        'type': 'input',
                        'title': '盲盒ID',
                        'val': _盲盒ID
                    },
                    {
                        'id': 'manghe',
                        'type': 'button',
                        'title': '购买盲盒',
                    },
                ]
            },
            {
                'type': 'tab',
                'title': '刷~~~',
                'item': [
                    {
                        'id': 'vip100',
                        'type': 'input',
                        'title': '奖励id',
                        'val': Mod.val.vip100
                    },
                    {
                        'id': 'vip101',
                        'type': 'input',
                        'title': '延迟(毫秒)',
                        'val': Mod.val.vip101
                    },
                    {
                        'id': 'vip102',
                        'type': 'input',
                        'title': '小秘境最高层数',
                        'val': Mod.val.vip102
                    },
                    {
                        'id': 'vip103',
                        'type': 'switch',
                        'title': '开启刷宝箱',
                    },
                    {
                        'id': 'vip104',
                        'type': 'switch',
                        'title': '开启刷钥匙',
                    },
                    {
                        'id': 'vip106',
                        'type': 'switch',
                        'title': '保留红钥匙',
                        'enable': Mod.val.vip106
                    },
                    {
                        'id': 'vip105',
                        'type': 'button',
                        'title': '刷活动奖励',
                    },
                    {
                        'id': 'vip107',
                        'type': 'switch',
                        'title': '自动关闭获取奖励弹窗',
                        'enable': Mod.val.vip107
                    }
                ]
            },
            {
                'type': 'tab',
                'title': '高级功能',
                'item': [
                    {
                        'type': 'category',
                        'title': '快捷功能'
                    },
                    {
                        'id': 'dev125',
                        'type': 'switch',
                        'title': '免体力',
                        'enable': Mod.val.dev125
                    },
                    {
                        'id': 'dev101',
                        'type': 'switch',
                        'title': '小秘境开局跳boss房',
                        'enable': Mod.val.dev101
                    },
                    {
                        'id': 'dev120',
                        'type': 'switch',
                        'title': '资源关开局跳2体力房',
                        'enable': Mod.val.dev120
                    },
                    {
                        'id': 'dev111',
                        'type': 'switch',
                        'title': '自动杀死所有怪物',
                        'enable': Mod.val.dev111
                    },
                    {
                        'id': 'dev119',
                        'type': 'switch',
                        'title': '自动分解',
                        'enable': Mod.val.dev119
                    },
                    {
                        'id': 'dev112',
                        'type': 'switch',
                        'title': '锁定通关时间',
                        'enable': Mod.val.dev112
                    },
                    {
                        'id': 'dev113',
                        'type': 'input',
                        'title': '通关时间',
                        'val': Mod.val.finishTime
                    },
                    {
                        'id': 'dev124',
                        'type': 'button',
                        'title': '一键完成4个公会任务'
                    },
                    {
                        'id': 'dev130',
                        'type': 'button',
                        'title': '一键完成悬赏'
                    },
                    {
                        'type': 'category',
                        'title': '地宫&矿洞扫荡'
                    },
                    {
                        'id': 'dev1002',
                        'type': 'webview',
                        'data': '<p style="color: white;font-size: 12px;">填写你可以打的最高层数,然后点下面的按钮扫荡</p>',
                    },
                    {
                        'id': 'dev121',
                        'type': 'input',
                        'title': '小秘境最高通关层数',
                        'val': Mod.val.innersLevel
                    },
                    {
                        'id': 'dev122',
                        'type': 'button',
                        'title': '扫荡藏宝地宫'
                    },
                    {
                        'id': 'dev123',
                        'type': 'button',
                        'title': '扫荡暗金矿洞'
                    },
                    {
                        'type': 'category',
                        'title': '变身'
                    },
                    {
                        'id': 'dev1003',
                        'type': 'webview',
                        'data': '<p style="color: white;font-size: 12px;">仅小秘境、大秘境、深渊狩猎、单人钥匙副本、单人星界、暗金矿洞可变身</p>',
                    },
                    {
                        'id': 'dev102',
                        'type': 'switch',
                        'title': '变身望月忍',
                        'enable': Mod.val.dev102
                    },
                    {
                        'id': 'dev103',
                        'type': 'button',
                        'title': '修改望月忍属性'
                    },
                    {
                        'type': 'category',
                        'title': '修改奖励'
                    },
                    {
                        'id': 'dev1002',
                        'type': 'webview',
                        'data': '<p style="color: white;font-size: 12px;">【不确定稳定性】0为不修改奖励id  21密藏宝箱 24矿房宝箱 101到103暗金宝箱(小秘境层数不够时掉不了这个奖励) 1BOSS房宝箱 13精英房宝箱 1和13需开启先获取31奖励</p>',
                    },
                    {
                        'id': 'dev110',
                        'type': 'switch',
                        'title': '先获取31奖励',
                        'enable': Mod.val.dev110
                    },
                    {
                        'id': 'dev109',
                        'type': 'input',
                        'title': '修改小秘境奖励id',
                        'val': Mod.val.dev109
                    },
                    {
                        'type': 'category',
                        'title': '宝箱抽奖'
                    },
                    {
                        'id': 'dev1004',
                        'type': 'webview',
                        'data': '<p style="color: white;font-size: 12px;">1000命运武器箱 1001命运2技能箱 101命运技能箱 祝福武器ID填 你想抽的武器的id，ID在修改武器那打开查看武器ID后点开图鉴然后在日志查看武器ID。在宝箱界面 才会显示抽奖结果</p>',
                    },
                    {
                        'id': 'dev126',
                        'type': 'input',
                        'title': '宝箱id',
                        'val': Mod.val.dev126
                    },
                    {
                        'id': 'dev127',
                        'type': 'input',
                        'title': '祝福武器ID(抽技能不用填)',
                        'val': Mod.val.dev127
                    },
                    {
                        'id': 'dev128',
                        'type': 'button',
                        'title': '单抽'
                    },
                    {
                        'id': 'dev129',
                        'type': 'button',
                        'title': '十连'
                    },
                    {
                        'id': 'yijianfenjie',
                        'type': 'button',
                        'title': '一键分解'
                    },
                    {
                        'type': 'category',
                        'title': '领取奖励'
                    },
                    {
                        'id': 'dev114',
                        'type': 'input',
                        'title': '任务id',
                        'val': Mod.val.dev114
                    },
                    {
                        'id': 'dev115',
                        'type': 'input',
                        'title': 'task_condition',
                        'val': Mod.val.dev115
                    },
                    {
                        'id': 'dev116',
                        'type': 'button',
                        'title': '获取任务奖励'
                    },
                    {
                        'id': 'dev117',
                        'type': 'button',
                        'title': '仅完成不领取'
                    },
                    {
                        'id': 'dev134',
                        'type': 'button',
                        'title': '一键战士特训完成',
                    },
                    {
                        'id': 'dev135',
                        'type': 'button',
                        'title': '一键游侠特训完成',
                    },
                    {
                        'id': 'dev136',
                        'type': 'button',
                        'title': '一键法师特训完成',
                    },
                    {
                        'id': 'dev137',
                        'type': 'button',
                        'title': '一键牧师特训完成',
                    },
                    {
                        'id': 'dev138',
                        'type': 'button',
                        'title': '一键忍者特训完成',
                    },
                    {
                        'id': 'dev133',
                        'type': 'button',
                        'title': '新回归一键完成',
                    },
                    {
                        'id': 'dev118',
                        'type': 'button',
                        'title': '大自然的馈赠'
                    },
                ],
            },
            {
                'type': 'tab',
                'title': '基础功能',
                'item': [
                    {
                        'id': '101',
                        'type': 'switch',
                        'title': '100%冷却缩减(有1sCD)',
                        'enable': Mod.val.id_101
                    },
                    {
                        'id': '102',
                        'type': 'switch',
                        'title': '无敌Buff',
                        'enable': Mod.val.id_102
                    },
                    {
                        'id': '103',
                        'type': 'switch',
                        'title': '无限回血',
                        'enable': Mod.val.id_103
                    },
                    {
                        'id': '104',
                        'type': 'switch',
                        'title': '秘境祝福(回蓝)',
                        'enable': Mod.val.id_104
                    },
                    {
                        'id': '105',
                        'type': 'switch',
                        'title': '+100%移速',
                        'enable': Mod.val.id_105
                    },
                    {
                        'id': '111',
                        'type': 'switch',
                        'title': '自动拾取',
                        'enable': Mod.val.id_111
                    },
                    {
                        'id': '111a',
                        'type': 'input',
                        'title': '拾取循环次数',
                        'val': Mod.val.id_111a
                    },
                    {
                        'id': '112',
                        'type': 'switch',
                        'title': '强袭(加伤+攻速)',
                        'enable': Mod.val.id_112
                    },
                    {
                        'type': 'category',
                        'title': '祭坛之力'
                    },
                    {
                        'id': '106',
                        'type': 'button',
                        'title': '安杜马里的祝福'
                    }, {
                        'id': '107',
                        'type': 'button',
                        'title': '克罗塞尔的祝福'
                    }, {
                        'id': '108',
                        'type': 'button',
                        'title': '斯托拉斯的祝福'
                    }, {
                        'id': '109',
                        'type': 'button',
                        'title': '炎魔的祝福'
                    }, {
                        'id': '110',
                        'type': 'button',
                        'title': '樱华剑姬的祝福'
                    }
                ]
            },
            {
                'type': 'tab',
                'title': 'Buff',
                'item': [
                    {
                        'id': '201',
                        'type': 'input',
                        'title': 'BuffID',
                        'val': Mod.val.buffId2
                    },
                    {
                        'id': '202',
                        'type': 'button',
                        'title': '添加Buff'
                    },
                    {
                        'id': '203',
                        'type': 'button',
                        'title': '清空Buff'
                    }
                ]
            },
            {
                'type': 'tab',
                'title': '起号功能',
                'item': [
                    {
                        'id': 'svip1000',
                        'type': 'webview',
                        'data': '<p style="color: white;font-size: 12px;">新号第一天小秘境120左右 大秘境30左右 不然可能会封号。使用一键大秘境或小秘境后需要切换角色或者重新进游戏</p>',
                    },
                    {
                        'id': 'svip100',
                        'type': 'input',
                        'title': 'Start',
                        'val': Mod.svip.start
                    },
                    {
                        'id': 'svip101',
                        'type': 'input',
                        'title': 'End',
                        'val': Mod.svip.end
                    },
                    {
                        'id': 'svip102',
                        'type': 'button',
                        'title': '一键s++&新手任务',
                    },
                    {
                        'id': 'yijianex3',
                        'type': 'button',
                        'title': '一键ex3',
                    },
                    {
                        'id': 'yijianzhizhao',
                        'type': 'button',
                        'title': '一键升级执照',
                    },
                    {
                        'id': 'svip103',
                        'type': 'button',
                        'title': '一键小秘境',
                    },
                    {
                        'id': 'svip104',
                        'type': 'button',
                        'title': '一键大秘境',
                    },
                    {
                        'id': 'svip105',
                        'type': 'button',
                        'title': '一键领取星界荣誉',
                    },
                    {
                        'id': 'svip106',
                        'type': 'button',
                        'title': '一键领取技能试炼奖励',
                    },
                ]
            },
            {
                'type': 'tab',
                'title': '伤害调整',
                'item': [
                    {
                        'id': '301',
                        'type': 'switch',
                        'title': '伤害翻倍',
                        'enable': Mod.val.id_301
                    }, {
                        'id': '302',
                        'type': 'input',
                        'title': '伤害倍率',
                        'val': Mod.val.id_302
                    }, {
                        'id': '303',
                        'type': 'switch',
                        'title': '护盾伤害翻倍',
                        'enable': Mod.val.id_303
                    }, {
                        'id': '304',
                        'type': 'input',
                        'title': '护盾伤害倍率',
                        'val': Mod.val.id_304
                    }
                ]
            },
            {
                'type': 'tab',
                'title': '修改时装',
                'item': [
                    {
                        'id': 'costumeids',
                        'type': 'input',
                        'title': '时装id',
                        'val': '26963,26965,26969,26970,26971'
                    },
                    {
                        'id': '401',
                        'type': 'button',
                        'title': '修改'
                    }
                ]
            },
            {
                'type': 'tab',
                'title': '修改武器',
                'item': [
                    {
                        'id': '5001',
                        'type': 'webview',
                        'data': '<p style="color: white;font-size: 12px;">开启查看武器ID后,在图鉴里查看武器就会在日志里输出技能ID</p>',
                    },
                    {
                        'id': '501',
                        'type': 'switch',
                        'title': '查看武器ID'
                    },
                    {
                        'id': '502',
                        'type': 'input',
                        'title': '武器ID',
                        'val': Mod.val.weaponId
                    },
                    {
                        'id': '503',
                        'type': 'switch',
                        'title': '启用修改武器'
                    },
                ]
            },
            {
                'type': 'tab',
                'title': '修改技能',
                'item': [
                    {
                        'id': '6001',
                        'type': 'webview',
                        'data': '<p style="color: white;font-size: 12px;">开启查看技能ID后,在装备技能的界面查看技能就会在日志里输出技能ID</p>',
                    },
                    {
                        'id': '601',
                        'type': 'switch',
                        'title': '查看技能ID'
                    },
                    {
                        'id': '602',
                        'type': 'input',
                        'title': '技能位(1-9)',
                        'val': Mod.val.skillIndex
                    },
                    {
                        'id': '603',
                        'type': 'input',
                        'title': '技能ID',
                        'val': Mod.val.skillId
                    },
                    {
                        'id': '604',
                        'type': 'button',
                        'title': '修改技能'
                    }
                ]
            },
            {
                'type': 'tab',
                'title': '魂卡扫荡',
                'item': [
                    {
                        'id': '7001',
                        'type': 'webview',
                        'data': '<p style="color: white;font-size: 12px;">只能扫荡已通关的难度, 会消耗次数</p>',
                    },
                    {
                        'id': '718',
                        'type': 'button',
                        'title': '增加灵魂'
                    },
                    {
                        'id': '701',
                        'type': 'button',
                        'title': '简单'
                    },
                    {
                        'id': '702',
                        'type': 'button',
                        'title': '普通'
                    },
                    {
                        'id': '703',
                        'type': 'button',
                        'title': '困难'
                    },
                    {
                        'id': '704',
                        'type': 'button',
                        'title': '极难'
                    },
                    {
                        'id': '705',
                        'type': 'button',
                        'title': '噩梦'
                    },
                    {
                        'id': '706',
                        'type': 'button',
                        'title': '深渊'
                    },
                    {
                        'id': '707',
                        'type': 'button',
                        'title': '地狱'
                    },
                    {
                        'id': '708',
                        'type': 'button',
                        'title': '试炼Ⅰ'
                    },
                    {
                        'id': '709',
                        'type': 'button',
                        'title': '试炼Ⅱ'
                    },
                    {
                        'id': '710',
                        'type': 'button',
                        'title': '试炼Ⅲ'
                    },
                    {
                        'id': '711',
                        'type': 'button',
                        'title': '试炼Ⅳ'
                    },
                ]
            },
            {
                'type': 'tab',
                'title': '异界传送(危险)',
                'item': [
                    {
                        'id': 'dev1001',
                        'type': 'webview',
                        'data': '<p style="color: white;font-size: 12px;">已知开宝箱过早会封号!!! 谨慎使用(不能进去就传送,需要等2-3分钟再传送去开宝箱)</p>',
                    },
                    {
                        'type': 'category',
                        'title': '阿米'
                    },
                    {
                        'id': 'dev131',
                        'type': 'button',
                        'title': '银宝箱'
                    },
                    {
                        'id': 'dev132',
                        'type': 'button',
                        'title': '金宝箱'
                    },
                    {
                        'type': 'category',
                        'title': '克罗塞尔'
                    },
                    {
                        'id': 'dev104',
                        'type': 'button',
                        'title': '金宝箱'
                    },
                    {
                        'id': 'dev107',
                        'type': 'button',
                        'title': '银宝箱'
                    },
                    {
                        'id': 'dev108',
                        'type': 'button',
                        'title': '宝箱'
                    },
                    {
                        'id': 'dev105',
                        'type': 'button',
                        'title': 'boss门前左'
                    },
                    {
                        'id': 'dev106',
                        'type': 'button',
                        'title': 'boss门前右'
                    }
                ],
            },
            {
                'type': 'tab',
                'title': '关于',
                'item': [
                    {
                        'id': '9002',
                        'type': 'webview',
                        'data': '<p style="color: white;">内部版脚本，请勿外传！</p><p style="color: white;"><b>LoaderVersion : ' + version + '</b></p><p style="color: white;"><b>ModVersion : ' + Mod.version + '</b></p><p style="color: white;"><b>ModLevel : SVIP</b></p><p style="color: white;"><b>TG Group : t.me/FlxSNXMod</b></p>',
                    }
                ],
                'enable': true
            },
        ];
        if (__USERLEVEL__ < 1) return;
        let __NENU__ = __USERLEVEL__ >= 2 ? __SVIP__MENU : __VIP__MENU;

        if ('undefined' != typeof modmenu) {
            try {
                Mod.Menu = modmenu.create(
                    Mod.name,
                    __NENU__,
                    {
                        onchange: function (data) {
                            data = JSON.parse(data);
                            if (!Mod.rolesubmit) {
                                toast('请等待获取角色信息,如果已进入到主城请重开游戏');
                            } else {
                                switch (data.id) {
                                    case 'zdhk_sx':
                                        _自动魂卡属性ID = parseInt(data.val);
                                        break;
                                    case 'zdhk_xj':
                                        _自动魂卡星级条件 = parseInt(data.val);
                                        break;
                                    case 'zdhk_tj':
                                        _自动魂卡数值条件 = parseFloat(data.val);
                                        break;
                                    case 'zdhk_max':
                                        _自动魂卡最大重置次数 = parseInt(data.val);
                                        break;
                                    case 'zdhk':
                                        _自动魂卡开关 = data.val;
                                        break;
                                    case 'mangheid':
                                        _盲盒ID = parseInt(data.val);
                                        break;
                                    case 'manghe':
                                        Il2Cpp.perform(() => {
                                            var lib = Il2Cpp.Domain.assembly('Assembly-CSharp').image;
                                            lib.class('Proto.MptActBlindboxMoreBuy').method('Send').invoke(_盲盒ID)
                                        });
                                        
                                        break;
                                    case 'yijianex3':
                                        // ex3
                                        Il2Cpp.perform(() => {
                                            console.log('unity version:' + Il2Cpp.unityVersion);
                                            var lib = Il2Cpp.Domain.assembly('Assembly-CSharp').image;
                                            let ids = [
                                                3000,3001,3002,3003,3004,3005,3006,3007,3008,3009,3010,3011,3012,3013,3014,3015,3099,3100,3101,3102,3103,3104,3105,3106,3107,3108,3109,3110,3111,3112,3113,3114,3115,3116,3117,3118,3119,3120,3121,3122,3123,3124,3125,3126,3127,3128,3129,3130,3132,3133,3134,3135,3136,3150,3151,3152,3153,3154,3172,3173,3174,3175,3190,3191,3192,3193,3200,3201,3203,3204,3205,3206,3207,3220,3221,3222,3223,3224,3225,3229,3230,3236,3237,3238,3240,3241,3242,3243,3244,3231,3232,3245,3233,3246,3234,3235,3301,3302,3247,3249,3250,3251,3252,3253,3254,3255,3256,3259,3260,3261,3262,3263,3264,3265,3266,3267,3268,3271,3272,3273,3274,3275,3380,3390,3391,3392,3401,3402,3403,3404,3405,3406,3420,3421,3422,3423,3424,3425,3426,3427,3428,3429,3440,3441,3500,3600,3601,3602,3603,3604,3605,3606,3607,3608,3609,3610,3611,3612,3613,3614,3615,3616,3617,3620,3621,3622,3623,3624,3625,3626,3627,3628,3629,3630,3631,3632,3633,3634,3635,3636,3637,3650,3651,3652,3653,3654,3655,3656,3700,3701,3702,3703,3710,3711,3712,3713,3720,3721,3722,3723,3730,3731,3732,3740,3741,3742,3743,3744,3745,3750,3751,3752,3753,3754,3755,3756,3757,3780,3781,3782,3783,3784,3785,3800,3801,3802,3803,3804,3805,3820,3821,3822,3823,3824,3829,3830,3831,3832,3833,3840,3841,3842,3850,3860,3861,3862,3870,3871,3872,3874,3875,3876,3877,3878,3879,3880,3881,3885,3886,3887,3888,3890,3891,3892,3895,3896,3897,3898,3900,3901,3902,3903,3904,3905,3906,3907,3908,3909,3910,3911,3912,3913,3914,3915,3916,3917,3918,3950,3951,3952,3953,3954,3955,3956,3957,3958,3960
                                            ];
                                            ids.forEach((id) => {
                                                lib.class('Proto.MPtTaskNewUpdate').method('Send').invoke(id, 100000000);
                                                lib.class('Proto.MPtTaskNewReceive').method('Send').invoke(id, 6);
                                            });
                                        });
                                        break;
                                    case 'yijianzhizhao':
                                        // 执照
                                        Il2Cpp.perform(() => {
                                            console.log('unity version:' + Il2Cpp.unityVersion);
                                            var lib = Il2Cpp.Domain.assembly('Assembly-CSharp').image;
                                            let ids = [
                                                21001,21002,21003,21004,21005,21006,21007,21008,21009,21500,21501,21502,21503,21504,21505,21506,22001,22002,22003,22004,22005,22006,22007,22008,22009,22010,22011,22012,22013,22014,22015,22016,22017,22018,22019,22020,22021,22022,22023,22024,22025,22026,22027,22028,22029,22030,22031,22032,22033,22034,22035,22036,22037,22038,22041,22042,22043,22044,22045,22046,22047,22048,22049,22050,22051,22052,22053,22054,22055,22056,22057,22058,22059,22060,22061,22062,22063,22064,22065,22066,22067,22068
                                            ];
                                            ids.forEach((id) => {
                                                lib.class('Proto.MPtTaskNewUpdate').method('Send').invoke(id, 100000000);
                                                lib.class('Proto.MPtTaskNewReceive').method('Send').invoke(id, 9);
                                            });
                                        });
                                        break;
                                    case 'printgoodsid':
                                        _打印商品ID = data.val;
                                        break;
                                    case 'costumeids':
                                        Mod.val.costumeids = data.val;
                                        break;
                                    case 'goodsid':
                                        _商品ID = parseInt(data.val);
                                        break;
                                    case 'goodsnum':
                                        _商品购买次数 = parseInt(data.val);
                                        break;
                                    case 'goodscfg':
                                        _购买配置 = data.val;
                                        break;
                                    case 'buygoods':
                                        Il2Cpp.perform(() => {
                                            console.log('unity version:' + Il2Cpp.unityVersion);
                                            var lib = Il2Cpp.Domain.assembly('Assembly-CSharp').image;
                                            for (let index = 0; index < _商品购买次数; index++) {
                                                lib.class("Proto.MptActGiftcardBuy").method("Send").invoke(_商品ID);
                                            }
                                        });
                                        break;
                                    case 'buygoods2':
                                        Il2Cpp.perform(() => {
                                            console.log('unity version:' + Il2Cpp.unityVersion);
                                            var lib = Il2Cpp.Domain.assembly('Assembly-CSharp').image;
                                            let ids = JSON.parse('['+Mod.val.costumeids+']');
                                            for (let i in ids) {
                                                if(ids[i]!='')Costumes.method('Add').invoke(ids[i]);
                                            }
                                            lib.class("Proto.MptStoreBuy").method("DiamondBuySend").invoke(_商品ID,_商品购买次数);
                                        });
                                        break;

                                    /* lib.class('Proto.MPtGiftDiamondBuy').method("SendBuyActivityGift").implementation = function (id,num) {
                                        if(_打印商品ID)console.log('GiftDiamondBuy:'+id);
                                        this.method("SendBuyActivityGift").invoke(id,num);
                                    };
                    
                                    lib.class('Proto.MPtGiftActivityBuy').method("SendBuyGift").implementation = function (id,num) {
                                        if(_打印商品ID)console.log('GiftActivityBuy:'+id);
                                        this.method("SendBuyGift").invoke(id,num);
                                    }; */
                                    case 'buygoods3':
                                            Il2Cpp.perform(() => {
                                                console.log('unity version:' + Il2Cpp.unityVersion);
                                                var lib = Il2Cpp.Domain.assembly('Assembly-CSharp').image;
                                                let ids = JSON.parse('['+_购买配置+']');
                                                for (let i in ids) {
                                                    console.log(ids[i]);
                                                    if(ids[i] && ids[i].length >= 2){
                                                        lib.class("Proto.MPtGiftDiamondBuy").method("SendBuyActivityGift").invoke(ids[i][0],ids[i][1]);
                                                    }
                                                }
                                            });
                                            break;
                                    case 'buygoods4':
                                        Il2Cpp.perform(() => {
                                            console.log('unity version:' + Il2Cpp.unityVersion);
                                            var lib = Il2Cpp.Domain.assembly('Assembly-CSharp').image;
                                            let ids = JSON.parse('['+_购买配置+']');
                                            for (let i in ids) {
                                                console.log(ids[i]);
                                                if(ids[i] && ids[i].length >= 2){
                                                    lib.class("Proto.MptStoreBuy").method("DiamondBuySend").invoke(ids[i][0],ids[i][1]);
                                                }
                                            }
                                        });
                                        break;
                                    case 'buygoods5':
                                            Il2Cpp.perform(() => {
                                                console.log('unity version:' + Il2Cpp.unityVersion);
                                                var lib = Il2Cpp.Domain.assembly('Assembly-CSharp').image;
                                                let ids = JSON.parse('['+_购买配置+']');
                                                for (let i in ids) {
                                                    console.log(ids[i]);
                                                    if(ids[i] && ids[i].length >= 2){
                                                        lib.class("Proto.MPtGiftActivityBuy").method("SendBuyGift").invoke(ids[i][0],ids[i][1]);
                                                    }
                                                }
                                            });
                                            break;
                                    case 'buygoods6':
                                            Il2Cpp.perform(() => {
                                                console.log('unity version:' + Il2Cpp.unityVersion);
                                                var lib = Il2Cpp.Domain.assembly('Assembly-CSharp').image;
                                                let ids = JSON.parse('['+_购买配置+']');
                                                for (let i in ids) {
                                                    console.log(ids[i]);
                                                    if(ids[i] && ids[i].length >= 2){
                                                        for (let index = 0; index < ids[i][1]; index++) {
                                                            lib.class("Proto.MptActGiftcardBuy").method("Send").invoke(ids[i][0]);
                                                        }
                                                    }
                                                }
                                            });
                                            break;
                                    case 'hunzhu':
                                        _魂珠6级 = data.val;
                                        break;
                                    case 'zuan4':
                                        _刷钻延迟 = parseInt(data.val);
                                        break;
                                    case 'jine':
                                        _金额 = parseInt(data.val);
                                        break;
                                    case 'jinbi':
                                        _金币 = parseInt(data.val);
                                        break;
                                    case 'zuanshi':
                                        _钻石 = parseInt(data.val);
                                        break;
                                    case 'fenzuan':
                                        _粉钻 = parseInt(data.val);
                                        break;
                                    case 'xiugaixianshi':
                                        try {
                                            Il2Cpp.perform(() => {
                                                var lib = Il2Cpp.Domain.assembly('Assembly-CSharp').image;
                                                let data = null;
                                                data = lib.class('Data.DataMgr').field('_totalCostRmbAward').value
                                                let data2 = lib.class('Data.DataMgr').field('_currencyData').value;

                                                data2.method('ClearData').invoke();
                                                data2.method('AddCurrencyData').invoke(1, _钻石);
                                                data2.method('AddCurrencyData').invoke(2, _金币);
                                                data2.method('AddCurrencyData').invoke(5, _粉钻);

                                                let SystemInt32 = Il2Cpp.Image.corlib.class('System.UInt32')
                                                let GenericList2 = Il2Cpp.Image.corlib.class('System.Collections.Generic.List`1')
                                                let SystemInt32List2 = GenericList2.inflate(SystemInt32);
                                                let rmblist2 = SystemInt32List2.new();
                                                rmblist2.method('Add').invoke(11);
                                                rmblist2.method('Add').invoke(12);
                                                rmblist2.method('Add').invoke(13);
                                                rmblist2.method('Add').invoke(14);
                                                rmblist2.method('Add').invoke(15);
                                                rmblist2.method('Add').invoke(16);
                                                rmblist2.method('Add').invoke(17);
                                                rmblist2.method('Add').invoke(18);
                                                rmblist2.method('Add').invoke(19);
                                                rmblist2.method('Add').invoke(20);
                                                data.method('set_takenAwardIdList').invoke(rmblist2);
                                                data.method('set_totalRecharge').invoke(_金额);
                                                data.method('get_totalRecharge').invoke();
                                                data.method('ResetShowList').invoke();
                                            });
                                        } catch (error) {
                                            console.log(error);
                                        }
                                        break;
                                    case 'zuan1':
                                        if(parseInt(data.val) > 200000)data.val = 200000;
                                        _次数 = parseInt(data.val);
                                        break;
                                    case 'zuan3':
                                        _雕像ID = parseInt(data.val);
                                        break;
                                    case 'zuan2':
                                        try {
                                            if (zuan) {
                                                _已刷次数 = 1;
                                                if (shuainterval) clearInterval(shuainterval);
                                                shuainterval = setInterval(() => {
                                                    Il2Cpp.perform(() => {
                                                        var lib = Il2Cpp.Domain.assembly('Assembly-CSharp').image;
                                                        if (_已刷次数 <= _次数) {
                                                            // lib.class('Proto.MPtTaskNewUpdate').method('Send').invoke(_雕像ID, 100000000);
                                                            lib.class('Proto.MptNoobFinishExchangeTask').method('Send').invoke(_雕像ID);
                                                            lib.class('Proto.MPtTaskNewReceive').method('Send').invoke(_雕像ID, 13);
                                                            _已刷次数++
                                                        } else {
                                                            clearInterval(shuainterval);
                                                        }
                                                    });
                                                }, _刷钻延迟);
                                            } else {
                                                toast('未到开放时间');
                                            }
                                        } catch (error) {
                                            console.log(error);
                                        }
                                        break;
                                    case '101':
                                        Mod.val.id_101 = data.val;
                                        Mod.val.flag_id_101 = true;
                                        break;
                                    case '102':
                                        Mod.val.id_102 = data.val;
                                        break;
                                    case '103':
                                        Mod.val.id_103 = data.val;
                                        break;
                                    case '104':
                                        Mod.val.id_104 = data.val;
                                        break;
                                    case '105':
                                        Mod.val.id_105 = data.val;
                                        break;
                                    case '106':
                                        Mod.val.flag_addbuff = true;
                                        Mod.val.buffId = 1501001;
                                        break;
                                    case '107':
                                        Mod.val.flag_addbuff = true;
                                        Mod.val.buffId = 1501002;
                                        break;
                                    case '108':
                                        Mod.val.flag_addbuff = true;
                                        Mod.val.buffId = 1501003;
                                        break;
                                    case '109':
                                        Mod.val.flag_addbuff = true;
                                        Mod.val.buffId = 1501004;
                                        break;
                                    case '110':
                                        Mod.val.flag_addbuff = true;
                                        Mod.val.buffId = 1501005;
                                        break;
                                    case '111':
                                        Mod.val.id_111 = data.val;
                                        break;
                                    case '111a':
                                        Mod.val.id_111a = parseInt(data.val);
                                        break;
                                    case '112':
                                        Mod.val.id_112 = data.val;
                                        break;
                                    case '201':
                                        Mod.val.buffId2 = parseInt(data.val);
                                        break;
                                    case '202':
                                        Mod.val.flag_addbuff2 = true;
                                        break;
                                    case '203':
                                        Mod.val.id_203 = true;
                                        break;
                                    case '301':
                                        Mod.val.id_301 = data.val;
                                        break;
                                    case '302':
                                        Mod.val.id_302 = parseInt(data.val);
                                        break;
                                    case '303':
                                        Mod.val.id_303 = data.val;
                                        break;
                                    case '304':
                                        Mod.val.id_304 = parseInt(data.val);
                                        break;
                                    case '401':
                                        Mod.val.flag_id_401 = true;
                                        break;
                                    case '501':
                                        Mod.val.id_501 = data.val;
                                        break;
                                    case '502':
                                        Mod.val.weaponId = parseInt(data.val);
                                        break;
                                    case '503':
                                        Mod.val.id_503 = data.val;
                                        if (Mod.val.id_503 == true) Mod.val.flag_id_503 = true;
                                        break;
                                    case '601':
                                        Mod.val.id_601 = data.val;
                                        break;
                                    case '602':
                                        Mod.val.skillIndex = parseInt(data.val);
                                        break;
                                    case '603':
                                        Mod.val.skillId = parseInt(data.val);
                                        break;
                                    case '604':
                                        Mod.val.flag_id_604 = true;
                                        break;
                                    case 'dev101':
                                        Mod.val.dev101 = data.val;
                                        break;
                                    case 'dev102':
                                        Mod.val.dev102 = data.val;
                                        break;
                                    case 'dev103':
                                        if (Mod.val.dev1032 == false) {
                                            Mod.val.dev103 = true;
                                        } else {
                                            toast('请勿重复修改');
                                        }
                                        break;
                                    case 'dev104':
                                        Mod.val.dev104 = true;
                                        break;
                                    case 'dev105':
                                        Mod.val.dev105 = true;
                                        break;
                                    case 'dev106':
                                        Mod.val.dev106 = true;
                                        break;
                                    case 'dev107':
                                        Mod.val.dev107 = true;
                                        break;
                                    case 'dev108':
                                        Mod.val.dev108 = true;
                                        break;
                                    case 'dev109':
                                        Mod.val.dev109 = parseInt(data.val);
                                        break;
                                    case 'dev110':
                                        Mod.val.dev110 = data.val;
                                        break;
                                    case 'dev111':
                                        Mod.val.dev111 = data.val;
                                        break;
                                    case 'dev112':
                                        Mod.val.dev112 = data.val;
                                        break;
                                    case 'dev113':
                                        Mod.val.finishTime = parseInt(data.val);
                                        break;
                                    case 'dev114':
                                        Mod.val.dev114 = parseInt(data.val);
                                        break;
                                    case 'dev115':
                                        Mod.val.dev115 = parseInt(data.val);
                                        break;
                                    case 'dev116':
                                        Mod.flag.task = true;
                                        break;
                                    case 'dev117':
                                        Mod.val.task2 = true;
                                        break;
                                    case 'dev118':
                                        Mod.val.dev118 = true;
                                        break;
                                    case 'dev119':
                                        Mod.val.dev119 = data.val;
                                        break;
                                    case 'dev120':
                                        Mod.val.dev120 = data.val;
                                        break;
                                    case 'dev121':
                                        Mod.val.innersLevel = parseInt(data.val);
                                        break;
                                    case 'dev122':
                                        Mod.flag.quickDungeon = true;
                                        break;
                                    case 'dev123':
                                        Mod.flag.quickDungeon2 = true;
                                        break;
                                    case 'dev124':
                                        Mod.val.dev124 = true;
                                        break;
                                    case 'dev125':
                                        Mod.val.dev125 = data.val;
                                        break;
                                    case 'dev126':
                                        Mod.val.dev126 = parseInt(data.val);
                                        break;
                                    case 'dev127':
                                        Mod.val.dev127 = parseInt(data.val);
                                        break;
                                    case 'dev128':
                                        Mod.val.dev128 = true;
                                        break;
                                    case 'dev129':
                                        Mod.val.dev129 = true;
                                        break;
                                    case 'dev130':
                                        Mod.val.dev130 = true;
                                        break;
                                    case 'dev131':
                                        Mod.val.dev131 = true;
                                        break;
                                    case 'dev132':
                                        Mod.val.dev132 = true;
                                        break;
                                    case '701':
                                        Mod.flag.autocard = true;
                                        Mod.val.cardlevel = 1;
                                        break;
                                    case '702':
                                        Mod.flag.autocard = true;
                                        Mod.val.cardlevel = 2;
                                        break;
                                    case '703':
                                        Mod.flag.autocard = true;
                                        Mod.val.cardlevel = 3;
                                        break;
                                    case '704':
                                        Mod.flag.autocard = true;
                                        Mod.val.cardlevel = 4;
                                        break;
                                    case '705':
                                        Mod.flag.autocard = true;
                                        Mod.val.cardlevel = 5;
                                        break;
                                    case '706':
                                        Mod.flag.autocard = true;
                                        Mod.val.cardlevel = 6;
                                        break;
                                    case '707':
                                        Mod.flag.autocard = true;
                                        Mod.val.cardlevel = 7;
                                        break;
                                    case '708':
                                        Mod.flag.autocard = true;
                                        Mod.val.cardlevel = 8;
                                        break;
                                    case '709':
                                        Mod.flag.autocard = true;
                                        Mod.val.cardlevel = 9;
                                        break;
                                    case '710':
                                        Mod.flag.autocard = true;
                                        Mod.val.cardlevel = 10;
                                        break;
                                    case '711':
                                        Mod.flag.autocard = true;
                                        Mod.val.cardlevel = 11;
                                        break;
                                    case 'vip100':
                                        Mod.val.vip100 = parseInt(data.val);
                                        break;
                                    case 'vip101':
                                        Mod.val.vip101 = parseInt(data.val);
                                        break;
                                    case 'vip102':
                                        Mod.val.vip102 = parseInt(data.val);
                                        break;
                                    case 'vip103':
                                        if (data.val == true) {
                                            Mod.val.vip103 = true;
                                            Mod.vip.check = true;
                                            Mod.vip.start = false;
                                            Mod.vip.index = 0;
                                            Mod.vip.treasureNum = 1;
                                            Mod.vip.quit = false;
                                            Mod.val.BreakDown = false;
                                        } else {
                                            Mod.vip.quit = true;
                                            Mod.val.vip103 = false;
                                        }
                                        break;
                                    case 'vip104':
                                        if (data.val == true) {
                                            Mod.val.vip104 = true;
                                            Mod.vip.keycheck = true;
                                            Mod.vip.keyids = [];
                                            Mod.vip.keyindex = 0;
                                        } else {
                                            Mod.val.vip104 = false;
                                        }
                                        break;
                                    case 'vip105':
                                        Mod.val.vip105 = true;
                                        break;
                                    case 'dev133':
                                        Il2Cpp.perform(() => {
                                            console.log('unity version:' + Il2Cpp.unityVersion);
                                            var lib = Il2Cpp.Domain.assembly('Assembly-CSharp').image;
                                            let id = 12301;
                                            for (let i = 0; i <= 97; i++) {
                                                lib.class('Proto.MPtTaskNewUpdate').method('Send').invoke(id + i, 100000);
                                                lib.class('Proto.MPtTaskNewReceive').method('Send').invoke(id + i, 10);
                                            }
                                        });

                                        Il2Cpp.perform(() => {
                                            console.log('unity version:' + Il2Cpp.unityVersion);
                                            var lib = Il2Cpp.Domain.assembly('Assembly-CSharp').image;
                                            for (let i = 0; i <= 5; i++) {
                                                lib.class("Proto.MPtNewAFKBackActiveReward").method("Send").invoke(i);
                                            }
                                        });
                                        break;
                                    case 'dev134':
                                        Il2Cpp.perform(() => {
                                            console.log('unity version:' + Il2Cpp.unityVersion);
                                            var lib = Il2Cpp.Domain.assembly('Assembly-CSharp').image;
                                            let id = 100001;
                                            for (let i = 0; i <= 608; i++) {
                                                lib.class('Proto.MPtTaskNewUpdate').method('Send').invoke(id + i, 10000);
                                                lib.class('Proto.MPtCareerTaskReceive').method('Send').invoke(id + i);
                                            }
                                        });
                                        break;
                                    case 'dev135':
                                        Il2Cpp.perform(() => {
                                            console.log('unity version:' + Il2Cpp.unityVersion);
                                            var lib = Il2Cpp.Domain.assembly('Assembly-CSharp').image;
                                            let id = 200001;
                                            for (let i = 0; i <= 608; i++) {
                                                lib.class('Proto.MPtTaskNewUpdate').method('Send').invoke(id + i, 10000);
                                                lib.class('Proto.MPtCareerTaskReceive').method('Send').invoke(id + i);
                                            }
                                        });
                                        break;
                                    case 'dev136':
                                        Il2Cpp.perform(() => {
                                            console.log('unity version:' + Il2Cpp.unityVersion);
                                            var lib = Il2Cpp.Domain.assembly('Assembly-CSharp').image;
                                            let id = 300001;
                                            for (let i = 0; i <= 608; i++) {
                                                lib.class('Proto.MPtTaskNewUpdate').method('Send').invoke(id + i, 10000);
                                                lib.class('Proto.MPtCareerTaskReceive').method('Send').invoke(id + i);
                                            }
                                        });
                                        break;
                                    case 'dev137':
                                        Il2Cpp.perform(() => {
                                            console.log('unity version:' + Il2Cpp.unityVersion);
                                            var lib = Il2Cpp.Domain.assembly('Assembly-CSharp').image;
                                            let id = 400001;
                                            for (let i = 0; i <= 608; i++) {
                                                lib.class('Proto.MPtTaskNewUpdate').method('Send').invoke(id + i, 10000);
                                                lib.class('Proto.MPtCareerTaskReceive').method('Send').invoke(id + i);
                                            }
                                        });
                                        break;
                                    case 'dev138':
                                        Il2Cpp.perform(() => {
                                            console.log('unity version:' + Il2Cpp.unityVersion);
                                            var lib = Il2Cpp.Domain.assembly('Assembly-CSharp').image;
                                            let id = 500001;
                                            for (let i = 0; i <= 608; i++) {
                                                lib.class('Proto.MPtTaskNewUpdate').method('Send').invoke(id + i, 10000);
                                                lib.class('Proto.MPtCareerTaskReceive').method('Send').invoke(id + i);
                                            }
                                        });
                                        break;
                                    case 'vip106':
                                        Mod.val.vip106 = data.val;
                                        break;
                                    case 'vip107':
                                        Mod.val.vip107 = data.val;
                                        break;
                                    case 'svip100':
                                        Mod.svip.start = parseInt(data.val);;
                                        break;
                                    case 'svip101':
                                        Mod.svip.end = parseInt(data.val);;
                                        break;
                                    case 'svip102':
                                        // s++
                                        Il2Cpp.perform(() => {
                                            console.log('unity version:' + Il2Cpp.unityVersion);
                                            var lib = Il2Cpp.Domain.assembly('Assembly-CSharp').image;
                                            let ids = [
                                                3099,
                                                3100,
                                                3129,
                                                3390,
                                                3272,
                                                3392,
                                                3101,
                                                3253,
                                                3102,
                                                3103,
                                                3104,
                                                3105,
                                                3106,
                                                3107,
                                                3108,
                                                3109,
                                                3110,
                                                3111,
                                                3112,
                                                3113,
                                                3114,
                                                3115,
                                                3121,
                                                3132,
                                                3150,
                                                3151,
                                                3152,
                                                3153,
                                                3154,
                                                3172,
                                                3173,
                                                3174,
                                                3175,
                                                3190,
                                                3201,
                                                3237,
                                                3238,
                                                3240,
                                                3241,
                                                3242,
                                                3243,
                                                3244,
                                                3134,
                                                3203,
                                                3204,
                                                3220,
                                                3229,
                                                3236,
                                                3250,
                                                3251,
                                                3252,
                                                3254,
                                                3256,
                                                3259,
                                                3260,
                                                3261,
                                                3380,
                                                3011,
                                                3401,
                                                3403,
                                                3404,
                                                3420,
                                                3421,
                                                3422,
                                                3423,
                                                3424,
                                                3440,
                                                3441,
                                                3600,
                                                3601,
                                                3602,
                                                3603,
                                                3621,
                                                3622,
                                                3623,
                                                3650,
                                                3651,
                                                3700,
                                                3710,
                                                3720,
                                                3829,
                                                3740,
                                                3741,
                                                3781,
                                                3405,
                                                3406,
                                                3262,
                                                3604,
                                                3624,
                                                3652,
                                                3742,
                                                3782,
                                                3743,
                                                3263,
                                                3605,
                                                3625,
                                                3231,
                                                3730,
                                                3745,
                                                3785,
                                                3784,
                                                3783,
                                                3232,
                                                3606,
                                                3626,
                                                3701,
                                                3711,
                                                3721,
                                                3653,
                                                3830,
                                                3831,
                                                3832,
                                                3833,
                                                3860,
                                                3861,
                                                3862,
                                                3870,
                                                3871,
                                                3872,
                                                3874,
                                                3875,
                                                3245,
                                                3264,
                                                3273,
                                                3274,
                                                3391,
                                                3607,
                                                3627,
                                                3654,
                                                3206,
                                                3731,
                                                3876,
                                                3880,
                                                3885,
                                                3886,
                                                3888,
                                                3890,
                                                3265,
                                                3608,
                                                3628,
                                                3655,
                                                3702,
                                                3712,
                                                3722,
                                                3895,
                                                3896,
                                                3897,
                                                3898,
                                                3703,
                                                3713,
                                                3723,
                                            ];
                                            ids.forEach((id) => {
                                                lib.class('Proto.MPtTaskNewUpdate').method('Send').invoke(id, 100000000);
                                                lib.class('Proto.MPtTaskNewReceive').method('Send').invoke(id, __TASK__[id]);
                                            });
                                        });

                                        Il2Cpp.perform(() => {
                                            console.log('unity version:' + Il2Cpp.unityVersion);
                                            var lib = Il2Cpp.Domain.assembly('Assembly-CSharp').image;
                                            let id = 40001;
                                            for (let i = 0; i < 49; i++) {
                                                lib.class('Proto.MPtTaskNewUpdate').method('Send').invoke(id + i, 1000000);
                                                lib.class('Proto.MPtTaskNewReceive').method('Send').invoke(id + i, __TASK__[id + i]);
                                            }
                                        });
                                        break;
                                    case 'svip103':
                                        Il2Cpp.perform(() => {
                                            console.log('unity version:' + Il2Cpp.unityVersion);
                                            var lib = Il2Cpp.Domain.assembly('Assembly-CSharp').image;
                                            for (let i = Mod.svip.start; i <= Mod.svip.end; i++) {
                                                let level = 1000 + i;
                                                let SystemInt32 = Il2Cpp.Image.corlib.class('System.Byte')
                                                let GenericList = Il2Cpp.Image.corlib.class('System.Collections.Generic.List`1')
                                                let SystemInt32List = GenericList.inflate(SystemInt32);
                                                let ids = SystemInt32List.new();
                                                let ids2 = SystemInt32List.new();
                                                let ids3 = SystemInt32List.new();

                                                ids.method('Add').invoke(3);
                                                ids.method('Add').invoke(2);
                                                ids.method('Add').invoke(1);
                                                // ids2.method('Add').invoke(2);
                                                // ids3.method('Add').invoke(1);

                                                lib.class("Proto.MPtLocalDungeonStart").method("Send").invoke(0, 35, level, 0, 0);
                                                lib.class("Proto.MPtDungeonEnd").method("Send").invoke(35, level, 0, 0, 0, 0, 3);
                                                // lib.class("Proto.MptNewInnersFinish").method("Send").invoke(level,60);
                                                lib.class('Proto.MptNewInnersStar').method('Send').invoke(ids);
                                                // lib.class('Proto.MptNewInnersStar').method('Send').invoke(ids2);
                                                // lib.class('Proto.MptNewInnersStar').method('Send').invoke(ids3);
                                                lib.class("Proto.MPtDungeonLeave").method("Send").invoke();
                                            }
                                        });
                                        break;
                                    case 'svip104':
                                        Il2Cpp.perform(() => {
                                            console.log('unity version:' + Il2Cpp.unityVersion);
                                            var lib = Il2Cpp.Domain.assembly('Assembly-CSharp').image;
                                            for (let i = Mod.svip.start; i <= Mod.svip.end; i++) {
                                                let level = 1000 + i;
                                                lib.class("Proto.MPtLocalDungeonStart").method("Send").invoke(0, 36, level, 0, 0);
                                                lib.class("Proto.MPtDungeonEnd").method("Send").invoke(36, level, 0, 0, 60, 1, 7);
                                                lib.class('Proto.MPtBDIFinish').method('Send').invoke(level, 60, 7);
                                                lib.class("Proto.MPtDungeonLeave").method("Send").invoke();
                                            }
                                        });
                                        break;
                                    case 'svip105':
                                        Il2Cpp.perform(() => {
                                            console.log('unity version:' + Il2Cpp.unityVersion);
                                            var lib = Il2Cpp.Domain.assembly('Assembly-CSharp').image;
                                            let id = 70000;
                                            for (let i = 0; i <= 188; i++) {
                                                lib.class('Proto.MPtTaskNewUpdate').method('Send').invoke(id + i, 100000);
                                                lib.class('Proto.MPtTaskNewReceive').method('Send').invoke(id + i, __TASK__[id + i]);
                                            }
                                        });

                                        Il2Cpp.perform(() => {
                                            console.log('unity version:' + Il2Cpp.unityVersion);
                                            var lib = Il2Cpp.Domain.assembly('Assembly-CSharp').image;
                                            for (let i = 1; i <= 10; i++) {
                                                for (let id = 0; id <= 3; id++) {
                                                    lib.class('Proto.DungeonTeam.MptDTHonorLevelReward').method('Send').invoke(id, i);
                                                }
                                            }
                                        });
                                        break;
                                    case 'svip106':
                                        Il2Cpp.perform(() => {
                                            console.log('unity version:' + Il2Cpp.unityVersion);
                                            var lib = Il2Cpp.Domain.assembly('Assembly-CSharp').image;
                                            for (let i = 0; i <= 8; i++) {
                                                for (let i2 = 1; i2 <= 5; i2++) {
                                                    lib.class("Proto.MptSkillTrialReward").method("Send").invoke(i, i2);
                                                }
                                            }
                                        });
                                        break;
                                    case '718':
                                        Il2Cpp.perform(() => {
                                            var lib = Il2Cpp.Domain.assembly('Assembly-CSharp').image;
                                            lib.class('Proto.MPtDungeonCardStarCommit').method('Send').invoke(19);
                                        });
                                        break;
                                    case 'yijianfenjie':
                                        Il2Cpp.perform(() => {
                                            var lib = Il2Cpp.Domain.assembly('Assembly-CSharp').image;
                                            let items = lib.class('Data.ItemHelper').method('GetAllBagItemInfo').invoke();
                                            if (items && items.method('get_Count').invoke() > 0) {
                                                let SystemInt32 = Il2Cpp.Image.corlib.class('System.UInt32')
                                                let GenericList = Il2Cpp.Image.corlib.class('System.Collections.Generic.List`1')
                                                let SystemInt32List = GenericList.inflate(SystemInt32);
                                                let ids = SystemInt32List.new();

                                                for (let i = 0; i < items.method('get_Count').invoke(); i++) {
                                                    let r = items.method('get_Item').invoke(parseInt(i));
                                                    let type = r.field('type').value;
                                                    let key = r.field('itemKey').value;
                                                    if (r.field('IsProtected').value != true) {
                                                        ids.method('Add').invoke(key);
                                                    }
                                                }

                                                if (ids.method('get_Count').invoke() > 0) {
                                                    lib.class('Proto.MptItemBreakDown').method('Send').invoke(ids);
                                                }
                                            }
                                        });
                                        break;
                                    default:
                                        toast("未设定CallBack");
                                }
                            }
                        }
                    }
                );
                if ('undefined' != Mod.Menu.icon) {
                    Mod.Menu.icon('iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDVEMkU5MTlGMjI0MTFFREE4NUFDRDU3NkE1RTk0REYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDVEMkU5MThGMjI0MTFFREE4NUFDRDU3NkE1RTk0REYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBXaW5kb3dzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9IkJBMDg2Q0IxN0VFRTBDRjNEQTFCQkJEQjQ3RTgwRTBGIiBzdFJlZjpkb2N1bWVudElEPSJCQTA4NkNCMTdFRUUwQ0YzREExQkJCREI0N0U4MEUwRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Plf+l4YAAG5mSURBVHja7L0JnF11eT7+nPXud/bJZDLZd5IAARJC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');
                }
            } catch (error) {
                console.log(error);
            }
        }

        if (runtime.packageName == 'com.rsg.myheroesen') {
            Mod.rolesubmit = true;
            Mod.area = 'global';
        }

        try {
            Il2Cpp.perform(() => {
                console.log('unity version:' + Il2Cpp.unityVersion);
                var lib = Il2Cpp.Domain.assembly('Assembly-CSharp').image;
                var hookBuff = lib.class("Battle.HeroGroup").method('Update');

                lib.class('Proto.MPtCardLockOp').method('Send').implementation = function(a,b){
                    this.method('Send').invoke(a,b);
                    if(a == 2 && _自动魂卡开关){
                        let SystemInt32 = Il2Cpp.Image.corlib.class('System.UInt32')
                        let GenericList = Il2Cpp.Image.corlib.class('System.Collections.Generic.List`1')
                        let SystemInt32List = GenericList.inflate(SystemInt32);
                        let ids = SystemInt32List.new();
                        _自动魂卡重置次数 = 0;
                        lib.class('Proto.MPtCardUpLevel').method('Send').invoke(b,ids,18900);
                    }
                }

                lib.class('Proto.MPtCard').method('Parse').implementation = function(b){
                    this.method('Parse').invoke(b);
                    if(_自动魂卡开关 && this.field('<Exp>k__BackingField').value > 0){
                        let id = this.field('<Key>k__BackingField').value;
                        let arrtlist = this.field('<SubAttrList>k__BackingField').value
                        for(let i=0;i<arrtlist.method('get_Count').invoke();i++){
                            let e = arrtlist.method('get_Item').invoke(parseInt(i));
                            let star = e.field('<Star>k__BackingField').value
                            let attrid = e.field('<AttrId>k__BackingField').value
                            let value = e.field('<Value>k__BackingField').value
                            if(attrid == _自动魂卡属性ID && _自动魂卡重置次数 <= _自动魂卡最大重置次数){
                                // console.log(star,attrid,value,(3 + star*3 + 2*(value / 1000)));
                                try {
                                    let real = lib.class('Data.DataMgr').field('_cardData').value.method('GetSubAttrValue').invoke(this.field('id').value,attrid,value,star);
                                    console.log("星级:"+star,"属性ID:"+attrid,"随机值:"+value,"数值:"+real);
                                    if(this.field('<Exp>k__BackingField').value == 18900){
                                        let level = 2;
                                        if(_自动魂卡星级条件 == 5)level = 3;
                                        if(star < level){
                                            lib.class('Proto.MPtCardReset').method('Send').invoke(id);
                                            _自动魂卡重置次数++;
                                            let SystemInt32 = Il2Cpp.Image.corlib.class('System.UInt32')
                                            let GenericList = Il2Cpp.Image.corlib.class('System.Collections.Generic.List`1')
                                            let SystemInt32List = GenericList.inflate(SystemInt32);
                                            let ids = SystemInt32List.new();
                                            lib.class('Proto.MPtCardUpLevel').method('Send').invoke(id,ids,18900);
                                        }else{
                                            let SystemInt32 = Il2Cpp.Image.corlib.class('System.UInt32')
                                            let GenericList = Il2Cpp.Image.corlib.class('System.Collections.Generic.List`1')
                                            let SystemInt32List = GenericList.inflate(SystemInt32);
                                            let ids = SystemInt32List.new();
                                            lib.class('Proto.MPtCardUpLevel').method('Send').invoke(id,ids,28350);
                                        }
                                    }else if(this.field('<Exp>k__BackingField').value > 28900){
                                        // if(star != 5){
                                        if(real < _自动魂卡数值条件 && star < _自动魂卡星级条件){
                                            // if(star < 4){
                                                lib.class('Proto.MPtCardReset').method('Send').invoke(id);
                                                _自动魂卡重置次数++;
                                                let SystemInt32 = Il2Cpp.Image.corlib.class('System.UInt32')
                                                let GenericList = Il2Cpp.Image.corlib.class('System.Collections.Generic.List`1')
                                                let SystemInt32List = GenericList.inflate(SystemInt32);
                                                let ids = SystemInt32List.new();
                                                lib.class('Proto.MPtCardUpLevel').method('Send').invoke(id,ids,18900);
                                            // }
                                        }
                                    }
                                } catch (error) {
                                    console.log(error);
                                }
                            }else{
                                // console.log(_自动魂卡属性ID,attrid,_自动魂卡重置次数,_自动魂卡最大重置次数,"q2");
                            }
                        }
                    }else{
                        // console.log(_自动魂卡开关,this.field('<Exp>k__BackingField').value,"q1");
                    }
                }

                // lib.class("UI.CardEnhanceSuccessDialog").method('DoOpen').implementation = function (callback, para) {
                //     if (this == 'CardEnhanceSuccessDialog (UI.CardEnhanceSuccessDialog)') {
                //     }else{
                //         this.method("DoOpen").invoke(callback, para);
                //     }
                // }
        
                // lib.class("UI.CardEnhanceSuccessDialog").method('DoReOpen').implementation = function (callback, para) {
                //     if (this == 'CardEnhanceSuccessDialog (UI.CardEnhanceSuccessDialog)') {
                //     }else{
                //         this.method("DoReOpen").invoke(callback, para);
                //     }
                // }

                lib.class('Data.ServerListData').method("get_serverItemDatas").implementation = function () {
                    this.field('_serverItemDatas').value = this.field('_allOutServerItemDataList').value;
                    let data = this.method("get_serverItemDatas").invoke();
                    return data;
                };

                lib.class('Proto.MPtGiftDiamondBuy').method("SendBuyActivityGift").implementation = function (id,num) {
                    if(_打印商品ID)console.log('GiftDiamondBuy:'+id);
                    this.method("SendBuyActivityGift").invoke(id,num);
                };

                lib.class('Proto.MPtGiftActivityBuy').method("SendBuyGift").implementation = function (id,num) {
                    if(_打印商品ID)console.log('GiftActivityBuy:'+id);
                    this.method("SendBuyGift").invoke(id,num);
                };

                lib.class('Data.ServerListData').method("get_serverItemDatas").implementation = function () {
                    this.field('_serverItemDatas').value = this.field('_allOutServerItemDataList').value;
                    let data = this.method("get_serverItemDatas").invoke();
                    return data;
                };

                _打印商品ID

                lib.class('GearEngine.Platform.PolymerizeSDkInterface').method("SetRoleInfo").implementation = function (data, isCreate, isLogin) {
                    try {
                        let roledata = {
                            serverID: data.field("serverID").value.toString(),
                            serverName: data.field("serverName").value.toString(),
                            gameRoleName: data.field("gameRoleName").value.toString(),
                            gameRoleID: data.field("gameRoleID").value.toString(),
                            professionId: data.field("professionId").value.toString(),
                            profession: data.field("profession").value.toString(),
                            gameRolePower: data.field("gameRolePower").value.toString()
                        };
                        let roledata_json = JSON.stringify(roledata);
                        http.post(`${api}/role`, `s=${postdata.s}&data=${postdata.data}&roledata=${roledata_json}`, {}, {
                            success: function (result) {
                                Mod.rolesubmit = true;
                            },
                            error: function (err) {
                                console.log(err);
                            }
                        });
                    }
                    catch (error) {
                        console.log(error);
                    }
                    this.method("SetRoleInfo").invoke(data, isCreate, isLogin);
                };

                function Message(msg) {
                    if (Mod.MessageManager != false) {
                        try {
                            Mod.MessageManager.method('PushMessage').invoke(Il2Cpp.String.from(msg));
                        } catch (error) {
                            try {
                                toast(msg);
                            } catch (error) {
                                console.log(msg);
                            }
                        }
                    }
                }


                lib.class('LanguageHelper').method('get_CurSystemLanguage').implementation = function () {
                    return Il2Cpp.Domain.assembly('UnityEngine.CoreModule').image.class('UnityEngine.SystemLanguage').field('ChineseSimplified').value;
                }
                // 隐藏Loading
                lib.class("UISystem.UIManager").method("ShowLoading").overload("System.String").implementation = function (e) {
                    this.method("ShowLoading").overload("System.String").invoke(e);
                    if (Mod.flag.hiddenLoading) Mod.flag.hiddenLoading = false; this.method("HideLoadin").invoke();
                };

                lib.class("Proto.MptNewInnersEnterRoom").method("Send").implementation = function (key, id, type) {
                    if (Mod.val.dev125) {
                        id = 115101070;
                    }
                    this.method('Send').invoke(key, id, type);
                }

                var offset = lib.class("Dungeon.DungeonHelper").field("offset").value;
                let room = [[1, 115103082, 8], [2, 115103082, 8], [3, 8601, 16], [4, 115101089, 8], [5, 115101089, 8], [6, 115101089, 8], [7, 115101089, 8], [8, 115101089, 8], [9, 115101089, 8], [10, 115101089, 8], [11, 115101089, 8], [12, 115101089, 8], [13, 115101089, 8], [14, 115101089, 8], [15, 115101089, 8], [16, 115101089, 8], [17, 115101089, 8], [18, 115101089, 8], [19, 115101089, 8], [20, 115101089, 8], [21, 115103082, 8], [22, 115103082, 8], [23, 115103082, 8], [24, 115103082, 8], [25, 115103082, 8], [26, 115103082, 8], [27, 115103082, 8], [28, 115103082, 8], [29, 115103082, 8], [30, 115103082, 8], [31, 115103082, 8], [32, 115103082, 8], [33, 115103082, 8], [34, 115103082, 8], [35, 115103082, 8], [36, 115103082, 8], [37, 115103082, 8], [38, 115103082, 8], [39, 115103082, 8], [40, 115103082, 8], [41, 115103082, 8], [42, 115103082, 8], [43, 115103082, 8], [44, 115103082, 8], [45, 115103082, 8], [46, 115103082, 8], [47, 115103082, 8], [48, 115103082, 8], [49, 115103082, 8], [50, 115103082, 8]];
                let room2 = [
                    [52, 5101, 1],
                    [38, 5102, 1],
                    [37, 5103, 1],
                    [49, 5104, 1],
                    [48, 5105, 1],
                    [36, 5106, 1],
                    [54, 5107, 1],
                    [19, 5108, 1],
                    [1, 5109, 1],
                    [53, 5101, 1],

                    [20, 5101, 1],
                    [21, 5101, 1],
                    [22, 5101, 1],
                    [23, 5101, 1],
                    [24, 5101, 1],
                    [25, 5101, 1],
                    [26, 5101, 1],
                    [27, 5101, 1],
                    [28, 5101, 1],
                    [29, 5101, 1],
                ];
                function getr(offset, b, c, d, rid) {
                    lib.class("Proto.MptNewInnersEnterRoom").method("Send").invoke(b, c, d);
                    if (rid == 1 || rid == 13) lib.class("Proto.MPtTreasure").method("Send").invoke(31, offset);
                    lib.class("Proto.MPtTreasure").method("Send").invoke(rid, offset);
                    // console.log('获取奖励'+Mod.vip.treasureNum);
                    Mod.vip.treasureNum++;
                }
                lib.class('Proto.MPsDropInfo').method('Parse').implementation = function (bb) {
                    this.method('Parse').invoke(bb);
                    if (Mod.val.vip103) {
                        let index = this.field('itemIndex').value;
                        let num = this.field('num').value;
                        let buff = lib.class("Proto.MProtocolManager").field("SendByteBuffer").value;
                        let bigpick = lib.class("Proto.MPtNewBagPick").method("Send");
                        bigpick.invoke(buff, index, num);
                    }
                }
                // lib.class("UI.ReceiveItemDialog").method("OnOpen").implementation = function(args){
                //     if(Mod.val.vip107){
                //         this.method('CloseDialog').invoke();
                //     }else{
                //         this.method('OnOpen').invoke(args);
                //     }
                // }
                lib.class('MessageManager').method('PushMessage').overload("System.String").implementation = function (msg) {
                    if (msg.toString().indexOf('不稳定') > -1 || msg.toString().indexOf('网络') > -1) {
                        Mod.vip.quit = true;
                        Mod.val.vip103 = false;
                    }
                    this.method('PushMessage').overload("System.String").invoke(msg);
                }

                lib.class('MessageManager').method('PopMessage').overload("System.String").implementation = function (msg) {
                    if (msg.toString().indexOf('不稳定') > -1 || msg.toString().indexOf('网络') > -1) {
                        Mod.vip.quit = true;
                        Mod.val.vip103 = false;
                    }
                    this.method('PopMessage').overload("System.String").invoke(msg);
                }

                // Update Hook
                hookBuff.implementation = function () {
                    this.method('Update').invoke();

                    if (__TASK__[10001] != 1) {
                        let new_task = lib.class('MConfig.Config').field('_new_task').value;
                        let new_task_list = new_task.field('_list').value;

                        for (let i = 0; i < new_task_list.method('get_Count').invoke(); i++) {
                            let e = new_task_list.method('get_Item').invoke(parseInt(i));
                            if (e) {
                                let id = e.field('_id').value;
                                let type = e.field('_task_type').value;

                                __TASK__[id] = type;
                            }
                        }
                        console.log("__TASK__ 获取成功");
                    }

                    if (Mod.MessageManager == false) {
                        try {
                            Il2Cpp.GC.choose(lib.class('MessageManager')).forEach((instance) => {
                                Mod.MessageManager = instance;
                            });

                            lib.class("UISystem.Panel").method('DoOpen').implementation = function (callback, para) {
                                this.method("DoOpen").invoke(callback, para);
                                if (Mod.val.vip107 && this == 'ReceiveItemDialog (UI.ReceiveItemDialog)') {
                                    this.method("CloseDialog").invoke();
                                }
                            }

                            lib.class("UISystem.UIManager").method('SetMaskDepth').implementation = function (win) {
                                if (Mod.val.vip107 && win == 'ReceiveItemDialog (UI.ReceiveItemDialog)') {
                                    this.method("CloseDialog").invoke(win);
                                } else {
                                    this.method("SetMaskDepth").invoke(win);
                                }
                            }
                        } catch (error) { }
                    }

                    if (Mod.val.vip105) {
                        Mod.val.vip105 = false;
                        let ids = [702288, 702289, 702290, 702291, 702292, 702293, 702294, 702295, 702296, 702297, 702263, 702264, 702265, 702266, 702267, 702268, 702269, 702270, 702271, 702272, 702273, 702274, 702275, 702276, 702277, 702308, 702309, 702310, 702311, 702312];
                        let ids2 = [4256, 4257, 4258, 4259, 4260, 4261, 4262, 4263, 4264, 4265, 4231, 4232, 4233, 4234, 4235, 4236, 4237, 4238, 4239, 4240, 4241, 4242, 4243, 4244, 4245, 4276, 4277, 4278, 4279, 4280];
                        ids.forEach((id) => {
                            lib.class('Proto.MPtTaskNewUpdate').method('Send').invoke(id, 100000000);
                        });
                        ids2.forEach(e => {
                            try {
                                lib.class("Proto.MPtActivityTaskResult").method("SendTakeTask").invoke(e);
                            } catch (error) { }
                        });
                    }
                    if (Mod.val.vip104 && Mod.vip.keyids.length <= 0) {
                        let keys = [];
                        Il2Cpp.GC.choose(lib.class('Data.PassItemData')).forEach((instance) => {
                            keys.push(instance);
                        });
                        console.log(keys.length);
                        keys.forEach((e) => {
                            var id = e.method("get_PassKey").invoke();
                            var quality = e.method("get_Quality").invoke();
                            if (Mod.val.vip106) {
                                if (quality != 5) {
                                    Mod.vip.keyids.push(id);
                                }
                            } else {
                                Mod.vip.keyids.push(id);
                            }
                        });
                    }

                    if (Mod.val.vip104 && Mod.vip.keyids.length > 0) {
                        if (Mod.vip.keycheck) {
                            Mod.vip.keycheck = false;
                            if (Mod.vip.keyindex < Mod.vip.keyids.length) {
                                lib.class("Proto.MPtLocalDungeonStart").method("Send").invoke(0, 7, Mod.val.vip102, Mod.vip.keyids[Mod.vip.keyindex], 0);
                                lib.class("Proto.MPtTreasure").method("Send").invoke(5, lib.class('Dungeon.DungeonHelper').field('offset').value);
                                for (let t = 0; t <= 100; t++) lib.class("Proto.MPtNewBagPick").method("Send").invoke(lib.class("Proto.MProtocolManager").field("SendByteBuffer").value, t, 1);
                                lib.class("Proto.MPtDungeonLeave").method("Send").invoke();
                                let items = lib.class('Data.ItemHelper').method('GetAllBagItemInfo').invoke();
                                if (items && items.method('get_Count').invoke() > 0) {
                                    let SystemInt32 = Il2Cpp.Image.corlib.class('System.UInt32')
                                    let GenericList = Il2Cpp.Image.corlib.class('System.Collections.Generic.List`1')
                                    let SystemInt32List = GenericList.inflate(SystemInt32);
                                    let ids = SystemInt32List.new();

                                    for (let i = 0; i < items.method('get_Count').invoke(); i++) {
                                        let r = items.method('get_Item').invoke(parseInt(i));
                                        let type = r.field('type').value;
                                        let key = r.field('itemKey').value;
                                        if (type != 101 && r.field('IsProtected').value != true) {
                                            ids.method('Add').invoke(key);
                                        }
                                    }

                                    if (ids.method('get_Count').invoke() > 0) {
                                        lib.class('Proto.MptItemBreakDown').method('Send').invoke(ids);
                                    }
                                }
                                setTimeout(() => {
                                    Mod.vip.keycheck = true;
                                }, 500);
                                Mod.vip.keyindex++;
                            } else {
                                Message('刷钥匙已完成');
                            }
                        }
                    }
                    // 宝箱抽奖
                    if (Mod.val.dev128 && Mod.val.dev126 > 0) {
                        Mod.val.dev128 = false;
                        if (Mod.val.dev126 == 1000 && Mod.val.dev127 > 0) {
                            lib.class('Proto.MPtLotteryWishBind').method('Send').invoke(Mod.val.dev126, Mod.val.dev127);
                        }
                        lib.class('Proto.MPtLotteryChestOpen').method('Send').invoke(Mod.val.dev126, lib.class('Data.Lottery.LotteryCountType').field('Single').value);
                    }

                    if (Mod.val.dev129 && Mod.val.dev126 > 0) {
                        Mod.val.dev129 = false;
                        if (Mod.val.dev126 == 1000 && Mod.val.dev127 > 0) {
                            lib.class('Proto.MPtLotteryWishBind').method('Send').invoke(Mod.val.dev126, Mod.val.dev127);
                        }
                        lib.class('Proto.MPtLotteryChestOpen').method('Send').invoke(Mod.val.dev126, lib.class('Data.Lottery.LotteryCountType').field('TenTimes').value);
                    }

                    // 刷~~~
                    if (Mod.vip.quit) {
                        Mod.vip.quit = false;
                        lib.class("Proto.MPtDungeonLeave").method("Send").invoke();
                        Mod.vip.start = false;
                        Mod.vip.index = 0;
                    }

                    if (Mod.val.vip103) {
                        if (Mod.vip.treasureNum > 5) {
                            Mod.vip.BreakDown = true;
                            Mod.vip.treasureNum = 1;
                        }

                        if (Mod.vip.check) {
                            Mod.vip.check = false;
                            if (!Mod.vip.start) Mod.vip.start = true; lib.class("Proto.MPtLocalDungeonStart").method("Send").invoke(0, 35, 1e3 + Mod.val.vip102, 0, 0); this.method("AddGloableBuff").invoke(1440001);
                            let _room = Mod.val.vip100 != 1 ? room2 : room;
                            if (Mod.vip.index + 1 <= _room.length) {
                                setTimeout(() => {
                                    Mod.vip.check = true;
                                }, Mod.val.vip101);
                                getr(offset, _room[Mod.vip.index][0], _room[Mod.vip.index][1], _room[Mod.vip.index][2], Mod.val.vip100);
                                Mod.vip.index++;
                            } else {
                                // console.log('完成');
                                Mod.vip.start = false;
                                Mod.vip.index = 0;
                                setTimeout(() => {
                                    Mod.vip.quit = true;
                                }, 1500);
                                setTimeout(() => {
                                    Mod.vip.check = true;
                                }, 3000);
                            }
                        }

                        // 分解宝石 符文 装备
                        if (Mod.vip.BreakDown) {
                            Mod.vip.BreakDown = false;
                            let items = lib.class('Data.ItemHelper').method('GetAllBagItemInfo').invoke();
                            if (items && items.method('get_Count').invoke() > 0) {
                                let SystemInt32 = Il2Cpp.Image.corlib.class('System.UInt32')
                                let GenericList = Il2Cpp.Image.corlib.class('System.Collections.Generic.List`1')
                                let SystemInt32List = GenericList.inflate(SystemInt32);
                                let ids = SystemInt32List.new();

                                for (let i = 0; i < items.method('get_Count').invoke(); i++) {
                                    let r = items.method('get_Item').invoke(parseInt(i));
                                    let type = r.field('type').value;
                                    let key = r.field('itemKey').value;
                                    if (type != 101 && r.field('IsProtected').value != true) {
                                        ids.method('Add').invoke(key);
                                    }
                                }

                                if (ids.method('get_Count').invoke() > 0) {
                                    lib.class('Proto.MptItemBreakDown').method('Send').invoke(ids);
                                }
                            }

                            let gem = false;
                            Il2Cpp.GC.choose(lib.class('Data.GemData')).forEach((instance) => {
                                // console.log(instance.method('ToString').invoke());
                                gem = instance;
                            });
                            let gemlist = gem.method('get_GemInfoList').invoke();
                            // console.log(gemlist.method('get_Count').invoke());
                            if (gemlist && gemlist.method('get_Count').invoke() > 0) {
                                let SystemInt32 = Il2Cpp.Image.corlib.class('System.UInt32')
                                let GenericList = Il2Cpp.Image.corlib.class('System.Collections.Generic.List`1')
                                let SystemInt32List = GenericList.inflate(SystemInt32);
                                let ids = SystemInt32List.new();

                                for (let i = 0; i < gemlist.method('get_Count').invoke(); i++) {
                                    let e = gemlist.method('get_Item').invoke(parseInt(i));
                                    let cfg = e.method('get_itemCfg').invoke();
                                    let quality = cfg.field('_quality').value;
                                    if (quality < 5 && e.method('get_isEquip').invoke() == false && e.field('isLock').value == false) {
                                        ids.method('Add').invoke(e.field('key').value);
                                    }
                                }

                                // console.log('宝石分解：'+ids.field('_items').value);
                                lib.class('Proto.MptGemSend').method('SendGemBreakDown').invoke(ids);
                            }


                            let runelist = lib.class('Data.NRuneHelper').method('GetBagRuneCoreList').invoke(true, 0, 0, 0)
                            // console.log(runelist.method('get_Count').invoke());
                            if (runelist && runelist.method('get_Count').invoke() > 0) {
                                let SystemInt32 = Il2Cpp.Image.corlib.class('System.UInt32')
                                let GenericList = Il2Cpp.Image.corlib.class('System.Collections.Generic.List`1')
                                let SystemInt32List = GenericList.inflate(SystemInt32);
                                let ids = SystemInt32List.new();

                                for (let i = 0; i < runelist.method('get_Count').invoke(); i++) {
                                    let e = runelist.method('get_Item').invoke(parseInt(i));
                                    let key = e.field('runekey').value;
                                    if (e.field('isLock').value == false) {
                                        ids.method('Add').invoke(key);
                                    }
                                }

                                // console.log('符文分解：'+ids.field('_items').value);
                                lib.class('Proto.MptNRuneCoreResolve').method('Send').invoke(ids);
                            }
                        }
                    }
                    // 一键完成公会任务
                    if (Mod.val.dev124) {
                        Mod.val.dev124 = false;
                        let ids = [
                            4050,
                            4051,
                            4053,
                            4057,
                            4058,
                            4059,
                            4060,
                            4061,
                            4062,
                            4063,
                            4064
                        ];
                        ids.forEach((e) => {
                            lib.class('Proto.MPtTaskNewUpdate').method('Send').invoke(e, 100000);
                            lib.class('Proto.MPtTaskNewReceive').method('Send').invoke(e, __TASK__[e]);
                        });
                        Message('公会任务已完成');
                    }
                    // 一键完成悬赏
                    if (Mod.val.dev130) {
                        Mod.val.dev130 = false;
                        let ids = [
                            10001,
                            10002,
                            10003,
                            10004,
                            10005,
                            10006,
                            10601,
                            10602,
                            10603,
                            10604,
                            10606,
                            10607,
                            10610,
                            10611,
                            10613,
                            10614,
                            10615,
                            10616,
                            10617,
                            11005,
                            11006,
                            11007,
                            11008,
                            11017,
                            11019,
                            11023
                        ];
                        ids.forEach((e) => {
                            lib.class('Proto.MPtTaskNewUpdate').method('Send').invoke(e, 100000);
                            lib.class('Proto.MPtTaskNewReceive').method('Send').invoke(e, __TASK__[e]);
                        });
                        Message('悬赏已完成');
                    }
                    // 扫荡藏宝地宫
                    if (Mod.flag.quickDungeon && Mod.val.innersLevel > 0) {
                        Mod.flag.quickDungeon = false;
                        Mod.flag.hiddenLoading = true;
                        if (Mod.val.id_111 == true) Mod.val.id_111 = false; let needsetid111 = true;
                        lib.class("Proto.MPtLocalDungeonStart").method("Send").invoke(0, 23, 1e3 + Mod.val.innersLevel, 0, 0);
                        for (let t = 2; t <= 41; t++) lib.class("Proto.MptTreauseBoxKeyDrop").method("Send").invoke(t);
                        lib.class("Proto.MptTreauseBossDrop").method("Send").invoke();
                        if (Mod.area == 'CN') {
                            for (let t = 1; t <= 36; t++) lib.class("Proto.MptTreasureNewBoxOpen").method("Send").invoke();
                        } else {
                            for (let t = 1; t <= 36; t++) lib.class("Proto.MptTreauseBoxOpen").method("Send").invoke(t, 0, 0);
                        }
                        let Buffer = lib.class("Proto.MProtocolManager").field("SendByteBuffer").value;
                        for (let t = 0; t <= 200; t++) lib.class("Proto.MPtNewBagPick").method("Send").invoke(Buffer, t, 1);
                        lib.class("Proto.MPtDungeonLeave").method("Send").invoke();
                        if (needsetid111) Mod.val.id_111 = true;
                        Message('扫荡执行完成');
                    }
                    // 扫荡暗金矿洞
                    if (Mod.flag.quickDungeon2 && Mod.val.innersLevel > 0) {
                        Mod.flag.quickDungeon2 = false;
                        Mod.flag.hiddenLoading = true;
                        lib.class("Proto.MPtLocalDungeonStart").method("Send").invoke(28, 28, 1e3 + Mod.val.innersLevel, 0, 0);
                        lib.class("Proto.MptCrytralSettle").method("Send").invoke(1e4);
                        lib.class("Proto.MPtDungeonLeave").method("Send").invoke();
                        Message('扫荡执行完成');
                    }
                    if (Mod.flag.task) {
                        Mod.flag.task = false;
                        lib.class('Proto.MPtTaskNewUpdate').method('Send').invoke(Mod.val.dev114, Mod.val.dev115);
                        lib.class('Proto.MPtTaskNewReceive').method('Send').invoke(Mod.val.dev114, __TASK__[Mod.val.dev114]);
                        console.log('task ok id:' + Mod.val.dev114 + 'num:' + Mod.val.dev115);
                    }
                    if (Mod.flag.task2) {
                        Mod.flag.task2 = false;
                        lib.class('Proto.MPtTaskNewUpdate').method('Send').invoke(Mod.val.dev114, Mod.val.dev115);
                        console.log('task2 ok id:' + Mod.val.dev114 + 'num:' + Mod.val.dev115);
                    }
                    if (Mod.val.dev118) {
                        Mod.val.dev118 = false;
                        let dev118 = data.dev118;
                        if (dev118 != 0 && Date.now() / 1000 <= dev118.end) {
                            dev118.id.forEach((e) => {
                                lib.class('Proto.MPtTaskNewUpdate').method('Send').invoke(e - 114514, 10000);
                                lib.class('Proto.MPtTaskNewReceive').method('Send').invoke(e - 114514, __TASK__[e - 114514]);
                            });
                        } else {
                            Message('你来晚了~~~');
                        }
                    }
                    if (this.method('get_isMyHero').invoke()) {
                        // 获取BattleHero
                        if (!Mod.classes.BattleHero) {
                            Mod.classes.BattleHero = this.field('mainHero').value;
                        }
                        // 恢复变身
                        if (Mod.flag.recover) {
                            Mod.flag.recover = false;
                            try {
                                if (Mod.classes.Transfiguration) {
                                    Mod.classes.Transfiguration.method('Recover').invoke();
                                    Mod.classes.Transfiguration = false;
                                }
                            } catch (error) {
                            }
                        }
                        // 魂卡扫荡
                        if (Mod.flag.autocard) {
                            Mod.flag.autocard = false;
                            if (Mod.val.autocardtime == 0 || (Date.now() / 1000) - Mod.val.autocardtime >= 3) {
                                lib.class('Proto.MPtLocalDungeonStart').method("Send").invoke(9, 15, Mod.val.cardlevel, 0, 0);
                                lib.class("Proto.MPtTreasure").method("Send").invoke(1, lib.class('Dungeon.DungeonHelper').field('offset').value),
                                    lib.class("Proto.MPtDungeonLeave").method("Send").invoke();
                                Mod.val.autocardtime = Date.now() / 1000;
                                Message('扫荡成功');
                            } else {
                                Message('扫荡需间隔3秒');
                            }
                        }
                        // 祭坛Buff
                        if (Mod.val.flag_addbuff) {
                            Mod.val.flag_addbuff = false;
                            this.method("AddGloableBuff").invoke(Mod.val.buffId);
                        }
                        if (Mod.val.flag_addbuff2) {
                            Mod.val.flag_addbuff2 = false;
                            this.method("AddGloableBuff").invoke(Mod.val.buffId2);
                        }
                        // 无敌Buff
                        if (Mod.val.id_102 && (Mod.val.id_102_time == 0 || (Date.now() / 1000) - Mod.val.id_102_time >= 3)) {
                            Mod.val.id_102_time = Date.now() / 1000;
                            this.method("AddGloableBuff").invoke(211);
                        }
                        // 无限回血
                        if (Mod.val.id_103 && (Mod.val.id_103_time == 0 || (Date.now() / 1000) - Mod.val.id_103_time >= 1)) {
                            Mod.val.id_103_time = Date.now() / 1000;
                            this.method("AddGloableBuff").invoke(1213051);
                            setTimeout(_ => {
                                this.method("RemoveBuff").overload("System.Int32").invoke(1213051);
                            }, 100);
                        }
                        // 强袭
                        if (Mod.val.id_112 && (Mod.val.id_112_time == 0 || (Date.now() / 1000) - Mod.val.id_112_time >= 3)) {
                            Mod.val.id_112_time = Date.now() / 1000;
                            this.method("RemoveBuff").overload("System.Int32").invoke(100016);
                            this.method("AddGloableBuff").invoke(100016);
                        }
                        // 秘境祝福
                        if (Mod.val.id_104 && (Mod.val.id_104_time == 0 || (Date.now() / 1000) - Mod.val.id_104_time >= 3)) {
                            Mod.val.id_104_time = Date.now() / 1000;
                            this.method("AddGloableBuff").invoke(313);
                        }
                        // 100%移速
                        if (Mod.val.id_105 && (Mod.val.id_105_time == 0 || (Date.now() / 1000) - Mod.val.id_105_time >= 3)) {
                            Mod.val.id_105_time = Date.now() / 1000;
                            this.method("AddGloableBuff").invoke(2001114);
                        }
                        // 100%冷却
                        if (Mod.val.flag_id_101 && Mod.val.id_101) {
                            Mod.val.flag_id_101 = false;
                            for (let n = 0; n < 10; n++) this.method("RemoveBuff").overload("System.Int32").invoke(1440004);
                            for (let n = 0; n < 10; n++) this.method("AddGloableBuff").invoke(1440004);
                        }
                        // 清空Buff
                        if (Mod.val.id_203) {
                            Mod.val.id_203 = false;
                            this.method("ClearAllBuff").invoke();
                        }
                        //修改时装
                        if (Mod.val.flag_id_401 == true) {
                            Mod.val.flag_id_401 = false;
                            let SystemInt32 = Il2Cpp.Image.corlib.class('System.Int32')
                            let GenericList = Il2Cpp.Image.corlib.class('System.Collections.Generic.List`1')
                            let SystemInt32List = GenericList.inflate(SystemInt32);
                            let Costumes = SystemInt32List.new();
                            // let ids = [26067, 26068, 26069, 26070, 26072, 26073, 26066];
                            let ids = JSON.parse('['+Mod.val.costumeids+']');
                            for (let i in ids) {
                                if(ids[i]!='')Costumes.method('Add').invoke(ids[i]);
                            }
                            this.method('UpdateCostume').invoke(Costumes);
                        }
                        if (Mod.val.flag_id_503) {
                            Mod.val.flag_id_503 = false;
                            this.method("UpdateWeapon").invoke(Mod.val.weaponId, 5, 60, 0)
                        }

                        if (Mod.val.dev103) {
                            Il2Cpp.GC.choose(lib.class('MConfig.conf_transform')).forEach((instance) => {
                                if (instance.field('_id').value == 1) {
                                    let aaa = instance.field('_attr_list').value;
                                    for (let i = 0; i < aaa.method('get_Count').invoke(); i++) {
                                        var attrid = aaa.method('get_Item').invoke(parseInt(i)).field('_id').value;
                                        var attrvalue = aaa.method('get_Item').invoke(parseInt(i)).field('_value').value;
                                        if (attrid == 7) aaa.method('get_Item').invoke(parseInt(i)).field('_value').value = 1200;
                                    }
                                    let _passive_skill = instance.field('_passive_skill').value;
                                    _passive_skill.method('Add').invoke(141380);
                                    _passive_skill.method('Add').invoke(141381);
                                    _passive_skill.method('Add').invoke(141382);

                                    _passive_skill.method('Add').invoke(141360);
                                    _passive_skill.method('Add').invoke(141361);
                                    _passive_skill.method('Add').invoke(141362);

                                    _passive_skill.method('Add').invoke(45310);
                                    _passive_skill.method('Add').invoke(45315);




                                    let caa = lib.class('MConfig.conf_unit_attr').new();
                                    caa.field('_id').value = 123;
                                    caa.field('_value').value = 1;
                                    aaa.method('Add').invoke(caa);
                                    let cab = lib.class('MConfig.conf_unit_attr').new();
                                    cab.field('_id').value = 124;
                                    cab.field('_value').value = 1;
                                    aaa.method('Add').invoke(cab);
                                    let spd = lib.class('MConfig.conf_unit_attr').new();
                                    spd.field('_id').value = 5;
                                    spd.field('_value').value = 100;
                                    aaa.method('Add').invoke(spd);
                                    Mod.val.dev1032 = true;
                                    Message('修改成功');
                                }
                            });
                            Mod.val.dev103 = false;
                        }
                    }
                }

                lib.class("Battle.BattleObjectCore").method('ClearAllBuff').implementation = function () {
                    this.method('ClearAllBuff').invoke();
                    if (Mod.val.id_101) Mod.val.flag_id_101 = true;
                }

                // 自动拾取
                lib.class("Proto.MPtTreasure").method("Send").implementation = function (star, pos) {
                    let _star = star;
                    // console.log(star);
                    if (Mod.val.dev109 > 0) star = Mod.val.dev109;
                    if (Mod.val.dev125) star = 1;
                    if ((_star == 31 && Mod.val.dev110 && Mod.val.dev109 != 31) || Mod.val.dev125) this.method('Send').invoke(31, pos);
                    this.method('Send').invoke(star, pos);

                    if (Mod.val.id_111) {
                        let Buffer = lib.class("Proto.MProtocolManager").field("SendByteBuffer").value;
                        for (let t = 0; t <= Mod.val.id_111a; t++) lib.class("Proto.MPtNewBagPick").method("Send").invoke(Buffer, t, 1);
                    }
                }

                if (Mod.area == 'CN') {
                    lib.class("Proto.MptTreasureNewBoxOpen").method("Send").implementation = function () {
                        this.method('Send').invoke();

                        if (Mod.val.id_111) {
                            let Buffer = lib.class("Proto.MProtocolManager").field("SendByteBuffer").value;
                            for (let t = 0; t <= 200; t++) lib.class("Proto.MPtNewBagPick").method("Send").invoke(Buffer, t, 1);
                        }
                    }
                } else {
                    lib.class("Proto.MptTreauseBoxOpen").method("Send").implementation = function (treasureid, x, y) {
                        this.method('Send').invoke(treasureid, x, y);

                        if (Mod.val.id_111) {
                            let Buffer = lib.class("Proto.MProtocolManager").field("SendByteBuffer").value;
                            for (let t = 0; t <= 200; t++) lib.class("Proto.MPtNewBagPick").method("Send").invoke(Buffer, t, 1);
                        }
                    }
                }

                // 对怪物倍攻
                lib.class("Battle.LMonsterHitProcess").method('ProcessDamage').implementation = function (damageSettle) {
                    if (Mod.val.id_301) {
                        damageSettle.field('value').value = damageSettle.field('value').value * Mod.val.id_302;
                    }
                    if (Mod.val.id_303) {
                        damageSettle.field('shield').value = damageSettle.field('shield').value * Mod.val.id_304;
                    }
                    this.method('ProcessDamage').invoke(damageSettle);
                }

                // 免广告
                /* try {
                    let _json;
                    lib.class("Polymerize.PolymerizeAd").method("ShowRewardAd").implementation = function (data, type) {
                        this.method("OnReward").invoke(_json);
                    };
                    lib.class("GearEngine.Platform.PolymerizeSDkInterface").method("Update").implementation = function () {
                        if (!_json) {
                            _json = this.field("_switchAccountInfo").value;
                        }
                        this.method("Update").invoke();
                    };
                } catch (e) {   
                    console.log('免广告错误');
                } */

                // 修改技能
                lib.class('Battle.BattleManager').method('Update').implementation = function () {
                    this.method('Update').invoke();
                    if (Mod.val.flag_id_604) {
                        Mod.val.flag_id_604 = false;
                        Mod.val.modify.skill[Mod.val.skillIndex - 1] = Mod.val.skillId;
                        this.method('UpdateRoleSkill').overload("System.UInt64", "System.Int32", "System.Int32", "System.Int32", "System.Int32").invoke(this.field('myheroKey').value, Mod.val.skillIndex - 1, Mod.val.skillId, 5, 60);
                    }

                    if (Mod.flag.killMonster) {
                        Mod.flag.killMonster = false;
                        this.method('KillAllMonster').invoke();
                    }

                    if (Mod.val.dev104) {
                        let pos = lib.class('Dungeon.DungeonHelper').field('offset').value;
                        pos.field('x').value = -8;
                        pos.field('y').value = 106;
                        pos.field('z').value = 0;
                        this.method('ResetHeroPosition').invoke(pos);
                        Mod.val.dev104 = false;
                    }
                    if (Mod.val.dev105) {
                        let pos = lib.class('Dungeon.DungeonHelper').field('offset').value;
                        pos.field('x').value = 20;
                        pos.field('y').value = 138;
                        pos.field('z').value = 0;
                        this.method('ResetHeroPosition').invoke(pos);
                        Mod.val.dev105 = false;
                    }
                    if (Mod.val.dev106) {
                        let pos = lib.class('Dungeon.DungeonHelper').field('offset').value;
                        pos.field('x').value = 23;
                        pos.field('y').value = 139;
                        pos.field('z').value = 0;
                        this.method('ResetHeroPosition').invoke(pos);
                        Mod.val.dev106 = false;
                    }
                    if (Mod.val.dev107) {
                        let pos = lib.class('Dungeon.DungeonHelper').field('offset').value;
                        pos.field('x').value = 5;
                        pos.field('y').value = 65;
                        pos.field('z').value = 0;
                        this.method('ResetHeroPosition').invoke(pos);
                        Mod.val.dev107 = false;
                    }
                    if (Mod.val.dev108) {
                        let pos = lib.class('Dungeon.DungeonHelper').field('offset').value;
                        pos.field('x').value = -10;
                        pos.field('y').value = 80;
                        pos.field('z').value = 0;
                        this.method('ResetHeroPosition').invoke(pos);
                        Mod.val.dev108 = false;
                    }
                    if (Mod.val.dev131) {
                        let pos = lib.class('Dungeon.DungeonHelper').field('offset').value;
                        pos.field('x').value = -12;
                        pos.field('y').value = 33;
                        pos.field('z').value = 0;
                        this.method('ResetHeroPosition').invoke(pos);
                        Mod.val.dev131 = false;
                    }
                    if (Mod.val.dev132) {
                        let pos = lib.class('Dungeon.DungeonHelper').field('offset').value;
                        pos.field('x').value = -5;
                        pos.field('y').value = 58;
                        pos.field('z').value = 0;
                        this.method('ResetHeroPosition').invoke(pos);
                        Mod.val.dev132 = false;
                    }
                }

                lib.class('Battle.BattleManager').method('UpdateRoleSkill').overload("System.UInt64", "System.Int32", "System.Int32", "System.Int32", "System.Int32").implementation = function (playerKey, index, skillID, starLv, skillLv) {
                    this.method('UpdateRoleSkill').overload("System.UInt64", "System.Int32", "System.Int32", "System.Int32", "System.Int32").invoke(playerKey, index, skillID, starLv, skillLv);
                    if (index == 9) {
                        Object.keys(Mod.val.modify.skill).forEach((key) => {
                            this.method('UpdateRoleSkill').overload("System.UInt64", "System.Int32", "System.Int32", "System.Int32", "System.Int32").invoke(playerKey, parseInt(key), Mod.val.modify.skill[key], 5, 60);
                        });
                    }
                }

                //查看技能ID
                lib.class('UI.SkillUiUtilities').method('GetSkillItemOp').implementation = function (data) {
                    if (Mod.val.id_601) console.log('技能ID:' + data.field('SkillId').value);
                    return this.method('GetSkillItemOp').invoke(data);
                }

                //查看武器ID
                lib.class('Data.ItemHelper').method('GetWeaponAttr').implementation = function (weapon) {
                    if (Mod.val.id_501) console.log('武器ID:' + weapon.field('itemId').value);
                    return this.method('GetWeaponAttr').invoke(weapon);
                }

                //修改武器
                lib.class("Battle.HeroGroup").method("UpdateWeapon").implementation = function (weaponId, starlv, lv, awakeLv) {
                    if (Mod.val.id_503) {
                        return this.method("UpdateWeapon").invoke(Mod.val.weaponId, 5, 60, 0)
                    }
                    return this.method("UpdateWeapon").invoke(weaponId, starlv, lv, awakeLv)
                }

                try {
                    lib.class("Battle.BattleLog").method("UpLoad").implementation = function () {
                        // console.log('阻止Battlelog上传');
                    }
                } catch (error) { }

                try {
                    lib.class("Proto.MptDungeonLog").method("SendPlatform").implementation = function () {
                        // console.log('阻止Dungeonlog上传1');
                    }
                } catch (error) { }
                try {
                    lib.class("Proto.MptDungeonLog").method("SendSever").implementation = function () {
                        // console.log('阻止Dungeonlog上传2');
                    }
                } catch (error) { }

                try {
                    lib.class("Proto.MPtPostNetSecData").method("Send").implementation = function () {
                        // console.log('阻止SecData上传');
                    }
                } catch (error) { }

                // 大秘境变身
                lib.class('Dungeon.BigInnersDungeonProcess').method('OnEnteredDungeon').implementation = function () {
                    if (Mod.val.dev102) this.method("Transfiguration").invoke(1);
                    this.method("OnEnteredDungeon").invoke();
                };

                // 小秘境变身
                lib.class('Dungeon.NewInnersDungeonProcess').method('OnEnteredDungeon').implementation = function () {
                    if (Mod.val.dev102) this.method("Transfiguration").invoke(1);
                    this.method("OnEnteredDungeon").invoke();
                    if (Mod.val.dev101) this.method('JumpToBossRoom').invoke();
                    // 资源房跳2体力房
                    if (Mod.val.dev120) this.method('JumpToRoom').invoke(52);
                };

                // 单人团本(星界)变身
                lib.class('Dungeon.SingleTeamDungeonProcess').method('OnEnteredDungeon').implementation = function () {
                    if (Mod.val.dev102) {
                        Mod.classes.Transfiguration = lib.class('Transfiguration').new();
                        Mod.classes.Transfiguration.method('Trans').invoke(Mod.classes.BattleHero, 1, true, NULL);
                        Mod.flag.needRefresh = true;
                    }
                    this.method('OnEnteredDungeon').invoke();
                };
                // 单人团本(星界)恢复变身
                lib.class('Dungeon.SingleTeamDungeonProcess').method('LeaveDungeon').implementation = function () {
                    if (Mod.classes.Transfiguration) Mod.flag.recover = true;
                    this.method('LeaveDungeon').invoke();
                }

                lib.class('Battle.HeroGroup').method('SwitchHero').overload('Battle.BattleHero').implementation = function (hero) {
                    this.method('SwitchHero').overload('Battle.BattleHero').invoke(hero);
                    Mod.classes.BattleHero = false;
                }

                // 更新武器图标
                lib.class('UI.GamePlayInput').method('InputUpdate').implementation = function () {
                    this.method('InputUpdate').invoke();
                    if (Mod.flag.needRefresh) {
                        Mod.flag.needRefresh = false;
                        try {
                            this.method('RefreshWeapons').invoke(true);
                        } catch (error) {
                        }
                    }
                }

                lib.class("MonsterAiController").method("Shoot").implementation = function () {
                    if (Mod.val.dev111) Mod.flag.killMonster = true;
                    this.method('Shoot').invoke();
                }

                // 自动分解
                lib.class('Dungeon.NewInnersDungeonProcess').method('LeaveDungeon').implementation = function () {
                    this.method('LeaveDungeon').invoke();
                    if (Mod.val.dev119) {
                        let items = lib.class('Data.ItemHelper').method('GetAllBagItemInfo').invoke();
                        if (items && items.method('get_Count').invoke() > 0) {
                            let SystemInt32 = Il2Cpp.Image.corlib.class('System.UInt32')
                            let GenericList = Il2Cpp.Image.corlib.class('System.Collections.Generic.List`1')
                            let SystemInt32List = GenericList.inflate(SystemInt32);
                            let ids = SystemInt32List.new();

                            for (let i = 0; i < items.method('get_Count').invoke(); i++) {
                                let r = items.method('get_Item').invoke(parseInt(i));
                                let type = r.field('type').value;
                                let key = r.field('itemKey').value;
                                if (type != 101 && r.field('IsProtected').value != true) {
                                    ids.method('Add').invoke(key);
                                }
                            }

                            if (ids.method('get_Count').invoke() > 0) {
                                lib.class('Proto.MptItemBreakDown').method('Send').invoke(ids);
                            }

                            let gem = false;
                            Il2Cpp.GC.choose(lib.class('Data.GemData')).forEach((instance) => {
                                // console.log(instance.method('ToString').invoke());
                                gem = instance;
                            });
                            let gemlist = gem.method('get_GemInfoList').invoke();
                            // console.log(gemlist.method('get_Count').invoke());
                            if (gemlist && gemlist.method('get_Count').invoke() > 0) {
                                let SystemInt32 = Il2Cpp.Image.corlib.class('System.UInt32')
                                let GenericList = Il2Cpp.Image.corlib.class('System.Collections.Generic.List`1')
                                let SystemInt32List = GenericList.inflate(SystemInt32);
                                let ids = SystemInt32List.new();

                                for (let i = 0; i < gemlist.method('get_Count').invoke(); i++) {
                                    let e = gemlist.method('get_Item').invoke(parseInt(i));
                                    let cfg = e.method('get_itemCfg').invoke();
                                    let quality = cfg.field('_quality').value;
                                    if (quality < 5 && e.method('get_isEquip').invoke() == false) {
                                        ids.method('Add').invoke(e.field('key').value);
                                    }
                                }

                                // console.log('宝石分解：'+ids.field('_items').value);
                                lib.class('Proto.MptGemSend').method('SendGemBreakDown').invoke(ids);
                            }


                            let runelist = lib.class('Data.NRuneHelper').method('GetBagRuneCoreList').invoke(true, 0, 0, 0)
                            // console.log(runelist.method('get_Count').invoke());
                            if (runelist && runelist.method('get_Count').invoke() > 0) {
                                let SystemInt32 = Il2Cpp.Image.corlib.class('System.UInt32')
                                let GenericList = Il2Cpp.Image.corlib.class('System.Collections.Generic.List`1')
                                let SystemInt32List = GenericList.inflate(SystemInt32);
                                let ids = SystemInt32List.new();

                                for (let i = 0; i < runelist.method('get_Count').invoke(); i++) {
                                    let e = runelist.method('get_Item').invoke(parseInt(i));
                                    let key = e.field('runekey').value;
                                    ids.method('Add').invoke(key);
                                }

                                // console.log('符文分解：'+ids.field('_items').value);
                                lib.class('Proto.MptNRuneCoreResolve').method('Send').invoke(ids);
                            }
                        }
                    }
                }

                // 锁通关时间
                lib.class('Proto.MPtRankDungeonStar').method('Send').implementation = function (level, dungeonId, starsCount, time) {
                    if (Mod.val.dev112 && Mod.val.finishTime > 0) time = Mod.val.finishTime;
                    this.method('Send').invoke(level, dungeonId, starsCount, time);
                }
                lib.class('Proto.MPtInnersTimeSend').method('Send').implementation = function (level, time) {
                    if (Mod.val.dev112 && Mod.val.finishTime > 0) time = Mod.val.finishTime;
                    this.method('Send').invoke(level, time);
                }
                lib.class('Proto.MptNewInnersFinish').method('Send').implementation = function (level, time) {
                    if (Mod.val.dev112 && Mod.val.finishTime > 0) time = Mod.val.finishTime;
                    this.method('Send').invoke(level, time);
                }
                lib.class('Proto.MPtBDIFinish').method('Send').implementation = function (layerId, time, stars) {
                    if (Mod.val.dev112 && Mod.val.finishTime > 0) time = Mod.val.finishTime;
                    this.method('Send').invoke(layerId, time, stars);
                }
                lib.class('Proto.MPtBDILoopFinish').method('Send').implementation = function (layerId, time, stars) {
                    if (Mod.val.dev112 && Mod.val.finishTime > 0) time = Mod.val.finishTime;
                    this.method('Send').invoke(layerId, time, stars);
                }
                lib.class('Proto.MPtBDIElementFinish').method('Send').implementation = function (layerId, time, stars) {
                    if (Mod.val.dev112 && Mod.val.finishTime > 0) time = Mod.val.finishTime;
                    this.method('Send').invoke(layerId, time, stars);
                }
                lib.class('Proto.MptStoreDungeonCommit').method('Send').implementation = function (star, time) {
                    if (Mod.val.dev112 && Mod.val.finishTime > 0) time = Mod.val.finishTime;
                    this.method('Send').invoke(star, time);
                }
                lib.class('Proto.MPtDungeonEnd').method('Send').implementation = function (type, level, keyid, dungeonid, time, success, star) {
                    if (Mod.val.dev112 && Mod.val.finishTime > 0) time = Mod.val.finishTime;
                    this.method('Send').invoke(type, level, keyid, dungeonid, time, success, star);
                }
            });
        } catch (error) {
            console.log(error)
        }
}
