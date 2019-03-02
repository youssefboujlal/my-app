import React, { Component } from 'react';
import './App.css';
import TopBar from './Components/NavBar/TopBar/TopBar';
import LoginForm from './Components/Login/LoginForm';

class App extends Component {
  render() {
    return (
     <div>

<TopBar style={divStyle} />       
        <LoginForm />       
        
     </div>
       
    );
  }
}
const divStyle = {
  
  backgroundColor: 'red'
  
};

export default App;
