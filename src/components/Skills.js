import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import {Carousel} from 'react-responsive-carousel';
import meter1 from "../assests/html.webp"
import meter2 from "../assests/CSS-Logo-500x313.webp"
import meter3 from "../assests/Bootstrap_logo.webp"
import meter4 from "../assests/javascript-1.webp"
import meter5 from "../assests/nodejs-1-logo-png-transparent.webp"
import meter6 from "../assests/express-1.webp"
import meter7 from "../assests/mongodb9740.logowik.com.webp"
import meter8 from "../assests/GitHub-logo-500x289.webp"

export const Skills=()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
};
return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx">
                        <h2>Skills</h2>
                        <p>👉 including programming Languages, frameworks, databses, front-end and back-end tools, and APIs<br>
                        </br> </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt=""/>
                                <h5>HTML</h5>
                            </div>

                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>CSS/SCSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>Node JS</h5>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="Image" />
                                <h5>Express JS</h5>
                            </div>
                            <div className="item">
                                <img src={meter7} alt="Image" />
                                <h5>Mongodb</h5>
                            </div>
                            <div className="item">
                                <img src={meter8} alt="Image" />
                                <h5>Git/Github</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
      
    </section>)
}
