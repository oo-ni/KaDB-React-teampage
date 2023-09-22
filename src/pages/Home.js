import React, { useState, useEffect } from 'react';
import "./Home.css"
import "./KakaoFont.css"

const styles = {
    mainText: {
        fontFamily: "KakaoBold",
        fontSize: '120px',
        fontWeight: 'black',
        letterSpacing: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    subText: {
        fontFamily: "KakaoBold",
        fontSize: '50px',
        fontWeight: 'black',
        letterSpacing: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    textHidden: {
        opacity: 0,
        transform: 'translateY(20px)',
        transition: 'opacity 1s ease, transform 1s ease',
    },
    
    textVisible: {
        opacity: 1,
        transform: 'translateY(0)',
        transition: 'opacity 2s ease, transform 2s ease',
    },
}


function Home(){
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isTextVisible, setIsTextVisible] = useState(false);

    const changeImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 2);
    };
    
    useEffect(() => {
        const interval = setInterval(changeImage, 3000);
    
    
        return () => clearInterval(interval);
    }, []);


    const handleScroll = () => {
        const textContainer = document.getElementById('textContainer');
        if (textContainer) {
            const rect = textContainer.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
            setIsTextVisible(isVisible);
        }
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <>
            <br/>
            <div>
                <img src="../img/logo_5.png" height="auto" ></img>
            </div>
            <br/><br/>
            <div
            style={{
                ...(isTextVisible ? styles.textVisible : styles.textHidden),
            }}>
            </div>
            {/* 이 div로 아래 태그들 감싸면 될 줄 알았는데... 안되네요 ㅠ ㅠ  */}
                {/* <div style={styles.mainText}>
                    KaDB
                </div> */}
                <div style={styles.subText}>
                    <span style={{ color: "#FEE500" }}>Ka</span>kao
                    &nbsp;
                    <span style={{ color: "#FEE500" }}>D</span>eveloper 
                    &nbsp;
                    <span style={{ color: "#FEE500" }}>B</span>uddies
                </div>
                <div style={styles.subText}>
                    <span style={{ color: "#FEE500" }}>카카오</span>
                    &nbsp;
                    개발자
                    &nbsp;
                    <span style={{ color: "#FEE500" }}>친구들</span>
                </div>
            
                {/* <div>
                    <img className="logo" alt="logo_1" src ="../img/logo_1.png" />
                    <br/><br/>
                    <img className="logo" alt="logo_2" src ="../img/logo_2.png" />
                </div> */}
        </>
    );
}

export default Home;