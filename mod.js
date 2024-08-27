export const Mod = {
    name: '',
    version: '',
    build: '',
    menu: [],
    callbacks: {},
    debug: true,
    var: {
        _秘境开始层数: 1,
        _秘境结束层数: 100,
        _秘境当前层数: 1,
        _一键秘境定时器: false,
        _盲盒ID: 1,
        _盲盒定时器: false,
        _盲盒延迟: 1000,
        _自动杀死怪物: false,
        _开拓ID:1,
        _开拓计数:0,
        _开拓延迟:100,
        _开拓定时器:false,
        _隐藏任务奖励弹窗:false,
    },
    flag:{
        killMonster: false,
    },
    triggerFlag(name){
        if(Mod.flag[name]){
            Mod.flag[name] = false; //为了不重复写这行代码 创建了triggerFlag方法
            return true;
        }
        return false;
    },
    timer:{
        _无敌buff:false
    },
    Init: (name, getMenu, hook, version = '', build = '') => {
        Mod.name = name;
        Mod.getMenu = getMenu;
        Mod.version = version;
        Mod.build = build;
        Mod.startHook = hook;

        Mod.createMenu();
        Mod.startHook(Mod);
    },
    getVar: (name) => {
        if (Mod.var[name]) {
            return Mod.var[name];
        }
        return undefined;
    },
    setVar: (name, value) => {
        if (Mod.var[name]) {
            Mod.var[name] = value;
            return true;
        }
        return false;
    },
    callbackBuild: () => {
        let callbackindex = 1;
        const menu = Mod.getMenu(Mod);
        menu.forEach(e => {
            if (e.type == 'tab') {
                e.item.forEach(e2 => {
                    let tabitemindex = 1;
                    e2.item.forEach(e3 => {
                        if (e3?.callback) {
                            let key = '1_';
                            key += callbackindex+'_'+tabitemindex;
                            Mod.callbacks[key] = e3.callback;
                        }
                        tabitemindex++;
                    })
                    callbackindex++;
                });
            } else {
                if (e?.callback) {
                    let key = callbackindex;
                    Mod.callbacks[key] = e.callback;
                }
                callbackindex++;
            }
        });
    },
    callbackHandle: (val) => {
        // console.log(JSON.stringify(val))
        if (Mod.callbacks[val.id]) Mod.callbacks[val.id](val)
    },
    createMenu: () => {
        if (typeof modmenu != 'undefined') {
            Mod.callbackBuild()
            Mod.menuInstance = modmenu.create(Mod.name, Mod.getMenu(Mod), {
                onchange: Mod.callbackHandle
            });
            Mod.menuInstance.state();
        }
    },
    debugLog(...arg){
        if(Mod.debug){
            console.log(...arg)
        }
    },
    startHook: undefined,
    menuInstance: undefined
}