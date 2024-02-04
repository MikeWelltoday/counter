import React, {FC} from 'react'
import S from './Counter.module.scss'
import {Button} from '../button/Button'
import {numType} from '../../App'

//======================================================================================================

type CounterPropsType = {
    value: numType
    maxNum: numType
    minNum: numType
    reset: () => void
    increment: () => void
}

//======================================================================================================

export const Counter: FC<CounterPropsType> = (props) => {
    return (
        <div className={S.counter}>
            <div className={`${S.display} ${props.value === props.maxNum && S.active}`}>{props.value}</div>
            <div className={S.buttonsContainer}>
                <Button click={props.increment} disabled={props.value === props.maxNum}>inc</Button>
                <Button click={props.reset} disabled={props.value === props.minNum}>reset</Button>
            </div>
        </div>
    )
}