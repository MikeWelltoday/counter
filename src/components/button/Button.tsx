import React, {FC, ReactNode} from 'react'
import S from './Button.module.scss'

//========================================================================================
// 🎲 .T.Y.P.E.S.

type ButtonPropsType = {
    children: ReactNode
    disabled: boolean
    onClick: () => void
}

//========================================================================================
// 🧁 .C.O.P.O.N.E.N.T.

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