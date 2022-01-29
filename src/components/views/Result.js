import '../../styles/Pages.scss'
import { Button, Col, Container, Row } from "react-bootstrap";
import Header from "./Header";
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Result(props){
    console.log("totalGoodResponse : "+props.totalGoodResponse)

    return (
        <div>
            <Header />
            <Container>
                <div className="page">
                    <Row>
                        <Col align="center">
                            <h1>Merci !</h1>
                            <h2>Questionnaire terminé :</h2>
                            <p>Vous avez réussi {props.totalGoodResponse}/5.</p>
                            <Link to="/catalog">
                                <Button
                                    type="submit"
                                    variant="success"
                                    //onClick={}
                                >
                                    Voir le catalogue de films
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                    <Footer />
                </div>
            </Container>
        </div>
    )
}
export default Result