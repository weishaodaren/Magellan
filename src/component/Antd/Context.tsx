import { createContext } from "react"

const context = {
    color: "#1890ff",
    backgroundColor: "#000",
    buttonColor: "green",
    display: "block",
}
type ContextType = Partial<typeof context>
type ContextTypeInterface = {
    state?: ContextType
    dispatch?: React.Dispatch<ReducerWithContextAction>
}

//  useRucer
type ReducerWithContextState = {
    color: string
}
type ReducerWithContextAction = {
    type: string
    payload: string
}
type ReducerWithContextType = (
    state: ReducerWithContextState,
    action: ReducerWithContextAction
) => ReducerWithContextState

const UPDATE_COLOR = "UPDATE_COLOR"
export const StyleContext = createContext<ContextTypeInterface>({
    state: { color: "#000" },
})

export const ReducerWithContext: ReducerWithContextType = (state, action) => {
    switch (action.type) {
        case UPDATE_COLOR:
            return { color: action.payload }
        default:
            return state
    }
}
