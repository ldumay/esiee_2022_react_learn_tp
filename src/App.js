
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useParams } from "react-router-dom";
import Main from './components/Main'
import Home from './pages/Home'

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="invoices/:invoiceId" element={<Invoice />}
        />
        <Route path="/" element={<Home /> } />
    </Routes>
    </div>
  );
}
export default App;

function Invoice() {
  let params = useParams();
  return <h1>Invoice {params.invoiceId}</h1>;
}