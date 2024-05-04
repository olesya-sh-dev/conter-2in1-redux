import { counterReducer } from "./counter-reducer";
import { combineReducers as combineRedusers, legacy_createStore } from "redux";

import { commonReducer } from "./common_reducer";

const rootReducer = combineRedusers({
  commonData: commonReducer
  
});

export const store = legacy_createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>;
// @ts-ignore
window.store = store