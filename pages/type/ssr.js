import styles from "../../styles/Home.module.css";
import Link from "next/link";

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=d5c35e51c81488b19da7c1f572507a3d&language=en-US&page=1`
  );
  const movies = await data.json();

  // Pass data to the page via props
  return { props: { movies } };
}

export default function SSR({ movies }) {
  return (
    <div className={styles.container}>
      <main styles={styles.main}>
        <h1>Popular movies</h1>
        <h2>Enjoy our top 20 list of popular movies coming out in 2022</h2>
        <div className={styles.cards}>
          {movies.results.map((movie) => (
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
