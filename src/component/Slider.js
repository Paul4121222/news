import  React ,{useRef,useEffect}from 'react';

const Slider=(props)=>{
    const list=props.list;
    const slider =useRef();
    const slide=useRef();
    let dragging=false;
    let preTranslate=0;
    let currentTranslate=0;
    let currentPos=0;
    let startPos=0;
    let totalWidth;
    let count;

    useEffect(()=>{
        totalWidth=window.innerWidth;
        count=Math.floor((slider.current.clientWidth-totalWidth)/slide.current.clientWidth);
    });
    
    const touchStart=(e)=>{
        dragging=true;
        startPos=getCurrentPos(e);
        slider.current.classList.add('grabbing');
    }

    const touchMove=(e)=>{
        if(dragging){
            const pos=getCurrentPos(e);
            currentTranslate=pos+preTranslate-startPos;
        } 
    }

    const touchEnd=()=>{
        dragging=false;
        slider.current.classList.remove('grabbing');
        

        //限制
        if(count>=5)count=4;
        //往右拖動量>100,往右一格
        if(currentTranslate-preTranslate<-50 && currentPos<count){
            currentPos++;
        }

        else if(currentTranslate-preTranslate>50&&currentPos>0){
            currentPos--;
        }
        setting();
        console.log(count,currentPos);
    }

    

    const setSliderPosition=(p=0)=>{
        
        slider.current.style.transform=`translateX(${currentTranslate+p}px)`;
    }

    const getCurrentPos=(e)=>{
        return e.type.includes("mouse")?e.pageX :e.touches[0].clientX;
    }
    
    const setting=()=>{
            if(slider.current.clientWidth-totalWidth-slide.current.clientWidth*currentPos<slide.current.clientWidth){
                currentTranslate=currentPos*(-slide.current.clientWidth);
                preTranslate=currentTranslate;
                
                setSliderPosition(-(slider.current.clientWidth-totalWidth-slide.current.clientWidth*currentPos))
            }

            else {
                currentTranslate=currentPos*(-slide.current.clientWidth);
                preTranslate=currentTranslate;
                setSliderPosition();
            }
    }

    const clickBtn=(num)=>{
        
        return ()=>{
            if(num>0){
                if(currentPos<count)
                    currentPos++;
                setting();
            }
            else{
                if(currentPos>0)
                    currentPos--;
                setting();
            }
        }
    }
    return (
            <div className='padding-y'>
                <div className="slider-header container">
                    <h2>精選消息</h2>
                    <div className="slider-btn">
                        <button onClick={clickBtn(-1)}>&#60;</button>
                        <button onClick={clickBtn(1)}>&#62;</button>
                    </div>
                </div>
                
                <div className="slider-container" ref={slider} onMouseDown={touchStart} onMouseMove={touchMove} 
                    onMouseLeave={touchEnd} onMouseUp={touchEnd}  onTouchStart={touchStart} onTouchMove={touchMove} onTouchEnd={touchEnd}>
                    <div className="slide" >
                        <img src={list[0].image} alt='' onDragStart={e=>e.preventDefault()}/>
                        <div className="slider-text">
                            {list[0].title}
                        </div>
                        <a className="slide-btn btn" href={list[0].url} target="_blank" rel="noreferrer noopener">more</a>
                    </div>
                    <div className="slide" onMouseDown={touchStart} onMouseMove={touchMove} 
                    onMouseLeave={touchEnd} onMouseUp={touchEnd} onTouchStart={touchStart} onTouchMove={touchMove} onTouchEnd={touchEnd}>
                        <img src={list[1].image} alt='' onDragStart={e=>e.preventDefault()}/>
                        <div className="slider-text">
                            {list[1].title}
                        </div>
                        <a className="slide-btn btn" href={list[1].url} target="_blank" rel="noreferrer noopener">more</a>
                    </div>
                    <div className="slide" onMouseDown={touchStart} onMouseMove={touchMove} 
                    onMouseLeave={touchEnd} onMouseUp={touchEnd} onTouchStart={touchStart} onTouchMove={touchMove} onTouchEnd={touchEnd}>
                        <img src={list[2].image} alt='' onDragStart={e=>e.preventDefault()}/>
                        <div className="slider-text">
                            {list[2].title}
                        </div>
                        <a className="slide-btn btn" href={list[2].url} target="_blank" rel="noreferrer noopener">more</a>
                    </div>
                    <div className="slide" onMouseDown={touchStart} onMouseMove={touchMove} 
                    onMouseLeave={touchEnd} onMouseUp={touchEnd} onTouchStart={touchStart} onTouchMove={touchMove} onTouchEnd={touchEnd}>
                        <img src={list[3].image} alt='' onDragStart={e=>e.preventDefault()}/>
                        <div className="slider-text">
                            {list[3].title}
                        </div>
                        <a className="slide-btn btn" href={list[3].url} target="_blank" rel="noreferrer noopener">more</a>
                    </div>
                    <div className="slide" ref={slide} onMouseDown={touchStart} onMouseMove={touchMove} 
                    onMouseLeave={touchEnd} onMouseUp={touchEnd} onTouchStart={touchStart} onTouchMove={touchMove} onTouchEnd={touchEnd}>
                        <img src={list[4].image} alt='' onDragStart={e=>e.preventDefault()}/>
                        <div className="slider-text">
                            {list[4].title}
                        </div>
                        <a className="slide-btn btn" href={list[4].url} target="_blank" rel="noreferrer noopener">more</a>
                    </div>
                </div>
            </div>
    )
}


export default Slider;