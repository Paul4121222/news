import React from 'react';
class Footer extends React.Component{
    render(){
        return (
            <div className="footer">
                <div className="container">

                    <a href="#">
                        <img src='https://styles.redditmedia.com/t5_3v7z2o/styles/profileIcon_snoo4f615381-fd7d-439a-adcd-25d2e5f615b1-headshot.png'></img>
                    </a>

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
                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-youtube"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-twitter"></i>
                    </div>
                </div>

                <div className="copyright">Code by Paul</div>
            </div>
        )
    }
}

export default Footer;