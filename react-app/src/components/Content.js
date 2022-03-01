import {Component} from 'react';

class Content extends Component{
    render(){
        return(
            <article>
                <h2>{this.props.title}</h2> {/*Content클래스를 컴포넌트로 사용중인 app.js에 있는 content에서 속성이(props) title인 값을 불러온다는 뜻*/}
                {this.props.decs}
            </article>
        )
    }
}

export default Content