import React, { useEffect, useState } from "react";


import { Counter } from "./components/Counter";
import { Settings } from "./components/Settings";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";


function AppWithRedux() {
  const [isSettingsActive, setSettingsActive] = useState(false);
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
  useEffect(() => {
    document.body.style.backgroundColor = "#757ce8" // 
  }, []);

  return (
    <ThemeProvider theme={theme} >
      <CssBaseline  />
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
