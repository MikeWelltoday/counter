import {RootReducerType} from '../state/store'




// [ GET-STATE ]
export function loadState(): RootReducerType | undefined {
    try {
        const serializedState = localStorage.getItem('state')

        // если не достаним значение, то вернем undefined
        if (serializedState === null) {
            return undefined
        }

        //  если вернем значение, то возращаем его
        return JSON.parse(serializedState)
    } catch (err) {
        return undefined
    }
}

// [ SET-STATE ]
export function saveState(state: RootReducerType) {
    try {
        // просто пытаемся засетать значение
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch {
        // ну походу не вышло засетать
    }
}