import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import {
    BrowserRouter as Router,
    Route,
    Switch,
    useParams,
    useLocation,
    useHistory,
    useRouteMatch,
} from "react-router-dom"

const One = () => {
    const H = useHistory()
    const P = useParams()
    const M = useRouteMatch("/:name")
    console.log(M)
    const handleClick2Next = () => {
        H.push("/letter")
        console.log(H)
    }
    const handleClick2Prev = () => {
        H.goBack()
        console.log(H)
    }
    return (
        <div>
            <h1 onClick={handleClick2Next}>Go Two</h1>
            <h1 onClick={handleClick2Prev}>Go Back</h1>
        </div>
    )
}

ReactDOM.render(
    // <React.StrictMode>
    <Router>
        <Switch>
            <Route
                path="/home"
                render={({ match }) => {
                    console.log(match)
                    return <div>Before</div>
                }}
            >
                {/* <App initalColor="#1896ff" /> */}
                {/* <One /> */}
            </Route>
            <Route path="/con">
                <One />
            </Route>
        </Switch>
    </Router>,
    // </React.StrictMode>,
    document.getElementById("root")
)
serviceWorker.unregister()
