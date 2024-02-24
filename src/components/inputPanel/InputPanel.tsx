import React, {FC} from 'react'
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

export const InputPanel: FC<InputPanelPropsType> = (props) => {

    return (
        <div className={`body ${S.inputPanel}`}>
            <div className={`body__display ${S.display}`}>

                <InputItem
                    id={'maxValue'}
                    className={`${props.error === '2' && S.error}`}
                    value={props.maxNum}
                    numChange={props.maxNumChange}
                    inputModeChange={props.inputModeChange}
                    reset={props.reset}
                >
                    max Value
                </InputItem>

                <InputItem
                    id={'minValue'}
                    className={`${props.error && S.error}`}
                    value={props.minNum}
                    numChange={props.minNumChange}
                    inputModeChange={props.inputModeChange}
                    reset={props.reset}
                >
                    min Value
                </InputItem>

            </div>
            <div className={`body__buttonsContainer ${S.buttonsContainer}`}>
                <Button
                    disabled={!!props.error || !props.inputMode}
                    onClick={props.reset}
                >
                    set
                </Button>
            </div>
        </div>
    )
}