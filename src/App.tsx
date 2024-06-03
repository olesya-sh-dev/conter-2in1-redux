import React, { useEffect, useState } from "react";

import "./App.css";
import { Counter } from "./components/Counter";
import { Settings } from "./components/Settings";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

function App() {
  const [value, setValue] = useState<number | null>(null);
  const [maxValue, setMaxValue] = useState<number | null>(null);
  const [minValue, setMinValue] = useState<number | null>(null);

  useEffect(() => {
    const localValue = localStorage.getItem("minValue");
    const localMaxValue = localStorage.getItem("maxValue");
    const localMinValue = localStorage.getItem("minValue");

    setValue(localValue !== null ? Number(localValue) : null);
    setMaxValue(localMaxValue !== null ? Number(localMaxValue) : null);
    setMinValue(localMinValue !== null ? Number(localMinValue) : null);
  }, []);

  // useEffect(() => {

  //   setValue(Number(localStorage.getItem("minValue")));
  //   setMinValue(Number(localStorage.getItem("minValue")));
  //   setMaxValue(Number(localStorage.getItem("maxValue")));
  // }, []);

  const incrementNumberHandler = () => {
    if (maxValue !== null && value! < maxValue!)
      setValue((prevValue) => prevValue! + 1);
  };

  const resetNumberHandler = () => {
    setValue(minValue);
  };

  const giveValues = (maxValue: number, minValue: number) => {
    setValue(minValue);
    localStorage.setItem("minValue", minValue.toString());
    localStorage.setItem("maxValue", maxValue.toString());
    // setMaxValue(maxValue);
    // setMinValue(minValue);
    //console.log(maxValue);
  };
  const onSettingsHandler = () => {
    setValue(null);
  };

  const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <div className="App">
      {value !== null ? (
        <Counter
          //value={value}
          onSettingsHandler={onSettingsHandler}
          //maxValue={maxValue}
          //incrementNumberHandler={incrementNumberHandler}
          //resetNumberHandler={resetNumberHandler}
        />
      ) : (
        <Settings 
          onSettingsHandler={onSettingsHandler}
          //maxValue={maxValue}
          //minValue={minValue}
          //giveValues={giveValues}
          //setMaxValue={setMaxValue}
          //setMinValue={setMinValue}
        />
      )}
    </div>
    
    </ThemeProvider>
  );
}

export default App;
