import { Box } from "@mui/material"

type NumberWrapperPropsType = {
    children: React.ReactNode
}
export const NumberWrapper = ({children}: NumberWrapperPropsType) => {
    return(
        <Box
        sx={{
         display: "flex",
         flexDirection: "column",
         justifyContent: "center",
         alignItems: "center",
         gap: "10px",
         width: 300,
         height: 150,
         padding: "10px",
         border: "5px solid",
         borderColor: "secondary.light",
         borderRadius: "10px",
         backgroundColor: "primary.light",
       }}
       >
       {children}
       </Box>
    )
}