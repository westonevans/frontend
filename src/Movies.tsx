import { useState } from 'react';
import data from './MovieData.json';
import { Link } from 'react-router-dom';

const MD = data.MovieData;

function MovieList() {
  const [listOMovies] = useState(MD);

  // const addMovie = () => {
  //   setListOMovies([
  //       ...MD,
  //       {
  //           Category: 'Action/Adventure',
  //           Title: 'Batman Returns',
  //           Year: 1992,
  //           Director: 'Tim Burton',
  //           Rating: 'PG-13',
  //       }
  //       ]);

  return (
    <>
      <div>
        <h3>Joel Hilton's Movie Collection</h3>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {listOMovies.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <button className="btn btn-primary" onClick={addMovie}>Add Movie</button> */}
    </>
  );
}
export default MovieList;
