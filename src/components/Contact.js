import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from "react";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Contact=()=>{
    const [inputvalue,setInputvalue]=useState({
        fname:"",
        lname:"",
        email:"",
        password:""
    });
    const getvalue=(e)=>{
        const{name,value}=e.target;
        setInputvalue(()=>{
            return {
                ...inputvalue,
                [name]:value
            }
        })
    }
    const sentUserdata=async(e)=>{
      e.preventDefault();
      const {fname,lname,email,password}=inputvalue;
      if(fname === ""){
        toast.error("fname is require")
      }else if(lname === ""){
        toast.error("lname is require")
      }else if(email === ""){
        toast.error("email is require")
      }else if(!email.includes("@")){
        toast.error("email is in incorrect format")
      }else if(password === ""){
        toast.error("password is require")
      }
      else{
        const res=await fetch("http://localhost:6002/register",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            fname,lname,email,password
          })
        });
        const data= res.json();
        console.log(data.status);
      
          toast.success("Your Response Submitted");
          setInputvalue({
            ...inputvalue,
            fname: "",
            lname: "",
            email: "",
            password: ""
          })
        
      }
    }
    return (
        <>
       <div className='container mb-3 contact'>
       <div className="row d-flex justify-content-around align-items-center">
         <h2 className='text-center'>Contact Us</h2>
        <div className='container mt-2'>
            <Form className='row mt-2'>
      <Form.Group className="mb-3 c" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" name='fname' value={inputvalue.fname} onChange={getvalue} placeholder="First Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" name='lname' value={inputvalue.lname} onChange={getvalue} placeholder="Last Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  name='email' value={inputvalue.email} onChange={getvalue} placeholder="Enter Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' value={inputvalue.password} onChange={getvalue} placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={sentUserdata}>
        Submit
      </Button>
    </Form>
    <ToastContainer />
            </div>
            </div>
            </div>
        </>
    )
}