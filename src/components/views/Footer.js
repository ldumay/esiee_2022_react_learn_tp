import '../../styles/Header.scss'
import { Col, Row } from 'react-bootstrap';

function Footer(props) {

	return (
		<footer>
			<hr />
			<Row className="forceWdithFull">
				<Col>
					<p className="production">
                        Réalisé par :
                        <br/>Maxence HENNEKEIN - Bilal MOUHIB - Chen ZHIHAO
                        <br/>Loïc DUMAY - Quentin NARDY"
                    </p>
				</Col>
			</Row>
		</footer>
	)
}
export default Footer