import Head from "next/head";
import { useContext, useMemo } from "react";
import { Store } from "../utils/store";
import Navbar from "./Navbar";
import { createTheme } from "@mui/material";
import { Box, ThemeProvider } from "@mui/material";

export default function Layout({ children }) {
  const { state, dispatch } = useContext(Store);
  const mode = state.mode;
  const theme = useMemo(
    () =>
      createTheme({
        direction:"rtl",
    typography:{
        fontFamily:"Inter",
        h1:{
            fontSize:"40px"
        },
        h2:{
            fontSize:"32px"
        },
        body1:{
            fontSize:"24px",
        },
        body2:{
            fontSize:"20px"
        },
        button:{
            fontSize:"15px",
           fontFamily:"vazir",
           lineHeight:"23px",
           fontWeight:500,
           textAlign:"right"
        }
    },
        palette: {
          mode,...(mode==="light"?{
            background:{
              default:"#F8F8F8",
             paper:"#FFFFFF"
            },
            text:{
              primary:"#505050",
              secondary:"#071440"
            },
            secondary:{
              main:"#2B343B",
              light:"#FFB320",
              dark:"#2B343B"
            }
          }:{
            background:{
              default:"#1E272E",
              paper:"#2B343B"
          },
          text:{
            primary:"#FFFFFF",
            secondary:"#FFFFFF"
          },
          secondary:{
            main:"#2B343B",
            light:"#FFFFFF",
            dark:"#FFB320"
          }
          })
        },
      }),
    [mode]
  );
  return (
    <>
      <Head>
        <title>نظر استدیو</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="nazar studio" content=" سواحل پورتو" />
      </Head>

      <ThemeProvider theme={theme}>
        <Box
          sx={{
            backgroundColor:"background.default",
            borderRadius: "16px",
            position: "relative",
            width: "1440px",
            height: "1024px",
          }}
        >
          <Navbar />
          <Box className="main_section" sx={{backgroundColor:"background.paper",
          position: "absolute",
width: "1152px",
height: "866px",
left: "144px",
top: "112px",
borderRadius: "16px"}}>
          {children}
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}
