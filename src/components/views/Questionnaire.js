import '../../styles/Questionnaire.scss'
import { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Header from './Header'
import QuestionsGenerator from '../controllers/QuestionsGenerator'
import { Link } from 'react-router-dom'
import Footer from './Footer'

function Questionnaire(props) {
	const [currentQuestion, updateCurrentQuestion] = useState(1)
	const [totalResponse, updateTotalResponse] = useState(0)
	const [goodResponse, updateCountGoodResponse] = useState(0)
	const [hasSelectedAnswer, updateHasSelectedAnswer] = useState(false)
	const [wasLastAnswerValid, updateLastAnswerValid] = useState(false);
	const [response, updateResponse] = useState()

	var questionsGenerator = new QuestionsGenerator()

	/* Vérifiation des const */
	function checkConst() {
		console.log("[For debugg]")
		console.log("Question : " + currentQuestion + "/" + questionsGenerator.length)
		console.log("Good=" + goodResponse + " - Ttx=" + totalResponse)
		// Problème dans la passage de donnée, on actualise donc souvent la valeur de bonne réponse
		props.setTotalGoodResponse(goodResponse)
	}

	/* Click on radios */
	const handleSelectResponse = (e) => {
		const target = e.target
		const valueRadio = target.type === 'radio' ? target.value : target.checked
		updateResponse(valueRadio)
		checkGoodResponse(response)
	}

	/* Click on button */
	const checkChangeQuestion = (e) => {
		if (hasSelectedAnswer) {
			// change to next question
			updateCurrentQuestion(currentQuestion + 1)
			updateHasSelectedAnswer(false)
		} else {
			alert("Vous n'avez pas choisi de réponse.")
		}
	}

	function checkGoodResponse(response) {
		var isCorrect = false
		questionsGenerator.map((question, index) => {
			if ((index + 1) == currentQuestion) {
				if ((response === question.Correct) && (!isCorrect)) {
					isCorrect = true;
				}
			}
			return;
		})
		console.log(hasSelectedAnswer, isCorrect, wasLastAnswerValid);
		if (hasSelectedAnswer) {
			if (isCorrect) {
				//check previous answer is not a good answer
				if (!wasLastAnswerValid) {
					updateCountGoodResponse(goodResponse + 1)
				}
				updateLastAnswerValid(true);
			} else {
				if (wasLastAnswerValid) {
					updateCountGoodResponse(goodResponse - 1)
				}
				updateLastAnswerValid(false)
			}
		} else {
			if (isCorrect) {
				updateCountGoodResponse(goodResponse + 1);
				updateLastAnswerValid(true)
			} else {
				updateLastAnswerValid(false)
			}
			updateTotalResponse(totalResponse + 1)
			updateHasSelectedAnswer(true)
		}
		checkConst()
	}

	/* Validation du formulaire */
	const handleSubmit = (e) => {
		e.preventDefault();
		//-
		props.setTotalGoodResponse(goodResponse)
	}

	return (
		<div>
			<Header />
			<Container>
				<div className="page">
					<Row className="questionnaireTop">
						<Col>
							{currentQuestion > 0 && currentQuestion < 6 &&
								<div>
									<h1>Question #{currentQuestion}</h1>
									<hr />
								</div>
							}
						</Col>
					</Row>
					<Row className="questionnaireContent">
						<Col>
							{questionsGenerator.map((question, index) => (
								<div key={question.id}>
									{(index + 1) == currentQuestion &&
										<div>
											<h3><u>{question.Text}</u></h3>
											<Form onSubmit={handleSubmit}>
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
							{totalResponse == 5 &&
								<div>
									<br/><br/>
									<form onSubmit={handleSubmit}>
										<Link to="/result">
											<Button type="submit" variant="success"	>
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
											variant="outline-primary"
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
								{currentQuestion < 5 &&
									<Button
										variant="outline-primary"
										onClick={checkChangeQuestion}
									>
										Question suivante
									</Button>
								}
								{/*
								<Button
									variant="outline-primary"
									onClick={() => checkConst()}
								>
									TEST
								</Button>
								*/}
							</div>
						</Col>
					</Row>
					<Row className="questionnaireBottom">
						<Col>
							<p><i>Questionnaire générer.</i></p>
						</Col>
					</Row>
					<Footer />
				</div>
			</Container>
		</div>
	)
}
export default Questionnaire