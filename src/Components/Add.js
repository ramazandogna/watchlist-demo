import React, { useState } from 'react';

import { ResultCard } from './ResultCard';
import axios from 'axios';

export const Add = () => {
   const [query, setQuery] = useState('');
   const [results, setResults] = useState([]);

   const REACT_APP_TMDB_KEY = 'bc8cd9e23622fc1c8cef4ffea19844ec';

   const onChange = (e) => {
      e.preventDefault();

      setQuery(e.target.value);

      fetch(
         `https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
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

   const fetchData = async (e) => {
      e.preventDefault();

      setQuery(e.target.value);

      try {
         const res = await axios.get(
            `https://api.themoviedb.org/3/movie/{movie_id}?api_key=${REACT_APP_TMDB_KEY}&language=en-US&PAGE=1&include_adult=false&query=${e.target.value}`
         );
         const data = await res.data;
         console.log(data.results);
         if (!data.errors) {
            setResults(data.results);
         } else {
            setResults([]);
         }
      } catch {
         alert('Something went wrong');
      }
      console.log(setResults);
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
