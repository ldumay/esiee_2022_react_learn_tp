import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useParams } from "react-router-dom";
import Home from './components/views/Home';
import Main from './components/Main'

function App() {
  return (
    <Routes>
        <Route
          path="invoices/:invoiceId" element={<Invoice />}
        />
        <Route path="/" element={<Home /> } />
    </Routes>
  );
}
export default App;

function Invoice() {
  let params = useParams();
  return <h1>Invoice {params.invoiceId}</h1>;
}