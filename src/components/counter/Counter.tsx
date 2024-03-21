import React, {FC, memo, useCallback} from 'react'
import S from './Counter.module.scss'
import {Button} from '../button/Button'
import {ErrorType} from '../../App'

//========================================================================================
// 🎲 .T.Y.P.E.S.

type CounterPropsType = {
    maxNum: number
    minNum: number
    num: number
    inputMode: boolean
    error: ErrorType
    increment: () => void
    reset: () => void
}

//========================================================================================
// 🧁 .C.O.P.O.N.E.N.T.

export const Counter: FC<CounterPropsType> = memo((props) => {

    console.log('COUNTER')

    const increment = useCallback(() => props.increment(), [props.increment])

    const reset = useCallback(() => props.reset(), [props.reset])


    return (
        <div className={`body ${S.counter}`}>
            <div className={`body__display ${S.display}`}>
                {
                    props.error ? <p className={S.error}>incorrect value</p> :
                        props.inputMode ? <><p>enter values and press</p> <p>[ set ] or [ Enter ]</p></> :
                            <span className={`${props.num === props.maxNum && S.active}`}>{props.num}</span>
                }
            </div>

            <div className={`body__buttonsContainer ${S.buttonsContainer}`}>
                <Button
                    disabled={props.num === props.maxNum || !!props.error || props.inputMode}
                    onClick={increment}
                >
                    inc
                </Button>
                <Button
                    disabled={props.num === props.minNum || !!props.error || props.inputMode}
                    onClick={reset}
                >
                    reset
                </Button>
            </div>
        </div>
    )
})