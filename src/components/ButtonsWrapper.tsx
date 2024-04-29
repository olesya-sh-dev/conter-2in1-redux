import { ButtonGroup } from "@mui/material"


type ButtonWrapperPropsType = {
    children: React.ReactNode
}
export const ButtonsWrapper = ({children}: ButtonWrapperPropsType) => {
    return(
        <ButtonGroup
        color="secondary"
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          width: 300,
          padding: "10px",
          bgcolor: "primary.main",
          border: "5px solid",
          borderColor: "secondary.light",
          borderRadius: "10px",
        }}
      >
        {children}  
      </ButtonGroup>
    )
}