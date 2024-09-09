import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import projectCard from './ProjectCard';
export const Projects = () => {
  return(
    <>
    <div className="Projects container">
      <div className='card_div'>
      <h2 className="Projecthead text-center mt-2">Projects</h2>
      <p>The project section of my portfolio showcases a diverse array of my work, highlighting my skills, creativity, and problem-solving abilities across various domains. Each project is a testament to my dedication to delivering high-quality results, whether it's software development, graphic design, content creation, or any other endeavor I've undertaken. With a keen eye for detail and a passion for innovation, I approach each project with enthusiasm and commitment, striving to exceed expectations and leave a lasting impact. Explore this section to witness the breadth and depth of my expertise, and see how I've tackled challenges and brought ideas to life with ingenuity and finesse.</p>
      <div className="row d-flex justify-content-around align-items-center">
        {
            projectCard.map((ele,index)=>{
                return (
                    <>
                     <Card id="projects"style={{ width: '20rem',height:"20rem" }} className='mt-4 mb-4'>
                     <Card.Img variant="top" style={{width:'20rem',marginLeft:-13,marginBottom:-18}} src={ele.imgsrc} />
                     <Card.Body>
                     <Card.Title>{ele.projectName}</Card.Title>
                     <Card.Text>
                     {ele.text}
                     </Card.Text>
                     <Button variant="primary">
                        <a href={ele.demo} target="_blank" className='text-decoration-none text-light'>Live Demo</a>
                        </Button>
                     </Card.Body>
                     </Card>
                    </>
                )
            })
        }
     
      </div>
      </div>
    </div>
    </>
  )
}