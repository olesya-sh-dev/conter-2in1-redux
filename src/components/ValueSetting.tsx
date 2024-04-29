import { Box, TextField, Typography } from "@mui/material";
import React, { ChangeEvent } from "react";

type ValueSettingPropsType = {
  title: "max value" | "min value";
  value: number | null;
  errorCondition: boolean;
  setValueHandler: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const ValueSetting = ({
  title,
  value,
  errorCondition,
  setValueHandler,
}: ValueSettingPropsType) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <Typography
        component={"span"}
        sx={{ color: "primary.dark", fontWeight: "bold", fontSize: "20px" }}
      >
        {title}
      </Typography>
      <TextField
        id="outlined-number"
        label={"Enter " + title}
        variant="outlined"
        type="number"
        value={value ?? ""}
        onChange={setValueHandler}
        error={errorCondition}
        sx={{ width: 200, backgroundColor: "white", borderRadius: "10px"}}
        InputProps={{
            sx: {
              "& input": {
                fontSize: "18px",
                color: errorCondition ? "secondary.dark" : "primary.dark",
                fontWeight: "bold",
                textAlign: "center",
              },
            },
          }}
        
      />
    </Box>
  );
};
