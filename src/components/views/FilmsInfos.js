import '../../styles/FilmsInfos.scss'
import { Col, Container, Row, Table } from 'react-bootstrap';
import Header from './Header';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function FilmsInfos(props) {
	
	let film = props.film

	return (
		<div>
			<Header />
			<Container>
				<div className="page">
					<Row>
						<Col md="5">
							<img
								className="imageUrl"
								alt="Affiche du film"
								src={film.image}
							/>
						</Col>
						<Col md="7">
							<Row>
								<Table responsive>
									<tbody>
										<tr>
											<td className="leftElements"><p><b>Titre original : </b></p></td>
											<td><p>{film.title}</p></td>
										</tr>
										<tr>
											<td className="leftElements"><p><b>Date :</b></p></td>
											<td><p>{film.releaseState} {film.year}</p></td>
										</tr>
										<tr>
											<td className="leftElements"><p><b>Public :</b></p></td>
											<td><p>{film.contentRating}</p></td>
										</tr>
										<tr>
											<td className="leftElements"><p><b>Durée :</b></p></td>
											<td><p>{film.runtimeStr}</p></td>
										</tr>
										<tr>
											<td className="leftElements"><p><b>Réalisation :</b></p></td>
											<td><p>{film.directors}</p></td>
										</tr>
										<tr>
											<td className="leftElements"><p><b>Acteurs :</b></p></td>
											<td><p>{film.stars}</p></td>
										</tr>
										<tr>
											<td className="leftElements"><p><b>Description :</b></p></td>
											<td><p>{film.plot}</p></td>
										</tr>
									</tbody>
								</Table>
							</Row>
							<Row>
								<form>
									<Link to="/catalog">
										<input type="submit" value="Retour" />
									</Link>
								</form>
							</Row>
						</Col>
					</Row>
					<Footer />
				</div>
			</Container>
		</div>
	)
}
export default FilmsInfos