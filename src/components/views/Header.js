import { Link } from "react-router-dom"
function Header() {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/register">S'enregistrer</Link>
				</li>
				<li>
					<Link to="/result">Résultat</Link>
				</li>
				<li>
					<Link to="/films">Films</Link>
				</li>
				<li>
					<Link to="/film-infos">Films Infos</Link>
				</li>
				<li>
					<Link to="/wishlist">Liste de souhait</Link>
				</li>
			</ul>
		</nav>
	)
}
export default Header