import React, {FC, memo, useCallback} from 'react'
import S from './InputPanel.module.scss'
import {Button} from '../button/Button'
import {ErrorType} from '../../App'
import {InputItem} from './inputItem/InputItem'

//========================================================================================
// 🎲 .T.Y.P.E.S.

type InputPanelPropsType = {
    maxNum: number
    minNum: number
    inputMode: boolean
    error: ErrorType
    maxNumChange: (num: number) => void
    minNumChange: (num: number) => void
    inputModeChange: (mode: boolean) => void
    reset: () => void
}

//========================================================================================
// 🧁 .C.O.P.O.N.E.N.T.

export const InputPanel: FC<InputPanelPropsType> = memo((props) => {

    console.log('INPUT-PANEL')

    const maxNumChange = useCallback((num: number) => props.maxNumChange(num), [props.maxNumChange])

    const minNumChange = useCallback((num: number) => props.minNumChange(num), [props.minNumChange])

    const inputModeChange = useCallback((mode: boolean) => props.inputModeChange(mode), [props.inputModeChange])

    const reset = useCallback(() => props.reset(), [props.reset])

    return (
        <div className={`body ${S.inputPanel}`}>
            <div className={`body__display ${S.display}`}>

                <InputItem
                    id={'maxValue'}
                    className={`${props.error === '2' && S.error}`}
                    value={props.maxNum}
                    numChange={maxNumChange}
                    inputModeChange={inputModeChange}
                    reset={reset}
                >
                    max Value
                </InputItem>

                <InputItem
                    id={'minValue'}
                    className={`${props.error && S.error}`}
                    value={props.minNum}
                    numChange={minNumChange}
                    inputModeChange={inputModeChange}
                    reset={reset}
                >
                    min Value
                </InputItem>

            </div>
            <div className={`body__buttonsContainer ${S.buttonsContainer}`}>
                <Button
                    disabled={!!props.error || !props.inputMode}
                    onClick={reset}
                >
                    set
                </Button>
            </div>
        </div>
    )
})