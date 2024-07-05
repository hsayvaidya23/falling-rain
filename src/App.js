
import React from 'react';
import './App.css';
import Grid from './components/Grid';

function App() {
  return (
    <div className="App">
      <h1>Rain Pattern</h1>
      <Grid cellSize={40}/>
    </div>
  );
}

export default App