import React from "react"
// import fetch from 'js-fetch-get'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    withRouter,
    useHistory,
    useParams,
    useRouteMatch,
    useLocation,
    NavLink,
    RouteComponentProps,
} from "react-router-dom"

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
            <WithRouterFunc />
            <UseROuter />
            <Nav />
        </Router>
    )
}
const WithRouterFunc = withRouter((P) => {
    const handleClick2R = () => {
        console.log(P)
    }
    return (
        <div>
            <h1 onClick={handleClick2R}>What is wrong with you ?</h1>
        </div>
    )
})
const UseROuter = () => {
    const H = useHistory()
    const P = useParams()
    const R = useRouteMatch()
    const L = useLocation()
    const handleCLick2R = () => {
        console.log(H, P, R, L)
    }
    return (
        <div>
            <h2 onClick={handleCLick2R}>Nothing 2 Learn.</h2>
        </div>
    )
}
class Nav extends React.Component<any> {
    handleClick = () => {
        // Route 的 三个对象将会被放进来, 对象里面的方法可以被调用
        console.log(this.props)
    }
    render() {
        return (
            <div>
                <span onClick={this.handleClick}>掘土社区</span>
                <li>
                    <NavLink to="/" exact>
                        首页
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/activities" activeStyle={{ color: "red" }}>
                        动态
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/topic" activeStyle={{ fontSize: "20px" }}>
                        话题
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login">登录</NavLink>
                </li>
            </div>
        )
    }
}
export default withRouter(Nav)
