import '../../styles/Questionnaire.scss'
import { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Question from '../models/Question'
import Header from './Header'
import QuestionsGenerator from '../controllers/QuestionsGenerator'

function Questionnaire(){  
    const [currentQuestion, updateCurrentQuestion] = useState(1)
    const showQuestion = new Question()
    var questionsGenerator = new QuestionsGenerator()
    
    console.log(currentQuestion)

    return( 
        <div>
            <Header />
            <Container>
                <div className="page">
                    <Row className="questionnaireTop">
                        <Col>
                            {currentQuestion>0 && currentQuestion<6 && 
                                <div>
                                    <h1>Question #{currentQuestion}</h1>
                                    <hr/>
                                </div>
                            }
                            <h3>{showQuestion.text}</h3>
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
                                {currentQuestion>1 &&
                                    <Button 
                                        variant="outline-secondary"
                                        onClick={()=>updateCurrentQuestion(currentQuestion-1)}
                                    >
                                        Question précédente
                                    </Button>
                                }
                            </div>
                        </Col>
                        <Col>
                            <div>
                                {currentQuestion<5 &&
                                    <Button 
                                        variant="outline-secondary"
                                        onClick={()=>updateCurrentQuestion(currentQuestion+1)}
                                    >
                                        Question suivante
                                    </Button>
                                }
                            </div>
                        </Col>
                    </Row>
                    <Row className="questionnaireBottom">
                        <Col>
                            <p><i>Questionnaire générer.</i></p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}
export default Questionnaire