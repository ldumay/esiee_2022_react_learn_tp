/**
 * Model of Film
 */
class Film {
	constructor(id, nom, imageUrl, genre, dateSortie, description, ratio) {
		this.id = id;
		this.nom = nom;
		this.imageUrl = imageUrl;
		this.genre = genre;
		this.dateSortie = dateSortie;
		this.description = description;
		this.ratio = ratio;
	}
}
export default Film