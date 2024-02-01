import React, {useEffect, useState} from 'react'
import './App.scss'
import {Counter} from './components/Counter'

//======================================================================================================

export type ErrorType = '2' | '1' | ''

//======================================================================================================

function setToLocalStorage(name: string, num: number) {
    localStorage.setItem(name, JSON.stringify(num))
}

function getFromLocalStorage(name: string) {
    const value = localStorage.getItem(name)
    if (value) {
        return JSON.parse(value)
    }
}

//======================================================================================================


function App() {

    let [initialMaxNum, initialMinNum] = [10, 0]

    const [maxNum, setMaxNum] = useState(() => getFromLocalStorage('maxNum') || initialMaxNum)
    const [minNum, setMinNum] = useState(() => getFromLocalStorage('minNum') || initialMinNum)
    const [num, setNum] = useState(() => getFromLocalStorage('num') || minNum)
    const [inputMode, setInputMode] = useState(false)
    const [error, setError] = useState<ErrorType>('')

    function setMaxNumOnChange(num: number) {
        setMaxNum(num)
    }

    function setMinNumOnChange(num: number) {
        setMinNum(num)
    }

    useEffect(() => {
        setToLocalStorage('maxNum', maxNum)
    }, [maxNum])

    useEffect(() => {
        setToLocalStorage('minNum', minNum)
    }, [minNum])

    useEffect(() => {
        setToLocalStorage('num', num)
    }, [num])

    useEffect(() => {
        if (minNum < 0) setError('1')
        if (maxNum - minNum <= 0) setError('2')
        if (maxNum - minNum > 0 && minNum > 0) setError('')
    }, [maxNum, minNum])

    function increment() {
        if (num < maxNum) setNum((num + 1))
    }

    function reset() {
        setNum(minNum)
    }

    function inputModeChange() {
        setInputMode(!inputMode)
        setNum(minNum)
    }

    return (
        <div className={'App'}>

            <Counter
                maxNum={maxNum}
                minNum={minNum}
                num={num}
                inputMode={inputMode}
                error={error}
                setMaxNumOnChange={setMaxNumOnChange}
                setMinNumOnChange={setMinNumOnChange}
                increment={increment}
                reset={reset}
                inputModeChange={inputModeChange}/>
        </div>
    )
}

export default App



