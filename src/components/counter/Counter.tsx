import React, {FC} from 'react'
import S from './Counter.module.scss'
import {Button} from '../button/Button'
import {ErroeType} from '../../App'

//======================================================================================================

type CounterPropsType = {
    maxNum: number
    minNum: number
    num: number
    inputMode: boolean
    error: ErroeType
    increment: () => void
    reset: () => void
}

//======================================================================================================

export const Counter: FC<CounterPropsType> = (props) => {
    return (
        <div className={`body ${S.counter}`}>
            <div className={`body__display ${S.display} ${props.num === props.maxNum && S.active}`}>
                {props.error ? <p className={props.error && S.error}>incorrect value</p>
                    : props.inputMode ? <><p>enter values and press</p> <p>[set] [Enter] [Escape]</p></> : props.num}
            </div>
            <div className={`body__buttonsContainer ${S.buttonsContainer}`}>
                <Button click={props.increment}
                        disabled={props.num === props.maxNum || props.error === 'both' || props.error === 'bottom'}
                >inc</Button>
                <Button click={props.reset}
                        disabled={props.num === props.minNum || props.error === 'both' || props.error === 'bottom'}
                >reset</Button>
            </div>
        </div>
    )
}