import React, {Component} from 'react';
import './App.css';
import TrafficLight from './components/TrafficLight'

const GREEN = 0
const YELLOW = 1
const RED = 2

class App extends Component {
  constructor(){
    super();
    
    this.state = {
      currentColor: GREEN
    };

    setInterval(() => {
      this.setState({
        currentColor: this.getNextColor(this.state.currentColor)
      });
    }, 2000);
  }

  getNextColor(color){
    switch(color){
      case GREEN:
        return YELLOW;
      case YELLOW:
        return RED;
      case RED:
        return GREEN;
    }
  };

  render(){
    const {currentColor} = this.state;

    return(
      <TrafficLight currentColor={currentColor}/>
    );
  }
}

export default App;
