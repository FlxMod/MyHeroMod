export const Mod = {
    name: '',
    version: '',
    build: '',
    menu: [],
    callbacks: {},
    var: {},
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
                            let key = callbackindex;
                            for (let index = 0; index < tabitemindex; index++) {
                                key += ('_' + (index + 2))
                            }
                            Mod.callbacks[key] = e3.callback;
                        }
                        tabitemindex++;
                    })
                    callbackindex++;
                });
            } else {
                if (e?.callback) {
                    let key = '';
                    if (callbackindex != 1) {
                        for (let index = 0; index < callbackindex; index++) {
                            if (index == 0) {
                                key += (index + 1)
                            } else {
                                key += ('_' + (index + 1))
                            }
                        }
                    } else {
                        key = 1;
                    }
                    Mod.callbacks[key] = e.callback;
                }
                callbackindex++;
            }
        });
    },
    callbackHandle: (val) => {
        console.log(JSON.stringify(val))
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
    startHook: undefined,
    menuInstance: undefined
}