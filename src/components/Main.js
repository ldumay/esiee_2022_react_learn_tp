import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// import your route components too
import App from '../App'
import Home from '../pages/Home'

function Main(){
    return(
        render(
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Home />} />
            </Route>
            </Routes>
        </BrowserRouter>,
        document.getElementById("root")
        )       
    )}
export default Main 