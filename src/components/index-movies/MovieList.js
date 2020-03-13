import React from 'react'
import Grid from '@material-ui/core/Grid';
import MovieCard from './MovieCard'
import { movies } from '../../data/movies'


const MovieList = () => {
    return (
        <Grid justify="space-between" container spacing={2}>
            <Grid container justify="center" spacing={2}>
                {movies.map(movie => (
                    <Grid key={movie.title} style={{padding: '0 10px'}} item>
                        <MovieCard movie={movie} />
                    </Grid>
                ))}
        </Grid>
        </Grid>
    )
}

export default MovieList