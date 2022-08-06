import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Overflow } from './styles'
import App from './App'

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: '#fff',
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
    }

  }
})


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Overflow>
        

      <CssBaseline />
      <App />
      </Overflow>
    </ThemeProvider>
  </React.StrictMode>
)
