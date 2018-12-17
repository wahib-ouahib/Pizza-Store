import React, { Component } from 'react';
import './App.css';

class App extends Component {

  

  render() {
    return (
      <div className="App">
          <h1>Welcome to the pizza Store</h1>
          <div className="img">
            <img src={require("./assets/1.png")} alt="description" />
            <h2> Cheese Pizza <br/> <br/> 16 $ <br/> 266 calories</h2>
          </div>

          <div className="img">
            <img src={require("./assets/3.PNG")} alt="description" />
            <h2>Double-Mushroom Pizza <br/> <br/> 20 $ <br/> 300 calories</h2>
          </div>

          <div className="img">
            <img src={require("./assets/2.PNG")} alt="description" />
            <h2>Pepperoni Pizza<br/> <br/> 18 $ <br/> 280 calories</h2>
          </div>

          <div className="img">
            <img src={require("./assets/4.PNG")} alt="description" />
            <h2>Grilled Veggie Pizza <br/> <br/> 17 $ <br/> 210 calories</h2>
          </div>

          <div className="img">
            <img src={require("./assets/5.PNG")} alt="description" />
            <h2>HAWAIIAN Pizza<br/> <br/> 20 $ <br/> 300 calories</h2>
          </div>          
      </div>
    );
  }
}

export default App;
