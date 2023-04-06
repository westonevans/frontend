import { useEffect, useState } from 'react';
import { Movie } from './types/movie';
import { Link } from 'react-router-dom';

function MyMovieList() {
  const [movieStuff, setMovieStuff] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchFood = async () => {
      const rsp = await fetch('https://localhost:4000/movie');
      const temp = await rsp.json();
      setMovieStuff(temp);
    };
    fetchFood();
  }, []);

  return (
    <>
      <div className="row">
        <h4>The Best Movies</h4>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Category</th>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Edited</th>
            <th>LentTo</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {movieStuff.map((f) => (
            <tr key={f.movieId}>
              <td>{f.category}</td>
              <td>{f.title}</td>
              <td>{f.year}</td>
              <td>{f.director}</td>
              <td>{f.rating}</td>
              <td>{f.edited}</td>
              <td>{f.lentTo}</td>
              <td>{f.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MyMovieList;
