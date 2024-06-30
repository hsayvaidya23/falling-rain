
import React from 'react';
import './App.css';
import Grid3 from './components/Grid3';
import Grid2 from './components/Grid2';

function App() {
  return (
    <div className="App">
      <h1>Rain Pattern</h1>
      {/* <Grid3 cellSize={40}/> */}
      <Grid2 cellSize={40} />
    </div>
  );
}

export default App;
