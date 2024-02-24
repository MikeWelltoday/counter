import {combineReducers, createStore} from 'redux'
import {CounterReducer} from './counter-reducer'
import {loadState, saveState} from '../localStorage/localStorage'
import {throttle} from 'lodash'

// yarn add lodash!!!!
// yarn add @types/lodash --save

//========================================================================================
// 🎲 .T.Y.P.E.S.

export type RootReducerType = ReturnType<typeof rootReducer>

//========================================================================================
// 💾 .S.T.O.R.E.

const rootReducer = combineReducers({
    counter: CounterReducer
})

//какаято дич для localStorage
const persistedState = loadState()

export const store = createStore(
    rootReducer,
    persistedState
)

//какаято дич для localStorage
// Throttle - пропускает вызовы функции с определённой периодичностью.
store.subscribe(throttle(() => {
    saveState(store.getState())
}, 1000))

// @ts-ignore
window.store = store
