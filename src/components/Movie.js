import MovieData from './MovieData';
import MovieItems from './MovieItems';

const Movie = () => {
    return (  
        <section className="movieCard">
            {
                MovieData.map((elt, i) => 
                <MovieItems 
                    title={elt.title}
                    year={elt.year}
                    director={elt.director}
                    duration={elt.duration}
                    rate={elt.rate}
                    genre={elt.genre}
                />)
            }
        </section>
    );
}
 
export default Movie;
