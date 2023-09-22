import React, { useState, useEffect } from 'react';
import img1 from '../img/1.jpg';
import img2 from '../img/2.jpg';
import img01 from '../img/001.png';
import img02 from '../img/002.png';
import img03 from '../img/003.png';
import img04 from '../img/004.png';
import img05 from '../img/005.png';
import img06 from '../img/006.png';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

import './Contact.css'
import ImageSlider from './ImageSlider';

const styles = {
  newLine: {
    marginTop: '5%',
    marginBottom: '5%',
    borderLeft: '1px solid #bbb0dc',
    height: '80%',

  },
  customhr: {

    width: 3,
    border: '0px',
    color: '#f3aa51',
    backgroundColor: '#f3aa51',


  },

  container: {

    height: '600px',
    backgroundColor: '#567ace',
    display: 'flex',

  },
  innerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: '30px',

  },
  box1: {

    alignItems: 'flex-start',
    marginRight: "10px",
    flex: 1,
    height: '100%',
    color: '#f1d2e7'

  },

  box2: {

    alignItems: 'baseline',
    flex: 1,
    height: '100%',
    color: '#f1d2e7'

  },

  imageContainer: {
    flex: 1,
    padding: '15px',

  },

  textContainer: {
    height: '60%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    padding: '25px',
    fontFamily: 'font1',

  },

  outerTextBox: {

    height: '100%',
    display: 'flex',
    width: '50%',
    flexDirection: 'column',



  },

  slider: {

    height: '25%',
    width: '100%',
    alignItems: 'flex-end',
    marginTop: '5%',

  },

  image: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
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


};

function Contact() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(false);

  const changeImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 2);
  };

  useEffect(() => {
    const interval = setInterval(changeImage, 3000);


    return () => clearInterval(interval);
  }, []);


  const images = [img1, img2];


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
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img
          style={styles.image}
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
        />
      </div>

      <div style={styles.newLine}></div>

      <div style={styles.outerTextBox}>
        <div
          id="textContainer"
          style={{

            ...(isTextVisible ? styles.textVisible : styles.textHidden),
            ...styles.textContainer,
          }}>

          <h2 style={{ color: "#cee5d5" }}><b>About us</b></h2>
          <div style={styles.innerContainer}>
            <div style={styles.box1}>
              <p>We are students from Gachon University</p>
              <p>We are studying React, Spring Boot, HTML, JavaScript, CSS in Kakao Software
                Academy class 'Web application development'</p>
              <Stack direction="horizontal" gap={1}>
                <Badge bg="primary">React</Badge>
                <Badge bg="secondary">HTML</Badge>
                <Badge bg="danger">CSS</Badge>
                <Badge bg="warning" text="dark">
                  JavaScript
                </Badge>
              </Stack>
              <Stack direction="horizontal" gap={1} style={{paddingTop: '5px'}}>
                <Badge bg="success">Spring</Badge>
                <Badge bg="primary">FASTAPI</Badge>

              </Stack>


            </div>
            <div style={styles.box2}>
              <p>We are using Slack, Notion, KakaoWork,
                Kakao Azit as our colloaboration tool.</p>
              <p>We are planning to make a blog as our group project.</p>
              <p>Thank you for visiting our Website!!</p>

            </div>
          </div>


        </div>

        <div style={styles.slider}>
          <ImageSlider images={[img01, img02, img03, img04, img05, img06]} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
