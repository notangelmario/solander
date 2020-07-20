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
import LoopIcon from '@material-ui/icons/Loop';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button'
import MiniMap from './MiniMap'
import Slide from '@material-ui/core/Slide'
import CircularProgress from '@material-ui/core/CircularProgress'
import firebase from 'firebase/app'
import 'firebase/firestore'

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
    centered: {
        display: 'inline-block',
        width: theme.breakpoints.width('sm'),
        maxWidth: '80vw'
    },
    closeButton: {
        position: 'absolute',
        top: theme.spacing(1),
        right: theme.spacing(1)
    }
}))

const DialogTransition = React.forwardRef(function DialogTransition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddLocation() {
    const style = useStyles()
    const [preview, setPreview] = React.useState(false)
    const [previewOptions, setPreviewOptions] = React.useState(undefined)
    const [markerSubs] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [newMarker, setNewMarker] = React.useState(false)

    React.useEffect(()=>{
        firebase.firestore().collection('marker_subs').get().then(async (snap) => {
            snap.forEach((marker) => {
                markerSubs.push({
                    position: marker.data().position,
                    icon: marker.data().icon,
                    title: marker.data().title,
                    status: marker.data().status
                })
            })
        }).then(() => setLoading(false))
    }, [markerSubs])

    if (!loading){
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
                        <Grid className={style.centered} item xs={11} md={8} lg={6}>
                            <Card>
                                <List>
                                    <ListItem button divider>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <AddLocationIcon/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary='Adauga o noua locatie'/>
                                    </ListItem>
                                    {markerSubs.map((content, idx)=>(
                                        <ListItem divider key={`marker-sub${idx}`}>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <div className={[icons[content.icon], style.icon].join(' ')}/>
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary={content.title}/>
                                            <ListItemSecondaryAction>
                                                {content.status && (
                                                    <Chip
                                                        icon={<DoneIcon/>}
                                                        color='primary'
                                                        label='Verified'
                                                    />
                                                )}
                                                {!content.status && (
                                                    <Chip
                                                        icon={<LoopIcon/>}
                                                        color='default'
                                                        label='Checking'
                                                    />
                                                )}
                                                <IconButton onClick={()=>{
                                                    setPreview(true)
                                                    setPreviewOptions({
                                                        position: content.position,
                                                        icon: content.icon
                                                    })
                                                }}>
                                                    <VisibilityIcon/>
                                                </IconButton>
                                            </ListItemSecondaryAction>
                                        </ListItem>        
                                    ))}
                                </List>
                                <IconButton onClick={()=>{
                                    setPreview(true)
                                    setPreviewOptions({
                                        new: true
                                    })
                                    setNewMarker(true)
                                }}>
                                <VisibilityIcon/>
                                </IconButton>
                            </Card>
                        </Grid>
                    </Grid>
                </Grow>
                <Dialog TransitionComponent={DialogTransition} fullScreen onClose={()=>{
                    setNewMarker(false)
                    setPreview(false)
                }} open={preview}>
                    <DialogTitle disableTypography>
                        <IconButton onClick={()=>setPreview(false)} className={style.closeButton}>
                            <ExpandMoreIcon/>
                        </IconButton>
                        {newMarker === true && (
                            <Button onClick={()=>{
                                setPreview(false)
                                console.log(newMarker)
                            }} variant='contained' color='primary' startIcon={<DoneIcon/>}>
                                Alege un loc
                            </Button>
                        )}
                    </DialogTitle>
                    <DialogContent>
                        <MiniMap previewOptions={previewOptions} setMarker={setNewMarker} mapStyle={{
                            width: '100%',
                            height: '100%'
                        }}/>
                    </DialogContent>
                </Dialog>
            </>
        )
    } else {
        return <CircularProgress thickness={5} size={128} style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: '-64px',
            marginLeft: '-64px',
        }}/>
    }
    
}