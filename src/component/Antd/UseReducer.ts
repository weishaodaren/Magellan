type StateType = { count: number }
type ActionType = { type: "RESET" | "DECREMENT" | "INCREMENT" }
type ReducerFunction = (state: StateType, action: ActionType) => StateType

const initalState = { count: 0 }
export const Reducer: ReducerFunction = (
    state: StateType,
    action: ActionType
) => {
    switch (action.type) {
        case "RESET":
            return initalState
        case "DECREMENT":
            return { count: state.count + 1 }
        case "INCREMENT":
            return { count: state.count - 1 }
        default:
            return state
    }
}
