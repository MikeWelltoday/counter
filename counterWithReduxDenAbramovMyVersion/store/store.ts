import {combineReducers, legacy_createStore} from 'redux'
import {maxNumReducer} from './maxNum-reducer/maxNum-reducer'
import {minNumReducer} from './minNum-reducer/minNum-reducer'
import {numReducer} from './num-reducer/num-reducer'
import {loadState, saveState} from './localStorage'
import {throttle} from 'lodash'

//========================================================================================

export type StateType = ReturnType<typeof rootReducer>

//========================================================================================

const rootReducer = combineReducers({
    maxNum: maxNumReducer,
    minNum: minNumReducer,
    num: numReducer
})

// для localStorage
const persistedState = loadState()

// @ts-ignore
export const store = legacy_createStore(
    rootReducer,

    // начальное значение загружается из localStorage
    persistedState
)


// для localStorage
// Throttle - пропускает вызовы функции с определённой периодичностью.
store.subscribe(throttle(() => {

    saveState(store.getState())

}, 1000))

// @ts-ignore
window.store = store

/*

const persistedState = loadState();: Здесь мы вызываем функцию loadState(), которая пытается извлечь сохраненное состояние из localStorage.
Это происходит при инициализации приложения или загрузке страницы. Если в localStorage есть сохраненное состояние, оно будет загружено и
присвоено переменной persistedState.

const store = createStore(rootReducer, persistedState);: Затем мы создаем Redux-хранилище с помощью функции createStore, передавая в качестве начального
состояния загруженное из localStorage состояние persistedState.

store.subscribe(throttle(() => { saveState(store.getState()); }, 1000));: Здесь мы подписываемся на изменения в хранилище с помощью функции subscribe.
Каждый раз, когда происходит изменение состояния в Redux-хранилище, вызывается переданная функция. Однако, чтобы не вызывать сохранение состояния в
localStorage слишком часто (например, при множественных обновлениях в короткий промежуток времени), мы используем функцию throttle из lodash, чтобы
ограничить частоту вызовов функции сохранения состояния. В данном случае, функция сохранения состояния вызывается не чаще одного раза в 1000 миллисекунд,
что позволяет оптимизировать производительность приложения и избежать чрезмерного использования localStorage.

Функция saveState(store.getState()) вызывается внутри throttle, передавая в нее текущее состояние Redux-хранилища. Таким образом, при каждом обновлении
состояния в Redux-хранилище, новое состояние сохраняется в localStorage с учетом заданной частоты вызовов.





* */

