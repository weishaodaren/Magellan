import { createContext, Context } from 'react'

export const ColorContext = createContext('red')
export enum ACTION_TYPE { UPDATE_COLOR = 'UPDATE_COLOR' }


export const colorReducer = (state: {} | string, action: { type: string, payload: string }): any => {
    switch (action.type) {
        case ACTION_TYPE.UPDATE_COLOR: {
            return action.payload
        }
        default: {
            return state
        }
    }
}
