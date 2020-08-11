
/*
    useEffect 接收两个参数，没有返回值。

    第一个参数为 effect 函数，该函数将在 componentDidMmount 时触发和 componentDidUpdate 时有条件触发（该添加为 useEffect 的第二个数组参数）。
    同时该 effect 函数可以返回一个函数（returnFunction），returnFunction 将会在 componentWillUnmount 时触发和在 componentDidUpdate 时先于 effect 有条件触发（先执行 returnFuncton 再执行 effect，比如需要做定时器的清除）。

    注意： 与 componentDidMount 和 componentDidUpdate 不同之处是，effect 函数触发时间为在浏览器完成渲染之后。 如果需要在渲染之前触发，需要使用 useLayoutEffect。
    第二个参数 array 作为有条件触发情况时的条件限制：
        如果不传，则每次 componentDidUpdate 时都会先触发 returnFunction（如果存在），再触发 effect。如果为空数组[]，componentDidUpdate 时不会触发 returnFunction 和 effect。如果只需要在指定变量变更时触发 returnFunction 和 effect，将该变量放入数组。
*/



import React, { useEffect, FC, useState } from 'react'
//  useLayoutEffect > requestAnimationFrame > useEffect

const Effect: FC<{ effectFromCousumer: number }> = ({ effectFromCousumer }) => {
    const [state, setState] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            setState(state + 1)
        }, 1000)
        return () => clearTimeout(timer)
    }, [state])

    return (
        <div>
            <h1>{state}</h1>
        </div>
    )
}

export default Effect