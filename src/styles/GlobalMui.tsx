import {createTheme, responsiveFontSizes} from '@mui/material'

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
      borderRadius: 16
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
      MuiButton: {
        styleOverrides: {
          root: {
            background: 'rgba(232, 245, 255, 0.07)',
            backdropFilter: 'blur(32px)',
            boxShadow: '0px 12px 8px -20px #111111',
          }
        }
      },
      
      MuiToggleButtonGroup: {
        styleOverrides: {
          root: {
            background: 'rgba(232, 245, 255, 0.07)',
            backdropFilter: 'blur(1.6px)',
            boxShadow: '0px 12px 8px -20px #111111',
            height: '100%',
            borderRadius: '0 1rem 1rem 0'
          },
        }
        
      },
      MuiToggleButton: {
        styleOverrides: {
          root:{
            height: '100%'
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
    }
  })
  
  theme = responsiveFontSizes(theme)
  
export {
    theme
}