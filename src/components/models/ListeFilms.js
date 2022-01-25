/**
 * Model of ListeFilms
 */
function ListeFilms(){

    const listFilms = []
    
    /**
     * Adding a film.
     * @param {*} film 
     */
    function addFilm(film){
        listFilms.push(film)
        console.log('Film "'+film+'" ajouté de la liste.')
    }

    /**
     * Deleting a film.
     * @param {*} film 
     */
    function supprFilm(film){
        listFilms.pop(film)
        console.log('Film "'+film+'" supprimé de la liste.')
    }
}
export default ListeFilms