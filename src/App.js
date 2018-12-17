import React, { Component } from 'react';
import './App.css';

class App extends Component {

  

  render() {
    return (
      <div className="App">
          <h1>Welcome to the pizza Store</h1>
          <div className="img">
            <img src={require("./assets/1.jpg")} alt="description of " />
            <h2>4 saison <br/> <br/> 15$ <br/> 500calories</h2>
          </div>

          <div className="img">
            <img src={require("./assets/2.PNG")} alt="description of " />
            <h2>4 saison <br/> <br/> 15$ <br/> 500calories</h2>
          </div>

          <div className="img">
            <img src={require("./assets/3.PNG")} alt="description of " />
            <h2>4 saison <br/> <br/> 15$ <br/> 500calories</h2>
          </div>

          <div className="img">
            <img src={require("./assets/4.PNG")} alt="description of " />
            <h2>4 saison <br/> <br/> 15$ <br/> 500calories</h2>
          </div>

          <div className="img">
            <img src={require("./assets/5.PNG")} alt="description of " />
            <h2>4 saison <br/> <br/> 15$ <br/> 500calories</h2>
          </div>          
      </div>
    );
  }
}

export default App;
