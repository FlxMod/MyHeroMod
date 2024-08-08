import { Mod } from './mod'
import { hook } from './hook'
import { getMenu } from './menu'

export const start = () => {
    Mod.var.test = '666';
    Mod.var._秘境开始层数 = 1;
    Mod.var._秘境结束层数 = 100;
    Mod.var._秘境当前层数 = 1;
    Mod.var._一键秘境定时器 = false;
    Mod.var._盲盒ID = 1;
    Mod.var._盲盒定时器 = false;
    Mod.var._盲盒延迟 = 1000;
    Mod.Init('DDDDPro',getMenu,hook,'1.0.0','24060100');
    // if(device.isPortrait()){
    //     Mod.menuInstance.size(parseInt(device.getScreenHeight() / 3),device.getScreenWidth())
    // }else{
    //     Mod.menuInstance.size(parseInt(device.getScreenWidth() / 3),device.getScreenHeight())
    // }
}