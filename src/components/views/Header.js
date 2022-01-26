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
			</ul>
		</nav>
	)
}
export default Header