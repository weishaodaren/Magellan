import { createContext } from "react"

const context = {
    color: "#1890ff",
    backgroundColor: "#000",
    buttonColor: "green",
    displack: "block",
}
type ContextType = Partial<typeof context>
interface ContextTypeInterface extends ContextType {
    [key: string]: string | undefined
}
export const StyleContext = createContext<ContextTypeInterface>(context)
