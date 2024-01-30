import React, {FC, ReactNode} from 'react'
import S from './Button.module.scss'

//======================================================================================================

type ButtonPropsType = {
    children: ReactNode
    disabled: boolean
    onClick: () => void
}

//======================================================================================================

export const Button: FC<ButtonPropsType> = (props) => {
    return (
        <button className={`${S.button} ${props.disabled && S.notActive}`}
                onClick={props.onClick}
                disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}