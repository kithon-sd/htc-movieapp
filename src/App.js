import React from 'react';
import Container from '@material-ui/core/Container'
import { MuiThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles'

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

const useStyles = makeStyles({
  footerContainer: {
    width: '100%',
    backgroundColor: '#f2f2f2'
  },
  wrap: {
    display: 'flex',
    height: '100vh',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
})

const App = () => {
  const classes = useStyles()
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.wrap}>
      <Container maxWidth="lg">
        <Header />
        <Main />
      </Container>
      <div className={classes.footerContainer}>
        <Container maxWidth="lg">
          <Footer />
        </Container>
      </div>
      </div>
    </MuiThemeProvider>
  )
}

export default App;
