import React, { useReducer } from "react"
import { StyleContext, ReducerWithContext } from "./component/Antd/Context"
import { Shopping } from "./component/ShoppingList"
import { Antd } from "./component/Antd"
import { Example } from "./component/Antd/Hooks"

function App({ initalColor = "#1896ff" }) {
    const [state, dispatch] = useReducer(ReducerWithContext, {
        color: initalColor,
    })
    return (
        <StyleContext.Provider value={{ state, dispatch }}>
            <Antd inital={0} />
            <Example />
            <button
                onClick={() =>
                    dispatch &&
                    dispatch({ type: "UPDATE_COLOR", payload: "green" })
                }
            >
                Green
            </button>
            <button
                onClick={() =>
                    dispatch &&
                    dispatch({ type: "UPDATE_COLOR", payload: "pink" })
                }
            >
                Pink
            </button>
            <Shopping />
        </StyleContext.Provider>
    )
}

export default App
