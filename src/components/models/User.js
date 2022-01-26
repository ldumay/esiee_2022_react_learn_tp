/**
 * Model of User
 */
function User(){

    const id = null
    const nom = null
    const prenom = null
    const dateNaissance = null
    const mail = null
    const listFilms = []
    
    /**
     * Mail verification
     */
    function checkMail(mail){
        console.log('Vérification du mail "'+mail+'".')
    }

    /**
     * Calculate the age
     */
    function calculateAge(age){
        today = new Date()
        console.log('Age : '+today+'')
        console.log('Age : '+age+'')
    }

}
export default User