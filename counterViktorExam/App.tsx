import React, {useState} from 'react'
import './App.scss'
import {Counter} from './components/counter/Counter'

//======================================================================================================

export type numType = 0 | 1 | 2 | 3 | 4 | 5

//======================================================================================================

function App() {

    const maxNum: numType = 5
    const minNum: numType = 0
    const [num, setNum] = useState<numType>(minNum)

    function increment() {
        if (num < maxNum) setNum((num + 1) as numType)
    }

    function reset() {
        setNum(minNum)
    }

    return (
        <div className={'App'}>
            <Counter
                maxNum={maxNum}
                minNum={minNum}
                value={num}
                increment={increment}
                reset={reset}/>
        </div>
    )
}

export default App



