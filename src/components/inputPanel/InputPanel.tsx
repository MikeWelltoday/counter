import React, {ChangeEvent, FC, KeyboardEvent} from 'react'
import S from './InputPanel.module.scss'
import {Button} from '../button/Button'
import {ErrorType} from '../../App'
import {types} from 'sass'
import Boolean = types.Boolean

//======================================================================================================

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

//======================================================================================================

export const InputPanel: FC<InputPanelPropsType> = (props) => {

    function maxNumChangeOnChange(event: ChangeEvent<HTMLInputElement>) {
        props.maxNumChange(parseInt(event.currentTarget.value, 10))
        props.inputModeChange(true)
    }

    function minNumChangeOnChange(event: ChangeEvent<HTMLInputElement>) {
        props.minNumChange(parseInt(event.currentTarget.value, 10))
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
        if (event.key === 'Enter' || event.key === 'Escape') {
            props.reset()
            props.inputModeChange(false)
            event.currentTarget.blur()
        }
    }

    return (
        <div className={`body ${S.inputPanel}`}>

            <div className={`body__display ${S.display}`}>

                <div className={S.inputBox}>
                    <label htmlFor="maxValue">max Value</label>
                    <input className={`${props.error === '2' && S.error}`}
                           id={'maxValue'}
                           type="number"
                           value={props.maxNum}
                           onChange={maxNumChangeOnChange}
                           onFocus={inputModeChangeOnFocus}
                           onBlur={inputModeChangeOnBlur}
                           onKeyDown={inputModeChangeOnKeyDownHandler}
                    />
                </div>

                <div className={S.inputBox}>
                    <label htmlFor="minValue">min Value</label>
                    <input className={`${props.error && S.error}`}
                           id={'minValue'}
                           type="number"
                           value={props.minNum}
                           onChange={minNumChangeOnChange}
                           onFocus={inputModeChangeOnFocus}
                           onBlur={inputModeChangeOnBlur}
                           onKeyDown={inputModeChangeOnKeyDownHandler}
                    />
                </div>
            </div>

            <div className={`body__buttonsContainer ${S.buttonsContainer}`}>
                <Button disabled={!!props.error || !props.inputMode}
                        onClick={props.reset}
                >set</Button>
            </div>
        </div>
    )
}