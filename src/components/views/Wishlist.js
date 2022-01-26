import '../../styles/Catalog.scss'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Film from "../models/Film"
import FilmsInfos from "../views/FilmsInfos"
import Header from "./Header"

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
                        {filmList.map((film) => (
                            <div className="catalog" key={`${film.id}-${film.nom}`} style={{ border: "1px, black" }}>
                                
                                {/* <FilmsInfos film={film} /> */}

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
                                    <Button variant="danger" className="btnSupprFilm">
                                        Retirer
                                    </Button>
                                </Col>

                            </div>
                        )
                        )}

                    </Row>
                </div>
            </Container>
        </div>
	)
}
export default Wishlist