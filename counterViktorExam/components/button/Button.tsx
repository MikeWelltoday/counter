import React, {FC, ReactNode} from 'react'
import S from './Button.module.scss'

//======================================================================================================

type ButtonPropsType = {
    children: ReactNode
    disabled: boolean
    click: () => void
}

//======================================================================================================

export const Button: FC<ButtonPropsType> = (props) => {
    return (
        <button className={`${S.button} ${props.disabled && S.notActive}`}
                onClick={props.click}
                disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}