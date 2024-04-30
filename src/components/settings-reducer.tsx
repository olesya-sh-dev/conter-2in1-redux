
const initialState = {
    maxValue: 5,
    minValue: 0,
};
export type StateType = typeof initialState;
export type SetMinActionCreatorType = ReturnType<typeof setMinAC>
export type SetMaxActionCreatorType = ReturnType<typeof setMaxAC>

export type ActionType = SetMinActionCreatorType|SetMaxActionCreatorType

export const settingsReducer = (state:StateType=initialState, action: ActionType)=>{
    switch(action.type){
        case("SET_MIN"):
        return {...state, minValue: action.payload.value}
        case("SET_MAX"):
        return {...state, maxValue: action.payload.value}
        default:
            return state
    }
}
export const setMinAC = (value:number) =>{
    return{
        type: "SET_MIN",
        payload:{
            value
        }
    } as const
}
export const setMaxAC = (value:number) =>{
    return{
        type: "SET_MAX",
        payload:{
            value
        }
    } as const
}
