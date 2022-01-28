import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/views/Home';
import Register from './components/views/Register';
import Result from './components/views/Result';
import Catalog from './components/views/Catalog';
import FilmsInfos from './components/views/FilmsInfos';
import Wishlist from './components/views/Wishlist';
import Test from './components/views/Test';
import { useState } from 'react';
import NotFound from './components/views/NotFound';
import RegisterCheckUser from './components/views/RegisterCheckUser';
import Questionnaire from './components/views/Questionnaire';

function App() {
	const [currentUser, setUser] 			= useState();
  	const [inputEmail, setEmail] 			= useState();
	let   [HeaderMessage,setHeaderMessage]	= useState()
	const CheckUserElements = <RegisterCheckUser inputEmail={inputEmail} setEmail={setEmail} HeaderMessage={HeaderMessage} setHeaderMessage={setHeaderMessage}/>
	const RegisterElements 	= <Register inputEmail={inputEmail} setEmail={setEmail} currentUser={currentUser} setUser={setUser} HeaderMessage={HeaderMessage} setHeaderMessage={setHeaderMessage}/>
	return (
    <BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/test" element={<Test />} />
        <Route exact path="/result" element={<Result />} />
				<Route exact path="/register" element={RegisterElements} />
        <Route exact path="/register/Check_user" element={CheckUserElements} />
				<Route exact path="/questions" element={<Questionnaire />} />
        <Route exact path="/catalog" element={<Catalog />} />
				<Route exact path="/film-infos" element={<FilmsInfos />} />
				<Route exact path="/wishlist" element={<Wishlist currentUser={currentUser} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
		</BrowserRouter>
	)
}
export default App;