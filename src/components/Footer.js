import React from 'react'
export const Footer=()=>{
    const year=new Date().getFullYear()
    return(
        <>
        <div className='footer'>
           <div className='container footer_container d-flex justify-content-around flex-wrap'>
            <div className='first mt-5'>
              <h4>Somiya Kumari</h4>
              <p>© {year} Somiya Kumari All rights reserved</p>
              <p className='d-flex'>
                <i className='fa-brands fa-instagram'></i>
                <i className='fa-brands fa-facebook'></i>
              </p>
            </div>
            <div className='second mt-5'>
              <h4>Get In Touch</h4>
              <p>Lorem ipsum dolor,sir msda adsdddaegeeet rtteafzxrff etlt.Inventore, adipisci.</p>
              <p>somiyakumari2353@gmail.com</p>
              <p>+91 9289436250</p>
            </div>
            <div className='third mt-5'>
              <h4>About</h4>
              <p>Resume</p>
              
            </div>
           </div>
        </div>
        </>
    )
}