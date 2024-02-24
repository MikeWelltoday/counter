//========================================================================================
// 🎲 .T.Y.P.E.S.

type ActionType = ReturnType<typeof numReducerIncrementAC> | ReturnType<typeof numNewValueAC>


//========================================================================================
// 🍌 .A.C.

export function numReducerIncrementAC() {
    return {type: 'INCREMENT', payload: {}} as const
}

export function numNewValueAC(newValue: number) {
    return {type: 'NUM-NEW-VALUE', payload: {newValue}} as const
}

//========================================================================================
// 🧰 .R.E.D.U.C.E.R.

export function numReducer(state: number = 0, {type, payload}: ActionType): number {

    switch (type) {

        case'INCREMENT': {
            return state + 1
        }

        case'NUM-NEW-VALUE': {
            return payload.newValue
        }

        default: {
            return state
        }

    }

}





