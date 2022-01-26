import { Col, Container, Row } from 'react-bootstrap'
import '../../styles/Catalog.scss'
import Header from './Header'

function Catalog() {
	return (
		<div>
        <Header />
        <Container>
            <div className="page">
                <Row>
                    <Col>
                        <p>demo</p>
                    </Col>
                </Row>
            </div>
        </Container>
        </div>
	)
}
export default Catalog