import { SWITCH_THEME } from "../actionType";

export function ChangeTheme(val){
    return{type:SWITCH_THEME,payload:val}
}