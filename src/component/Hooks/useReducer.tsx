/*
    useReducer 接收三个参数，
        第一个参数为一个 reducer 函数，
        第二个参数是reducer的初始值，
        第三个参数为可选参数，值为一个函数，可以用来惰性提供初始状态。这意味着我们可以使用使用一个 init 函数来计算初始状态/值，而不是显式的提供值。如果初始值可能会不一样，这会很方便，最后会用计算的值来代替初始值。
        
        reducer 接受两个参数一个是 state 另一个是 action 
        useReducer 返回一个数组，数组中包含一个 state 和 dispath，state 是返回状态中的值，而 dispatch 是一个可以发布事件来更新 state 的函数。
*/

import React, { FC, useReducer } from 'react';

const init: <T>(initalCount: T) => { count: T } = _ => { return { count: _ } }

const reducer = (state: { count: number }, action: { type: string, payload: number }) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }
        case 'reset':
            return init(action.payload)
        default:
            throw new Error()
    }
}

const Counter: FC<{ initalCount: number }> = ({ initalCount }): JSX.Element => {
    const [state, dispatch] = useReducer(reducer, initalCount, init)
    return (
        <>
            <div>
                <h1>Count: {state.count}</h1>
                <button onClick={() => dispatch({ type: 'increment', payload: 1 })}>+1</button>
                <button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>-1</button>
                <button onClick={() => dispatch({ type: 'reset', payload: initalCount })}>reset</button>
            </div>
        </>
    )
}



export default Counter