/*
    createRef 每次渲染都会返回一个新的引用
    useRef 每次都会返回相同的引用。
*/
import React, { createRef, useRef, forwardRef, useImperativeHandle, useCallback } from 'react';

export default function () {
    const inputRef = createRef<HTMLInputElement>()
    // const handleFocus = () => inputRef.current.focus()
    const childRef = useRef<any>(null)

    const thirdRef = useRef();
    const handleClick = useCallback(() => (thirdRef as any).current.focus(), [thirdRef])

    return (
        <>
            <input type="text" ref={inputRef} />
            <div onClick={() => childRef.current.A()}>Click me</div>
            <Child label={'hahahah'} ref={childRef} />
            <FancyButton ref={thirdRef} />
            <button onClick={handleClick}>focus input...</button>
        </>
    )
}


const Child = forwardRef((props: any, ref) => {
    useImperativeHandle(
        ref,
        () => ({
            A: () => {
                console.log(`AAAAA`)
            }
        }),
        [],
    )
    return (<div>this is Child Component----------{props.label}
    </div>)
})

// 转发ref
const FancyButton = forwardRef((props, ref: any) =>
    <input type="text" ref={ref} />
)