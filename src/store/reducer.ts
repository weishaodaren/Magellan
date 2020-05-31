import * as types from "./action-types"
const state = {
    lists: [
        { text: "移动端A计划" },
        { text: "移动端B计划" },
        { text: "移动端C计划" },
    ],
    newType: "all",
}
type StateType = typeof state
type ActionType = {
    type: string
    index: number
    [key: string]: string | number | object
}
export default function (
    state = {
        lists: [
            { text: "移动端A计划" },
            { text: "移动端B计划" },
            { text: "移动端C计划" },
        ],
        newType: "all",
    } as any,
    action: ActionType
): StateType {
    switch (action.type) {
        case types.ADD_TODO:
            return {
                ...state,
                lists: [...state.lists, { text: action.text }],
            }
        case types.TOGGLE_TODO:
            return {
                ...state,
                lists: state.lists.map((item: any, index: number) => {
                    if (index === action.index) item.completed = !item.completed
                    return item
                }),
            }
        case types.DEL_TODO:
            console.log(action)
            return {
                ...state,
                lists: [
                    ...state.lists.slice(0, action.index),
                    ...state.lists.slice(action.index + 1),
                ],
            }
        case types.SWITCH_TYPE:
            console.log(...state)
            return {
                ...state,
                newType: action.newType,
            }

        default:
            return state
    }
}
