import { counterReducer } from "./counter-reducer";
import { combineReducers as combineRedusers, createStore } from "redux";

const rootReducer = combineRedusers({
  counterReducer: counterReducer,
});

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>;
// @ts-ignore
window.store = store