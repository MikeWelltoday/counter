import React from 'react'
import './App.scss'
import {useDispatch, useSelector} from 'react-redux'
import {RootReducerType} from './state/store'
import {counterDecrementAC, counterIncrementAC} from './state/counter-reducer'

//========================================================================================
// 🎲 .T.Y.P.E.S.

export type StateType = {
    count: number
}


//========================================================================================
// 🍇 .A.P.P.

function App() {

    const count = useSelector<RootReducerType, StateType>(state => state.counter)
    const dispatch = useDispatch()

    return (
        <div className={'App'}>
            <h1>Counter: {count.count}</h1>
            <button onClick={() => dispatch(counterIncrementAC())}> [ + ]</button>
            <button onClick={() => dispatch(counterDecrementAC())}> [ - ]</button>
        </div>
    )
}

export default App




