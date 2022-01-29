import '../../styles/Catalog.scss'
import { Col, Container, Row } from 'react-bootstrap'
import Header from './Header'
import "../../styles/FilmListStyles.scss";
import { Link } from 'react-router-dom';


function Catalog(props) {


	return (
		<div>
			<Header />
			<Container>
				<Row>
					<div className="page">
						<h1>Films going out soon</h1>

						{/* Display data from API */}
						<div className="films">
							{props.films &&
								props.films.map((film, index) => {
									console.log({index})
									return (
										<div className="film" key={index}>
											<h3>Film {index + 1}</h3>
											<h2>{film.title}</h2>
											<Link to={{ pathname: "/film-infos", state: {id: {index}}}}>
												<img src={film.image} alt="Affiche" />
											</Link>
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
				</Row>
			</Container>
		</div>
	)
}
export default Catalog