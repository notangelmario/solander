import React from 'react'
import CardContent from '@material-ui/core/CardContent'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Link from '@material-ui/core/Link'


const useStyles = makeStyles(theme=>({
	root: {
		paddingTop: theme.spacing(6),
		paddingBottom: theme.spacing(9),
		width: '100%'
	},
	card: {
		backgroundColor: theme.palette.error.dark,
		color: theme.palette.error.contrastText
	}
}))


export default function InfoPage() {
	const style = useStyles()
	return (
		<Grid
			className={style.root}
			direction='column'
			justify='flex-start'
			alignItems='center'
			container
			>
			<Grid item xs={11} md={8} lg={6}>
				<Card className={style.card}>
					<CardContent>
						<Typography>
							<strong>Atentie! </strong>
							Solander este încă în faza de dezvoltare.
							Acesta poate fii folosit de oricine totuși funcțiile acestuia sunt limitate locuitorilor din Ciorogârla.
						</Typography>
					</CardContent>
				</Card>
				<br/>
				<Typography>
					Aceștia sunt termenii de utilizare și confidențialitate, 
					mici notițe despre aplicație și avertizări:
				</Typography>
				<List>
					<ListItem>
						<ListItemText>
							- Solander colecționeaza date anonime pentru a menține control asupra folosirii aplicației. Această baza de date este reîmprospătată săptamânal
						</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemText>
							- Folosim cookie-uri, totuși acestea sunt pentru a-ți personaliza experiența.<span aria-label="" role="img">⭐</span>
						</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemText>
							- Este interzis: <span aria-label="" role="img">🙅</span>
							<br/>
							<ul style={{listStylePosition: 'inside'}}>
								<li>Folosirea API-urilor fără permisiune</li>
								<li>Abuzarea serviciilor oferite</li>
								<li>Copierea și/sau lansarea sub alt nume</li>
								<li>Exploatarea vulnerabilitaților</li>
							</ul>
						</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemText>
							- Încurajam cu drag feedback-ul. Dacă gasești probleme în aplicație sau dacă ai o sugestie, poți să ne trimiți un mesaj pe <Link href="https://facebook.com/solander.map">Facebook</Link>.
						</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemText>
							- Dacă vrei să ajuți la dezvoltarea proiectului Solander, intră pe pagina de <Link href="https://github.com/clandestinz/solander">Github</Link> pentru mai multe detalii.
						</ListItemText>
					</ListItem>
				</List>
			</Grid>
		</Grid>
    )
}
