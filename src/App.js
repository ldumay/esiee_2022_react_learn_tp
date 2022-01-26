import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useParams } from "react-router-dom";
import Home from './components/views/Home';
import Main from './components/Main'
import Register from './components/views/Register';
import Result from './components/views/Result';
import Films from './components/views/Films';
import FilmsInfos from './components/views/FilmsInfos';
import Wishlist from './components/views/Wishlist';

function App() {
  return (
    <Routes>
        <Route
          path="invoices/:invoiceId" element={<Invoice />}
        />

        {/*Go to the accueil page */}
        <Route path="/" element={<Home /> } />

        {/*Go to the register */}
        <Route path="/register" element={<Register /> } />

        {/*Go to the result */}
        <Route path="/result" element={<Result /> } />

        {/*Go to the films */}
        <Route path="/films" element={<Films /> } />

        {/*Go to the filmInfos */}
        <Route path="/film-infos" element={<FilmsInfos /> } />

        {/*Go to the wishlist */}
        <Route path="/wishlist" element={<Wishlist /> } />
    </Routes>
  );
}
export default App;

function Invoice() {
  let params = useParams();
  return <h1>Invoice {params.invoiceId}</h1>;
}