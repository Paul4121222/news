import React from 'react'
import {Link} from 'react-router-dom';
import Module from './Module';
import ReduxForm from './ReduxForm';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={open:false}
        this.menu=React.createRef();
    }
    
    showModule(){
        if(this.state.open){
            return <Module  open={this.clickNav} renderNav={this.renderNav}/>
        }
    }

    clickNav=()=>{
        this.setState({open:false});
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
            <div className="header-nav padding-all">
                <Link to='/' className='nav-title'>新聞網站</Link>
                
                <nav className='nav'>
                    {this.renderNav()}
                </nav>

                <div className="nav-right">
                    <ReduxForm />
                </div>
                



                <div ref={this.menu} className="menu" onClick={()=>{
                    this.menu.current.classList.contains('menu-open')?this.menu.current.classList.remove('menu-open'):this.menu.current.classList.add('menu-open');
                    this.setState({open:!this.state.open})}}>
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