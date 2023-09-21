
import Aos from "aos";
import React, { useEffect } from "react";
import 'aos/dist/aos.css';
import './Home.css'

const Home = () => {
    const visionText = '비전 작성'
    const catchphraseText = '키보드로 예술을 펼치다'
    useEffect(()=>{
        Aos.init();
    })
    return(
        <div>
            <div className="arrowDiv"data-aos="fade-right">
                <label>VISION</label>
            </div>
            <div className="textDiv" data-aos="zoom-in">
                <div>&#10077;</div>
                {visionText}
                <div>&#10078;</div>
            </div>
            <div className="arrowDiv" data-aos="fade-right">
                <label>CATCHPHRASE</label>
            </div>
            <div className="textDiv" data-aos="zoom-in">
                <div>&#10077;</div>
                {catchphraseText}
                <div>&#10078;</div> 
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            </div>
        </div>
    )
}

export default Home;
