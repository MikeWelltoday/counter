import React, {useState} from 'react'
import './App.scss'

//======================================================================================================


//======================================================================================================

function App() {

    const [value, setValue] = useState(0)

    function incrementOnClickHandler() {
        setValue(value + 1)
    }

    function setLocalStorageOnClickHandler() {
        localStorage.setItem('value', JSON.stringify(value))
    }

    function getLocalStorageOnClickHandler() {
        let valueAsString = localStorage.getItem('value')
        if (valueAsString) {
            setValue(JSON.parse(valueAsString))
        }
    }

    function clearLocalStorageOnClickHandler() {
        localStorage.clear()
        setValue(0)
    }


    return (
        <div className={'App'}>
            <h1>{value}</h1>
            <button onClick={incrementOnClickHandler}>INC</button>
            <button onClick={setLocalStorageOnClickHandler}>SET</button>
            <button onClick={getLocalStorageOnClickHandler}>GET</button>
            <button onClick={clearLocalStorageOnClickHandler}>CLEAR</button>
        </div>
    )
}

export default App
