/**
 * Created by golike on 2017/10/15.
 */
import React,{Component} from 'react'

 class Ranking extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        return <div><button onClick={this.props.onClickRanking}></button></div>;
    }
}

export default Ranking