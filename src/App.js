import React from 'react';
import logo from './assets/images/logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ViewAtoms from './components/ViewAtoms.js'; // Import ViewAtoms component

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Link className="App-link" to="/view-atoms">Go to view atoms</Link>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Routes>
          <Route path="/view-atoms" element={<ViewAtoms />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
