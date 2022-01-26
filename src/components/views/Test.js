import '../../styles/Pages.scss'
import { Container, Row } from "react-bootstrap";
import Header from "./Header";
import BoxOffices from '../controllers/BoxOffices';

function Test(){

    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <div className="page">
						{BoxOffices()}
                    </div>
                </Row>
            </Container>
        </div>
    )
}
export default Test