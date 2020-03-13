import React from 'react'
import { Typography, Box } from '@material-ui/core'

const TabPanel = ({children, value, index}) => {
    return (
        <Typography
        component="div"
        hidden={value !== index}
        >
            {value === index && 
                <Box p={3}>{ children }</Box>
            }
        </Typography>
    )
}

export default TabPanel