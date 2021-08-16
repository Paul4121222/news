import React from 'react';
import {mainPage} from '../action';
import {connect} from 'react-redux';
import Slider from './Slider';
import Footer from './Footer';
import FlipCard from './FlipCard';
class New extends React.Component{
    componentDidMount(){
        this.props.mainPage();
    }
    render(){
        if(this.props.item.length===0){
            return <div>loading</div>
        }
        return (
            <div>
                <FlipCard 
                    list={[
                        this.props.item[9],
                        this.props.item[5],
                        this.props.item[6],
                        this.props.item[7],
                        this.props.item[8]
                    ]}
                />
                <Slider 
                    list={[
                    this.props.item[0],
                    this.props.item[1],
                    this.props.item[2],
                    this.props.item[3],
                    this.props.item[4]
                ]}
                />

                
                <Footer   />

            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        item:state.newTheme
    }
}
export default connect(mapStateToProps,{mainPage})(New);