import { Col, Container, Row } from 'react-bootstrap'
import 'react-phone-number-input/style.css'
import JsonFileService from '../service/JsonFileHandler';
import Header from './Header'

import { useNavigate } from 'react-router-dom';

function RegisterCheckUser(props) {
	const userInJson = JsonFileService.getUserRegisteredList();
	const navigate = useNavigate();

	function infosUser() {
		if (props.currentUser === undefined) {
			console.log('Utilisateur non défini, veuillez réessayer');
			return (
				<div className="page">
					<p>Erreur lors de l'inscription, veuillez réessayer</p>
					<button type="button" onClick={() => { navigate('/register', { replace: true }) }}> Retour à l'inscription </button>
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
							<p>Mail : {props.currentUser.inputEmail}</p>
						</Col>
					</Row>
					<button type="button" onClick={(e) => Checkmail()}> Next page </button>
				</div>
			);
		}
	}


	function Checkmail() {
		let nextPage;

		console.log(userInJson);
		console.log(JsonFileService.getQuestionList());
		if (userInJson.includes(props.currentUser.mail)) {
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