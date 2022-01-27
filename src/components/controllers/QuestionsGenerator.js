import Questions from '../../datas/Questions.json';

function QuestionsGenerator(){
    const questions = Questions;
    
    function getAnwsers(questions, idQuestion){
        var anwsers = []
        
        questions.map( (element, index) => (
            anwsers = element.anwsers
        ))

        return anwsers
    }

    return (
        questions
    )
}
export default QuestionsGenerator