import React, {useEffect, useState} from 'react'
import './App.scss'
import {Counter} from './components/counter/Counter'
import {InputPanel} from './components/inputPanel/InputPanel'

//======================================================================================================

export type ErrorType = '2' | '1' | ''

//======================================================================================================

function setInLocalStorage(name: string, item: number) {
    localStorage.setItem(name, JSON.stringify(item))
}

function getFromLocalStorage(name: string) {
    let valueAsString = localStorage.getItem(name)
    if (valueAsString) {
        return JSON.parse(valueAsString)
    }
}

//======================================================================================================

function App() {

    const initialMaxNum = 20
    const initialMinNum = 10

    const [maxNum, setMaxNum] = useState(() => getFromLocalStorage('maxNum') || initialMaxNum)
    const [minNum, setMinNum] = useState(() => getFromLocalStorage('minNum') || initialMinNum)
    const [num, setNum] = useState(() => getFromLocalStorage('num') || initialMinNum)
    const [inputMode, setInputMode] = useState(false)
    const [error, setError] = useState<ErrorType>('')

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
        if (minNum < 0) setError('1')
        if (maxNum - minNum <= 0) setError('2')
        if (maxNum - minNum > 0 && minNum >= 0) setError('')
    }, [maxNum, minNum])

    function maxNumChange(num: number) {
        setMaxNum(num)
    }

    function minNumChange(num: number) {
        setMinNum(num)
    }

    function increment() {
        if (num < maxNum) {
            setNum(num + 1)
        }
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
                reset={reset}/>
        </div>
    )
}

export default App



