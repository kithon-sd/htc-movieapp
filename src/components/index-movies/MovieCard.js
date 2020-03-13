import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    container: {
        position: 'relative',
        width: 280,
    },
    img: {
        display: 'block',
        width: '100%',
        height: 'auto'
    },
    overlay: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute',
        height: '370px',
        width: '100%',
        borderRadius: '5px',
        opacity: 0,
        '&:hover': {
            opacity: 1,
            cursor: 'default',
            backgroundColor: 'rgba(0, 0, 0, 0.6)'
        },

    },
    desc: {
        width: '90%',
        position: 'absolute',
        top: 15,
        left: 15,
        color: '#f2f2f2',
        fontSize: '16px',
        textAlign: 'left'
    },
    title: {
        display: 'block',
        fontSize: '20px',
        flexGrow: 1
    }
})

const MovieCard = ({movie}) => {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <img src={movie.cover} alt={movie.title} className={classes.img} />
            <div className={classes.overlay}>
                <span className={classes.desc}>{movie.description}</span>
            </div>
            <span className={classes.title}>{movie.title}</span>
        </div>
    )
}

export default MovieCard