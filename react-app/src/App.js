import './App.css';
import Test from './components/Test'
import Subject from './components/Subject'
import Content from './components/Content'
import React, { Component } from 'react';



class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      selected_content_id : 2,
      mode:'welcome',
      welcome:{title:'welcome', desc:'hi react'},
      subject:{title:'WEB', sub:'World Wid Web'},
      contents:[
        {id:1, title:'HTML', desc:"HTML is for information"},
        {id:2, title:'CSS', desc:"CSS is for information"},
        {id:3, title:'JAVASCRIPT', desc:"JAVASCRIPT is for information"}
      ]
    }
  }
  render(){
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read'){
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title= data.title;
          _desc= data.desc;
        }
        i += 1;
      }
    }
    return(
      <div className='App'>
        <Subject 
        title={this.state.subject.title} 
        sub={this.state.subject.sub}
        onclickpage={function(e){
          this.setState({mode: 'read'})
        }.bind(this)}></Subject>
        {/* 코드가 은닉되지 않은 상황에서의 이벤트 처리 코딩 
        <header>
          <h1><a href='/' onClick={function(e){
            this.setState({ //state값을 바꿀 때는 this.state.mode = ''이 아닌 setState함수를 써야한다!!
              mode:'read'
            });
            //function안에서는 this가 컴포넌트를 가르키는지 인식이 안되기 때문에 함수 뒤에 bind(this)를 해줘야 인식 가능하다//
            e.preventDefault();}.bind(this)}>{this.state.subject.title}</a></h1> 
            {this.state.subject.sub}
        </header> */}
        <Subject title="이렇게도" sub="응용"></Subject>
        <Test 
        data={this.state.contents}
        onchangepage={function(id){
          this.setState({
            mode : 'read',
            selected_content_id : Number(id)})
        }.bind(this)}></Test> {/*data에 contents에서 만든 값들을 담는다. */}
        <ul>
          <li><a href="/create">create</a></li>
          <li><a href="/update">update</a></li>
          <li><input type="button" value="delete"></input></li>
        </ul>
        <Content title={_title} decs={_desc}></Content>
      </div>
    )
  }
}

export default App;
