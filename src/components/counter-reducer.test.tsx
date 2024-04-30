import { StateType, counterReducer, incrementAC, resetAC, setValuesAC } from "./counter-reducer";

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
  
    const action = resetAC(2)
    const endState = counterReducer(startState, action);
  
    expect(endState.value).toBe(2)
    expect(endState.maxValue).toBe(5);
    
  });
  
  test("values should be changed", () => {
       
    const startState:StateType = {
        value: 0,
        maxValue: 5,
    }
  
    const action = setValuesAC(6,12)
    const endState = counterReducer(startState, action);
  
    expect(endState.value).toBe(6)

    expect(endState.maxValue).toBe(12);
    
  });
  