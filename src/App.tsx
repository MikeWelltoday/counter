import React, {useEffect, useState} from 'react'
import './App.scss'

//======================================================================================================


//======================================================================================================

function App() {

    const [value, setValue] = useState(() => {
        let valueAsString = localStorage.getItem('value')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            return newValue
        } else return 1
    })

    useEffect(() => {
        localStorage.setItem('value', JSON.stringify(value))

    }, [value])

    function incrementOnClickHandler() {
        setValue(value + 1)
    }

    return (
        <div className={'App'}>
            <h1>{value}</h1>
            <button onClick={incrementOnClickHandler}>INC</button>

        </div>
    )
}

export default App
