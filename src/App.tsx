import React, { useReducer } from "react"
import { StyleContext, ReducerWithContext } from "./component/Antd/Context"
import { Provider, connect } from "react-redux"
import { Shopping } from "./component/ShoppingList"
import { store } from "./store"

import { Antd } from "./component/Antd"
import { Example } from "./component/Antd/Hooks"
import { Button } from "antd"
import MyRedux from "./component/Antd/TestRedux"
function App({ initalColor = "#1896ff" }) {
    const [state, dispatch] = useReducer(ReducerWithContext, {
        color: initalColor,
    })
    return (
        <Provider store={store}>
            <StyleContext.Provider value={{ state, dispatch }}>
                {/* <Antd inital={0} /> */}
                {/* <Example /> */}
                {/* <Button
                type="primary"
                onClick={() =>
                    dispatch &&
                    dispatch({ type: "UPDATE_COLOR", payload: "green" })
                }
            >
                Green
            </Button>
            <button
                onClick={() =>
                    dispatch &&
                    dispatch({ type: "UPDATE_COLOR", payload: "pink" })
                }
            >
                Pink
            </button> */}
                {/* <Shopping /> */}
            </StyleContext.Provider>
            <MyRedux />
        </Provider>
    )
}

export default App
