import React from "react"

type PropsEqual = { params: 10 }

function areEqual(preProps: PropsEqual, nextProps: PropsEqual): boolean {
    if (preProps.params === nextProps.params) return true
    else return false
}
export default React.memo(function MemoFunc(props: PropsEqual): JSX.Element {
    const { params } = props
    return (
        <div>
            <h1>This is MemoFunc {params}</h1>
            <button onClick={() => console.log(params.toString() + "xixi")}>
                2String
            </button>
            <Child {...props} />
        </div>
    )
}, areEqual)

const Child: React.FC<PropsEqual> = (props): JSX.Element => {
    const [state, setState] = React.useState<number>(props.params)
    console.log(state)
    return (
        <div>
            <h2>{state}</h2>
            <button onClick={() => setState(state + 1)}>+</button>
        </div>
    )
}
