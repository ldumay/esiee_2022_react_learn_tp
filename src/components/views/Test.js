import '../../styles/Pages.scss'
import { Container, Row } from "react-bootstrap";
import Header from "./Header";
import axios from 'axios';
import { useState, useEffect } from 'react';
import "../../styles/FilmListStyles.scss";

function Test(){
	const[films, setFilms] = useState()
	const domain = "https://imdb-api.com/en/API"
	const comingSoonUrl = "/ComingSoon/k_hiba3sak";

	var movieList = []
	const[movie, setFilm] = useState()

	const fetchData = async () => {
		const response = await axios.get(domain+comingSoonUrl);

		setFilms(response.data.items);
	}
	useEffect(() => {
		// write your code here, it's like componentWillMount
		fetchData();
	}, [])

    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <div className="page">
						<div className="BoxOffices">
			<h1>Films that made it big</h1>
			<h2>Fetch a list from an API and display it</h2>
  
			{/* Fetch data from API 
			<div>
				<button className="fetch-button" onClick={fetchData}>
				Fetch Data
				</button>
			</div>*/}

		  	{/* Display data from API */}
			  <div className="films">
				{films && fetchData &&
				films.map((film, index) => {
					const id = film.id;
					const rank = film.rank;
					//const cleanedDate = new Date(film.released).toDateString();
					const titles = film.title;

					return (
					<div className="film" key={index}>
						<h3>Film {index + 1}</h3>
						<h2>{film.title}</h2>
						<img src={film.image} alt="Affiche"	/>
						<div className="details">
						<p>👨: {film.directors}</p>
						<p>📖: {film.releaseState} {film.year}</p>
						<p>⏰: {film.runtimeStr}</p>
						<p>{film.plot}</p>
						</div>
					</div>
					);
				})}
			</div>
  
		</div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}
export default Test