import React from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}
const About = () => {
    return (
        <div>
            <h1>About</h1>
        </div>
    )
}
const DashBoard = () => {
    return (
        <div>
            <h1>DashBoard</h1>
        </div>
    )
}

const linkList = [
    { name: "Home", path: "/", component: Home },
    { name: "About", path: "/about", component: About },
    { name: "DashBoard", path: "/dashboard", component: DashBoard },
]
export const RouterFC = () => {
    return (
        <Router>
            <div>
                <ul>
                    {linkList.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.path}>{item.name}</Link>
                            </li>
                        )
                    })}
                </ul>
                <hr />
                <Switch>
                    {linkList.map((item, index) => {
                        return (
                            <Route exact key={index} path={item.path}>
                                {item.component}
                            </Route>
                        )
                    })}
                </Switch>
            </div>
        </Router>
    )
}
