import { Col, Container, Row } from 'react-bootstrap'
import 'react-phone-number-input/style.css'
import Header from './Header'
//import Questionnaire from './Questionnaire'
//const [inputEmail, setEmail] = useState();

import {useNavigate} from 'react-router-dom';

function RegisterCheckUser(props){
    const userInJson = "TOTO@TOTO.fr"
    
    const navigate = useNavigate();

    function handleClick() {
        let nextPage;

        if (props.inputEmail !== userInJson){
            console.log("Email non existant, bienvenue sur notre site!!!!!!!!");
            props.setHeaderMessage("")
            nextPage = '/questions'
            navigate(nextPage);
        }
        else {
            console.log("Utilisateur existant");
            nextPage = '/register'
            props.setHeaderMessage("WARNING utilisateur existante")
            navigate(nextPage);
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
            <button type="button" onClick={(e) => handleClick()}> Next page </button>
        </div> 
    )
}
export default RegisterCheckUser