import {StateType} from './store'


// [ GET-STATE ]
export function loadState(): any {
    try {
        const serializedState = localStorage.getItem('state')

        // если не достаним значение, то вернем undefined
        if (serializedState === null) {
            // return {maxNum: 10, minNum: 0, num: 0}
            return undefined
        }

        //  если вернем значение, то возращаем его
        return JSON.parse(serializedState)
    } catch (err) {
        return undefined
        // return {maxNum: 10, minNum: 0, num: 0}
    }
}


// [ SET-STATE ]
export function saveState(state: StateType) {
    try {
        // просто пытаемся засетать значение
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch {
        // ну походу не вышло засетать
    }
}