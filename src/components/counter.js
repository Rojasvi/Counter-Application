import React, { Component } from 'react';
import './counter.css';
class Counter extends Component{
    constructor(props){
        super(props);
        this.state={count:0}
        this.increment=this.increment.bind(this)
        this.decrement=this.decrement.bind(this)
      }

    increment = () => {
    this.setState({count:this.state.count+1});
    }
    
    decrement = () => {
      if(this.state.count>0)
      {this.setState({count:this.state.count-1});}
      else{
        alert('Zero value is the decrement limit');
      }
  
        }

  
 render() {
    return (
      <div>
      <button onClick={this.increment} className="counter"> Increment </button> 
      <button onClick={this.decrement} className="counter"> Decrement </button> 
      <h2>Count:{this.state.count }</h2>
      </div>
    );
  }
}
  export default Counter