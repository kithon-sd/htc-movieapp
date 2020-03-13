import React from 'react'
import { Grid } from '@material-ui/core'
import { genres } from '../../data/genres'

import GenreCard from './GenreCard'

const GenreList = () => {
    return (
        <Grid justify="space-between" container spacing={2}>
            <Grid container justify="center" spacing={2}>
                {genres.map(genre => (
                    <Grid key={genre.title} style={{padding: '0 10px'}}item>
                        <GenreCard genre={genre} />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}

export default GenreList