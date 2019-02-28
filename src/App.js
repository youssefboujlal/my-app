import React, { Component } from 'react';
import './App.css';
import TopBar from './Components/NavBar/TopBar/TopBar';

class App extends Component {
  render() {
    return (
     
        <TopBar style={divStyle} />       
        
    );
  }
}
const divStyle = {
  
  backgroundColor: 'red'
  
};

export default App;
