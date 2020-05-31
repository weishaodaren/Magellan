import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import "antd/dist/antd.css"
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
import { RouterFC } from "./component/Router"
import ParamsExample from "./component/Router/WithParams"
import NestingParams from "./component/Router/NestPrams"
import AuthExample from "./component/Router/AuthRouter"
import MemoFunc from "./component/Antd/Memo"
import PlayWithAntd from "./component/Antd/Play"
// import module from "./module-lib/index.js"
import a from "./A"
// a.call("xixixi")
// 在index.tsx 调用 只用浏览器报错
// globalLib('xxx')
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
                path="/"
                render={({ match }) => {
                    return match.path === "/" && <div>Before</div>
                }}
            >
                <App initalColor="#1896ff" />
                {/* <RouterFC /> */}
                {/* <ParamsExample /> */}
                {/* <NestingParams /> */}
                {/* <AuthExample /> */}
                {/* <MemoFunc params={10} /> */}
                {/* <PlayWithAntd /> */}
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
