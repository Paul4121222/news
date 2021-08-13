import React from 'react';
import {connect} from 'react-redux';
import {newsList} from '../action';
import Theme from './Theme';

class Sports extends React.Component{
    componentDidMount(){
        this.props.newsList('sports');
    }
    render(){
        if(this.props.newTheme.length===0){
            return <div>loading</div>
        }

        return (
            <React.Fragment>
                <Theme 
                    theme={this.props.newTheme} 
                    title="sports"
                />
            </React.Fragment>
        )
    }
}


const mapStateToProps=(state)=>{
    return {
        newTheme:state.newTheme
    }
}
export default connect(mapStateToProps,{newsList})(Sports);