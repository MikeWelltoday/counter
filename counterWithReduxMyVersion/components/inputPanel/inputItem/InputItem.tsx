import React, {ChangeEvent, FC, KeyboardEvent, memo, useCallback} from 'react'
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

export const InputItem: FC<InputItemPropsType> = memo((props) => {

    console.log('INPUT-ITEM')

    const numChangeOnChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.currentTarget.value, 10)
        props.numChange(value)
        props.inputModeChange(true)
    }, [props.numChange, props.inputModeChange])

    const inputModeChangeOnFocus = useCallback(() => {
        props.inputModeChange(true)
    }, [props.inputModeChange])

    const inputModeChangeOnBlur = useCallback(() => {
        props.reset()
        props.inputModeChange(false)
    }, [props.reset, props.inputModeChange])

    const inputModeChangeOnKeyDownHandler = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            inputModeChangeOnBlur()
            event.currentTarget.blur()
        }
    }, [inputModeChangeOnBlur])

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
})