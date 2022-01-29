import '../../styles/FilmsInfos.scss'
import { Col, Container, Row, Table } from 'react-bootstrap';
import Header from './Header';

function FilmsInfos(props) {
	
	let film = props.films[6]

	return (
		<div>
			<Header />
			<Container>
				<div className="page">
					<Row>
						<Col md="5">
							<img
								className="imageUrl"
								alt="Affiche du props.film"
								src={props.film.image}
							/>
						</Col>
						<Col md="7">
							<Row>
								<Table responsive>
									<tbody>
										<tr>
											<td className="leftElements"><p><b>Titre original : </b></p></td>
											<td><p>{props.film.title}</p></td>
										</tr>
										<tr>
											<td className="leftElements"><p><b>Date :</b></p></td>
											<td><p>{props.film.releaseState} {props.film.year}</p></td>
										</tr>
										<tr>
											<td className="leftElements"><p><b>Public :</b></p></td>
											<td><p>{props.film.rating}</p></td>
										</tr>
										<tr>
											<td className="leftElements"><p><b>Durée :</b></p></td>
											<td><p>{props.film.runTimeStr}</p></td>
										</tr>
										<tr>
											<td className="leftElements"><p><b>Réalisation :</b></p></td>
											<td><p>{props.film.directors}</p></td>
										</tr>
										<tr>
											<td className="leftElements"><p><b>Acteurs :</b></p></td>
											<td><p>{props.film.stars}</p></td>
										</tr>
										<tr>
											<td className="leftElements"><p><b>Lien :</b></p></td>
											<td>
												<p>
													<a
														href="https://www.imdb.com/title/tt4633694/"
														target="_blank"
														rel="noreferrer"
													>IMDB</a>
												</p>
											</td>
										</tr>
										<tr>
											<td className="leftElements"><p><b>Description :</b></p></td>
											<td><p>{props.film.plot}</p></td>
										</tr>
									</tbody>
								</Table>
							</Row>
						</Col>
					</Row>
				</div>
			</Container>
		</div>
	)
}
export default FilmsInfos