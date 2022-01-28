import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import "../../styles/FilmListStyles.scss";

function BoxOffices() {

	const[films, setFilms] = useState()
	const domain = "https://imdb-api.com/en/API"
	const comingSoonUrl = "/ComingSoon/k_hiba3sak";

	const fetchData = async () => {
		const response = await axios.get(domain+comingSoonUrl);

		setFilms(response.data.items);
	}

	return (
		<div className="BoxOffices">
			<h1>Films that made it big</h1>
			<h2>Fetch a list from an API and display it</h2>
  
			{/* Fetch data from API */}
			<div>
				<button className="fetch-button" onClick={fetchData}>
				Fetch Data
				</button>
			</div>
		
		  	{/* Display data from API */}
			<div className="films">
				{films &&
				films.map((film, index) => {
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
	  )
} 
export default BoxOffices