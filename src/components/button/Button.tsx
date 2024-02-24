import React, {FC, memo, ReactNode, useCallback} from 'react'
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


export const Button: FC<ButtonPropsType> = memo((props) => {

    console.log('BUTTON')

    const onClickHandler = useCallback(() => {
        props.onClick()
    }, [props.onClick])

    return (
        <button className={`${S.button} ${props.disabled && S.notActive}`}
                onClick={onClickHandler}
                disabled={props.disabled}
        >
            {props.children}
        </button>
    )
})