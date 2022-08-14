import { createTheme, CssBaseline, responsiveFontSizes, ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Overflow } from './styles'
import App from './App'
import { LazyMotion, domAnimation } from 'framer-motion'
import { SnackbarProvider } from 'notistack'
import { theme } from './styles/GlobalMui'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3} dense anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}>
        <LazyMotion features={domAnimation}>
          <CssBaseline />
          <App />
        </LazyMotion>
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>
)
