import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    container: {
        backgroundColor: '#f2f2f2',
        display: 'flex',
        margin: '10px 0',
        justifyContent: 'flex-start',
        '@media (max-width: 1024px)': {
            flexDirection: 'column'
        }
    },
    listWrap: {
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 0,
        margin: 0,
        paddingBottom: 15,
        '& li:first-child': {
            color: 'red',
            paddingTop: 0
        },
        '& li': {
            paddingTop: '5px',
        }
    },
    dataWrap: {
        display: 'inline-flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'left',
        marginLeft: 50  
    },
    time: {
        paddingRight: '20px',
        color: 'inherit'
    },
    imgWrap: { // lord forgive me for i have sinned
        width: 400,
        position: 'relative',
        '@media (max-width: 1024px)': {
            display: 'none'
        }
    },
    img: {
        alignSelf: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    title: {
        marginBottom: '10px'
    }
})

const TvCard = ({channel}) => {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <div className={classes.imgWrap}>
            <img className={classes.img} src={channel.logo} alt={channel.title} />
            </div>
            <div className={classes.dataWrap}>
                <h3 className={classes.title}>{channel.title}</h3>
                <ul className={classes.listWrap}>
                    {channel.tvSchedule.map(program => (
                        <li key={program.description}>
                            <span className={classes.time}>{program.time}</span>
                            <span>{program.description}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TvCard