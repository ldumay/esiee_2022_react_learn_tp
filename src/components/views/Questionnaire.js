import '../../styles/Questionnaire.scss'
import { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import {data} from '../../datas/Quiz'
import Question from '../models/Question'
import Header from './Header'

function Questionnaire(){  
    const [currentQuestion, updateCurrentQuestion] = useState(0) 
    const showQuestion = new Question()
    return( 
        <div>
            <Header />
            <Container>
                <div className="page">
                    <Row className="questionnaireTop">
                        <Col>
                            <h1>{showQuestion.text}</h1>
                        </Col>
                    </Row>
                    <Row className="questionnaireContent">
                        <Col>
                            <div>
                                <Button 
                                    variant="outline-secondary"
                                    onClick={()=>updateCurrentQuestion(currentQuestion-1)}
                                >
                                    Question précédente
                                </Button>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <Button 
                                    variant="outline-secondary"
                                    onClick={()=>updateCurrentQuestion(currentQuestion+1)}
                                >
                                    Question suivante
                                </Button>
                            </div>
                        </Col>
                    </Row>
                    <Row className="questionnaireBottom">
                        <Col>
                            <p>on est à la question : {currentQuestion}</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}
export default Questionnaire