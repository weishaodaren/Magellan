declare namespace globalLib {
    const version: string
    function doSomething(): void
    interface Options {
        [key: string]: any
    }
}

export default globalLib
