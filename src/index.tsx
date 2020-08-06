import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import GlobalStyle from './global.styled'
import { ThemeProvider } from 'styled-components'
import "antd/dist/antd.css"

ReactDOM.render(
    <DndProvider backend={HTML5Backend}>
        {/* <ThemeProvider theme={{main:'red'}}> */}
        <GlobalStyle />
        <App {...{ color: "#126", size: 50 }} />
        {/* </ThemeProvider> */}
    </DndProvider>,
    document.getElementById("root")
)
