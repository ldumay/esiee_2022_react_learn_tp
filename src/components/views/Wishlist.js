import '../../styles/Catalog.scss'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Film from "../models/Film"
import FilmsInfos from "../views/FilmsInfos"
import Header from "./Header"
import Footer from './Footer'

function Wishlist(currentUser) {
	//let filmList = currentUser.filmList;

	let filmList = [
		{
			id: 1,
			nom: "Film",
			imageUrl: "img.png",
			genre: "action",
			dateSortie: new Date(2022, 1, 26).toDateString(),
			description: "description",
			ratio: 15
		},
		{
			id: 2,
			nom: "Film",
			imageUrl: "img.png",
			genre: "action",
			dateSortie: new Date(2022, 1, 26).toDateString(),
			description: "description",
			ratio: 25
		}
	]

	return (
        <div>
            <Header />
            <Container>
                <div className="page">
                    <Row>
                        {/* Liste des films affichés */}
                        <div className="catalog">

                            {/* Boucle */}
                            {filmList.map((film) => (

                                /* <FilmsInfos film={film} /> */
                                
                                /* Modèle d'une affiche de film */

                                <Col md="3" className="choixFilm" key={`${film.id}-${film.nom}`}>
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
                                    <Button variant="danger" className="btnSupprFilm">
                                        Retirer
                                    </Button>
                                </Col>
                            )
                            )}

                        </div>
                    </Row>
                    <Footer />
                </div>
            </Container>
        </div>
	)
}
export default Wishlist