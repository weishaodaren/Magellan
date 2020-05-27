import React from "react"
import { Button } from "antd"

export const Antd: React.FC<{ inital: number }> = ({ inital = 0 }) => {
    const [count, setCount] = React.useState<number>(inital)

    return (
        <div>
            <p>Count: {count}</p>
            <Button
                type="primary"
                shape="round"
                size="large"
                onClick={() => setCount(count + 1)}
            >{`加一`}</Button>
            <Button
                type="dashed"
                shape="circle-outline"
                size="small"
                danger
                onClick={() => setCount(count - 1)}
            >{`减一`}</Button>
            <Article title="magellan's travel" content="..." />
            <User />
            <ClosureConter />
            <TextInput />
        </div>
    )
}

interface ArticleInfo {
    title: string
    content: string
}
const Article: React.FC<ArticleInfo> = ({ title, content }) => {
    const [article, setArticle] = React.useState<ArticleInfo>({
        title,
        content,
    })

    return (
        <div>
            <p>Title: {article.title}</p>
            <section>{article.content}</section>
            <Button
                type="ghost"
                size="middle"
                onClick={() =>
                    setArticle({
                        title: "next title",
                        content: "next content",
                    })
                }
            >
                点击下一篇章的内容
            </Button>
        </div>
    )
}

let switchCount: number = 0
const User: React.FC = () => {
    const [name, setName] = React.useState<string>("")

    React.useEffect(() => {
        switchCount += 1
        const handler = () => {
            document.title = Math.random().toString()
        }
        window.addEventListener("resize", handler)
        return () => {
            window.removeEventListener("resize", handler)
        }
    }, [name])
    return (
        <div>
            <p>Current Name: {name}</p>
            <p>switchCount: {switchCount}</p>
            <Button onClick={() => setName("Jack")}>Jack</Button>
            <Button onClick={() => setName("Rose")}>Rose</Button>
        </div>
    )
}

const ClosureConter: React.FC = () => {
    const [counter, setCounter] = React.useState<number>(0)
    const countRef = React.useRef<number>(counter)

    React.useEffect(() => {
        countRef.current = counter
    }, [counter])
    const handleClick = () => {
        setTimeout(() => {
            alert(`current counter: ${counter}${countRef.current}`)
        }, 300)
    }
    return (
        <div>
            <p>pre count: {countRef.current}</p>
            <p>Current count: {counter}</p>
            <Button onClick={() => setCounter(counter + 1)}>+++</Button>
            <Button onClick={handleClick}>Alert</Button>
        </div>
    )
}
type ChangeName<T> = (name: T) => T

const TextInput = () => {
    const inputRef = React.useRef<HTMLInputElement>(null)
    const handleClick2Focus = () => {
        inputRef.current!.focus()
    }
    const ChangeName: ChangeName<string> = (name) => {
        return name + "返回新name"
    }

    return (
        <div>
            <input type="text" ref={inputRef} />
            <Button onClick={handleClick2Focus}>Focus</Button>
            <h1>{ChangeName("Magellan")}</h1>
        </div>
    )
}
