import React from "react"
import { connect } from "react-redux"
// import { store, actions } from "../../store"
import actions from "../../store/actions"

class MyRedux extends React.Component {
    render() {
        return (
            <div>
                {/* <h1 onClick={() => store.dispatch(actions.increase())}> */}
                <h1 onClick={() => console.log(this.props)}>Hello Redux!</h1>
                {(this.props as any).lists.map(
                    (item: { text: string }, index: number) => {
                        return <li key={index}>{item.text}</li>
                    }
                )}
                <div onClick={() => (this.props as any).del_todo(2)}>ttttt</div>
            </div>
        )
    }
}

export default connect((state) => state, actions)(MyRedux)
