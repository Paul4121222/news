import React from 'react';
class Footer extends React.Component{
    render(){
        return (
            <div className="footer">
                <div className="container">

                    
                        <img  className="footer-img" src='https://images.vexels.com/media/users/3/142812/isolated/preview/992801ae3182fa95353e941cfcac9293-shield-logo-emblem-design.png' alt="圖片"></img>
                    

                    <ul className='col-1'>
                        <h2>關於我們</h2>
                        <li>了解我們</li>
                        <li>聯絡我們</li>
                        <li>新聞來源</li>
                        <li>了解詳情</li>
                    </ul>

                    <ul className="col-2">
                        <h2>服務項目</h2>
                        <li>隱私權</li>
                        <li>Q&#38;A</li>
                        <li>使用條款</li>
                        <li>會員專屬</li>
                    </ul>

                    <div className="social">
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-youtube"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-twitter"></i>
                    </div>
                </div>

                <div className="copyright">Code by Paul</div>
            </div>
        )
    }
}

export default Footer;