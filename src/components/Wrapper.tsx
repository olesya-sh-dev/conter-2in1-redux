import Box from "@mui/material/Box";

type WrapperPropsType = {
    children: React.ReactNode
}

export const Wrapper = ({children}: WrapperPropsType) => {
    return(
        <Box
        component="section"
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          m: "150px auto",
          border: "1px solid",
          borderRadius: "10px",
          width: 400,
          height: 250,
          padding: "10px",
          gap: "10px",
          bgcolor: "primary.dark",
        }}
      >
        {children}
      </Box>
    )
}