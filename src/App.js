import React from 'react';
import Container from '@material-ui/core/Container'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import Footer from './components/Footer'
import Main from './components/Main'
import Header from './components/Header'

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Rubik, sans-serif'
  },
  overrides: {
    MuiInput: {
      underline: {
        "&&&&:hover:before": {
          borderBottom: "1px solid black"
        },
        "&:after": {
          borderBottom: '1px solid black',
          transform: 'none',
          transition: 'none'
        }
      }
    },
    MuiTabs: {
      indicator: {
        backgroundColor: 'red'
      }
    },
    MuiTab: {
      textColorSecondary: {
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontSize: '24px',
        color: '#000',
      },
    }
  }
    
});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Header />
        <Main />
      </Container>
      <div style={{width: '100%', backgroundColor: '#f2f2f2', marginBottom: '0px'}}>
        <Container maxWidth="lg">
          <Footer />
        </Container>
      </div>
    </MuiThemeProvider>
  )
}

export default App;
