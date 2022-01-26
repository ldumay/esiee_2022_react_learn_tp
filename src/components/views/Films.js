function Films({film}) {
	return (
		<div id={`${film.id}-${film.nom}`} className="col-md-12">
			<h3>#{film.id} - {film.nom}</h3>
			<img
				className="imageFilm"
				alt={`${film.nom} - ${film.description}`}
				src={film.imageUrl}
			/>
			<p>
				Genre : {film.genre}
				Date de sortie : {film.dateSortie}
				Description : {film.description}
				Ratio : {film.ratio}
			</p>
		</div>
	)
}
export default Films