import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useState,useEffect} from "react";
import { FaHome } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { GoProjectSymlink } from "react-icons/go"
import { HashLink } from 'react-router-hash-link';
import logo from "../assests/Somiya Portfolio.png"
import {
  BrowserRouter as Router
} from "react-router-dom";
export const NavBar=()=>{
    const[activeLink,setActiveLink]=useState('home');
    const[scrolled,seScrolled]=useState(false);
    useEffect(()=>{
        const onScroll=()=>{
            if(window.scrollY>100){
                seScrolled(true);
            }
            else{
                seScrolled(false);
            }
        }
        window.addEventListener("scroll",onScroll);
        return()=>window.removeEventListener("scroll",onScroll);
    },[])
    const onUpdateActiveLink=(value)=>{
        setActiveLink(value);
    }
  return (
    <Router>
    <Navbar expand="md" className={scrolled?"scrolled":""}>
      <Container>
        <Navbar.Brand href="#home"><img className='logo' src={logo} /></Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink==='home'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink==='skills'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink==='projects'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href="#"><FaHome /></a>
                <a href="#"><GiSkills /></a>
                <a href="#"><GoProjectSymlink/></a>
            </div>
            <button><span>Let's Connect</span>
            </button>
         
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar></Router>
  );
}

