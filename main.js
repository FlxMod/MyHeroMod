import { Mod } from './mod'
import { hook } from './hook'
import { getMenu } from './menu'

export const start = () => {
    Mod.var.test = '666';
    Mod.var._秘境开始层数 = 1;
    Mod.var._秘境结束层数 = 100;
    Mod.var._秘境当前层数 = 1;
    Mod.var._一键秘境定时器 = false;
    Mod.Init('Rikka',getMenu,hook,'1.0.0','24060100');
    // if(device.isPortrait()){
    //     Mod.menuInstance.size(parseInt(device.getScreenHeight() / 3),device.getScreenWidth())
    // }else{
    //     Mod.menuInstance.size(parseInt(device.getScreenWidth() / 3),device.getScreenHeight())
    // }
}