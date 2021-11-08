import React from "react";

const Movies = ({ movies }) => {
    return (
        <div>
            {movies.results.map((movie) => (
                <h1 key={movie.id}>{movie.title}</h1>
            ))}
        </div>
    );
};

export const getServerSideProps = async () => {
    const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=424f1b3530d83d678a592936337c563f&language=en-US&page=1"
    );

    const movies = await res.json();

    return {
        props: {
            movies,
        },
    };
};

export default Movies;
