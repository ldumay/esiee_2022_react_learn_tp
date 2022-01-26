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

	showFilm() {
		return (
			<div id="{id-nom}" class="col-md-12">
				<h3>#{this.id} - {this.nom}</h3>
				<img
					className="imageFilm"
					alt="{this.id - this.nom}"
					src={this.imageUrl}
				/>
				<p>
					Genre : {this.genre}
					Date de sortie : {this.dateSortie}
					Description : {this.description}
					Ratio : {this.ratio}
				</p>
			</div>
		)
	}
}
export default Film