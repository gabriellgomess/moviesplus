import React from 'react';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';


function App() {
  return (
    <div className="App">
      <Header />
      <div className='container-app'>          
          <div className='field-main'>
            <Main />            
          </div>
      </div>     
    </div>
  );
}

export default App;
