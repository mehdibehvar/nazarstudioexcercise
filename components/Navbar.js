import { Box, Button, Container, Grid, List, ListItem, Switch, Typography } from '@mui/material'
import { useContext, useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import Link from "next/link";
import styled from '@emotion/styled';
import { Store } from '../utils/store';
import { useTheme } from "@mui/material";
import { FilledButton, OutlinedButton} from './customButton';
const DarkModeList=styled("ul")(() => ({
marginLeft:"32px",
display:"flex",
alignItems:"center",
li:{
  width:"24px",
  height:"24px",
    textAlign:"center",
   display:"flex",
   alignItems:"center",
   justifyContent:"center",
  marginRight:"10px",
  svg:{
    width:"24px",
    height:"24px",
  }
  
}
  }));
export default function Navbar() {
  const theme=useTheme()
    const [checked, setChecked] =useState(false);
const {state,dispatch}=useContext(Store);
    const toggleMode = (event) => {
      setChecked(event.target.checked);
      dispatch({
        type:"toggle_mode"
      })
    };

  return (
    <Container sx={{
    position:"absolute",
    width: "1152px",
    height: "72px",
    left: "144px",
    top: "24px",
    background:theme.palette.background.paper,
    borderRadius: "16px"}}>
    <Link href={"/"}>
    <Typography variant='body2' component="a" sx={{position:"absolute",left:"944px",top:"20px",width:"111px",height: "31px",cursor:"pointer",color:"rgba(24, 125, 241, 0.7)"}} >صفحه نخست</Typography>
    </Link>
    <Link href={"/aboutus"}>
    <Typography variant='body2' component="a" sx={{position: "absolute",
width: "67px",
height: "31px",
left: "852px",
top: "20px",color:"text.primary",cursor:"pointer"}}>درباره ما</Typography></Link>
 

<Box sx={{position:"absolute",display:"flex",left:"37px",top:"14px",button:{width: "172px",height: "42px",borderRadius: "8px",}}}>
<DarkModeList>
    <li><LightModeIcon sx={{color:theme.palette.secondary.light}}/></li>
    <li>
         <Switch
      checked={checked}
      onChange={toggleMode}
      inputProps={{ 'aria-label': 'controlled' }}
    /></li>
    <li><ModeNightIcon sx={{color:theme.palette.secondary.dark}}/></li>
</DarkModeList>
 
   
    

<FilledButton variant="contained" sx={{
marginLeft:"20px",
}}><PersonIcon/>ثبت نام</FilledButton>
<OutlinedButton variant="outlined">ورود</OutlinedButton>
</Box>
</Container>

  )
}


