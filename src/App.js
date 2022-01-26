import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/views/Home';
import Header from "./components/views/Header";
import Register from './components/views/Register';
import Result from './components/views/Result';
import Films from './components/views/Films';
import FilmsInfos from './components/views/FilmsInfos';
import Wishlist from './components/views/Wishlist';
import { useState } from 'react';
import RegisterCheckUser from './components/views/RegisterCheckUser';

function App() {
	const [currentUser, setUser] = useState();
  const [inputEmail, setEmail] = useState();
  
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/register" element={<Register inputEmail={inputEmail} setEmail={setEmail} currentUser={currentUser} setUser={setUser} />} />
        <Route path="/register/Check_user" element={<RegisterCheckUser inputEmail={inputEmail} setEmail={setEmail}/>} />
				<Route path="/result" element={<Result />} />
				<Route path="/films" element={<Films />} />
				<Route path="/film-infos" element={<FilmsInfos />} />
				<Route path="/wishlist" element={<Wishlist currentUser={currentUser} />} />
			</Routes>
		</BrowserRouter>
	)
}
export default App;