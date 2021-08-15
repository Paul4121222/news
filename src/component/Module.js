import React,{useEffect} from 'react';
import ReactDOM from 'react-dom';


//組件
const Module=(props)=>{
    useEffect(()=>{
        document.querySelector('body').classList.add('nos-scroll');
        document.querySelector('.modal').childNodes.forEach(item => {
            item.addEventListener('click',props.open);
        });
       
        return ()=>{
            document.querySelector('body').classList.remove('nos-scroll');
            document.querySelector('.menu').classList.remove('menu-open');
        }
    },[])
    return ReactDOM.createPortal(
        <div className="modal-bg" onClick={props.open}> 
            <div className="modal" onClick={(e)=>e.stopPropagation()}>
                {props.renderNav()}
            </div>
        </div>
    ,document.querySelector('#module'))
}

export default Module;