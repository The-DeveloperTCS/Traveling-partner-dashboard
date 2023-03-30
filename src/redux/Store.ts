import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { rootReducer, RootState } from './slice/Reducers'

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
