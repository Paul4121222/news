import React from 'react';

const FlipCard = (props)=>{
    return (
        <div className="container padding-x  flip-card">
            <h2></h2>
            <div className="card-row1">
               
                    <div className="clip-card-container">
                        <div className="clip-card-space">
                                <div className="card-front ">
                                    <img src={props.list[0].image} alt="新聞圖片" />
                                </div>
                                <div className="card-back">
                                    <h2>{props.list[0].title}</h2>
                                </div>
                        </div>
                    </div>
               

                <div className="clip-card-container">
                    
                    <div className="clip-card-space">
                            <div className="card-front ">
                                <img src={props.list[1].image} alt="新聞圖片" />
                            </div>
                            <div className="card-back">
                                <h2>{props.list[1].title}</h2>
                            </div>
                    </div>
                </div>

                <div className="clip-card-container">
                    <div className="clip-card-space">
                            <div className="card-front ">
                                <img src={props.list[2].image} alt="新聞圖片" />
                            </div>
                            <div className="card-back">
                                <h2>{props.list[2].title}</h2>
                            </div>
                    </div>
                </div>
            </div>

            <div className="card-row2">
                <div className="clip-card-container">
                    
                    <div className="clip-card-space">
                            <div className="card-front ">
                                <img src={props.list[3].image} alt="新聞圖片" />
                            </div>
                            <div className="card-back">
                                <h2>{props.list[3].title}</h2>
                            </div>
                    </div>
                </div>

                <div className="clip-card-container">
                    <div className="clip-card-space">
                            <div className="card-front ">
                                <img src={props.list[4].image} alt="新聞圖片" />
                            </div>
                            <div className="card-back">
                                <h2>{props.list[4].title}</h2>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlipCard;