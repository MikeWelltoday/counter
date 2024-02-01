import React, {ChangeEvent, FC, KeyboardEvent} from 'react'
import S from './Counter.module.scss'
import {Button} from './button/Button'
import {ErrorType} from '../App'

//======================================================================================================

type CounterPropsType = {
    maxNum: number
    minNum: number
    num: number
    inputMode: boolean
    error: ErrorType
    setMaxNumOnChange: (num: number) => void
    setMinNumOnChange: (num: number) => void
    reset: () => void
    increment: () => void
    inputModeChange: () => void
}

//======================================================================================================

export const Counter: FC<CounterPropsType> = (props) => {

    function setMaxNumOnChangeHandler(event: ChangeEvent<HTMLInputElement>) {
        props.setMaxNumOnChange(parseInt(event.currentTarget.value, 10))
    }

    function setMinNumOnChangeHandler(event: ChangeEvent<HTMLInputElement>) {
        props.setMinNumOnChange(parseInt(event.currentTarget.value, 10))
    }

    function onKeyDownHandler(event: KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            event.currentTarget.blur()
        }
    }


    return (
        <div className={S.counter}>

            <div className={S.display}>
                {!props.inputMode ?
                    <>
                        <div className={`${S.num} ${props.num === props.maxNum && S.active}`}>{props.num}</div>
                    </>
                    :
                    <>
                        <div className={S.inputPanel}>
                            <label htmlFor={'maxNum'}>maxNum:</label>
                            <input type="number"
                                   id={'maxNum'}
                                   value={props.maxNum}
                                   onChange={setMaxNumOnChangeHandler}
                                   onKeyDown={onKeyDownHandler}
                                   className={`${props.error === '2' && S.error}`}
                            />
                        </div>
                        <div className={S.inputPanel}>
                            <label htmlFor={'minNum'}>minNum:</label>
                            <input type="number"
                                   id={'minNum'}
                                   value={props.minNum}
                                   onChange={setMinNumOnChangeHandler}
                                   onKeyDown={onKeyDownHandler}
                                   className={props.error && S.error}
                            />
                        </div>
                    </>
                }
            </div>

            <div className={S.buttonsContainer}>
                {!props.inputMode ?
                    <>
                        <Button click={props.increment} disabled={props.num === props.maxNum}>inc</Button>
                        <Button click={props.reset} disabled={props.num === props.minNum}>reset</Button>
                        <Button click={props.inputModeChange} disabled={false}>set</Button>
                    </>
                    :
                    <>
                        <Button click={props.inputModeChange} disabled={!!props.error}>set</Button>
                    </>
                }
            </div>

        </div>
    )
}