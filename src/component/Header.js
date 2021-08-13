import React from 'react'
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
import Module from './Module';
class Header extends React.Component{
    state={open:false}

    showModule(){
        if(this.state.open){
            return <Module  open={()=>{this.setState({open:false})}} renderNav={this.renderNav}/>
        }
    }
    renderNav(){
        return (
                <React.Fragment>
                    <Link to='/'>News</Link>
                    <Link to='/sports'>Sports</Link>
                    <Link to='/health'>Health</Link>
                </React.Fragment>
        )
    }
    render(){
        return (
            <div className="container header-nav padding-all">
                <Link to='/'>News</Link>
                
                <nav className='nav'>
                    {this.renderNav()}
                </nav>
                <GoogleAuth />
                <div className="menu" onClick={()=>{this.setState({open:!this.state.open})}}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                {this.showModule()}
            </div>
        )
    }
}
export default Header;