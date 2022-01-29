import { Button, Col, Container, Row } from 'react-bootstrap'
import 'react-phone-number-input/style.css'
import JsonFileService from '../service/JsonFileHandler';
import Header from './Header'

import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

function RegisterCheckUser(props) {
	const userInJson = JsonFileService.getUserRegisteredList();
	const navigate = useNavigate();

	function infosUser() {
		console.log(props.currentUser);
		if (props.currentUser === undefined) {
			console.log('Utilisateur non défini, veuillez réessayer');
			return (
				<div className="page">
					<Row>
						<Col align="center">
							<p>Erreur lors de l'inscription, veuillez réessayer</p>
							<Button variant="danger" type="button" onClick={() => { navigate('/register', { replace: true }) }}> Retour à l'inscription </Button>
						</Col>
					</Row>
					<Footer />
				</div>
			);
		} else {
			return (
				<div className="page">
					<Row>
						<Col>
							<h1>CheckUser Sheet</h1>
							<p>Nom : {props.currentUser.nom}</p>
							<p>Prénom : {props.currentUser.prenom}</p>
							<p>Mail : {props.currentUser.mail}</p>
						</Col>
					</Row>
					<button type="button" onClick={(e) => Checkmail()}> Next page </button>
					<Footer />
				</div>
			);
		}
	}


	function Checkmail() {
		let nextPage;

		console.log(userInJson);
		console.log(props.currentUser.mail);
		if (!userInJson.includes(props.currentUser.mail)) {
			console.log("Email non existant, bienvenue sur notre site !");
			props.setHeaderMessage("")
			nextPage = '/questions'
		}
		else {
			console.log("Utilisateur existant");
			props.setHeaderMessage("WARNING utilisateur existante")
			nextPage = '/register'
		}
		navigate(nextPage, {replace: true});
	}

	return (
		<div>
			<Header />
			<Container>
				{infosUser()}
			</Container>
		</div>
	)
}
export default RegisterCheckUser