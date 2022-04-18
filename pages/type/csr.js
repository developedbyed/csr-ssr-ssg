import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

export default function CSR() {
  //Create a state
  const [movies, setMovies] = useState([]);
  //Fetch The movie
  const fetchMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=d5c35e51c81488b19da7c1f572507a3d&language=en-US&page=1`
    );
    const movies = await data.json();
    setMovies(movies.results);
  };
  //Run on mount
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className={styles.container}>
      <main styles={styles.main}>
        <h1>Popular movies</h1>
        <h2>Enjoy our top 20 list of popular movies coming out in 2022</h2>
        <div className={styles.cards}>
          {movies.map((movie) => (
            <div key={movie.id} className={styles.card}>
              <h3>{movie.title}</h3>
              <Link href={`/movie/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
