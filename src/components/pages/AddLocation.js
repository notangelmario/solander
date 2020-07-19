import React from 'react'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'
import Grow from '@material-ui/core/Grow'
import Card from '@material-ui/core/Card'
import IconButton from '@material-ui/core/IconButton'
import Chip from '@material-ui/core/Chip'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import icons from '../icons.module.css'
import VisibilityIcon from '@material-ui/icons/Visibility';
import DoneIcon from '@material-ui/icons/Done'
import AddLocationIcon from '@material-ui/icons/AddLocation';
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MiniMap from './MiniMap'
import Slide from '@material-ui/core/Slide'


const useStyles = makeStyles(theme=>({
    root: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(9),
        width: '100%'
    },
    iconContain: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    icon :{
        width: '32px',
        height: '32px',
    },
    card: {
        minWidth: theme.breakpoints.width('sm')
    }
}))

const DialogTransition = React.forwardRef(function DialogTransition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddLocation() {
    const style = useStyles()
    const [preview, setPreview] = React.useState(false)

    return(
        <>
            <Grow in>
                <Grid
                    className={style.root}
                    direction='column'
                    justify='flex-start'
                    alignItems='center'
                    container
                    >
                    <Grid item xs={11} md={8} lg={6}>
                        <Card className={style.card}>
                            <List>
                                <ListItem divider>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <AddLocationIcon/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary='Sugestii de locatie' secondary='Aici sunt toate sugestiile pentru locatii noi'/>
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <div className={[icons.iconMeeting, style.icon].join(' ')}/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary='Baia maree'/>
                                    <ListItemSecondaryAction>
                                        <Chip
                                            icon={<DoneIcon/>}
                                            color='primary'
                                            label='Verified'
                                        />
                                        <IconButton onClick={()=>setPreview(true)}>
                                            <VisibilityIcon/>
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>        
                            </List>
                        </Card>
                    </Grid>
                </Grid>
            </Grow>
            <Dialog TransitionComponent={DialogTransition} fullScreen onClose={()=>setPreview(false)} open={preview}>
                <DialogTitle>
                    <IconButton onClick={()=>setPreview(false)} className={style.closeButton}>
                        <ExpandMoreIcon/>
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <MiniMap mapStyle={{
                        width: '100%',
                        height: '100%'
                    }}/>
                </DialogContent>
            </Dialog>
        </>
    )
}