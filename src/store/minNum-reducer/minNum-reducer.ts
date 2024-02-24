//========================================================================================
// 🎲 .T.Y.P.E.S.

type ActionType = ReturnType<typeof minNumNemValueAC>


//========================================================================================
// 🍌 .A.C.

export function minNumNemValueAC(newValue: number) {
    return {type: 'MIN-NUM-NEW-VALUE', payload: {newValue}} as const
}

//========================================================================================
// 🧰 .R.E.D.U.C.E.R.

export function minNumReducer(state: number = 0, {type, payload}: ActionType): number {

    switch (type) {

        case'MIN-NUM-NEW-VALUE': {
            return payload.newValue
        }

        default: {
            return state
        }

    }

}



