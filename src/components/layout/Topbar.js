import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme)=> ({
    root: {
        borderRadius: '0 0 1rem 1rem'
    },
    title: {
        margin: '0 auto',
        fontFamily: 'Fredoka One',
    }
}))

export default function Topbar() {
    const style = useStyles()
    return(
        <AppBar className={style.root} color='default' position='fixed'>
            <Typography className={style.title} variant='h6'>Solander</Typography>
        </AppBar>
    )
}