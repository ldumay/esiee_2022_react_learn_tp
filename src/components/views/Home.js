import '../../styles/Home.scss'
import logo from '../../logo.svg';

function Home(){

    return (
        <div className="App">
            <div className="App-header">
                <h1 className="title">FlexÔCinosh</h1>

                <img src={logo} className="App-logo" alt="logo" />

                <a className="App-link"
                    href="/register"
                    //target="_blank"
                    rel="noopener noreferrer"
                >
                Participer au concours 
                </a>

                <br/>
                <div>
                    <h2>Dev test</h2>
                    <ul>
                        <li><a className="App-link" href="/">Accueil</a></li>
                        <li><a className="App-link" href="/register">Insription</a></li>
                        <li><a className="App-link" href="/result">Résultat</a></li>
                        <li><a className="App-link" href="/questions">Questionnaire</a></li>
                        <li><a className="App-link" href="/films">Liste des films</a></li>
                        <li><a className="App-link" href="/film-infos">Infos d'un liste</a></li>
                        <li><a className="App-link" href="/wishlist">Liste des envies</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Home