import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from './components/views/Home';
import Header from "./components/views/Header";
import Register from './components/views/Register';
import Result from './components/views/Result';
import Films from './components/views/Films';
import FilmsInfos from './components/views/FilmsInfos';
import Wishlist from './components/views/Wishlist';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/register" element={<Register />} />
				<Route path="/result" element={<Result />} />
				<Route path="/films" element={<Films />} />
				<Route path="/film-infos" element={<FilmsInfos />} />
				<Route path="/wishlist" element={<Wishlist />} />
			</Routes>
		</BrowserRouter>
	)
}
export default App;