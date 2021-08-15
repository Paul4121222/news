import  React ,{useRef}from 'react';

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

    let lastCount;
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
        
        totalWidth=window.innerWidth;
        count=Math.floor((slider.current.clientWidth-totalWidth)/slide.current.clientWidth);

        //限制
        if(count>=5)count=4;
        console.log(count);
        //往右拖動量>100,往右一格
        if(currentTranslate-preTranslate<-50 && currentPos<count){
            currentPos++;
        }

        else if(currentTranslate-preTranslate>50&&currentPos>0){
            currentPos--;
        }
        setting();
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


    return (
            <div>
                <div className="slider-container" ref={slider} onMouseDown={touchStart} onMouseMove={touchMove} 
                    onMouseLeave={touchEnd} onMouseUp={touchEnd}  onTouchStart={touchStart} onTouchMove={touchMove} onTouchEnd={touchEnd}>
                    <div className="slide" >
                        <img src={list[0].image} alt='' onDragStart={e=>e.preventDefault()}/>
                        <div className="slider-text">
                            {list[0].title}
                        </div>
                    </div>
                    <div className="slide" onMouseDown={touchStart} onMouseMove={touchMove} 
                    onMouseLeave={touchEnd} onMouseUp={touchEnd} onTouchStart={touchStart} onTouchMove={touchMove} onTouchEnd={touchEnd}>
                        <img src={list[1].image} alt='' onDragStart={e=>e.preventDefault()}/>
                        <div className="slider-text">
                            {list[1].title}
                        </div>
                    </div>
                    <div className="slide" onMouseDown={touchStart} onMouseMove={touchMove} 
                    onMouseLeave={touchEnd} onMouseUp={touchEnd} onTouchStart={touchStart} onTouchMove={touchMove} onTouchEnd={touchEnd}>
                        <img src={list[2].image} alt='' onDragStart={e=>e.preventDefault()}/>
                        <div className="slider-text">
                            {list[2].title}
                        </div>
                    </div>
                    <div className="slide" onMouseDown={touchStart} onMouseMove={touchMove} 
                    onMouseLeave={touchEnd} onMouseUp={touchEnd} onTouchStart={touchStart} onTouchMove={touchMove} onTouchEnd={touchEnd}>
                        <img src={list[3].image} alt='' onDragStart={e=>e.preventDefault()}/>
                        <div className="slider-text">
                            {list[3].title}
                        </div>
                    </div>
                    <div className="slide" ref={slide} onMouseDown={touchStart} onMouseMove={touchMove} 
                    onMouseLeave={touchEnd} onMouseUp={touchEnd} onTouchStart={touchStart} onTouchMove={touchMove} onTouchEnd={touchEnd}>
                        <img src={list[4].image} alt='' onDragStart={e=>e.preventDefault()}/>
                        <div className="slider-text">
                            {list[4].title}
                        </div>
                    </div>
                </div>
            </div>
    )
}


export default Slider;