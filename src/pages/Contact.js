import React, { useState, useEffect } from 'react';
import img1 from '../img/1.jpeg';
import img2 from '../img/2.jpeg';
import img3 from '../img/3.jpeg';

const styles = {

  customhr: {

    width: 4,
    border: '0px',
    color: 'red',
    backgroundColor: 'red',


  },

  container: {
    margin: '15px',
    backgroundColor: '#bbb0dc',
    display: 'flex',
    borderRadius: 15,
  },
  imageContainer: {
    flex: 1,
    padding: '15px',
  },
  textContainer: {
    paddingTop: '15%',
    textAlign: 'center',
    flex: 1,
    padding: '20px',
    fontFamily: 'mainText',

  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
};

function Contact() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 이미지 변경 함수
  const changeImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  // 3초 간격으로 이미지 변경
  useEffect(() => {
    const interval = setInterval(changeImage, 3000);

    // 컴포넌트가 언마운트될 때 인터벌 제거
    return () => clearInterval(interval);
  }, []);

  // 이미지 배열
  const images = [img1, img2, img3];

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img
          style={styles.image}
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
        />
      </div>
      <hr style={styles.customhr} />
      <div style={styles.textContainer}>
        <h2>About us</h2>
        <h6>
        <p>We are students from Gachon University
          We are studying React, Spring Boot, HTML, JavaScript, CSS in Kakao Software
          Academy class 'Web application development'</p>
        <p>We are using Slack, Notion, KakaoWork,
          Kakao Azit as our colloaboration tool</p>
        <p>We are planning to make a blog as our group project</p>
        </h6>
      </div>
    </div>
  );
}


export default Contact;