import Film from "./Film"

/**
 * Model of ListeFilms
 */
class ListeFilms {

	constructor() {
		this.listFilms = [];
	}

	/**
	 * Adding a film.
	 * @param {Film} film 
	 */
	addFilm(film) {
		this.listFilms.push(film)
		console.log('Film "' + film + '" ajouté de la liste.')
	}

	/**
	 * Deleting a film.
	 * @param {Film} film 
	 */
	supprFilm(film) {
		this.listFilms.pop(film)
		console.log('Film "' + film + '" supprimé de la liste.')
	}
}
export default ListeFilms