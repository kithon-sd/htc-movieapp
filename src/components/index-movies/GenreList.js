import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { genres } from '../../data/genres'

import GenreCard from './GenreCard'

const useStyles = makeStyles({
    genreContainer: {
        margin: '30px 0'
    },
    genreItem: {
        padding: '0 10px'
    },
    heading: {
        fontWeight: '500',
        fontSize: '24px',
        color: "#333333"
      }
})

const GenreList = () => {
    const classes = useStyles()

    return (
        <div className={classes.genreContainer}>
        <h2 className={classes.heading}>Жанры</h2>
        <Grid  justify="space-between" container spacing={2}>
            <Grid container justify="center" spacing={2}>
                {genres.map(genre => (
                    <Grid key={genre.title} className={classes.genreItem} style={{padding: '0 10px'}}item>
                        <GenreCard genre={genre} />
                    </Grid>
                ))}
            </Grid>
        </Grid>
        </div>
    )
}

export default GenreList