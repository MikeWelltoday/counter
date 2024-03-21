import {combineReducers, legacy_createStore} from 'redux'
import {maxNumReducer} from './reducers/maxNum-reducer'
import {minNumReducer} from './reducers/minNum-reducer'
import {numReducer} from './reducers/num-reducer'

//========================================================================================

export type StateType = ReturnType<typeof rootReducer>

//========================================================================================

const rootReducer = combineReducers({
    maxNum: maxNumReducer,
    minNum: minNumReducer,
    num: numReducer
})

let preloadedState
const persistedState = localStorage.getItem('state')
if (persistedState) {
    preloadedState = JSON.parse(persistedState)
}

// @ts-ignore
export const store = legacy_createStore(
    rootReducer,
    preloadedState
)


store.subscribe(() => {
    localStorage.setItem('state', JSON.stringify(store.getState()))
})

// @ts-ignore
window.store = store


