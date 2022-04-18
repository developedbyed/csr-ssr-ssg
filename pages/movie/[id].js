import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// This gets called on every request
export async function getServerSideProps(context) {
  const { id } = context.query;
  // Fetch data from external API
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=d5c35e51c81488b19da7c1f572507a3d&language=en-US`
  );
  const movie = await data.json();

  // Pass data to the page via props
  return { props: { movie } };
}

function Movie({ movie }) {
  //   //Create a state
  //   const [movie, setMovie] = useState({});
  //   //Get ID from router
  //   const router = useRouter();
  //   //Fetch Movie
  //   const fetchMovie = async () => {
  //     const data = await fetch(
  //       `https://api.themoviedb.org/3/movie/${router.query.id}?api_key=d5c35e51c81488b19da7c1f572507a3d&language=en-US`
  //     );
  //     const movie = await data.json();
  //     setMovie(movie);
  //   };
  //   //Run on mount
  //   useEffect(() => {
  //     fetchMovie();
  //   }, []);

  return (
    <div>
      <h1>Movie Details</h1>
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt=""
      />
    </div>
  );
}

export default Movie;
