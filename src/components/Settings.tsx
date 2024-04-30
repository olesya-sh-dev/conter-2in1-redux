import React, { ChangeEvent } from "react";
import { ButtonComponent } from "./Button";
import { ValueSetting } from "./ValueSetting";
import { Wrapper } from "./Wrapper";
import { NumberWrapper } from "./NumberWrapper";
import { ButtonsWrapper } from "./ButtonsWrapper";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "./store";
import { setMaxAC, setMinAC } from "./settings-reducer";

type SettingsPropsType = {
   giveValues: (maxValue: number, minValue: number) => void;
};
export const Settings = ({
  giveValues,
}: SettingsPropsType) => {
  const stateSet = useSelector((state: AppRootStateType) => state.settingsReducer);

  const dispatch = useDispatch();

  const setMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newMaxValue = Number(e.currentTarget.value);
    dispatch(setMaxAC(newMaxValue));
    //localStorage.setItem("maxValue", newMaxValue.toString());
  };

  const setMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newMinValue = Number(e.currentTarget.value);
    dispatch(setMinAC(newMinValue));
    //localStorage.setItem("minValue", newMinValue.toString());
  };

  const errorCondition =
    stateSet.maxValue! < 0 ||
    stateSet.minValue! >= stateSet.maxValue! ||
    stateSet.minValue! < 0 ||
    stateSet.maxValue === null ||
    stateSet.minValue === null;

  return (
    <Wrapper>
      <NumberWrapper>
       <ValueSetting
          title={"max value"}
          value={stateSet.maxValue}
          setValueHandler={setMaxValueHandler}
          errorCondition={errorCondition}
        />
        <ValueSetting
          title={"min value"}
          value={stateSet.minValue}
          setValueHandler={setMinValueHandler}
          errorCondition={errorCondition}
        />
      </NumberWrapper>

      <ButtonsWrapper
      >
        <ButtonComponent
          title={"SET"}
          onClick={() => giveValues(stateSet.maxValue, stateSet.minValue)}
          disabled={errorCondition}
        />
      </ButtonsWrapper>
  </Wrapper>
  );
};
//
