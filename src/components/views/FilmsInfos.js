import '../../styles/FilmsInfos.scss'
import { Col, Container, Row, Table } from 'react-bootstrap';
import Film from '../models/Film';
import Header from './Header';

function FilmsInfos({film}) {
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
								src={film.imageUrl}
							/>
						</Col>
						<Col md="7">
							<Row>
								<Table responsive>
									<tbody>
										<tr>
											<td className="leftElements"><p><b>Titre original : </b></p></td>
											<td><p>{film.nom}</p></td>
										</tr>
										<tr>
											<td className="leftElements"><p><b>Date :</b></p></td>
											<td><p>{film.dateSortie}</p></td>
										</tr>
										<tr>
											<td className="leftElements"><p><b>Public :</b></p></td>
											<td><p>Tous publics</p></td>
										</tr>
										<tr>
											<td className="leftElements"><p><b>Durée :</b></p></td>
											<td><p>1h 57min</p></td>
										</tr>
										<tr>
											<td className="leftElements"><p><b>Réalisation :</b></p></td>
											<td><p>Bob Persichetti - Peter Ramsey - Rodney Rothman</p></td>
										</tr>
										<tr>
											<td className="leftElements"><p><b>Sénario :</b></p></td>
											<td><p>Phil Lord - Rodney Rothman</p></td>
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
											<td><p>{film.description}</p></td>
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