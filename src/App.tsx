import React from "react"
import "./App.css"
import { StyleContext } from "./component/Antd/Context"
// import { Shopping } from "./component/ShoppingList"
import { Antd } from "./component/Antd"
import { Example } from "./component/Antd/Hooks"

function App() {
    return (
        <StyleContext.Provider value={{ color: "#1896ff" }}>
            {/* <Antd inital={0} /> */}
            <Example />
            {/* <Shopping /> */}
        </StyleContext.Provider>
    )
}

export default App
