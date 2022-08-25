import { ThemeProvider } from '@mui/material'
import '../styles/globals.css'
import StoreProvider from '../utils/store'
import globalTheme from '../utils/theme';
import '@fontsource/roboto/400.css';


function MyApp({ Component, pageProps }) {
  return <>

    <StoreProvider>
            <ThemeProvider theme={globalTheme}>
            <Component {...pageProps} />
            </ThemeProvider>
    </StoreProvider>

  </>
  
}

export default MyApp
