import { Col, Container, Row } from 'react-bootstrap'
import 'react-phone-number-input/style.css'
import JsonFileService from '../service/JsonFileHandler';
import Header from './Header'

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function RegisterCheckUser(props) {
	const userInJson = JsonFileService.getUserRegisteredList();
	const navigate = useNavigate();

	if (props.currentUser === undefined) {
		console.log('Utilisateur non défini, veuillez réessayé');
		useEffect(navigate('/register', {replace : true}));
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
		navigate(nextPage);

	}

	return (
		<div>
			<Header />
			<Container>
				<div className="page">
					<Row>
						<Col>
							<h1>CheckUser Sheet</h1>
							<p>Mail : {props.currentUser.inputEmail}</p>
						</Col>
					</Row>
				</div>
			</Container>
			<button type="button" onClick={(e) => Checkmail()}> Next page </button>
		</div>
	)
}
export default RegisterCheckUser