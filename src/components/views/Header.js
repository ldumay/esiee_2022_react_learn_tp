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
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/register">S'enregistrer</Link>
				</li>
				<li>
					<Link to="/result">Résultat</Link>
				</li>
				<li>
					<Link to="/films">Films</Link>
				</li>
				<li>
					<Link to="/film-infos">Films Infos</Link>
				</li>
				<li>
					<Link to="/wishlist">Liste de souhait</Link>
				</li>
			</ul>
		</nav>
	)
}
export default Header