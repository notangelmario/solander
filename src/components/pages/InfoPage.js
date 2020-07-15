import React from 'react'
import './infoPage.css'

export default function InfoPage() {
    return (
        <div id='page'>
			<section>
        	    <p><strong>ATENȚIE!</strong> Solander este înca în faza de dezvoltare. Acesta poate fii folosit de oricine totuși funcțiile acestuia sunt limitate locuitorilor din Ciorogârla.</p>
        	</section>
	    	<p>Aceștia sunt termenii de utilizare și confidențialitate, mici notițe despre aplicație și planuri:</p>
		    <ol>
		    	<li>Solander colecționeaza date anonime pentru a menține control asupra folosirii aplicației. Această baza de date este reîmprospătată săptamânal.</li>
		    	<li>Folosim cookie-uri, totuși acestea sunt pentru a-ți personaliza experiența.<span aria-label='' role='img'>⭐</span></li>
		    	<li>Este interzis <span aria-label='' role='img'>🙅</span></li>
				<ul>
				    <li>Folosirea API-urilor fără permisiune</li>
				    <li>Abuzarea serviciilor oferite</li>
				    <li>Copierea și/sau lansarea sub alt nume</li>
				    <li>Exploatarea vulnerabilitaților</li>
				</ul>
		    	<li>Încurajam cu drag feedback-ul. Dacă gasești probleme în aplicație sau dacă ai o sugestie, poți să ne trimiți un mesaj pe <a href="https://facebook.com/solander.map">Facebook</a> sau <a href='https://github.com/clandestinz/solander'>Github</a>.</li>
	    		<li>Dacă vrei să ajuți la dezvoltarea proiectului Solander, intră pe pagina de <a href='https://github.com/clandestinz/solander'>Github</a> pentru mai multe detalii.</li>
			</ol>
			<div className='e-watermark'></div>
			<br/>
    </div>
    )
}
