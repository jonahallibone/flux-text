import React from 'react';


import './App.css';
import Search from './components/Search/Search';
import Detail from './components/Detail/Detail';
import Favorites from './components/Favorites/Favorites';

const App = () => {
  return (
    <div className="App">
      <div>
        <h2>Search for restaurants</h2>
        <Search />
      </div>
      <Detail/>
      <Favorites/>
    </div>
  );
}

export default App;
