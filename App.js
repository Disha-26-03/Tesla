import logo from './DISHA.jpg';
// import './App.css';

import React from 'react';
// import Counter from './Counter'
// import Todo from './Todo';
// import Pizzadata from './Pizzadata';
// import Travel from './Travel'
import Header from './Header'
import Section from './Section'
import './Tesla.css'

function App() {
  
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello Disha!
        </a>
        
      </header>
       */}
        {/* <Counter/> */}
        {/* <Todo/> */}
      {/* <Pizzadata/> */}
       {/* <Travel/> */}
      <Header/>
      <Section/>
    </div>
   

  );
}

export default App;
