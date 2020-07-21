import React, { useRef } from "react"
import styled from "styled-components"
import {
    useDrag,
    useDrop,
    DropTargetMonitor,
    DragSourceMonitor,
} from "react-dnd"

const Container = styled.div`
    border: 1px solid lightgray;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    background-color: white;
    width: 200px;
    height: 200px;
`
function App(): JSX.Element {
    const [, dragger] = useDrag({
        item: { type: "Container", id: 9527, name: "magellan", kind: "person" },
        begin: (minoter: DragSourceMonitor) => ({
            type: "Container",
            id: 9527,
            name: "magellan",
            kind: "person",
        }),
    })
    return (
        <>
            <Container ref={dragger}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa aspernatur a alias magnam, libero deserunt, ut error
                    dolorem distinctio voluptatibus hic itaque quidem ad?
                    Perspiciatis sed dicta asperiores expedita ullam.
                </p>
            </Container>

            <br />
            <p>this is divider</p>
            <Dustbin></Dustbin>
            <Card></Card>
        </>
    )
}

const Bin = styled.div`
    width: 300px;
    height: 300px;
    border: 1px dotted #126;
`
const Dustbin = (): JSX.Element => {
    const [collectProps, dropper] = useDrop({
        accept: "Container",
        collect: (minoter: DropTargetMonitor) => ({
            isOver: minoter.isOver(),
        }),
    })
    const bg = collectProps.isOver ? "deeppink" : "white"
    const content = collectProps.isOver
        ? "快松开，放到碗里"
        : "将Container组件拖动到这里"
    return (
        <Bin ref={dropper} style={{ background: bg }}>
            {content}
        </Bin>
    )
}
const CardDiv = styled.span`
    display: inline-block;
    width: 250px;
    height: 250px;
    border: 1px solid;
`
const Card = () => {
    const ref = useRef<HTMLDivElement>(null)
    const [, drop] = useDrop({ accept: "Card" })
    const [, drag] = useDrag({ item: { type: "Card" } })

    drag(drop(ref))
    return <CardDiv ref={ref}>我好像既可以发动也可以接收</CardDiv>
}

export default App
