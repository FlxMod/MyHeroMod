import { Mod } from './mod'
import { hook } from './hook'
import { getMenu } from './menu'

export const start = () => {
    Mod.Init('DDDDPro',getMenu,hook,'1.0.0','24060100');
}