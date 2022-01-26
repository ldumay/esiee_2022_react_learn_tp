/*  1. Afficher les Questions
    2. Récupérer les réponses
    3. Envoyer un tableau de réponse (User + Nb réponses correctes)
*/
class Question{
    constructor(id, text, answer, correct, rep){
        this.id = id; 
        this.text = text; 
        this.answer = answer; /*tableau*/
        this.correct = correct; 
        this.rep = rep; 
    }
    isCorrect(rep) {
         if(rep === this.correct){
             return(true)
         }else{
             return(false)
         }
    }
}
export default Question