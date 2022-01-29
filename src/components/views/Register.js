import '../../styles/Register.scss'
import 'react-phone-number-input/style.css'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useState } from "react"
import PhoneInput from 'react-phone-number-input'
import Header from './Header';
import { Link } from 'react-router-dom';
import User from '../models/User';


function Register(props) {
	const [inputFirstName, setFirstName] = useState()
	const [inputLastName, setLastName] = useState()
	const [inputAge, setage] = useState()
	const [inputPhone_number, setPhone_number] = useState()
	const [inputEmail, setEmail] = useState()

	function checkValue(type, value) {
		switch (type) {
			case "LastName":
				const LastName = value.replace(/[^a-zA-Z\s]/g, "");
				setLastName(LastName)
				//console.log(type,firstName)
				break

			case "firstName":
				const firstName = value.replace(/[^a-zA-Z\s]/g, "");
				setFirstName(firstName)
				//console.log(type,firstName)
				break

			case 'age':
				const age = value.replace(/[^0-9]/g, "");
				if (!isNaN(+value)) {
					if (age <= 122) {
						setage(age)
					}
					console.log(age)
				}
				break

			case 'email':
				const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				if (value.match(regEmail)) {
					setEmail(value)
					console.log("good format")

					console.log(props.inputEmail)
				}
				else {
					console.log("mauvais format")
				}
				break

			default:
				return
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		props.setUser(new User(inputLastName, inputFirstName, inputAge, inputEmail));

		console.log(`nom,       ${inputLastName}`,);
		console.log(`prénom,    ${inputFirstName}`,);
		console.log(`age,       ${inputAge}`,);
		console.log(`tel,       ${inputPhone_number}`,);
		console.log(`email,     ${inputEmail}`,);
	}

	function topMessage() {
		console.log(props.HeaderMessage);
	}

	return (
		<div>
			<Header />
			<Container>
				<div className="page">
					<Row>
						<Col md="2"></Col>
						<Col md="8">
							<Col align="center">
								<h1>{topMessage()} {props.HeaderMessage}</h1>
							</Col>
							<Form onSubmit={handleSubmit}>
								<Form.Group className="mb-3" controlId="formBasicPassword">
									<Form.Label>Nom</Form.Label>
									<Form.Control
										type="text"
										value={inputLastName}
										onChange={(e) => checkValue("LastName", e.target.value)}
										placeholder="Nom" />
								</Form.Group>

								<Form.Group className="mb-3" controlId="formBasicPassword">
									<Form.Label>Prénom</Form.Label>
									<Form.Control
										type="text"
										value={inputFirstName}
										onChange={(e) => checkValue("firstName", e.target.value)}
										placeholder="Prénom" />
								</Form.Group>

								<Form.Group className="mb-3" controlId="formBasicPassword">
									<Form.Label>Âge</Form.Label>
									<Form.Control
										type="text"
										value={inputAge}
										onChange={(e) => checkValue("age", e.target.value)}
										placeholder="Âge" />
								</Form.Group>

								<Form.Group className="mb-3" controlId="formBasicPassword">
									<Form.Label>Téléphone</Form.Label>
									<PhoneInput
										type="text"
										value={inputPhone_number}
										onChange={setPhone_number}
										maxLength={14}
										placeholder="Téléphone" />
								</Form.Group>

								<Form.Group className="mb-3" controlId="formBasicPassword">
									<Form.Label>E-mail</Form.Label>
									<Form.Control
										type="email"
										value={inputEmail}
										onChange={(e) => checkValue("email", e.target.value)}
										placeholder="E-mail" />
								</Form.Group>

								<Col align="center">
									<form onSubmit={handleSubmit}>
										<Link to="/register/Check_user">
											<input className="btn btn-success" type="submit" value="Valider l'inscription" />
										</Link>
									</form>
								</Col>
							</Form>
						</Col>
						<Col md="2"></Col>
					</Row>
				</div>
			</Container>
		</div>
	)
}
export default Register