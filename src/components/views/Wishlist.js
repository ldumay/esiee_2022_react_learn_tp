function Wishlist(currentUser) {
	let filmList = currentUser.filmList;

	filmList = [
		{
			id: 1,
			nom: "Film",
			imageUrl: "img.png",
			genre: "action",
			dateSortie: new Date(2022, 1, 26),
			description: "description",
			ratio: 15
		},
		{
			id: 1,
			nom: "Film",
			imageUrl: "img.png",
			genre: "action",
			dateSortie: new Date(2022, 1, 26),
			description: "description",
			ratio: 25
		},
		{
			id: 1,
			nom: "Film",
			imageUrl: "img.png",
			genre: "action",
			dateSortie: new Date(2022, 1, 26),
			description: "description",
			ratio: 35
		},
	]

	return (
		<div>
			<h1>Liste d'envies</h1>
			{filmList.map((film) => (
				<li key={`${film.id}-${film.nom}`} style={{ border: "1px, black" }}>
					{film.nom}
					{film.ratio}
				</li>
			))}
		</div>
	)
}
export default Wishlist