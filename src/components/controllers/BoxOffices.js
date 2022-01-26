import React from 'react';
import axios from 'axios';
import { useState } from 'react';

function BoxOffices() {

	const[films, setFilms] = useState(null)
	const domain = "https://imdb-api.com/en/API"
	const boxOfficeUrl = "/BoxOffice/k_hiba3sak";
	const filmUrl = "Title/k_hiba3sak/"

	var newTab = []
	const[movie, setFilm] = useState()

	const fetchData = async () => {
		const response = await axios.get(domain+boxOfficeUrl);

		setFilms(response.data.items);
		
		films.map(async (film, index) => {
			const response = await axios.get(domain + filmUrl + film.id)
			setFilm(response.data)
			newTab.push(movie)
		});
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
					const id = film.id;
					const rank = film.rank;
					//const cleanedDate = new Date(film.released).toDateString();
					const titles = film.title;

					return (
					<div className="film" key={index}>
						<h3>Film {index + 1}</h3>
						<h2>{film.title}</h2>

						<div className="details">
						<p>👨: {titles}</p>
						<p>📖: {film.weekend} over the weekend</p>
						<p>🏘️: {film.gross} total</p>
						<p>⏰: {film.weeks} weeks in theatres</p>
						</div>
					</div>
					);
				})}
			</div>
  
		</div>
	  )
} 
export default BoxOffices