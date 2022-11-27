import React, { useState } from 'react';

import { ResultCard } from './ResultCard';

export const Add = () => {
   const [query, setQuery] = useState('');
   const [results, setResults] = useState([]);

   const onChange = (e) => {
      e.preventDefault();

      setQuery(e.target.value);

      const REACT_APP_TMDB_KEY = 'bc8cd9e23622fc1c8cef4ffea19844ec';
      console.log(REACT_APP_TMDB_KEY);
      fetch(
         `https://api.themoviedb.org/3/movie/{movie_id}?api_key=${REACT_APP_TMDB_KEY}&language=en-US&PAGE=1&include_adult=false&query=${e.target.value}`
      )
         .then((res) => res.json())
         .then((data) => {
            console.log(data.results);
            if (!data.errors) {
               setResults(data.results);
            } else {
               setResults([]);
            }
         });
   };
   return (
      <div className="add-page">
         <div className="container">
            <div className="add-content">
               <div className="input-wrapper">
                  <input
                     type="text"
                     placeholder="Search for a movie"
                     value={query}
                     onChange={onChange}
                  />
               </div>

               {results.length > 0 && (
                  <ul className="results">
                     {results.map((movie) => (
                        <li key={movie.id}>
                           <ResultCard movie={movie} />
                        </li>
                     ))}
                  </ul>
               )}
            </div>
         </div>
      </div>
   );
};
