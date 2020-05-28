import React from "react"
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    useParams,
    useRouteMatch,
} from "react-router-dom"

export default function NestingParams(): JSX.Element {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/topics">Topics</Link>
                    </li>
                </ul>
                <br />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/topics">
                        <Topics />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

const Home = (): JSX.Element => {
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}
const Topics = (): JSX.Element => {
    const { path, url } = useRouteMatch()
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${url}/rendering`}>Rendering with React</Link>
                </li>
                <li>
                    <Link to={`${url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>
            <br />

            <Switch>
                <Route exact path={path}>
                    <h3>Please select a topic.</h3>
                </Route>
                <Route
                    exact
                    path={`${path}/:topicId`}
                    children={<Topic />}
                ></Route>
            </Switch>
        </div>
    )
}

const Topic = (): JSX.Element => {
    const { topicId } = useParams()
    return (
        <div>
            <h3>{topicId}</h3>
        </div>
    )
}
