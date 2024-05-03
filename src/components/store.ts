import { counterReducer } from "./counter-reducer";
import { combineReducers as combineRedusers, createStore } from "redux";
import { settingsReducer } from "./settings-reducer";

const rootReducer = combineRedusers({
  counter: counterReducer,
  settings: settingsReducer,
});

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>;
// @ts-ignore
window.store = store