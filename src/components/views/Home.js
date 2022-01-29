import '../../styles/Home.scss'
import logo from '../../images/logo_3.jpeg';

function Home(props){

    return (
        <div className="App">
            <div className="Home">
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
                    <p className="production">
                        Réalisé par :
                        <br/>Maxence HENNEKEIN - Bilal MOUHIB - Chen ZHIHAO
                        <br/>Loïc DUMAY - Quentin NARDY"
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Home