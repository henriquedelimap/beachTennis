import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Overflow } from './styles'
import App from './App'
import {LazyMotion, domAnimation} from 'framer-motion'
let theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: '#ffffffaf',
          backdropFilter: 'blur(16px)',
          boxShadow: 'none'
        }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          color: '#1f1f1f'
        }
      }
    },
   
  }})



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <LazyMotion features={domAnimation}>
        <CssBaseline />
        <App />
      </LazyMotion>
    </ThemeProvider>
  </React.StrictMode>
)
