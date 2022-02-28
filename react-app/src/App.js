import './App.css';
import Test from './components/Test'
import Subject from './components/Subject'
import { Component } from 'react';



class App extends Component{
  render(){
    return(
      <div className='App'>
        <Subject title="WEB" sub="site"></Subject>
        <Subject title="이렇게도" sub="응용"></Subject>
        <Test></Test>
      </div>
    )
  }
}

export default App;
