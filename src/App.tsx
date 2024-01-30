import React, {useEffect, useState} from 'react'
import './App.scss'
import {Counter} from './components/counter/Counter'
import {InputPanel} from './components/inputPanel/InputPanel'

//======================================================================================================

export type ErroeType = 'both' | 'bottom' | 'ok'

//======================================================================================================

function App() {

    const [initialMaxNum, initialMinNum] = [20, 10]

    const [maxNum, setMaxNum] = useState(initialMaxNum)
    const [minNum, setMinNum] = useState(initialMinNum)
    const [num, setNum] = useState(minNum)
    const [inputMode, setInputMode] = useState(false)
    const [error, setError] = useState<ErroeType>('ok')

    function setInLocalStorage(name: string, item: number) {
        localStorage.setItem(`${name}`, JSON.stringify(item))
    }

    function getFromLocalStorage(name: string) {
        let valueAsString = localStorage.getItem(name)
        if (valueAsString) {
            return JSON.parse(valueAsString)
        }
    }

    useEffect(() => {
        setMaxNum(getFromLocalStorage('maxNum') || initialMaxNum)
        setMinNum(getFromLocalStorage('minNum') || initialMinNum)
        setNum(getFromLocalStorage('num') || initialMinNum)
    }, [])

    useEffect(() => {
        setInLocalStorage('maxNum', maxNum)
    }, [maxNum])

    useEffect(() => {
        setInLocalStorage('minNum', minNum)
    }, [minNum])

    useEffect(() => {
        setInLocalStorage('num', num)
    }, [num])

    useEffect(() => {
        if (!(minNum < 0)) setError('bottom')
        if (!(maxNum - minNum <= 0)) setError('both')
        if (maxNum - minNum >= 0 && minNum >= 0) setError('ok')
    }, [maxNum, minNum])

    function maxNumChange(num: number) {
        setMaxNum(num)
    }

    function minNumChange(num: number) {
        setMinNum(num)
    }

    function increment() {
        if (num < maxNum) setNum(num + 1)
    }

    function reset() {
        setNum(minNum)
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
                reset={reset}
            />

        </div>
    )
}

export default App



