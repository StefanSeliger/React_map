const MovieItems = (props) => {
    return (  
        <article>
            <h2>{props.title}</h2>
            <p>{props.year}</p>
            <h3>{props.director}</h3>
            <p>{props.duration}</p>
            <p>{props.rate}</p>
            <p>{props.genre}</p>
        </article>
    );
}

export default MovieItems;