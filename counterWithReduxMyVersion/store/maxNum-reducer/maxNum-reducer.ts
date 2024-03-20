//========================================================================================

type ActionType = ReturnType<typeof maxNumNemValueAC>

//========================================================================================

export function maxNumNemValueAC(newValue: number) {
    return {type: 'MAX-NUM-NEW-VALUE', payload: {newValue}} as const
}

//========================================================================================

export function maxNumReducer(state: number = 10, {type, payload}: ActionType): number {

    switch (type) {

        case'MAX-NUM-NEW-VALUE': {
            return payload.newValue
        }

        default: {
            return state
        }

    }

}



