import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Input, Toolbar, Button, Typography } from '@material-ui/core';
import Login  from './Auth/Login'
import Logout from './Auth/Logout'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontWeight: '500',
    fontSize: '20px',
    paddingLeft: '10px',
    paddingTop:'5px',
    '& h6': {
      display: 'none'
    }
    
  },
  nav: {
    backgroundColor: '#fff'
  },
  search: {
    fontWeight: 'bold',
    paddingRight: '50px',
    '& input::placeholder': {
      fontWeight: 'normal',
    },
  },
  searchButton: {
    paddingLeft: '25px',
    backgroundColor: 'inherit',
    textTransform: 'capitalize',
    color: '#e5261e',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: 'inherit'
    }
  },
  loginWrap: {
    width: 225,
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const [username, setUsername] = React.useState(
    localStorage.getItem('htc_username') || ''
  )

  const handleLogin = (name) => {
    localStorage.setItem('htc_username', name)
    setUsername(name)
  }

  const clearLogin = () => {
    localStorage.removeItem('htc_username')
    setUsername('')
  }

  return (
        <Toolbar className={classes.nav}>
        <img src="https://cdn.discordapp.com/attachments/673034006878617604/687766060606554157/sign.png" alt='main logo'/>
          <Typography variant="h6" className={classes.title}>
            Видеосервис
          </Typography>
          <Typography className={classes.title}>
            <Input className={classes.search} placeholder="Поиск..." />
            <Button className={classes.searchButton}>Найти</Button>
          </Typography>
          <div className={classes.loginWrap}>
          {!username && <Login handleLogin={handleLogin} />}
          {username && <Logout handleLogin={handleLogin} username={username} clearLogin={clearLogin} />}
          </div>
        </Toolbar>
  );
}