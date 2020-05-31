import { createStore } from "redux"

// const reducer = (state = { count: 0 }, action: { type: string }) => {
//     switch (action.type) {
//         case "INCREASE":
//             return { count: state.count + 1 }
//         case "DECREASE":
//             return { count: state.count - 1 }
//         default:
//             return state
//     }
// }
import reducer from "./reducer"
export const store = createStore(reducer)

// export const actions = {
//     increase: () => ({ type: "INCREASE" }),
//     decrease: () => ({ type: "DECREASE" }),
// }
store.subscribe(() => {
    console.log(store.getState())
})
