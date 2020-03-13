import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    textWrap: {
        alignSelf:'center',
        display: 'inline-flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        fontFamily: 'Rubik, sans-serif',
        fontSize: 16,
        height: 70,
        marginLeft: 70,
        color: '#333333',
        '& a': {
            color: '#1F4766',
            textDecoration: 'none',
            fontWeight: 'bold'
        },
        '& span': {
            display: 'block'
        }
    },
    imgWrap: {
        alignSelf: 'center',
        marginLeft: 20
    },
    container: {
        backgroundColor: '#f2f2f2',
        display: 'flex',
        height: 120,
        margin: 0,
        padding: 0
    }
})

const Footer = () => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <img className={classes.imgWrap} src="https://cdn.discordapp.com/attachments/673034006878617604/687831787589861405/htc-cs-logo.png" alt="htc logo"/>
            <div className={classes.textWrap}>
                <span className={classes.text}>
                426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса, 246 (ДК «Металлург»)
                </span>
                <span className={classes.text}>
                +7 (3412) 93-88-61, 43-29-29
                </span>
                <a href="https://htc-cs.ru" className={classes.text}>htc-cs.ru</a>
            </div>
        </div>

    )
}

export default Footer