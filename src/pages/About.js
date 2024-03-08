import React from 'react';
import { useEffect } from 'react';
import '../styles/About.css';
import Image1 from '../assets/about2.jpg';
import Image2 from '../assets/about3.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {

useEffect(()=>{
  Aos.init({
    duration: 2000
  });
}, []);

  return (
    <div className='about-section'>
        <div className='about-container'>
          <h1 data-aos='zoom-in'>About Us</h1>
          <div data-aos='zoom-in' className='breadcrumb-div'>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <span><i className='fa fa-home'></i></span>
                <li className="breadcrumb-item"><a href='/'>Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">About Us</li>
              </ol>
            </nav>
          </div>
        </div>
        <div className='about-info-section'>
          <div className='container about-info-container'>
            <div className='row about-info'>
              <div data-aos='fade-right' className='col-sm-12 col-md-6 col-lg-6'>
                <h3>About Samis Software Company</h3>
                <p>
                  SAMIS is a talent focused company that empowers youth.
                  It was founded by a group of young IT students and has grown to be a Talent based company delivering the best IT solutions in the market today.
                </p>
                <p>
                  Working closely with teachers and bursars since 2013. Providing the best integrated School management system in Kenya.<br/> 
                </p>
                <ul>
                    <li><strong>45,000 + Active Users</strong></li>
                    <li><strong>2,000 + Schools</strong></li>
                    <li><strong>30 + Counties</strong></li>
                    <li><strong>10 years+ In Business</strong></li>
                </ul>
              </div>
              <div data-aos='fade-left' className='col-sm-12 col-md-6 col-lg-6'>
                <img src={Image1} alt='our_samis_team'/>
              </div>
            </div>
          </div>
        </div>
        <div className='values-section'>
          <div className='container values-container'>
            <h3>Our Core Values</h3>
            <div className='row values-info'>
              <div data-aos='flip-left' className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 value-info'>
                <div className='value-info-top'>
                  <span><i className='fa fa-thumbs-up fa-2x' aria-hidden='true'></i></span>
                  <span><p>01</p></span>
                </div>
                <div><hr/></div>
                <div className='value-info-bottom'>
                  <h4>Client is king</h4>
                  <p>
                    To be the leading Software solution company for schools and other organizations. 
                    We understand that the satisfaction of our clients translates to our growth, 
                    hence the reason why we are committed to providing quality systems and superb client support
                  </p>
                </div>
              </div>
              <div data-aos='flip-left' className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 value-info'>
              <div className='value-info-top'>
                  <span><i className='fa fa-check-square-o fa-2x' aria-hidden='true'></i></span>
                  <span><p>02</p></span>
                </div>
                <div><hr/></div>
                <div className='value-info-bottom'>
                  <h4>Adaptability & Unique</h4>
                  <p>
                    To help schools and other institutions with management by providing dynamic,
                    reliable, user-friendly, feature-rich and effective management softwares
                  </p>
                </div>
              </div>
              <div data-aos='flip-left' className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 value-info'>
              <div className='value-info-top'>
                  <span><i className='fa fa-cogs fa-2x' aria-hidden='true'></i></span>
                  <span><p>03</p></span>
                </div>
                <div><hr/></div>
                <div className='value-info-bottom'>
                  <h4>Efficiency & Accountability</h4>
                  <p>
                    We are only servants and as so we must adhere to very strict rules 
                    to attain Maximum efficiency and accountability.
                    Both to ourselves and to the society
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='our-team-section'>
          <div className='container our-team-container'>
              <h2>Our Team</h2>
            <div className='row'>
              <div data-aos='zoom-in-up' className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 our-team'>
                <img src={Image2} alt='ceo_samis'/>
                <h6>Name here</h6>
                <p>Description here</p>
              </div>
              <div data-aos='zoom-in-up' className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 our-team'>
                <img src={Image2} alt='ceo_samis'/>
                <h6>Name here</h6>
                <p>Description here</p>
              </div>
              <div data-aos='zoom-in-up' className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 our-team'>
                <img src={Image2} alt='ceo_samis'/>
                <h5>Name here</h5>
                <p>Descriptiion here</p>
              </div>
              <div data-aos='zoom-in-up' className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 our-team'>
                <img src={Image2} alt='ceo_samis'/>
                <h5>Name here</h5>
                <p>Description here</p>
              </div>
              <div data-aos='zoom-in-up' className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 our-team'>
                <img src={Image2} alt='ceo_samis'/>
                <h5>Name here</h5>
                <p>Description here</p>
              </div>
              <div data-aos='zoom-in-up' className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 our-team'>
                <img src={Image2} alt='ceo_samis'/>
                <h5>Name here</h5>
                <p>Description here</p>
              </div>
            </div>
          </div>
        </div>
        <div className='values-section'>
          <div className='container values-container'>
            <div className='row values-info'>
              <div data-aos='flip-left' className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 value-info'>
                <div className='value-info-top'>
                  <span><i className='fa fa-thumbs-up fa-2x' aria-hidden='true'></i></span>
                  <span><p>01</p></span>
                </div>
                <div><hr/></div>
                <div className='value-info-bottom'>
                  <h4>Our Mission</h4>
                  <p>
                    To be the leading Software solution company for schools and other organizations. 
                    We understand that the satisfaction of our clients translates to our growth, 
                    hence the reason why we are committed to providing quality systems and superb client support
                  </p>
                </div>
              </div>
              <div data-aos='flip-left' className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 value-info'>
              <div className='value-info-top'>
                  <span><i className='fa fa-check-square-o fa-2x' aria-hidden='true'></i></span>
                  <span><p>02</p></span>
                </div>
                <div><hr/></div>
                <div className='value-info-bottom'>
                  <h4>Our Vision</h4>
                  <p>
                    To help schools and other institutions with management by providing dynamic,
                    reliable, user-friendly, feature-rich and effective management softwares
                  </p>
                </div>
              </div>
              <div data-aos='flip-left' className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 value-info'>
              <div className='value-info-top'>
                  <span><i className='fa fa-cogs fa-2x' aria-hidden='true'></i></span>
                  <span><p>03</p></span>
                </div>
                <div><hr/></div>
                <div className='value-info-bottom'>
                  <h4>Our Motto</h4>
                  <p>
                    We are only servants and as so we must adhere to very strict rules 
                    to attain Maximum efficiency and accountability.
                    Both to ourselves and to the society
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='our-story-section'>
          <div data-aos='zoom-in-up' className='our-story-container'>
            <div className='our-story-info'>
              <div className='our-story'>
                <p><strong>45,000 + </strong></p>
                <p><strong><i>Active Users</i></strong></p>
              </div>
              <div className='our-story'>
                <p><strong>2,000 + </strong></p>
                <p><strong><i>Schools</i></strong></p>
              </div>
              <div className='our-story'>
                <p><strong>30 + </strong></p>
                <p><strong><i>Counties</i></strong></p>
              </div>
              <div className='our-story'>
                <p><strong>10 + </strong></p>
                <p><strong><i>Years in  business</i></strong></p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )  
}

export default About;