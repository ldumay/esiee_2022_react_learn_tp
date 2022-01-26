import '../../styles/Home.css'
import logo from '../../logo.svg';
import Film from '../models/Film';

function Home(){

    const film = new Film()

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <a className="App-link"
                    href="/register"
                    //target="_blank"
                    rel="noopener noreferrer"
                >
                Participer au concours 
                </a>
            </header>
        </div>
    )
}
export default Home