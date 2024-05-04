import { ButtonComponent } from "./Button";
import { Wrapper } from "./Wrapper";
import { NumberWrapper } from "./NumberWrapper";
import { ButtonsWrapper } from "./ButtonsWrapper";
import { useDispatch, useSelector } from "react-redux";
//import { incrementAC, resetAC } from "./counter-reducer";
import { AppRootStateType } from "./store";
import { incrementAC, resetAC } from "./common_reducer";


type CounterPropsType = {
    onSettingsHandler: () => void;
};



export const Counter = ({
  onSettingsHandler
}: CounterPropsType) => {
  // const maxValue = useSelector((state: AppRootStateType) => state.counter.maxValue);
  // const value = useSelector((state: AppRootStateType) => state.counter.value)
  // const minValue = useSelector((state:AppRootStateType) => state.settings.minValue)
  const commonData = useSelector((state: AppRootStateType) => state.commonData);

  const { value, maxValue } = commonData;
  
  const dispatch = useDispatch();
  const incrementNumberHandler = () => {
    dispatch(incrementAC());
    };
    const resetNumberHandler = () => {
      dispatch(resetAC());
    };
  return (
    <Wrapper>
      <NumberWrapper>
        <h3
          style={{
            color: value === maxValue ? "#ba000d" : "white",
            fontWeight: "bold",
            fontSize: "70px",
            alignSelf: "center",
          }}
        >
          {value}
        </h3>
      </NumberWrapper>
      <ButtonsWrapper>
        <ButtonComponent
          title={"INC"}
          onClick={incrementNumberHandler}
          disabled={value === maxValue}
        />
        <ButtonComponent title={"RESET"} onClick={resetNumberHandler} />
        <ButtonComponent title={"SET"} onClick={onSettingsHandler} />
      </ButtonsWrapper>
    </Wrapper>
  );
};
