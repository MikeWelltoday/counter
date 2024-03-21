import React from 'react'
import './App.scss'
import {useSelector} from 'react-redux'
import {AppRootReducerType, useAppDispatch} from './state/store'
import {numIncrementTC} from './state/num-reducer'

//========================================================================================

function App() {

    const dispatch = useAppDispatch()
    const num = useSelector<AppRootReducerType, number>(state => state.num)

    function onClickHandler() {
        dispatch(numIncrementTC())
    }

    return (
        <div className={'App'}>
            <span>{num}</span>
            <button onClick={onClickHandler}>INC</button>
        </div>
    )
}

export default App



