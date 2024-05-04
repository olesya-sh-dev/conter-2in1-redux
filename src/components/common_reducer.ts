const initialState = {
  maxValue: 5,
  minValue: 0,
  value: 0,
  errorCondition: false,
};
export type StateType = typeof initialState;
export type SetMinActionCreatorType = ReturnType<typeof setMinAC>;
export type SetMaxActionCreatorType = ReturnType<typeof setMaxAC>;
export type SetValuesActionCreatorType = ReturnType<typeof setValuesAC>;
export type IncrementActionCreatorType = ReturnType<typeof incrementAC>;
export type ResetActionCreatorType = ReturnType<typeof resetAC>;

export type CommonActionType =
  | SetMinActionCreatorType
  | SetMaxActionCreatorType
  | IncrementActionCreatorType
  | SetValuesActionCreatorType
  | ResetActionCreatorType;

export const commonReducer = (
  state: StateType = initialState,
  action: CommonActionType
) => {
  switch (action.type) {
    case "SET_MIN":
      const newMinValue = action.payload.value;
      const isErrorCondition = newMinValue >= state.maxValue || newMinValue < 0;
      return {
        ...state,
        minValue: newMinValue,
        errorCondition: isErrorCondition,
      };
    case "SET_MAX":{
      const newMaxValue = action.payload.value;
      const isErrorCondition = newMaxValue < 0 || state.minValue >= newMaxValue;
      return { ...state, maxValue: newMaxValue,errorCondition: isErrorCondition };
    }
    case "SET_VALUES":{
      const isErrorCondition = state.minValue >= state.maxValue || state.minValue < 0
      return {
        ...state,
        value: state.minValue,
        errorCondition: isErrorCondition,

        //maxValue: action.payload.maxValue,
      };
    }
    case "INCREMENT":
      return state.value < state.maxValue
        ? { ...state, value: state.value + 1 }
        : state;

    case "RESET":
      return { ...state, value: state.minValue };
    default:
      return state;
  }
};
export const setMinAC = (value: number) => {
  return {
    type: "SET_MIN",
    payload: {
      value,
    },
  } as const;
};
export const setMaxAC = (value: number) => {
  return {
    type: "SET_MAX",
    payload: {
      value,
    },
  } as const;
};

export const incrementAC = () => {
  return { type: "INCREMENT" } as const;
};
export const resetAC = () => {
  return {
    type: "RESET",
    // payload: {
    //   minValue,
    // },
  } as const;
};
export const setValuesAC = () => {
  return {
    type: "SET_VALUES",
  } as const;
};
