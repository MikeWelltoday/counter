//========================================================================================

type ActionType = ReturnType<typeof minNumNemValueAC>


//========================================================================================

export function minNumNemValueAC(newValue: number) {
    return {type: 'MIN-NUM-NEW-VALUE', payload: {newValue}} as const
}

//========================================================================================

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



