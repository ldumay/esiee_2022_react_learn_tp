/**
 * Model of Film
 */
function Film(){

    const id = null
    const nom = null
    const imageUrl = null
    const genre = null
    const dateSortie = null
    const description = null
    const ratio = null
    
    return(
        <div id="{id-nom}" class="col-md-12">
            <h3>#{id} - {nom}</h3>
            <img
                className="imageFilm"
                alt="{id-nom}"
                src={imageUrl}
            />
            <p>
                Genre : {genre}
                Date de sortie : {dateSortie}
                Description : {description}
                Ratio : {ratio}
            </p>
        </div>
    )
}
export default Film