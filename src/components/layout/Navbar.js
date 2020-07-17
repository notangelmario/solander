import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import AppBar from '@material-ui/core/AppBar'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import ExploreIcon from '@material-ui/icons/Explore'
import InfoIcon from '@material-ui/icons/Info'
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import Brightness4RoundedIcon from '@material-ui/icons/Brightness4Rounded';

const useStyles = makeStyles((theme)=>({
	root: {
		top: 'auto',
		bottom: 0,
        borderRadius: '1rem 1rem 0 0'
	},
	nav: {
		backgroundColor: 'transparent'
	}
}))

export default function Navbar(props) {
	const style = useStyles()
	const pathname = window.location.pathname
	const [currentPage, setCurrentPage] = React.useState(pathname)
	const history = useHistory()

	return(
		<AppBar color='default' position='fixed' className={style.root}>
			<BottomNavigation showLabels className={style.nav} value={currentPage}
				onChange={(event, newValue) => {
					if(newValue !== 'noSwitch'){
						setCurrentPage(newValue)
					}
				}
				}>
				<BottomNavigationAction
					onClick={()=>history.push('/')}
					value='/'
					label='Hartă'
					icon={<ExploreIcon/>}/>
				<BottomNavigationAction
					onClick={()=>history.push('/info')}
					value='/info'
					label='Info' 
					icon={<InfoIcon/>}/>
				<BottomNavigationAction
					value='noSwitch'
					label='Cont' 
					icon={<AccountCircleRoundedIcon/>}/>
				<BottomNavigationAction
					value='noSwitch'
					label='Temă' 
					icon={<Brightness4RoundedIcon/>}/>		
			</BottomNavigation>
		</AppBar>
	)
}