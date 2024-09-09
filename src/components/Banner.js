import { useEffect ,useState} from "react";
import {Container,Row,Col} from "react-bootstrap"
export const Banner=()=>{
  const[loopNum,setLoopNum]=useState(0);
  const[isDeleting,setIsDeleting]=useState(false);
  const toRotate=["Frontend Developer","Web Designer","Problem Setter"];
  const[text,setText]=useState('');
  const[delta,setDelta]=useState(100-Math.random()*100);
  const period=2000;
  useEffect(()=>{
     let ticker=setInterval(()=>{
        tick();
     },delta)
     return()=>{clearInterval(ticker)};
  },[text])
  const tick=()=>{
    let i=loopNum%toRotate.length;
    let fullText=toRotate[i];
    let updatedText=isDeleting?fullText.substring(0,text.length-1):fullText.substring(0,text.length+1)

    setText(updatedText);
    if(isDeleting){
      setDelta(prevDelta=>prevDelta/4)
    }
    if(!isDeleting && updatedText===fullText){
      setIsDeleting(true);
      setDelta(period);
    }
    else if(isDeleting && updatedText===''){
      setIsDeleting(false);
      setLoopNum(loopNum+1);
      setDelta(100);
    }
  }
    return(
        <section className="banner" id="home">
          <Container>
            <Row className="align-items-center">
              <Col xs={12} md={6} xl={7}>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>{`Hi I'm webdecoded`} <span className="wrap">{text}</span></h1>
              <p> My name is Somiya Kumari, currently persuing my B.Tech in Computer Science at Madan Mohan Malaviya University Of Technology, Gorakhpur. I am skilled in C++ and problem solving and have a good knowledge in data structure and algorithms.</p>
              </Col>
              <Col xs={12} md={6} xl={5}>
              {/* <img  alt="Header Img"/> */}
              </Col>
            </Row>
          </Container>
        </section>
    )
}