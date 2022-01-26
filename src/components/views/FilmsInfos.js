import Film from '../models/Film';

function FilmsInfos(){

    const film = new Film()

    return (
        <div>
            <h1>Inscription</h1>
            <Film film={film} />
        </div>
    )
}
export default FilmsInfos