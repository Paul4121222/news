import React from 'react';
import { Field,reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import {searchKey,word} from '../action';

class ReduxForm extends React.Component{

    renderInput({input}){
        return (
                <input {...input} autoComplete="off" placeholder="輸入關鍵字"/>
        )
    }

    onSubmit=(formValue)=>{
        this.props.searchKey(formValue.keyWord);
        this.props.word(formValue.keyWord);
    }
    render(){
        return (
            <form  className="inputForm" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="keyWord" component={this.renderInput} />
                <button><i className="fas fa-search"></i></button>
            </form>
        )
    }
}

const formInput= reduxForm({
    form:"inpurForm"
})(ReduxForm);

export default connect(null,{searchKey,word})(formInput);
