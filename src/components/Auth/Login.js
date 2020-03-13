import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Modal, Button, Input } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    paper: {
        fontFamily: 'sans-serif',
        outline: 'none',
        borderRadius: '5px',
        position: 'absolute',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        height: '300px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    input: {
        display: 'block',
        margin: '5px',
        fontWeight: 'bold',
        '& input::placeholder': {
            fontWeight: 'normal'
        }
    },
    form: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    loginButton: {
      float: 'right',
      marginTop: 'auto',
      backgroundColor: '#E5261E',
      textTransform: 'capitalize',
      padding: '5px 30px',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#CC221B'
      }
    },
}))

const Login = ({ handleLogin }) => {
    const classes = useStyles()
    const [name, setName] = React.useState('')
    const [open, setOpen] = React.useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleSubmit = e => {
        e.preventDefault()
        handleLogin(name)
    }

    return (
        <div>
            <Button
            className={classes.loginButton}
            onClick={handleOpen}
            >
                Войти
            </Button>

            <Modal
            open={open}
            onClose={handleClose}
            >
                <div className={classes.paper}>
                    <h2>Вход</h2>
                    <form className={classes.form} onSubmit={(e) => handleSubmit(e)}>
                        <div>
                                <Input className={classes.input} onChange={(e) => setName(e.target.value)} value={name} placeholder='Логин' />
                                <Input className={classes.input} placeholder='Пароль' />
                        </div>
                    <Button type='submit' className={classes.loginButton}>Войти</Button>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default Login