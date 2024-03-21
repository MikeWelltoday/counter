import {AppRootReducerType, AppThunkDispatchType} from './store'

type NumIncrementActionType = ReturnType<typeof numIncrementAC>
export type numAllActionsType = NumIncrementActionType

//========================================================================================


function getInitialStateFromLocalStore() {
    const stateFromLocalStorage = localStorage.getItem('num')
    if (stateFromLocalStorage === null) {
        return 0
    }
    return JSON.parse(stateFromLocalStorage)
}

const numInitialState: number = getInitialStateFromLocalStore()

export function numReducer(state: number = numInitialState, action: numAllActionsType): number {
    switch (action.type) {

        case 'NUM-INCREMENT': {
            return state + 1
        }

        default: {
            return state
        }
    }
}

//========================================================================================

export function numIncrementAC() {
    return {type: 'NUM-INCREMENT'} as const
}

//========================================================================================

export function numIncrementTC() {
    return (dispatch: AppThunkDispatchType, getState: () => AppRootReducerType) => {
        localStorage.setItem('num', JSON.stringify(getState().num + 1))
        dispatch(numIncrementAC())
    }
}













