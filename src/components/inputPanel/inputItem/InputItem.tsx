import React, {ChangeEvent, FC, KeyboardEvent} from 'react'
import S from './InputItem.module.scss'

//========================================================================================
// 🎲 .T.Y.P.E.S.

type InputItemPropsType = {
    children: string
    id: string
    className: string
    value: number
    numChange: (num: number) => void
    inputModeChange: (mode: boolean) => void
    reset: () => void
}

//========================================================================================
// 🧁 .C.O.P.O.N.E.N.T.

export const InputItem: FC<InputItemPropsType> = (props) => {

    function numChangeOnChange(event: ChangeEvent<HTMLInputElement>) {
        props.numChange(parseInt(event.currentTarget.value, 10))
        props.inputModeChange(true)
    }

    function inputModeChangeOnFocus() {
        props.inputModeChange(true)
    }

    function inputModeChangeOnBlur() {
        props.reset()
        props.inputModeChange(false)
    }

    function inputModeChangeOnKeyDownHandler(event: KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            inputModeChangeOnBlur()
            event.currentTarget.blur()
        }
    }

    return (
        <div className={S.inputItem}>
            <label htmlFor={props.id}>{props.children}</label>
            <input
                className={props.className}
                id={props.id}
                type="number"
                value={props.value}
                onChange={numChangeOnChange}
                onFocus={inputModeChangeOnFocus}
                onBlur={inputModeChangeOnBlur}
                onKeyDown={inputModeChangeOnKeyDownHandler}
            />
        </div>
    )
}