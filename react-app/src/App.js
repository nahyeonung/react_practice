import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class Test extends Component{
  render(){
    return(
      <nav>
        <ul>
          <li><a href="1.html">html</a></li>
          <li><a href="1.html">shit</a></li>
        </ul>
      </nav>
    )
  }
}
class Subject extends Component{
  render(){
    return(
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    )
  }
}
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
