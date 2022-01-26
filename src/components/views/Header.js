import '../../styles/Header.scss'
import { Link, useLocation } from "react-router-dom"
import { Col, Row } from 'react-bootstrap';

function Header() {

	var currentPage = "";
	const page = useLocation()
	switch(page.pathname){
		case "/": currentPage = "Accueil"; break;
		case "/register": currentPage = "Accueil"; break;
		//--> cas questionnaire
		case "/result": currentPage = "Résultat du qestionnaire"; break;
		case "/films": currentPage = "Liste de films"; break;
		case "/film-infos": currentPage = "Informations de film"; break;
		case "/wishlist": currentPage = "Liste d'envie"; break;
	}

	return (
		<header>
			<Row>
				<Col>
					<Link to="/" title="Retour à l'accueil" alt="Retour à l'accueil">Accueil</Link>
				</Col>
				<Col>
					<h1>Title Project</h1>
				</Col>
				<Col></Col>
			</Row>
			<hr/>
			<Row>
				<Col>
					<h2>{currentPage}</h2>
				</Col>
			</Row>
		</header>
	)
}
export default Header