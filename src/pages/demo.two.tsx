import React, { createContext } from 'react';
// import StateFC from '../component/Hooks/useState'
// import Reducer from '../component/Hooks/useReducer'
// import Effect from '../component/Hooks/useEffect'
// import { Context as ContextSon } from '../component/Hooks/useContext'
import RefFC from '../component/Hooks/useRef'

const { Provider, Consumer } = createContext(99, ((prev, next) => prev + next))
/*
    创建一对{ Provider, Consumer }。
    当 React 渲染 context 组件 Consumer 时，它将从组件树的上层中最接近的匹配的 Provider 读取当前的 context 值。
    Consumer 是 Provider 提供数据的使用者。
    如果上层的组件树没有一个匹配的 Provider，而此时你需要渲染一个 Consumer 组件，那么你可以用到 defaultValue 。这有助于在不封装它们的情况下对组件进行测试
*/
export const Context = createContext('red')

export default function () {
    return (
        <Provider value={89}>
            <>
                {/* <StateFC /> */}
                {/* <Reducer initalCount={0} /> */}

                {/* <Consumer>
                    {el => <Effect effectFromCousumer={el} />}
                </Consumer> */}

                {/* <Context.Provider value={'red'}>
                    <ContextSon />
                </Context.Provider> */}

                <Bar />
                <RefFC />
            </>
        </Provider>
    )
}

const Bar = () => <Consumer>{el => <div>This is Bar component --{el}</div>}</Consumer>
