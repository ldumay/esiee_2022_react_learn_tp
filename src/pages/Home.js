import logo from '../logo.svg';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <a
        className="App-link"
        href=""
        target="_blank"
        rel="noopener noreferrer"
      >
        Participer au concours 
      </a>
    </header>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="about">About</Link>
      </nav>
      
    </div>
  );
}export default Home