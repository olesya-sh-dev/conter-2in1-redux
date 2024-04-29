import React from "react";
import Button from "@mui/material/Button";

type ButtonPropsType = {
  title: string;
  onClick: () => void;
  disabled?: boolean;
};
export const ButtonComponent = ({ title, onClick, disabled }: ButtonPropsType) => {
  return <Button onClick={onClick} variant="contained" size="large" disabled={disabled} sx={{borderRadius: "10px", color: "white"}}>{title} </Button>;
};
