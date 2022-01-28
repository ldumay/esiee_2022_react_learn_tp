import { Col, Container, Row } from 'react-bootstrap'
import 'react-phone-number-input/style.css'
import JsonFileService from '../service/JsonFileHandler';
import Header from './Header'
//const [inputEmail, setEmail] = useState();

function RegisterCheckUser(props) {
	const userInJson = JsonFileService.getUserRegisteredList();

	function Checkmail() {
		console.log(userInJson);
		if (userInJson.includes(props.inputEmail)) {
			console.log("Utilisateur existant");
			//here call component register and change the URL
		}
		else {
			console.log("Email non existant, bienvenue sur notre site !");
			//call component quiz and change the URL
		}
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
			{Checkmail()}
		</div>
	)
}
export default RegisterCheckUser