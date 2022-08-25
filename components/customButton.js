import { Button, styled } from "@mui/material";

export const FilledButton = styled(Button)(({ theme }) => ({
    color:"#FFFFFF",
    backgroundColor:"#187DF1",
    width: "172px",
    height: "42px",
    borderRadius: "8px",
    '&:hover': {
      backgroundColor: "#187DF1",
    },
    '&:focus': {
        span:{
     position:"absolute",
     right:"58px",
    width: "55px",
    height: "42px",
    background: "rgba(255, 255, 255, 0.15)",
    borderRadius: "8px"
        }}
  }));
  export const OutlinedButton=styled(Button)(({theme})=>({
    color:"#187DF1",
    backgroundColor:"#FFFFFF",
    width: "172px",
    height: "42px",
    border: "2px solid #187DF1",
    borderRadius: "8px",
    '&:hover': {
      backgroundColor: "#FFFFFF",
      border: "2px solid #187DF1"
    },
    '&:focus': {
    span:{
        position:"absolute",
        right:"54px",
width: "64px",
height: "42px",
background: "rgba(24, 125, 241, 0.15)",
borderRadius: "8px"
    }
    },
  }))