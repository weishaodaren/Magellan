import React from 'react';

function log(target: any, name: string, descriptor: any) {
    const oldVal = descriptor.value

    descriptor.value = function log() {
        console.log(
            `%c[${1}]调用了方法：${name},参数为：`,
            "color: orange;",
            Array.from(arguments)
        );
        return oldVal.apply(this, arguments)
    }
    return descriptor
}

interface IProps {
    name: string
    age?: number
}
export default class DemoClass extends React.Component<IProps, object> {
    [x: string]: any;

    public state: any = {
        sum: 0
    }

    @log
    public add(a: number, b: number): void {
        this.setState({
            sum: a + b
        })
    }

    public render() {
        const { name, age } = this.props
        const { sum } = this.state
        return (
            <div onClick={() => this.add(sum, age as number)}>
                你好， 我叫{name},计数器：{sum}, {age ? `今年${age}岁了` : ''}
                {this.props.children}
            </div>
        )
    }
}