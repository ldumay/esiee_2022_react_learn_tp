import { Col, Container, Row } from 'react-bootstrap'
import 'react-phone-number-input/style.css'
import JsonFileService from '../service/JsonFileHandler';
import Header from './Header'
//import Questionnaire from './Questionnaire'

import {useNavigate} from 'react-router-dom';

function RegisterCheckUser(props){
	const userInJson = JsonFileService.getUserRegisteredList();
    const navigate = useNavigate();

    function Checkmail() {
        let nextPage;

		console.log(userInJson);
		if (userInJson.includes(props.inputEmail)) {
            console.log("Email non existant, bienvenue sur notre site !");
            props.setHeaderMessage("")
            nextPage = '/questions'
        }
        else {
            console.log("Utilisateur existant");
            nextPage = '/register'
            props.setHeaderMessage("WARNING utilisateur existante")
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
                            <p>Mail : {props.inputEmail}</p>
                        </Col>
                    </Row>
                </div>
            </Container>
            <button type="button" onClick={(e) => Checkmail()}> Next page </button>
        </div>
    )
}
export default RegisterCheckUser