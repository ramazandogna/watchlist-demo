import './App.css';
import './lib/font-awesome/css/all.min.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Add } from './components/Add';
import { GlobalProvider } from './context/GlobalState';
import { Header } from './components/Header';
import React from 'react';
import { Watched } from './components/Watched';
import { Watchlist } from './components/Watchlist';

function App() {
   return (
      <div className="App">
         <GlobalProvider>
            <BrowserRouter>
               <Header />
               <Routes>
                  <Route path="/" element={<Watchlist />}></Route>
                  <Route path="/watched" element={<Watched />}></Route>
                  <Route path="/add" element={<Add />}></Route>
               </Routes>
            </BrowserRouter>
         </GlobalProvider>
      </div>
   );
}

export default App;
