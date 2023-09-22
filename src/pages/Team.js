import { Col, Container, Row } from 'react-bootstrap';
import gitlogo from '../img/gitlogo.png';
import "./KakaoFont.css"
import imgkim from '../img/imgkim.jpg'
import imgchae from '../img/imgchae.jpg'
import imgyoon from '../img/imgyoon.jpg'
import imgjang from '../img/imgjang.png'
import imgkang from '../img/imgkang.jpg'

const styles = {
  container: {
    margin: '15px',
    backgroundColor: '#bbb0dc',
    display: 'flex',
    textAlign: 'center',
    borderRadius: 15,
  },
  teamMemberContainer: {
    fontFamily: "KakaoRegular",
    paddingTop: '9%',
    textAlign: 'center',
    padding: '20px',
  },
  faceImage: {
    height: '260px',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
};

const teammembers = [
  {
    namedepart: "윤건우/컴퓨터공학과",
    img: imgyoon,
    email: "ndbsrjsdn@naver.com",
    git: "https://github.com/Y-gw",
    mbti: "ISTP",
    word: "일어나 코딩해야지..",
  },
  {
    namedepart: "김성민/소프트웨어학과",
    img: imgkim,
    email: "sungmin1935@naver.com",
    git: "https://github.com/asasia1935",
    mbti: "ESTP",
    word: "배우고 성장하자!",
  },
  {
    namedepart: "강석훈/컴퓨터공학과",
    img: imgkang,
    email: "hamer1233@naver.com",
    git: "https://github.com/Seok-Hun",
    mbti: "ISTP",
    word: "그래도 해야하지 어쩌겠습니까",
  },
  {
    namedepart: "채호기/소프트웨어학과",
    img: imgchae,
    email: "hogi1216@naver.com",
    git: "https://github.com/hogishim",
    mbti: "ISFJ",
    word: "화이팅!!",
  },
  {
    namedepart: "장현화/컴퓨터공학과",
    img: imgjang,
    email: "ex@example.com",
    git: "ex@example.com",
    mbti: "~~~~",
    word: "한마디",
  },
]

function Contact() {
  return (
    <div>
      <div style={styles.teamMemberContainer} className='kakaofont'>
        <Container>
          <Row>
            {teammembers.map((member, index) => {
              if (index > 2) return false;
              else return (
                <Col>
                  <div key={index}>
                    <img style={styles.faceImage} src={member.img} />
                    <div style={{ fontSize: '20px' }}>
                      <a href={member.git}><img src={gitlogo} width='40px' /></a>
                      &nbsp;{member.namedepart}
                    </div>
                    <p>{member.email}</p>
                    <p>{member.mbti}</p>
                    <p>{member.word}</p>
                  </div>
                </Col>
              )
            })}
          </Row>
          <Row>
            {teammembers.map((member, index) => {
              if (index < 3) return false;
              else return (
                <Col>
                  <div key={index}>
                    <img style={styles.faceImage} src={member.img} />
                    <div style={{ fontSize: '20px' }}>
                      <a href={member.git}><img src={gitlogo} width='40px' /></a>
                      &nbsp;{member.namedepart}
                    </div>
                    <p>{member.email}</p>
                    <p>{member.mbti}</p>
                    <p>{member.word}</p>
                  </div>
                </Col>
              )
            })}
          </Row>
        </Container>
      </div>
    </div >
  );
}


export default Team;