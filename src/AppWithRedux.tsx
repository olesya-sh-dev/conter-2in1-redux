import React, { useEffect, useState } from "react";

import "./App.css";
import { Counter } from "./components/Counter";
import { Settings } from "./components/Settings";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "./components/store";
import {
  incrementAC,
  resetAC,
  setValuesAC,
} from "./components/counter-reducer";
import { setMaxAC, setMinAC } from "./components/settings-reducer";

function AppWithRedux() {
  //const [value, setValue] = useState<number | null>(null);
  //const [maxValue, setMaxValue] = useState<number | null>(null);
  //const [minValue, setMinValue] = useState<number | null>(null);

  // useEffect(() => {
  //   const localValue = localStorage.getItem("minValue");
  //   const localMaxValue = localStorage.getItem("maxValue");
  //   const localMinValue = localStorage.getItem("minValue");

  //   setValue(localValue !== null ? Number(localValue) : null);
  //   setMaxValue(localMaxValue !== null ? Number(localMaxValue) : null);
  //   setMinValue(localMinValue !== null ? Number(localMinValue) : null);
  // }, []);

  // useEffect(() => {

  //   setValue(Number(localStorage.getItem("minValue")));
  //   setMinValue(Number(localStorage.getItem("minValue")));
  //   setMaxValue(Number(localStorage.getItem("maxValue")));
  // }, []);
  const state = useSelector((state: AppRootStateType) => state.counterReducer);
  const stateSet = useSelector(
    (state: AppRootStateType) => state.settingsReducer
  );

  const dispatch = useDispatch();

  const incrementNumberHandler = () => {
    dispatch(incrementAC());
    // if (maxValue !== null && value! < maxValue!)
    //   setValue((prevValue) => prevValue! + 1);
  };

  const resetNumberHandler = () => {
    dispatch(resetAC(stateSet.minValue));
    //setValue(minValue);
  };

  const giveValues = () => {
    dispatch(setValuesAC(stateSet.minValue, stateSet.maxValue));

    // setValue(minValue);
    // localStorage.setItem("minValue", minValue.toString());
    // localStorage.setItem("maxValue", maxValue.toString());
    // const onSettingsHandler = () => {
    //   setValue(null);
    // };
  };
  const theme = createTheme({
    palette: {
      primary: {
        light: "#757ce8",
        main: "#3f50b5",
        dark: "#002884",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Counter
          value={state.value}
          //onSettingsHandler={onSettingsHandler}
          maxValue={state.maxValue}
          incrementNumberHandler={incrementNumberHandler}
          resetNumberHandler={resetNumberHandler}
        />
        <Settings
          //maxValue={stateSet.maxValue}
          giveValues={giveValues}
          //minValue={stateSet.minValue}
          //setMaxValue={setMaxValue}
          //setMinValue={setMinValue}
        />
      </div>
    </ThemeProvider>
  );
}

export default AppWithRedux;
