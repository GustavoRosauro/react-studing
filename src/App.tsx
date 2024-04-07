import React  from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Form from './component/form';

function App() {
  return (
    
       <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/form">Form</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                <Route path="/form" Component={Form} />
                </Routes>
            </div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>
    </Router>
  );
}

export default App;