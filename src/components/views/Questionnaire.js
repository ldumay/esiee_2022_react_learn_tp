import '../../styles/Questionnaire.scss'
import { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Header from './Header'
import QuestionsGenerator from '../controllers/QuestionsGenerator'
import { Link } from 'react-router-dom'

function Questionnaire(){  
    const [currentQuestion, updateCurrentQuestion] = useState(1)
    const [totalResponse, updateTotalResponse] = useState(0)
    const [goodResponse, updateCountGoodResponse] = useState(0)
    const [badResponse, updateCountBadResponse] = useState(0)
    const [currentQuestionSelected, updateCurrentQuestionSelected] = useState(false)
    const [response, updateResponse] = useState()

    var questionsGenerator = new QuestionsGenerator()

    /* Vérifiation des const */
    function checkConst(){
        console.log("[For debugg]")
        console.log("Question : "+currentQuestion+"/"+questionsGenerator.length)
        console.log("Good="+goodResponse+" - Bad="+badResponse+" - Ttx="+totalResponse)
    }

    /* Click on radios */
    const handleSelectResponse = (e) => {
        const target = e.target
        const valueRadio = target.type === 'radio' ? target.value : target.checked
        updateResponse(valueRadio)
        updateTotalResponse(goodResponse+badResponse)
        updateCurrentQuestionSelected(true)
        checkGoodResponse(response)
    }

    /* Click on button */
    const checkSelectResponses = (e) => {
        if(currentQuestionSelected){
            updateCurrentQuestion(currentQuestion+1)
            updateCurrentQuestionSelected(false)
        } else {
            alert("Vous n'avez pas choisi de réponse.")
        }
    }
    function checkGoodResponse(response){
        var x = 0
        questionsGenerator.map((question, index) => {
            if(index+1==currentQuestion){
                if( (response == question.Correct) && (x<1) ){
                    console.log("Bonne réponse")
                    x++
                } else {
                    console.log("Mauvaise réponse")
                }
            }
        })
        if(x>0){
            console.log("x="+x+" --> x>0")
            updateCountGoodResponse(goodResponse+1)
            updateTotalResponse(goodResponse+badResponse)
        } else {
            console.log("x="+x+" --> x<=0")
            updateCountBadResponse(badResponse+1)
            updateTotalResponse(goodResponse+badResponse)
        }
        checkConst()
    }

    /* Validation du formulaire */
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("goodResponse : "+goodResponse); 
        checkConst()  
    }

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
                        </Col>
                    </Row>
                    <Row className="questionnaireContent">
                        <Col>
                            {questionsGenerator.map((question, index) => (
                                <div key={question.id}>
                                    {index+1==currentQuestion &&
                                        <div>
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
                                                                    value={answer}
                                                                    name="choix"
                                                                    type={type}
                                                                    id={`inline-${type}-1`}
                                                                    onChange={handleSelectResponse}
                                                                />
                                                            </div>
                                                            ))}
                                                        </Col>
                                                    ))}
                                                </Row>
                                            </Form>
                                        </div>
                                    }
                                </div>
                            ))}
                            {totalResponse==5 &&
                                <div>
                                    <br/>
                                    <form onSubmit={handleSubmit}>
                                        <Link to="/result">
                                            <Button
                                                type="submit"
                                                variant="success"
                                                //onClick={}
                                            >
                                                Valider mon questionnaire
                                            </Button>
                                        </Link>
                                    </form>
                                </div>
                            }
                        </Col>
                    </Row>
                    <Row className="questionnaireButtons">
                        <Col>
                            <div>
                                {
                                /*currentQuestion>1 &&
                                    <Button 
                                        variant="outline-secondary"
                                        onClick={()=>updateCurrentQuestion(currentQuestion-1)}
                                    >
                                        Question précédente
                                    </Button>
                                */
                                }
                            </div>
                        </Col>
                        <Col>
                            <div>
                                {currentQuestion<5 &&
                                    <Button
                                        variant="outline-secondary"
                                        onClick={checkSelectResponses}
                                    >
                                        Question suivante
                                    </Button>
                                }
                                <Button
                                    variant="outline-primary"
                                    onClick={() => checkConst()}
                                >
                                    TEST
                                </Button>
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