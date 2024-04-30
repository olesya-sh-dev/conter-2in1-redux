const initialState = {
  value: 0,
  maxValue: 5,
};
export type StateType = typeof initialState;
export type IncrementActionCreatorType = ReturnType<typeof incrementAC>;
export type ResetActionCreatorType = ReturnType<typeof resetAC>;
export type SetValuesActionCreatorType = ReturnType<typeof setValuesAC>;

type ActionType = IncrementActionCreatorType | ResetActionCreatorType | SetValuesActionCreatorType
export const counterReducer = (
  state: StateType = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case "INCREMENT":
      return state.value < state.maxValue
        ? { ...state, value: state.value + 1 }
        : state;

    case "RESET":
      return { ...state, value: 0 };

    case "SET_VALUES":
      return {...state, value:action.payload.value, maxValue: action.payload.maxValue} 
    default:
      return state;
  }
};

export const incrementAC = () => {
  return { type: "INCREMENT" } as const;
} 
export const resetAC = () => {
  return { type: "RESET" } as const;
} 

export const setValuesAC = (value:number, maxValue:number) => {
  return (
    {type:"SET_VALUES",
    payload:{
      value,
      maxValue
    }

    })
}
