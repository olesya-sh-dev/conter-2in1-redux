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


function AppWithRedux() {
  const [isSettingsActive, setSettingsActive] = useState(false);

 
  const state = useSelector((state: AppRootStateType) => state.counterReducer);
  const stateSet = useSelector(
    (state: AppRootStateType) => state.settingsReducer
  );

  const dispatch = useDispatch();

  const incrementNumberHandler = () => {
    dispatch(incrementAC());
    };

  const resetNumberHandler = () => {
    dispatch(resetAC(stateSet.minValue));
  };

  const giveValues = () => {
    dispatch(setValuesAC(stateSet.minValue, stateSet.maxValue))
    setSettingsActive(false);
  };
  const onSettingsHandler = () => {
    setSettingsActive(!isSettingsActive);
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
      {isSettingsActive ? (
          // Если isSettingsActive == true, показываем Settings
          <Settings giveValues={giveValues} />
        ) : (
          // Если isSettingsActive == false, показываем Counter
          <Counter
            value={state.value}
            onSettingsHandler={onSettingsHandler}
            maxValue={state.maxValue}
            incrementNumberHandler={incrementNumberHandler}
            resetNumberHandler={resetNumberHandler}
          />
        )}
      </div>
    </ThemeProvider>
  );
}

export default AppWithRedux;
