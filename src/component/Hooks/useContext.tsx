/*
    设计目的： context 设计目的是为共享那些被认为对于一个组件树而言是“全局”的数据。
    使用场景： context 通过组件树提供了一个传递数据的方法，从而避免了在每一个层级手动的传递 props 属性。
    注意点： 不要仅仅为了避免在几个层级下的组件传递 props 而使用 context，它是被用于在多个层级的多个组件需要访问相同数据的情景
*/

import React, { useContext, useState } from 'react';
import { Context as ProviderContext } from '../../pages/demo.two'


export const Context = () => {
    const context_ = useContext(ProviderContext)
    const [context, setContext] = useState(context_)

    return (
        <div>
            <h5 style={{ color: context }} onClick={() => setContext('blue')}>this is Context...{context}</h5>
        </div>
    )
}
