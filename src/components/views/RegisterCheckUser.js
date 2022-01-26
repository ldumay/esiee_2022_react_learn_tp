import { Col, Container, Row } from 'react-bootstrap'
import 'react-phone-number-input/style.css'
import Header from './Header'
//const [inputEmail, setEmail] = useState();

function RegisterCheckUser(props){
    const userInJson = "TOTO@TOTO.fr"

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
        </div> 
    )
}
export default RegisterCheckUser