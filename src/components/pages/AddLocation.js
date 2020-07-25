import React from 'react'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'
import Grow from '@material-ui/core/Grow'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import Chip from '@material-ui/core/Chip'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import List from '@material-ui/core/List'
import AppBar from '@material-ui/core/AppBar'
import ListItem from '@material-ui/core/ListItem'
import TextField from '@material-ui/core/TextField'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import icons from '../icons.module.css'
import FormHelperText from '@material-ui/core/FormHelperText'
import VisibilityIcon from '@material-ui/icons/Visibility';
import DoneIcon from '@material-ui/icons/Done'
import LoopIcon from '@material-ui/icons/Loop';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
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
    errorPreview: {
        flexGrow: 1,
        marginLeft: theme.spacing(2),
        color: theme.palette.error.main
    },
    closeButton: {
        position: 'absolute',
        top: theme.spacing(1),
        right: theme.spacing(1)
    },
    card: {
        backgroundColor: theme.palette.background.default,
    }
}))

const DialogTransition = React.forwardRef(function DialogTransition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddLocation() {
    const style = useStyles()
    const [previewDiag, setPreviewDiag] = React.useState(false)
    const [previewOptions, setPreviewOptions] = React.useState(undefined)
    const [markerSubs] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [newMarker, setNewMarker] = React.useState(false)
    const [errorPreview, setErrorPreview] = React.useState('')
    const [markerSubDiag, setMarkerSubDiag] = React.useState(false)
    const [markerSubType, setMarkerSubType] = React.useState("iconWarn1")


    function selectLocationHandler() {
        if(newMarker !== true) {
            setErrorPreview('')
            setPreviewDiag(false)
            setMarkerSubDiag(true)
            console.log(newMarker)
        } else {
            setErrorPreview('Alege o locatie valida')
        }
    }


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
                                                    setPreviewDiag(true)
                                                    setNewMarker(false)
                                                    setPreviewOptions({
                                                        position: content.position,
                                                        icon: content.icon,
                                                        text: content.title
                                                    })
                                                }}>
                                                    <VisibilityIcon/>
                                                </IconButton>
                                            </ListItemSecondaryAction>
                                        </ListItem>        
                                    ))}
                                </List>
                                <IconButton onClick={()=>{
                                    setPreviewDiag(true)
                                    setErrorPreview('')
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
                
                <PreviewDiag 
                    style={style}
                    newMarker={newMarker}
                    setNewMarker={setNewMarker}
                    previewDiag={previewDiag}
                    previewOptions={previewOptions}
                    setPreviewDiag={setPreviewDiag}
                    errorPreview={errorPreview}
                    selectLocationHandler={selectLocationHandler}
                    />
                <MarkerSubDiag
                    style={style}
                    setPreviewOptions={setPreviewOptions}
                    previewOptions={previewOptions}
                    errorPreview={errorPreview}
                    markerSubDiag={markerSubDiag}
                    setMarkerSubDiag={setMarkerSubDiag}
                    newMarker={newMarker}
                    markerSubType={markerSubType}
                    setMarkerSubType={setMarkerSubType}
                    selectLocationHandler={selectLocationHandler}
                    />
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

function PreviewDiag(props){
    return(
        <Dialog TransitionComponent={DialogTransition} fullScreen onClose={() => {
            props.setPreviewDiag(false)
        }} open={props.previewDiag}>
            <AppBar position='relative' color='default'>
                <Toolbar>
                    {props.newMarker &&
                        <Button variant='outlined' onClick={props.selectLocationHandler}>Alege Locatia</Button>
                    }
                    <span className={props.style.errorPreview}>{props.errorPreview}</span>
                    <IconButton edge='end' onClick={() => props.setPreviewDiag(false)}>
                        <ExpandMoreIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <DialogContent>
                <MiniMap previewOptions={props.previewOptions} setMarker={props.setNewMarker} mapStyle={{
                    width: '100%',
                    height: '100%'
                }} />
            </DialogContent>
        </Dialog>
    )
}

function MarkerSubDiag(props){

    return(
        <Dialog TransitionComponent={DialogTransition} fullScreen onClose={() => {
            props.setMarkerSubDiag(false)
        }} open={props.markerSubDiag}>
            <AppBar position='relative' color='default'>
                <Toolbar>
                    <Button variant='outlined' onClick={props.selectLocationHandler}>Trimite</Button>
                    <span className={props.style.errorPreview}>{props.errorPreview}</span>
                    <IconButton edge='end' onClick={() => props.setMarkerSubDiag(false)}>
                        <ExpandMoreIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <DialogContent>
                <Grid
                    direction='column'
                    justify='flex-start'
                    alignItems='center'
                    container>
                    <Card className={props.style.card}>
                        <CardContent>
                            <Grid
                                alignItems='center'
                                justify='center'
                                direction='row'
                                spacing={5}
                                container
                            >
                                <Grid item xs={6}>
                                    <TextField
                                        required
                                        label='Titlu'
                                        helperText='Numele care va aparea pe harta' />
                                    <TextField
                                        type='number'
                                        InputProps={{ inputProps: { min: 0, max: 10 } }}
                                        required
                                        label='Raza'
                                        helperText='Raza inconjuratoare a punctului' />
                                    <MiniMap
                                        previewOptions={{
                                            position: [props.newMarker.lat, props.newMarker.lng],
                                            icon: props.markerSubType
                                        }}
                                        mapStyle={{
                                            marginTop: '1rem',
                                            width: 'auto',
                                            height: '10rem'
                                        }}/>
                                    <FormHelperText>Asa va arata punctul pe harta</FormHelperText>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl component="fieldset" required>
                                        <FormLabel>Tip</FormLabel>
                                        <RadioGroup value={props.markerSubType} onChange={e=>props.setMarkerSubType(e.target.value)}>
                                            <FormControlLabel value="iconWarn1" control={<Radio color='primary' />} label="Pericol scazut" />
                                            <FormControlLabel value="iconWarn2" control={<Radio color='primary' />} label="Pericol mediu" />
                                            <FormControlLabel value="iconWarn3" control={<Radio color='primary' />} label="Pericol ridicat" />
                                            <FormControlLabel value="iconMeeting" control={<Radio color='primary' />} label="Loc de intalnire" />
                                            <FormControlLabel value="iconInterest" control={<Radio color='primary' />} label="Interes" />
                                            <FormControlLabel value="iconRestricted" control={<Radio color='primary' />} label="Restrictionat" />
                                        </RadioGroup>
                                        <FormHelperText>Iconita care va aparea pe harta</FormHelperText>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </DialogContent>
        </Dialog>
    )
}