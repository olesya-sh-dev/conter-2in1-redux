import { StateType, counterReducer, incrementAC, resetAC } from "./counter-reducer";

test("value should be changed", () => {
       
    const startState:StateType = {
        value: 0,
        maxValue: 5,
    }
  
    const action = incrementAC()
    const endState = counterReducer(startState, action);
  
    expect(endState.value).toBe(1)

    expect(endState.maxValue).toBe(5);
    
  });
  
  test("value should be reset", () => {
       
    const startState:StateType = {
        value: 5,
        maxValue: 5,
    }
  
    const action = resetAC()
    const endState = counterReducer(startState, action);
  
    expect(endState.value).toBe(0)

    expect(endState.maxValue).toBe(5);
    
  });
  