import React, { Component } from 'react';

class Test extends Component{
    
    render(){
        var data = this.props.data /*여기도 마찬가지로 연결된 app.js에서 test에 속성이 data인 값을 불러 옴 */
        var lists = [];
        var i = 0;
        while(i < data.length){
            lists.push(<li key={data[i].id}>
                <a 
                href={"/content/"+data[i].id}
                data-id={data[i].id}
                onClick={function(e){
                    e.preventDefault();
                    this.props.onchangepage(e.target.dataset.id);
                }.bind(this)}>{data[i].title}</a></li>)
            i = i + 1 
        }
        return(
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        )
    }
}
export default Test