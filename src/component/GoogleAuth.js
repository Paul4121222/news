import React from 'react';
import {connect} from 'react-redux';
import {SignIn,SignOut} from '../action';


class GoogleAuth extends React.Component{
    
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'382897703094-anoltm2q433iqm1vaofap65etqs3vcfk.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                this.auth=window.gapi.auth2.getAuthInstance();
                this.showState(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.showState);
            })
        })
    }

    showState=(state)=>{
        //登入
        if(state){
            this.props.SignIn(this.auth.currentUser.get().getId());
        }
        //登出
        else{
            this.props.SignOut();
        }
    }

    signIn=()=>{
        this.auth.signIn();
    }
    signOut=()=>{
        this.auth.signOut();
    }

    renderButton(){

        if(this.props.auth===null){
            return null;
        }
        else if(this.props.auth===true)
            return <button className="btn google-btn" onClick={this.signOut}>
                    <i className="fab fa-google"></i>
                        Sign Out
                    </button>
        else 
            return <button className="btn google-btn"  onClick={this.signIn}>
                        <i className="fab fa-google"></i>
                            Sign In
                    </button>
    }


    render(){
        return (
            <div className="header-google">
                {this.renderButton()}
            </div>

        )
    }
}

const mapStateToProps=(state)=>{
    return {
        auth:state.auth.isSigned
    }
}
export default connect(mapStateToProps,{SignIn,SignOut})(GoogleAuth);