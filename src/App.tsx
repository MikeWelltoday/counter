import React, {useCallback, useEffect, useState} from 'react'
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


    const [inputMode, setInputMode] = useState(false)
    const [error, setError] = useState<ErrorType>('')


    useEffect(() => {
        if (minNum < 0) setError('1')
        if (maxNum - minNum <= 0) setError('2')
        if (maxNum - minNum > 0 && minNum >= 0) setError('')
    }, [maxNum, minNum])


    const maxNumChange = useCallback((num: number) => {
        dispatch(maxNumNemValueAC(num))
    }, [dispatch])

    const minNumChange = useCallback((num: number) => {
        dispatch(minNumNemValueAC(num))
    }, [dispatch])

    const increment = useCallback(() => {
        if (num < maxNum) {
            dispatch(numReducerIncrementAC())
        }
    }, [dispatch, num, maxNum])

    const reset = useCallback(() => {
        dispatch(numNewValueAC(minNum))
    }, [dispatch, minNum])

    const inputModeChange = useCallback((mode: boolean) => {
        setInputMode(mode)
    }, [setInputMode])

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



