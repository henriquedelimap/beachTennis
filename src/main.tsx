import { createTheme, CssBaseline, responsiveFontSizes, ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Overflow } from './styles'
import App from './App'
import {LazyMotion, domAnimation} from 'framer-motion'
let theme = createTheme({
  typography: {
    fontFamily: 'Outfit'
  },
  palette: {
    primary: {
      main: '#0066cc',
    },
    secondary: {
      main: '#cc0000',
    },
  },
  shape: {
    borderRadius: 2,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(232, 245, 255, 0.07)',
          backdropFilter: 'blur(32px)',
          boxShadow: '0px 12px 8px -20px #111111',
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
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h2',
          h2: 'h2',
          h3: 'h2',
          h4: 'h2',
          h5: 'h2',
          h6: 'h2',
          subtitle1: 'h2',
          subtitle2: 'h2',
          body1: 'span',
          body2: 'span',
        },
      },
    },
  }})

theme = responsiveFontSizes(theme)

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
