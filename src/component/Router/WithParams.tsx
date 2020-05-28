import React from "react"
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    useParams,
} from "react-router-dom"

const LinkList = [
    { path: "/netflix", name: "Netflix" },
    { path: "/zillow-group", name: "Zillow Group" },
    { path: "/yahoo", name: "Yahoo" },
    { path: "/modus-create", name: "Modus Create" },
]
export default function ParamsExample() {
    return (
        <Router>
            <div>
                <h2>Accounts</h2>
            </div>
            <ul>
                {LinkList.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link to={item.path}>{item.name}</Link>
                        </li>
                    )
                })}
            </ul>
            <br />

            <Switch>
                <Route path="/:name" children={<Child />}></Route>
            </Switch>
        </Router>
    )
}

function Child(): JSX.Element {
    const { name } = useParams()
    return (
        <div>
            <h1>id: {name}</h1>
        </div>
    )
}
