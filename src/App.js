import React, { Component } from "react";
import './App.css';
import SearchForm from "./components/SearchForm";
import Directory from './components/Directory';
import API from "./utils/API";

//SIDE NOTE...DON'T USE CLASSES ANYMORE, THEY'RE GOOD BUT USE FUNCTIONS WITH HOOKS!!!!
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

  //repackaging 
  setsearch = (value) => {
    this.setState({ search: value })
  }

  render() {
    return (
      <>
        <div className="App">
          <SearchForm
            search={this.state.search}
            setsearch={this.setsearch} />
        </div>
        {/* <Directory employee={employee} useState class uses this.state
         />; */}
        <Directory
          employee={this.state.employee}
          search={this.state.search}
        />

      </>
    );
  }
}

export default App;
