import { useState } from 'react'
import {data} from '../../datas/Quiz'
import Question from '../models/Question'

function Questionnaire(){  
    const [currentQuestion, updateCurrentQuestion] = useState(0) 
    const showQuestion = new Question()
    return( 
        <div>
            <h1>{showQuestion.text}</h1>

            <div>
                <button onClick={()=>updateCurrentQuestion(currentQuestion+1)}>Question suivante</button>
            </div>
            <div>
                <button onClick={()=>updateCurrentQuestion(currentQuestion-1)}>Question précédente</button>
            </div>
            <p>on est à la question : {currentQuestion}</p>
        </div>
    )
}
export default Questionnaire