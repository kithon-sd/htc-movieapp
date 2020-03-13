import React from 'react'
import SimpleBar from 'simplebar-react'
import { Scrollbars } from 'react-custom-scrollbars'
import 'simplebar/dist/simplebar.min.css'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import { channels } from '../../data/channels'
import TvCard from './TvCard'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        height: 600,
        width: 1200,
        overflowY: 'scroll',
        overflowX: 'hidden',
        '@media (max-width: 1024px)': {
            width: '100%'
        }
    },
    paper: {
        height: 130,
        marginRight: 0,
        width: 'auto',
        backgroundColor: '#f2f2f2',
    },
    itemWrap: {
        width: '100%',
    }
})

const TvSchedule = () => {
    const classes = useStyles()

    return (
        <Grid
        container
        className={classes.root}
        spacing={2}
        >
            <Grid
            component={SimpleBar}
            direction="column"
            container
            alignItems="center"
            spacing={2}>
                {channels.map(channel => (
                    <Grid
                    item
                    className={classes.itemWrap}
                    key={channel.title}
                    >
                        <TvCard channel={channel} />
                    </Grid>
                ))}
                {channels.map(channel => (
                    <Grid
                    item
                    className={classes.itemWrap}
                    key={channel.title}
                    >
                        <TvCard channel={channel} />
                    </Grid>
                ))}
            </Grid>
        </Grid>    
    )
}

export default TvSchedule