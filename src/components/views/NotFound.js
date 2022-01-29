import { Container, Row, Col } from "react-bootstrap"
import Header from "./Header"
import '../../styles/NotFound.scss'
import imageNotFound from '../../images/image_404.gif';
import Footer from "./Footer";

function NotFound(){

    return (
        <div>
            <Header />
            <Container>
                <div className="page">
                    <Row>
                        <Col className="notFound">
                            <h1>Page non trouvé !</h1>
                            <br/>
                            <img
                                alt="image_not_found"
                                src={imageNotFound}
                                />
                            <br/><br/>
                            <p>
                                La page recherché n'existe pas.
                                <br/> Merci de revenir sur l'
                                <a className="App-link"
                                    href="/"
                                    //target="_blank"
                                    rel="noopener noreferrer"
                                >accueil</a>.
                            </p>
                        </Col>
                    </Row>
                    <Footer />
                </div>
            </Container>
        </div>
    )
}
export default NotFound