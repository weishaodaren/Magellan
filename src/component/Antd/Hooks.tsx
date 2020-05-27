import React, {
    FC,
    memo,
    useMemo,
    useState,
    useReducer,
    useContext,
} from "react"
import { StyleContext } from "./Context"
import { Reducer } from "./UseReducer"
import { Button } from "antd"

export const Example = () => {
    const { state, dispatch } = useContext(StyleContext)
    // const color = state.state
    const [time, setTime] = useState<number>(0)
    const [random, setRandom] = useState<number>(0)

    const handleClick2Time = () => {
        setTime(new Date().getTime())
    }
    const handleClick2Random = () => {
        setRandom(Math.random() * 100)
    }
    return (
        <div style={{ color: state?.color }}>
            <p>
                time{time}random{random}
                当前字体颜色： {state?.color}
            </p>
            <button
                onClick={() =>
                    dispatch!({ type: "UPDATE_COLOR", payload: "yellow" })
                }
            >
                Yellow
            </button>
            <button
                onClick={() =>
                    dispatch!({ type: "UPDATE_COLOR", payload: "orange" })
                }
            >
                Orange
            </button>
            <Button onClick={handleClick2Time}>点击获取当前时间</Button>
            <Button onClick={handleClick2Random}>点击获取随机数</Button>
            <Show time={time}>{random}</Show>
            <WithCounter initalCount={0} />
        </div>
    )
}

type Data = { time: number }
type ChangeFunction = (time: number) => string

const Show: FC<Data> = memo((props) => {
    const changeTime: ChangeFunction = (time: number): string => {
        console.log(time)
        return new Date(time).toISOString()
    }
    const newTime: string = useMemo(() => {
        return changeTime(props.time)
    }, [props.time])

    return (
        <div>
            <p>Time is :{newTime}</p>
            <p>Random is : {props.children}</p>
        </div>
    )
})

type InitalCount = { initalCount: number }
const WithCounter: FC<InitalCount> = ({ initalCount = 0 }) => {
    const [state, dispatch] = useReducer(Reducer, { count: initalCount })
    return (
        <div>
            <p>Count: {state.count}</p>
            <Button onClick={() => dispatch({ type: "RESET" })}>Reset</Button>
            <Button onClick={() => dispatch({ type: "DECREMENT" })}>
                Decrement
            </Button>
            <Button onClick={() => dispatch({ type: "INCREMENT" })}>
                Increment
            </Button>
        </div>
    )
}
