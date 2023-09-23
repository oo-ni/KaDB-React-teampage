import Aos from "aos";
import React, { useEffect } from "react";
import 'aos/dist/aos.css';
import './Vision.css';

const Vision = () => {
    const visionText = '시도하는 용기, 열정있는 배움, 효율적인 소통'
    const catchphraseText = '키보드로 예술을 펼치다'
    useEffect(()=>{
        Aos.init();
    })
    return(
        <section>
            <div className="arrowDiv"data-aos="fade-right">
                <label className="arrowTitle">VISION</label>
            </div>
            <div className="textDiv" data-aos="zoom-in">
                <div>&#10077;</div>
                {visionText}
                <div>&#10078;</div>
            </div>
            <div className="arrowDiv" data-aos="fade-right">
                <label className="arrowTitle">CATCHPHRASE</label>
            </div>
            <div className="textDiv" data-aos="zoom-in">
                <div>&#10077;</div>
                {catchphraseText}
                <div>&#10078;</div> 
            </div>
        </section>
    )
}

export default Vision;
