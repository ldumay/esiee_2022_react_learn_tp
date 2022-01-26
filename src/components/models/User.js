import ListeFilms from "./ListeFilms"

/**
 * Model of User
 */
class User {
	constructor(id, nom, prenom, dateNaissance, mail) {
		this.id = id
		this.nom = nom
		this.prenom = prenom
		this.dateNaissance = dateNaissance
		this.mail = mail
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
}

export default User