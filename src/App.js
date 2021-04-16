import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "haythem chibani",
        bio: "lorem",
        imgSrc: "https://static.thenounproject.com/png/363640-200.png",
        profession: "mrameji",
      },
      shows: true,
      counter:0
    };
  }
  incrementCounter() {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }
  componentDidMount() {
    const thisBoundedIncrementer = this.incrementCounter.bind(this);
    setInterval(thisBoundedIncrementer, 1000);
  }
  toggle(){
    this.setState({shows:!this.state.shows});
  }
  render() {
    return (
      (this.state.shows)? <>
      <h4>{this.state.person.fullName}</h4>
      <img src={this.state.person.imgSrc}/>
      <p>{this.state.person.bio}</p>
      <h6>{this.state.person.profession}</h6>
      <h4>{this.state.counter} seconds   </h4>
      <button onClick={this.toggle.bind(this)}>toggle</button>
    </> : <button onClick={this.toggle.bind(this)}>toggle</button>
    );
  }
  componentDidMount(){
    
  }
};
export default App;
