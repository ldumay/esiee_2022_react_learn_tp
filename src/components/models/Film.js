/**
 * Model of Film
 */
class Film {
	constructor(id, title, image, genres, dateSortie, description, ratio) {
		this.id = id;
		this.title = title;
		this.image = image;
		this.genres = genres;
		this.dateSortie = dateSortie;
		this.description = description;
		this.ratio = ratio;
	}

	showFilm() {
		return (
			<div id="{id-title}" class="col-md-12">
				<h3>#{this.id} - {this.title}</h3>
				<img
					className="imageFilm"
					alt="{this.id - this.title}"
					src={this.image}
				/>
				<p>
					Genre : {this.genres}
					Date de sortie : {this.dateSortie}
					Description : {this.description}
					Ratio : {this.ratio}
				</p>
			</div>
		)
	}
}
export default Film