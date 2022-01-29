import '../../styles/Catalog.scss'
import { Col, Container, Row } from 'react-bootstrap'
import Header from './Header'
import { Link } from 'react-router-dom';


function Catalog(props) {


	return (
		<div>
			<Header />
			<Container>
				<Row>
					<div className="page">
						<h1>Films going out soon</h1>
						<hr/>

						{/* Display data from API */}
						<div className="catalog">
							{props.films &&
								props.films.map((film, index) => {
									console.log({index})
									return (
										<Col md="3" className="choixFilm" key={index}>
											<Link to={{ pathname: "/film-infos", state: {id: {index}}}}>
												<div className="choixFilmItem">
												<img
													className="imageUrl"
													alt="Affiche"
													src={film.image}
													/>
													<h3>Film {index + 1}</h3>
													<h2>{film.title}</h2>
													{/*
													<div className="details">
														<p>👨: {film.directors}</p>
														<p>📖: {film.releaseState} {film.year}</p>
														<p>⏰: {film.runtimeStr}</p>
														<p>{film.plot}</p>
													</div>
													*/}
												</div>
											</Link>
										</Col>
									);
								})}

						</div>
					</div>
				</Row>
			</Container>
		</div>
	)
}
export default Catalog