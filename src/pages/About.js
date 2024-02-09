import React from 'react';
import '../styles/About.css';
import Image1 from '../assets/about2.jpg';

const About = () => {
  return (
    <div className='about-section'>
        <div className='about-container'>
          <h1>About Us</h1>
          <div className='breadcrumb-div'>
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
          <div className='about-info-container'>
            <div>
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
            <div>
              <img src={Image1} alt='our_samis_team'/>
            </div>
          </div>
        </div>
        <div className='values-section'>
          <div className='values-container'>
            <h3>Our Core Values</h3>
            <div className='values-info'>
              <div className='value-info'>
                <span><i className='fa fa-thumbs-up fa-2x' aria-hidden='true'></i></span>
                <div>
                  <h4>Client is king</h4>
                  <p>
                    To be the leading Software solution company for schools and other organizations. 
                    We understand that the satisfaction of our clients translates to our growth, 
                    hence the reason why we are committed to providing quality systems and superb client support
                  </p>
                </div>
              </div>
              <div className='value-info'>
                <span><i className='fa fa-check-square-o fa-2x' aria-hidden='true'></i></span>
                <div>
                  <h4>Adaptability & Unique</h4>
                  <p>
                    To help schools and other institutions with management by providing dynamic,
                    reliable, user-friendly, feature-rich and effective management softwares
                  </p>
                </div>
              </div>
              <div className='value-info'>
                <span><i className='fa fa-cogs fa-2x' aria-hidden='true'></i></span>
                <div>
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
        <div className='our-story-section'>
          <div className='our-story-container'>
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