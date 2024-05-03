import React, { useEffect, useState } from "react";

import "./App.css";
import { Counter } from "./components/Counter";
import { Settings } from "./components/Settings";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "./components/store";

function AppWithRedux() {
  const [isSettingsActive, setSettingsActive] = useState(false);

  // const state = useSelector((state: AppRootStateType) => state.counter);
  const stateSetmin = useSelector(
    (state: AppRootStateType) => state.settings.minValue
  );
  // const giveValues = () => {
  //   dispatch(setValuesAC(stateSet.minValue, stateSet.maxValue))
  //   setSettingsActive(false);
  // };
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
          <Settings onSettingsHandler={onSettingsHandler} />
        ) : (
          <Counter onSettingsHandler={onSettingsHandler} />
        )}
      </div>
    </ThemeProvider>
  );
}

export default AppWithRedux;
