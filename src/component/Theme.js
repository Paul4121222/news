import React from 'react';
import {motion} from 'framer-motion';
class Theme extends React.Component{
    constructor(props){
        super(props);
        this.floatItems=React.createRef();
        this.buttonHover={
            hover:{
                scale:1.1,
                transition:{
                    yoyo:Infinity,
                    duration:0.3
                }
            }
        }
    }   
    componentDidMount(){
       window.addEventListener('scroll',()=>{
           const items=this.floatItems.current;
           if(items){
                items.childNodes.forEach(item=>{
                    if(item.getBoundingClientRect().top<window.innerHeight-150){
                        item.querySelector('.float-text').classList.add('normal');
                    }
                    else{
                        item.querySelector('.float-text').classList.remove('normal');
                    }
            })
           }
           
       })
    }
    
    fourItem(){
        return (
            <div className="theme-header ">
                <div className="theme-header-item">
                    <img src={this.props.theme[0].image} alt=''/>
                    <div className="header-item-text">
                        <a href={this.props.theme[0].url} target="_blank" rel="noreferrer noopener">
                            {this.props.theme[0].title}
                        </a>
                    </div>
                </div>
                <div className="theme-header-item">
                    <img src={this.props.theme[1].image} alt=''/>
                    <div className="header-item-text">
                        <a href={this.props.theme[1].url} target="_blank" rel="noreferrer noopener">
                            {this.props.theme[1].title}
                        </a>
                    </div>
                </div>
                <div className="theme-header-item">
                    <img src={this.props.theme[2].image} alt=''/>
                    <div className="header-item-text">
                        <a href={this.props.theme[2].url} target="_blank" rel="noreferrer noopener">
                            {this.props.theme[2].title}
                        </a>
                    </div>
                </div>
                <div className="theme-header-item">
                    <img src={this.props.theme[3].image} alt=''/>
                    <div className="header-item-text">
                        <a href={this.props.theme[3].url} target="_blank" rel="noreferrer noopener">
                            {this.props.theme[3].title}
                        </a>
                    </div>
                </div>
                <motion.div className="header-title" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.5}} >
                    {this.props.title}
                </motion.div>
            </div>
        )
    }

    introduce(){
        return (
            <div className="container padding-y padding-x">
                <p className="intro-title">頭條新聞</p>
                <div className="intro-wrap" >
                    <div className="intro-item">
                        <img width="100%" src={this.props.theme[4].image} alt='新聞圖片' />
                        <div className="intro-text">
                            <h2>{this.props.theme[4].title}</h2>
                            <p>{this.props.theme[4].description}</p>
                        </div>
                        <motion.a className="intro-href btn" href={this.props.theme[4].url} target="_blank" rel="noreferrer noopener"
                        variants={this.buttonHover}
                        whileHover="hover"
                        >
                            more
                        </motion.a>
                    </div>
                    <div className="intro-item">
                        <img  width="100%" src={this.props.theme[5].image} alt='新聞圖片' />
                        <div className="intro-text">
                            <h2>{this.props.theme[5].title}</h2>
                            <p>{this.props.theme[5].description}</p>
                        </div>
                        <motion.a className="intro-href btn" href={this.props.theme[5].url} target="_blank" rel="noreferrer noopener"
                        variants={this.buttonHover}
                        whileHover="hover"
                        >
                            more
                        </motion.a>
                    </div>
                    <div className="intro-item">
                        <img  width="100%" src={this.props.theme[6].image} alt='新聞圖片' />
                        <div className="intro-text">
                            <h2>{this.props.theme[6].title}</h2>
                            <p>{this.props.theme[6].description}</p>
                        </div>
                        <motion.a className="intro-href btn" href={this.props.theme[6].url} target="_blank" rel="noreferrer noopener"
                        variants={this.buttonHover}
                        whileHover="hover"
                        >
                            more
                        </motion.a>
                    </div>
                </div>
            </div>
        )
    }

    floatItem(){
        return (
            <div className="container padding-y padding-x">
                <p className="intro-title">
                    不容錯過
                </p>
                <div className="float-wrap"   ref={this.floatItems}>

                    <div className="float-item">
                        <div className="float-img">
                            <img src={this.props.theme[7].image} alt='新聞圖片' />
                        </div>
                        <div className="float-text">
                            <h2>{this.props.theme[7].title}</h2>
                            <p>{this.props.theme[7].description}</p>
                            <a className="btn float-btn" href={this.props.theme[7].url} target="_blank" rel="noreferrer noopener">more</a>
                        </div>
                    </div>

                    <div className="float-item">
                        <div className="float-text">
                            <h2>{this.props.theme[8].title}</h2>
                            <p>{this.props.theme[8].description}</p>
                            <a className="btn float-btn" href={this.props.theme[8].url} target="_blank" rel="noreferrer noopener">more</a>
                        </div>
                        <div className="float-img">
                            <img src={this.props.theme[8].image} alt='新聞圖片' />
                        </div>
                    </div>

                    <div className="float-item">
                        <div className="float-img">
                            <img src={this.props.theme[9].image} alt='新聞圖片' />
                        </div>
                        <div className="float-text">
                            <h2>{this.props.theme[9].title}</h2>
                            <p>{this.props.theme[9].description}</p>
                            <a className="btn float-btn" href={this.props.theme[9].url} target="_blank" rel="noreferrer noopener">more</a>
                        </div>
                    </div>

                    
                </div>
            </div>

        )
    }
    render(){
        return (
            <div>
                {this.fourItem()}
                {this.introduce()}
                {this.floatItem()}
            </div>
        )
    }
}

export default Theme;