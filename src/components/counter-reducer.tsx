const initialState = {
  value: 0,
  maxValue: 5,
};
export type StateType = typeof initialState;
export type IncrementActionCreatorType = ReturnType<typeof incrementAC>;
export type ResetActionCreatorType = ReturnType<typeof resetAC>;

type ActionType = IncrementActionCreatorType | ResetActionCreatorType;
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
    default:
      return state;
  }
};

export const incrementAC = () => {
  return { type: "INCREMENT" } as const;
};
export const resetAC = () => {
  return { type: "RESET" } as const;
};
