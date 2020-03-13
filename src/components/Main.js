import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Tabs, Tab } from '@material-ui/core'
import TabPanel from './TabPanel'
import MovieList from './index-movies/MovieList'
import GenreList from './index-movies/GenreList'
import TvSchedule from './index-tv/TvSchedule'

const useStyles = makeStyles({
  root: {
    indicator: {
      backgroundColor: '#fff'
    }
  },
  heading: {
    fontWeight: '500',
    fontSize: '24px',
    color: "#333333"
  }
})

const Main = () => {
    const [value, setValue] = React.useState(0);
    const classes = useStyles()

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <>
        <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="secondary"
        centered
      >
        <Tab label="Фильмы" />
        <Tab label="Телеканалы" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <h2 className={classes.heading}><span role="img" aria-label="emoji">🔥</span> Новинки </h2>
         <MovieList />
        <h2 className={classes.heading}>Жанры</h2>
         <GenreList /> 
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TvSchedule  />
      </TabPanel>
      </>
    )
}

export default Main