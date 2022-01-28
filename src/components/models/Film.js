import "../../styles/FilmListStyles.scss";
class Film {
	constructor(id, title, image, genres, releaseState, year, plot, contentRating) {
		this.id = id;
		this.title = title;
		this.image = image;
		this.genres = genres;
		this.releaseState = releaseState;
		this.year = year;
		this.plot = plot;
		this.contentRating = contentRating;
	}

	showFilm() {
		return (
			<div className="thiss">
				<div className="this">
					<h2>{this.title}</h2>
					<img src={this.image} alt="Affiche"	/>
					<div className="details">
					<p>👨: {this.directors}</p>
					<p>📖: {this.releaseState} {this.year}</p>
					<p>⏰: {this.runtimeStr}</p>
					<p>{this.plot}</p>
					</div>
				</div>
			</div>
		)
	}
}
export default Film