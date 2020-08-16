/*
 不能将 hooks 放在循环、条件语句或者嵌套方法内。react 是根据 hooks 出现顺序来记录对应状态的。
 只在 function 组件和自定义 hooks 中使用 hooks。命名规范：
     useState 返回数组的第二项以 set 开头（仅作为约定）。自定义 hooks 以 use 开头（可被 lint 校验）。

  useState：setState
  useReducer：setState，同时 useState 也是该方法的封装
  useRef: refuseImperativeHandle: 给 ref 分配特定的属性
  useContext: context，需配合 createContext 使用
  useMemo: 可以对 setState 的优化
  useCallback: useMemo 的变形，对函数进行优化
  useEffect: 类似 componentDidMount/Update, componentWillUnmount，当效果为 componentDidMount/Update 时，总是在整个更新周期的最后（页面渲染完成后）才执行useLayoutEffect: 用法与 useEffect 相同，区别在于该方法的回调会在数据更新完成后，页面渲染之前进行，该方法会阻碍页面的渲染
  useDebugValue：用于在 React 开发者工具中显示自定义 hook 的标签
  
*/

import React, { useState } from 'react'

export default function () {
    const [count, setCount] = useState<number>(0)
    const [state, setState] = useState<{ [key: string]: string }>(() => { return { a: 'red', b: 'blue' } })

 
    return (
        <>
            Count:{ count}

            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
            {/* <h1>
                {state.a}
                {state.b}
                {state.c}
            </h1> */}
        </>
    )
}