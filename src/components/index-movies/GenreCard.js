import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const GenreCard = ({ genre }) => {
    const useStyles = makeStyles({
        container: props => ({
            width: 280,
            height: 208,
            background: props.gradient.regular,
            '&:hover': {
                background: props.gradient.hover
            }
        }),
        textWrapper: {
            paddingTop: '70px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '50%',
            color: 'white',
            fontSize: '20px'
        },
        emoji: {
            fontSize: '48px'
        }
    })
    const bgColor = {
        gradient: genre.gradient
    }
    const classes = useStyles(bgColor)


    return (
        <div className={classes.container}>
            <div className={classes.textWrapper}>
                <span className={classes.emoji} role="img" aria-label="emoji">{genre.logo}</span>
                <span>{genre.title}</span>
            </div>
        </div>
    )
}

export default GenreCard
