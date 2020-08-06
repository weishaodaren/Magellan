import React from "react"
import styled, { keyframes } from "styled-components"
import { Button, Paragraph, Avatar } from "./component/styled.component"

type Iprops = {
    color: string
    size: number
}

const demoList = [
    { id: 1, name: 'A', age: 20 },
    { id: 2, name: 'B', age: 25 },
    { id: 3, name: 'C', age: 12 },
]

const backColor = 'orange'
const Title = styled.div`
    text-align: center;
    background-color:${backColor || 'yellow'};
    width: 100%;
    height:50px;
    line-height:50px;
    color:#fff;
    font-size:18px;
    font-style:italic;
    font-weight: bolder;
`

const animate = keyframes`
    10%{
        transform: scale(1)
    }
    30%{
        transform: scale(2)
    }
`
const Custom = styled.div`
    width:30%;
    color:${backColor => backColor ? 'green' : 'pink'};
    font-weight: bolder;
    height:50px;
    background-color:${backColor};
    animation: ${animate} 1s linear infinite;
`

const PropsBtn = styled(Button)`
    border: 10px dotted ${props => props.color};
    color: #000;
    width:${(props: Iprops) => props.size * 2}px;
    height:${(props: Iprops) => props.size}px;
`

const App: React.FC<Iprops> = (props): JSX.Element => {
    const [state, setState] = React.useState<string>('none')

    const lorem = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, possimus quo nemo molestiae iste unde qui vel doloribus, sunt dolorem, quis rerum nam et repellat ab? Assumenda, repellendus. Voluptates, similique?'

    const handleChange: () => void = () => {
        if (state === 'none') setState('block')
        if (state === 'block') setState('none')
    }
    return (
        <div>
            <Title>{`styled-components`}</Title>
            <Avatar color={props.color} size={props.size} onClick={handleChange} as='a'>{`嘉伟`}</Avatar>

            <Paragraph>
                {demoList.map(el => {
                    return (
                        <span key={el.id}>{`小${el.name}今年${el.age}`}
                            {lorem.repeat(10)}
                        </span>
                    )
                })}
                <span className='specialSpan'>{new Date().toLocaleDateString()}</span>
            </Paragraph>
            <Paragraph className='specialSpan'>{new Date().toLocaleTimeString()}</Paragraph>
            <Son state={state} />
            <Button>{`打赏`}</Button>
            <PropsBtn color={props.color} size={props.size} as='a'>{`点赞`}</PropsBtn>
            <Custom />
        </div>
    )
}

const SonElement = styled.div`
    position:absolute;
    top:50%;
    left:50%;
    transform:translateX(-50%);
    width:500px;
    height:500px;
    border:1px solid gray;
    background-color:black;
    display:${(props: { state: string }) => props.state || 'none'};
`
const Son: React.FC<{ state: string }> = ({ state }): JSX.Element => <SonElement state={state} />


export default App
