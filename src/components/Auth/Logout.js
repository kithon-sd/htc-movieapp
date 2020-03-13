import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { InputBase, Button } from '@material-ui/core'

const useStyles = makeStyles({
    button: {
        paddingLeft: '15px',
        backgroundColor: 'inherit',
        textTransform: 'capitalize',
        color: '#e5261e',
        fontWeight: 'bold',
        '&:hover': {
            backgroundColor: 'inherit'
        }
    },
    input: {
        overflow: 'hidden',
        width: 150,
        paddingLeft: '5px',
        '& input:hover': {
            cursor: 'default'
        },
        '& input:focus': {
            borderBottom: '1px solid #e5261e'
        }
    },
})

const Logout = ({clearLogin, username, handleLogin}) => {
    const classes = useStyles()

    return (
        <div className={classes.wrapper}>
            <InputBase className={classes.input} value={username} onChange={(e) => handleLogin(e.target.value)} />
            <Button className={classes.button} onClick={clearLogin}>
                Выйти
            </Button>
        </div>
    )
}

export default Logout