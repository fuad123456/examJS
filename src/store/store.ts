import {
    type Action,
    combineReducers,
    configureStore,
    type ThunkAction,
} from "@reduxjs/toolkit";
import { questionSlice } from "./question.slice";


const rootReducer = combineReducers({
   qustion:questionSlice.reducer
});

const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
