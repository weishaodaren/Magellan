import React from "react"
import "./App.css"

type AppProps = { message: string }

// const App = ({ message }: AppProps) => <div>{message}</div>
// const App: React.FC<{ message: string }> = ({ message }) => <div>{message}</div>
const App: React.FunctionComponent<{ title: string }> = ({
    children,
    title,
}) => {
    return <div title={title}>{title}</div>
}

export default App
