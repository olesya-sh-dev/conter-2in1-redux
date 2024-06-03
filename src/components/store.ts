import { counterReducer } from "./counter-reducer";
import { applyMiddleware, combineReducers as combineRedusers, legacy_createStore } from "redux";

import { commonReducer } from "./common_reducer";

const rootReducer = combineRedusers({
  commonData: commonReducer
  
});

let preloadedMin = 0
let preloadedMax =5
const localMin = localStorage.getItem("min");
const localMax = localStorage.getItem("max");

if (localMin && localMax) {
  preloadedMin = JSON.parse(localMin);
  preloadedMax = JSON.parse(localMax);
}


let preloadedState: any = {
  maxValue: preloadedMax,
  minValue: preloadedMin,
  value:preloadedMin,
  errorCondition: false,
};

export const store = legacy_createStore(rootReducer, {
  commonData: preloadedState
});


export type AppRootStateType = ReturnType<typeof rootReducer>;

store.subscribe(() => {
  localStorage.setItem(
    "min",
    JSON.stringify(store.getState().commonData.minValue)
  );
  localStorage.setItem(
    "max",
    JSON.stringify(store.getState().commonData.maxValue)
  );
});
// @ts-ignore
window.store = store








