import React, { Component } from 'react';
import { Provider } from "react-redux";
import Logo from '../components/Logo';
import Matrix from '../components/Matrix';
import TargetDate from '../components/TargetDate';
import Period from '../components/Period';
import ResultDates from '../components/ResultDates';

class App extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <Provider store={this.props.store}>
        <main className="main">
          <Logo />
          <TargetDate />
          <Matrix />
          <Period />
          <ResultDates />
        </main>
      </Provider>
    );
  }
}

export default App;