import '../../styles/Catalog.scss'
import { Col, Container, Row } from 'react-bootstrap'
import Header from './Header'

function Catalog() {
	return (
		<div>
        <Header />
        <Container>
            <div className="page">
                <Row>
                    <div className="catalog">

                        {/* Modèle d'une affiche de film */}
                        <Col md="3" className="choixFilm">
                            <a href="#"
                                >
                                <div className="choixFilmItem">
                                    <img
                                        className="imageUrl"
                                        alt="imageUrl"
                                        src="https://images-na.ssl-images-amazon.com/images/I/91Rk2MjVnyL._RI_.jpg"
                                    />
                                    <h3>Film #1</h3>
                                </div>
                            </a>
                        </Col>

                    </div>
                </Row>
            </div>
        </Container>
        </div>
	)
}
export default Catalog