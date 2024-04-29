import Box from "@mui/material/Box";
import React, { ChangeEvent } from "react";
import { ButtonComponent } from "./Button";
import { ValueSetting } from "./ValueSetting";
import { Wrapper } from "./Wrapper";
import { NumberWrapper } from "./NumberWrapper";
import { ButtonsWrapper } from "./ButtonsWrapper";

type SettingsPropsType = {
  maxValue: number | null;
  minValue: number | null;
  giveValues: (maxValue: number, minValue: number) => void;
  setMaxValue: (maxValue: number) => void;
  setMinValue: (minValue: number) => void;
};

export const Settings = ({
  maxValue,
  minValue,
  giveValues,
  setMaxValue,
  setMinValue,
}: SettingsPropsType) => {
  const setMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newMaxValue = Number(e.currentTarget.value);
    setMaxValue(newMaxValue);
    //localStorage.setItem("maxValue", newMaxValue.toString());
  };

  const setMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newMinValue = Number(e.currentTarget.value);
    setMinValue(newMinValue);
    //localStorage.setItem("minValue", newMinValue.toString());
  };

  const errorCondition =
    maxValue! < 0 ||
    minValue! >= maxValue! ||
    minValue! < 0 ||
    maxValue === null ||
    minValue === null;

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
          onClick={() => giveValues(maxValue!, minValue!)}
          disabled={errorCondition}
        />
      </ButtonsWrapper>
  </Wrapper>
  );
};
//
