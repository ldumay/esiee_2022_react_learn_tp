import '../../styles/Home.scss'
import logo from '../../images/logo_3.jpeg';

function Home(){

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
                </div>
            </div>
        </div>
    )
}
export default Home