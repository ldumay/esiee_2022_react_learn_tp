import { Container, Row } from "react-bootstrap"
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
		},
		{
			id: 3,
			nom: "Film",
			imageUrl: "img.png",
			genre: "action",
			dateSortie: new Date(2022, 1, 26).toDateString(),
			description: "description",
			ratio: 35
		},
	]

	return (
        <div>
            <Header />
            <Container>
                <div className="page">
                    <Row>
                        {filmList.map((film) => (
                            <li key={`${film.id}-${film.nom}`} style={{ border: "1px, black" }}>
                                <FilmsInfos film={film} />
                            </li>
                        )
                        )}
                    </Row>
                </div>
            </Container>
        </div>
	)
}
export default Wishlist