import React from 'react';
import '../styles/Contact.css';
import Button from '@mui/material/Button';

const Contact = () => {
  return (
    <>
      <div className='contact-section'>
          <div className='contact-container'>
          <h1>Contact Us</h1>
          <div className='breadcrumb-div'>
          <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
              <span><i className='fa fa-home'></i></span>
              <li className="breadcrumb-item"><a href='/'>Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
              </ol>
          </nav>
          </div>
          </div>
          <div className='contact-info-section'>
              <div className='contact-info-container'>
                  <div className='contact-info'>
                    <h2>Our Contacts</h2>
                    <p>Seamlessly actualize client-based users after out-of-the-box value data through frictionless expertise </p>
                    <div className='contact-content'>
                      <div className='contact-content-top'><i className="fa fa-map-marker" aria-hidden="true"></i></div>
                        <div className='contact-content-bottom'>
                          <h4>Our Address</h4>
                          <p>P.O Box 1525-20100, Nakuru</p>
                        </div>
                    </div>
                    <div className='contact-content'>
                      <div className='contact-content-top'><i className="fa fa-envelope" aria-hidden="true"></i></div>
                        <div className='contact-content-bottom'>
                          <h4>E-mail Address</h4>
                          <p>samissystems@gmail.com</p>
                        </div>
                    </div>
                    <div className='contact-content'>
                      <div className='contact-content-top'><i className="fa fa-phone" aria-hidden="true"></i></div>
                        <div className='contact-content-bottom'>
                          <h4>Phone Number</h4>
                          <p>+(254)711082779</p>
                        </div>
                    </div>
                  </div>
                  <div className='contact-form'>
                    <div className='form-info'>
                      <h2>Send us a message and we will respond</h2>
                      <p>For more urgent issues concerning the system, contact us using the methods listed below</p>
                      <form method='POST' action='' name='contact-form'>
                        <div>
                          <input type='text' id='school-name' name='school-name' placeholder='School Name'></input>
                          <input type='text' id='full-name' name='full-name' placeholder='Full Name'></input>
                          <input type='tel' id='phone' name='phone' placeholder='Phone'></input>
                          <input type='email' id='email' name='email' placeholder='Email Address'></input>
                        </div>
                        <div>
                          <textarea placeholder='How can we help you?'></textarea>
                        </div>
                        <div><Button variant='contained' sx={{p:1.5, backgroundColor:'orangered'}}>Send Message</Button></div>
                      </form>
                    </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="top-contact-section">
            <div className="top-contact-container">
                <div className="top-contact-info">
                    <div className="top-contact-card">
                        <div className="top-contact-header">
                            <span><i className="fa fa-lock fa fa-lg"></i></span>
                        </div>
                        <div className="top-contact-body">
                            <h4 className="card-title">Address</h4>
                            <p>P.O Box 1525-20100, Nakuru</p>
                        </div>
                    </div>
                    <div className="top-contact-card">
                        <div className="top-contact-header">
                            <span><i className="fa fa-phone fa fa-lg"></i></span>
                        </div>
                        <div className="top-contact-body">
                            <h4 className="card-title">Call Us On</h4>
                            <p>+254711082779</p>
                        </div>
                    </div>
                    <div className="top-contact-card">
                        <div className="top-contact-header">
                            <span><i className="fa fa-envelope fa fa-lg"></i></span>
                        </div>
                        <div className="top-contact-body">
                            <h4 className="card-title">Email Us</h4>
                            <p>samissystems@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </>
  )
}

export default Contact;