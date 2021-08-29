import React from 'react';
import $ from 'jquery';
class Theme extends React.Component{
    componentDidMount(){
        console.log($(window).height())
        let firstItem=($('.float-wrap :nth-child(1) .float-text').offset().top)-$(window).height();
        let secItem=($('.float-wrap :nth-child(2) .float-text').offset().top)-$(window).height();
        let thirdItem=($('.float-wrap :nth-child(3) .float-text').offset().top)-$(window).height();
       
        $(window).on('scroll',()=>{
           
            if($(window).scrollTop()>firstItem){
                $('.float-wrap :nth-child(1) .float-text').addClass('normal');
            }
            if($(window).scrollTop()<firstItem){
                $('.float-wrap :nth-child(1) .float-text').removeClass('normal');
            }

            if($(window).scrollTop()>secItem){
                $('.float-wrap :nth-child(2) .float-text').addClass('normal');
            }
            if($(window).scrollTop()<secItem){
                $('.float-wrap :nth-child(2) .float-text').removeClass('normal');
            }
            if($(window).scrollTop()>thirdItem){
                $('.float-wrap :nth-child(3) .float-text').addClass('normal');
            }
            if($(window).scrollTop()<thirdItem){
                $('.float-wrap :nth-child(3) .float-text').removeClass('normal');
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
                <div className="header-title">
                    {this.props.title}
                </div>
            </div>
        )
    }

    introduce(){
        return (
            <div className="container padding-y padding-x">
                <p className="intro-title">頭條新聞</p>
                <div className="intro-wrap">
                    <div className="intro-item">
                        <img width="100%" src={this.props.theme[4].image} alt='新聞圖片' />
                        <div className="intro-text">
                            <h2>{this.props.theme[4].title}</h2>
                            <p>{this.props.theme[4].description}</p>
                        </div>
                        <a className="intro-href btn" href={this.props.theme[4].url} target="_blank" rel="noreferrer noopener">more</a>
                    </div>
                    <div className="intro-item">
                        <img  width="100%" src={this.props.theme[5].image} alt='新聞圖片' />
                        <div className="intro-text">
                            <h2>{this.props.theme[5].title}</h2>
                            <p>{this.props.theme[5].description}</p>
                        </div>
                        <a className="intro-href btn" href={this.props.theme[5].url} target="_blank" rel="noreferrer noopener">more</a>
                    </div>
                    <div className="intro-item">
                        <img  width="100%" src={this.props.theme[6].image} alt='新聞圖片' />
                        <div className="intro-text">
                            <h2>{this.props.theme[6].title}</h2>
                            <p>{this.props.theme[6].description}</p>
                        </div>
                        <a className="intro-href btn" href={this.props.theme[6].url} target="_blank" rel="noreferrer noopener">more</a>
                    </div>
                </div>
            </div>
        )
    }

    floatItem(){
        return (
            <div className="container padding-y padding-x">
                <p className="intro-title">不容錯過</p>
                <div className="float-wrap">

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