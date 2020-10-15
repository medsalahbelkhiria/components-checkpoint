import React from 'react';
import './App.css';
import ProfilePhoto from './Components/Profile/ProfilePhoto';
import FullName from './Components/Profile/FullName';
import Adress from './Components/Profile/Adress'

function App() {
  return (
    <div className="App">
      <div className="container-all">
      <div className="nameImage">
        <ProfilePhoto />
        <FullName />  
      </div>
      <div>
        <Adress />
      </div>
      </div>
    </div>
  );
}

export default App;
