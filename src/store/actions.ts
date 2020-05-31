import * as types from "./action-types"
export default {
    add_todo(text: string) {
        return { type: types.ADD_TODO, text: text }
    },
    del_todo(idx: number) {
        return { type: types.DEL_TODO, index: idx }
    },
    toggle_todo(index: number) {
        return { type: types.TOGGLE_TODO, index }
    },
    switch_type(newType: string) {
        return { type: types.SWITCH_TYPE, newType }
    },
}
