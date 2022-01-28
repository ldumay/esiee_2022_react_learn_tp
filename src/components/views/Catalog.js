import '../../styles/Catalog.scss'
import { Col, Container, Row } from 'react-bootstrap'
import Header from './Header'
import "../../styles/FilmListStyles.scss";


function Catalog(props) {
	/*const [films, setFilms] = useState()
	const domain = "https://imdb-api.com/en/API"
	const comingSoonUrl = "/ComingSoon/k_hiba3sak";

	const fetchData = async () => {
		const response = await axios.get(domain + comingSoonUrl);

		setFilms(response.data.items);
	}
	useEffect(() => {
        // write your code here, it's like componentWillMount
        fetchData();
    }, [])*/

	return (
		<div>
			<Header />
			<Container>
				<Row>
					<div className="page">
						<div className="BoxOffices">
							<h1>Films going out soon</h1>

							{/* Display data from API */}
							<div className="films">
								{props.films &&
									props.films.map((film, index) => {
										return (
											<div className="film" key={index}>
												<h3>Film {index + 1}</h3>
												<h2>{film.title}</h2>
												<img src={film.image} alt="Affiche" />
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
export default Catalog