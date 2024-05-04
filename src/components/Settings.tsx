import React, { ChangeEvent } from "react";
import { ButtonComponent } from "./Button";
import { ValueSetting } from "./ValueSetting";
import { Wrapper } from "./Wrapper";
import { NumberWrapper } from "./NumberWrapper";
import { ButtonsWrapper } from "./ButtonsWrapper";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "./store";
import { setMaxAC, setMinAC } from "./settings-reducer";
import { setValuesAC } from "./common_reducer";
//import { setValuesAC } from "./counter-reducer";

type SettingsPropsType = {
  onSettingsHandler: () => void;
 
};
export const Settings = ({
  onSettingsHandler,
 
}: SettingsPropsType) => {
  const commonState = useSelector((state: AppRootStateType) => state.commonData);
  const {maxValue, minValue, errorCondition} = commonState

  const dispatch = useDispatch();
  const giveValues = () => {
    dispatch(setValuesAC())
    onSettingsHandler();
  };
  const setMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newMaxValue = Number(e.currentTarget.value);
    dispatch(setMaxAC(newMaxValue));
    
  };
  const setMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newMinValue = Number(e.currentTarget.value);
    dispatch(setMinAC(newMinValue));};

  // const errorCondition =
  //   stateSet.maxValue! < 0 ||
  //   stateSet.minValue! >= stateSet.maxValue! ||
  //   stateSet.minValue! < 0 ||
  //   stateSet.maxValue === null ||
  //   stateSet.minValue === null;

  return (
    <Wrapper>
      <NumberWrapper>
       <ValueSetting
          title={"max value"}
          value={maxValue}
          setValueHandler={setMaxValueHandler}
          errorCondition={errorCondition}
        />
        <ValueSetting
          title={"min value"}
          value={minValue}
          setValueHandler={setMinValueHandler}
          errorCondition={errorCondition}
        />
      </NumberWrapper>

      <ButtonsWrapper
      >
        <ButtonComponent
          title={"SET"}
          onClick={giveValues}
          disabled={errorCondition}
        />
      </ButtonsWrapper>
  </Wrapper>
  );
};


//
