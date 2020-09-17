import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    fetch('api/oddballs').then(resp => resp.json()).then(data => {
      console.log(data)
    })
  }
  render() {
    return (
      <div className="App">
          <input
            type="text"
            name="search"
          />
          <ContactList />
      </div>
    );
  }
}

class ContactList extends Component {
  render(){
    return [
      <Contact />,
      <Contact />,
      <Contact />,
      <Contact />
    ]
  }

}

class Contact extends Component {
  render() {
    return(
      <p>Contact</p>
    )
  }
}



export default App;
