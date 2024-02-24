import React, {useEffect, useState} from 'react'
import './App.scss'
import {Counter} from './components/counter/Counter'
import {InputPanel} from './components/inputPanel/InputPanel'
import {useDispatch, useSelector} from 'react-redux'
import {StateType} from './store/store'
import {maxNumNemValueAC} from './store/maxNum-reducer/maxNum-reducer'
import {minNumNemValueAC} from './store/minNum-reducer/minNum-reducer'
import {numNewValueAC, numReducerIncrementAC} from './store/num-reducer/num-reducer'

//========================================================================================

export type ErrorType = '2' | '1' | ''

//========================================================================================
// 🍇 .A.P.P.

function App() {

    const dispatch = useDispatch()

    const maxNum = useSelector((state: StateType) => state.maxNum)
    const minNum = useSelector((state: StateType) => state.minNum)
    const num = useSelector((state: StateType) => state.num)

    const myState = useSelector((state: StateType) => state)
    console.log(myState)

    const [inputMode, setInputMode] = useState(false)
    const [error, setError] = useState<ErrorType>('')


    useEffect(() => {
        if (minNum < 0) setError('1')
        if (maxNum - minNum <= 0) setError('2')
        if (maxNum - minNum > 0 && minNum >= 0) setError('')
    }, [maxNum, minNum])

    function maxNumChange(num: number) {
        dispatch(maxNumNemValueAC(num))
    }

    function minNumChange(num: number) {
        dispatch(minNumNemValueAC(num))
    }

    function increment() {
        if (num < maxNum) {
            dispatch(numReducerIncrementAC())
        }
    }

    function reset() {
        dispatch(numNewValueAC(minNum))
    }

    function inputModeChange(mode: boolean) {
        setInputMode(mode)
    }

    return (
        <div className={'App'}>
            <InputPanel
                maxNum={maxNum}
                minNum={minNum}
                inputMode={inputMode}
                error={error}
                maxNumChange={maxNumChange}
                minNumChange={minNumChange}
                inputModeChange={inputModeChange}
                reset={reset}
            />
            <Counter
                maxNum={maxNum}
                minNum={minNum}
                num={num}
                inputMode={inputMode}
                error={error}
                increment={increment}
                reset={reset}/>
        </div>
    )
}

export default App



