import '../../styles/Questionnaire.scss'
import { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Question from '../models/Question'
import Header from './Header'
import QuestionsGenerator from '../controllers/QuestionsGenerator'

function Questionnaire(){  
    const [currentQuestion, updateCurrentQuestion] = useState(0) 
    const showQuestion = new Question()
    var questionsGenerator = new QuestionsGenerator()
    
    console.log(questionsGenerator)

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
                            {questionsGenerator.map((question, index) => (
                                <div key={question.id}>
                                    <h3><u>{question.Text}</u></h3>
                                    <Form>
                                        <Row>
                                            {question.answers.map((answer, index) => (
                                                <Col md="12">
                                                    {['radio'].map((type) => (
                                                    <div key={`inline-${type}`}>
                                                        <Form.Check
                                                            inline
                                                            label={answer}
                                                            name="choix"
                                                            type={type}
                                                            id={`inline-${type}-1`}
                                                        />
                                                    </div>
                                                    ))}
                                                </Col>
                                            ))}
                                        </Row>
                                    </Form>
                                </div>
                            ))}
                        </Col>
                    </Row>
                    <Row className="questionnaireButtons">
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
                            <p>Question actuel : {currentQuestion}</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}
export default Questionnaire