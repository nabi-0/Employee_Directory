import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
//import SearchForm from "./SearchForm";
import Directory from './components/Directory';
import API from "./utils/API";


class App extends Component {
  state = {
    search: "",
    employee: []
  };

  componentDidMount() {
    API.Employee()
      .then(res => this.setState({ employee: res.data.results }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        <Directory
          employee="Josh"
        />
        <Directory
          employee="Natalie"
        />
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
        </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
        </a>
          </header>
        </div>
      </>
    );
  }
}

export default App;
