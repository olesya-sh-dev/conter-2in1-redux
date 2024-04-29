import React, { useState } from "react";
import { ButtonComponent } from "./Button";
import { Wrapper } from "./Wrapper";
import { NumberWrapper } from "./NumberWrapper";
import { ButtonsWrapper } from "./ButtonsWrapper";

type CounterPropsType = {
  value: number;
  maxValue: number | null;

  incrementNumberHandler: () => void;
  resetNumberHandler: () => void;
  onSettingsHandler: () => void;
};

export const Counter = ({
  value,
  onSettingsHandler,
  maxValue,
  incrementNumberHandler,
  resetNumberHandler,
}: CounterPropsType) => {
  //const [count, setCount] = useState(value);

  // const incrementNumberHandler = () => {
  //   if (maxValue !== null && count < maxValue!)
  //     setCount((prevCount) => prevCount + 1);
  // };

  // const resetNumberHandler = () => {
  //   setCount(value);
  // };

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
