import ListeFilms from "./ListeFilms"

/**
 * Model of User
 */
class User {
	constructor(nom, prenom, dateNaissance, mail, phoneNumber) {
		this.nom = nom
		this.prenom = prenom
		this.dateNaissance = dateNaissance
		this.mail = mail
		this.phoneNumber = phoneNumber;
		this.listFilms = new ListeFilms();
	}

	/**
	 * Mail verification
	 */
	checkMail() {
		console.log('Vérification du mail "' + this.mail + '".')
	}

	/**
	 * Calculate the age
	 */
	calculateAge() {
		let currentYear = new Date().getFullYear();
		console.log('Age : ' + currentYear - this.dateNaissance.getFullYear);
	}

	/**
	 * Check if user has a film in his favorite list
	 */
	checkFavoriteFilm(film) {
		return this.listFilms.includes(film);
	}
}

export default User