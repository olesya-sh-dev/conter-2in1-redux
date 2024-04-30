import { StateType, setMaxAC, setMinAC, settingsReducer } from "./settings-reducer";

test("minvalue should be changed", () => {
       
    const startState:StateType = {
        maxValue: 5,
        minValue: 0,
    }
  
    const action = setMinAC(2)
    const endState = settingsReducer(startState, action);
  
    expect(endState.minValue).toBe(2)

    expect(endState.maxValue).toBe(5);
    
  });
  
test("maxvalue should be changed", () => {
       
    const startState:StateType = {  
        maxValue: 5,
        minValue: 0,
    }
  
    const action = setMaxAC(10)
    const endState = settingsReducer(startState, action);
  
    expect(endState.minValue).toBe(0)

    expect(endState.maxValue).toBe(10);
    
  });
  
  