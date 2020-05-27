import React from "react"
import { Button } from "antd"

export const Antd: React.FC = () => {
    return (
        <div>
            <Button type="primary">Button</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="link">link</Button>
            <Button type="primary" danger>
                Danger
            </Button>
        </div>
    )
}
