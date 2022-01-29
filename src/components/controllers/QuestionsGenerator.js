import JsonFileService from "../service/JsonFileHandler";


function QuestionsGenerator(){
    const questions = JsonFileService.getQuestionList();
    
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