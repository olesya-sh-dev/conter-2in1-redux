import React, { useState } from "react";
import { ButtonComponent } from "./Button";
import { Wrapper } from "./Wrapper";
import { NumberWrapper } from "./NumberWrapper";
import { ButtonsWrapper } from "./ButtonsWrapper";


type CounterPropsType = {
  value: number;
  maxValue: number | null;
  style?: React.CSSProperties;

  incrementNumberHandler: () => void;
  resetNumberHandler: () => void;
  onSettingsHandler: () => void;
};




export const Counter = ({
  value,
  style,
  onSettingsHandler,
  maxValue,
  incrementNumberHandler,
  resetNumberHandler,
}: CounterPropsType) => {

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
