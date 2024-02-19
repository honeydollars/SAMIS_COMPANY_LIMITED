import React from 'react';
import '../styles/Home.css';
import Photo1 from '../assets/photo-1.avif';
import Photo2 from '../assets/photo-2.avif';
import Photo3 from '../assets/photo-3.avif';
import About1 from '../assets/about1.jpg';
import Testimony1 from '../assets/attachments/1.png';
import Testimony2 from '../assets/attachments/2.png';
import Testimony3 from '../assets/attachments/3.png';
import Testimony4 from '../assets/attachments/4.png';
import Testimony5 from '../assets/attachments/5.png';
import Testimony6 from '../assets/attachments/6.png';
import Testimony7 from '../assets/attachments/7.png';
import Testimony8 from '../assets/attachments/8.png';   

const Home = () => {
  return (    
    <div className="homepage-container">
        <div className="carousel-section">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Photo1} className="d-block w-100" alt="carousel1"/>
                        <div className="carousel-info">
                            <div className="carousel-caption d-none d-md-block">
                            <h2>We Develop Software to aid schools in managing their academics
                                and financial dte easily and more efficiently
                            </h2>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Photo2} className="d-block w-100" alt="carousel2"/>
                        <div className="carousel-info">
                            <div className="carousel-caption d-none d-md-block">
                            <h2>Working closely with teachers and bursars since 2013. 
                                Providing the best integrated School management system in Kenya
                            </h2>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Photo3} className="d-block w-100" alt="carousel3"/>
                        <div className="carousel-info">
                            <div className="carousel-caption d-none d-md-block">
                            <h2>A Great Story Starts with a Friendly Team</h2>
                            </div>
                        </div>
                    </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                    </button>
            </div>
        </div>
        <div className="benefits-section">
            <div className="benefits-container">
                <h2>Our Merits</h2>
                <div className="benefits-info">
                    <div>
                        <h3>We Provide Advanced Analytics and User Friendly Systems</h3>
                        <p>
                            Our Development and Technical Teams have alot of experience when dealing with school data. 
                            With much advice from Principals, Bursar and auditors.
                        </p>
                        <p> We have the best systems currently.</p>
                    </div>
                    <div>
                        <h3>What Will You Benefit From Our Systems</h3>
                        <ul>
                            <li>A customer care service to aid you instantly in case of hiches</li>
                            <li>Flexible payment methods with no renewal charges</li>
                            <li>Be able to link all our systems and work with them as a single unit</li>
                            <li>Ensure data privacy and confidentiality by having multiple users all under one platform</li>
                            <li>Experience wide complementary by having multiple users all under one platform</li>
                            <li>Experience wide complementary alternative methods to perform a task</li>
                            <li>Technical appearance in cases where there is need</li>
                            <li>Learn the system through our tutorials</li>
                            <li>Minimize data costs and reduce backlogs associated with poor internet connection by having an offline-operated software</li>
                            <li>Secure your data by backing up in our servers and be able to retrieve any past record any time</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="benefits-card-section">
            <div className="benefits-info-cards">
                <div className="card">
                    <div className="header">
                        <span><i className="fa fa-lock fa fa-lg"></i></span>
                        <span><p>01</p></span>
                    </div>
                    <div><hr/></div>
                    <div className="body">
                    <h4 className="card-title">Highly Secure</h4>
                    <li>SAMIS Software ensure data security and integrity. 
                        The data is stored on the school computer, and regular encrypted backups created and stored securely on our servers.
                    </li>
                    </div>
                </div>
                <div className="card">
                    <div className="header">
                        <span><i className="fa fa-code fa fa-lg"></i></span>
                        <span><p>02</p></span>
                    </div>
                    <div><hr/></div>
                    <div className="body">
                    <h4 className="card-title">Friendly & Dynamic</h4>
                    <li>We tailor make our softwares with the user in mind and as our top priority.
                        Each task has been carefully placed so it is both easy to do and complete.
                    </li>
                    </div>
                </div>
                <div className="card">
                    <div className="header">
                        <span><i className="fa fa-rocket fa fa-lg"></i></span>
                        <span><p>03</p></span>
                    </div>
                    <div><hr/></div>
                    <div className="body">
                    <h4 className="card-title">Good Perfomance</h4>
                    <li>SAMIS Softwares have been developed to work with the current PCs in the market and found in most schools.
                        With current technology to ensure speed and efficiency
                    </li>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-us-section">
            <h2>About Us</h2>
            <div className="about-us-container">
                <div className="about-us-info">
                    <div className="about-us-samis">
                        <h3>About SAMIS</h3>
                        <p>
                            SAMIS SOFTWARES was founded in 2013, we specializes in the development of software
                            for schools and other organisations. We are the developers of school management 
                            information system(SAMIS), a system for managing academics and finances in schools
                            and JFMIS a system used by the judiciary of Kenya.
                        </p>
                    </div>
                    <div className="about-us-vision">
                        <h3>Our Vision</h3>
                        <p>
                            To be the leading software solution company for schools and other organisations.
                            We understand that the satisfaction of our customers translates to our growth, thats
                            why we are committed to providing quality systems and excellent customer support.
                        </p>
                    </div>
                    <div className="about-us-mission">
                        <h3>Our Mission</h3>
                        <p>
                        We help schools and other institutions with management by providing reliable, user-friendly,
                        feature-rich and effective management software
                        </p>
                    </div>
                </div>
                <div className="about-us-image">
                    <img src={About1} alt="about1"/>
                </div>
            </div>
        </div>
        <div className="services-section">
            <div className="services-container">
                <h2>Our Services</h2>
                <div className="services-info">
                    <div className="services-info-1">
                        <div className="services-top-info">
                            <span><h4>School Management</h4></span>
                        </div>
                        <div><hr/></div>
                        <div className="services-main-info">
                            <ul>
                                <li>Add, view, delete or search students</li>
                                <li>Add student photo to appear on student profile and report form</li>
                                <li>Manage streams and classes(the system automatically upgrades students to the next form)</li>
                                <li>Generate class lists</li>
                                <li>Generates leaving certificates</li>
                                <li>Generate leave-out forms</li>
                                <li>Manage teaching and non-teaching staff</li>
                                <li>Select the subjects and classes taught by each teacher</li>
                            </ul>
                        </div>
                    </div>
                    <div className="services-info-1">
                        <div className="services-top-info">
                            <span><h4>Examination</h4></span>
                        </div>
                        <div><hr/></div>
                        <div className="services-main-info">
                            <ul>
                                <li>Add as many exams as needed</li>
                                <li>Specify the type of exams(End term, CAT 1 etc)</li>
                                <li>Manage exams out of and term weight</li>
                                <li>Easily manage form 4 exams(Exams with paper 1, Paper 2 and/or Paper 3)</li>
                                <li>Easy and convenient entry of students marks, via the desktop system and mobile app</li>
                                <li>Manage students, subject selection</li>
                                <li>Manage each subjects' grading system(Say grade A for math to start at 65 and for humanities at 85)</li>
                                <li>Perform analysis of exams at the click of one button(Single exam or whole term's exams)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="services-info-1">
                        <div className="services-top-info">
                            <span><h4>Academic Reports</h4></span>
                        </div>
                        <div><hr/></div>
                        <div className="services-main-info">
                            <ul>
                                <p>After an analysis, the system produces the wide range of reports including:</p>
                                <li>Class merit list</li>
                                <li>Form merit list</li>
                                <li>Best student per subject</li>
                                <li>Grade analysis per subject</li>
                                <li>Grade analysis per class</li>
                                <li>Grade analysis per gender</li>
                                <li>Best improved per class, form, and subject </li>
                                <li>Subject summary</li>
                                <li>Class analysis</li>
                                <li>Class perfomances</li>
                                <li>Detailed report form, which can include student photo, automated principal
                                    has and class teacher's comments, and fee balances
                                </li>
                                <li>Student's transcript, for the whole year or all the years they have been in school</li>
                            </ul>
                        </div>
                    </div>
                    <div className="services-info-1">
                        <div className="services-top-info">
                            <span><h4>Analysis</h4></span>
                        </div>
                        <div><hr/></div>
                        <div className="services-main-info">
                            <ul>
                                <li>Carry out a separate analysis for standard exams</li>
                                <li>Able to analyze KCSE marks according to the KNEC standards</li>
                                <li>Remote printing of documents and reports</li>
                            </ul>
                        </div>
                    </div>
                    <div className="services-info-1">
                        <div className="services-top-info">
                            <span><h4>Mobile App</h4></span>
                        </div>
                        <div><hr/></div>
                        <div className="services-main-info">
                            <ul>
                                <p>The SAMIS mobile app allows teachers to:</p>
                                <li>Enter students marks</li>
                                <li>View marks</li>
                                <li>View exam reports</li>
                                <li>Manage exam reports</li>
                                <li>View students lists</li>
                            </ul>
                        </div>
                    </div>
                    <div className="services-info-1">
                        <div className="services-top-info">
                            <span><h4>SAMIS SMS Module</h4></span>
                        </div>
                        <div><hr/></div>
                        <div className="services-main-info">
                            <ul>
                                <li>Get a custom sender id(i.e sms with the name of your school)</li>
                                <li>Send custom bulk sms(as many as needed with the click of a button)</li>
                                <li>Send fee balances</li>
                                <li>Send students report forms</li>
                                <li>Send leave-out notification</li>
                                <li>Send parents sms to remind them of events, such as mid-term, visiting day, etc</li>
                            </ul>
                        </div>
                    </div>
                    <div className="services-info-1">
                        <div className="services-top-info">
                            <span><h4>Accounts Module</h4></span>
                        </div>
                        <div><hr/></div>
                        <div className="services-main-info">
                            <ul>
                                <p>Benefits to the bursar:</p>
                                <li>Payment of receipts, vouchers, and invoices is more easier as it is done directly from system</li>
                                <li>Perform inter-account bank transfers within the system</li>
                                <li>Send sms bearing fee reminders to the parents and/or guradians</li>
                                <li>Import bulk data from an excel and /or sava as PDF for later referencing</li>
                                <li>Print leave out sheets containing student details, fee balances and payment details</li>
                                <li>Create local backups of the database to avoid loss of data in the future</li>
                            </ul>
                        </div>
                    </div>
                    <div className="services-info-1">
                        <div className="services-top-info">
                            <span><h4>SAMIS Website & Portal</h4></span>
                        </div>
                        <div><hr/></div>
                        <div className="services-main-info">
                            <ul>
                                <p>We are in the digital world, where even schools require a website.
                                    A website raises the profile of your school and also allows parents,
                                    who might not have heard about your school, to find it online.
                                </p>
                                <p>In this package, you get:</p>
                                <li>A fully customized and functional website</li>
                                <li>A mobile responsive website i.e It can be easily viewed on mobile devices</li>
                                <li>A blog section for posting announcements and other relevant information</li>
                                <li>A portal for students and parents to download:</li>
                                <ul>
                                    <li>Report Forms</li>
                                    <li>Fees Statements</li>
                                    <li>Fees Receipts</li>
                                    <li>Revision Materials</li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                    <div className="services-info-1">
                        <div className="services-top-info">
                            <span><h4>IPSAS Reports</h4></span>
                        </div>
                        <div><hr/></div>
                        <div className="services-main-info">
                            <ul>
                                <li>Statement of receipts and payments</li>
                                <li>Statement of financial assets and financial liabilities</li>
                                <li>Statement of cash flows</li>
                                <li>Statement of budget vs actual amounts</li>
                                <li>Notes to the financial statements</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="testimony-section">
            <div className="testimony-container">
                <h2>Testimonials</h2>
                <div className="testimony-info">
                    <div className="testimony">
                        <div className="testimony-top">
                            <img src={Testimony1} alt="H.O.E_Nakuru_Boys_High_School"/>
                        </div>
                        <div className="testimony-bottom">
                            <p>Samis is a big time win when it comes to timely and accurately keying in and 
                                analysis of results. Mobile app makes it more friendly to the teachers as they
                                can key in their marks and check on the progress of their learners from time to 
                                time anywhere anytime.
                            </p>
                        </div>
                        <div>
                            <h6>Head of Examination and Evaluation, Nakuru Boys High School</h6>
                        </div>
                    </div>
                    <div className="testimony">
                        <div className="testimony-top">
                            <img src={Testimony2} alt="clerk_Weru_Secondary"/>
                        </div>
                        <div className="testimony-bottom">
                            <p>Thanks to samis. I can now generate IPSAS reports with just a click of a button
                            </p>
                        </div>
                        <div>
                            <h6>Clerk, Weru Secondary School-Nyandarua</h6>
                        </div>
                    </div>
                    <div className="testimony">
                        <div className="testimony-top">
                            <img src={Testimony4} alt="bursar_St Teresa_Ithanga"/>
                        </div>
                        <div className="testimony-bottom">
                            <p>The technical support the samis team offers is top notch. Once the installation and
                                training is done the team is very careful to ensure that the systems users get on track 
                                in applying the system
                            </p>
                        </div>
                        <div>
                            <h6>Bursar, St Teresa Ithanga Secondary School - Murang'a</h6>
                        </div>
                    </div>
                    <div className="testimony">
                        <div className="testimony-top">
                            <img src={Testimony5} alt="bursar_Kwale"/>
                        </div>
                        <div className="testimony-bottom">
                            <p>Getting Samis was so revolutionary to our accounting procedures, especially the
                                IPSAS reports which initially were a huge challenge generating. Thanks to Samis 
                                because they've made my work a lot more easier
                            </p>
                        </div>
                        <div>
                            <h6>Bursar, Kwale County</h6>
                        </div>
                    </div>
                    <div className="testimony">
                        <div className="testimony-top">
                            <img src={Testimony3} alt="bursar_Kilimo_High_School"/>
                        </div>
                        <div className="testimony-bottom">
                            <p>My board of directors has been especially pleased with SAMIS financials timely and 
                                accurate financial reporting the benefits...have been incalculable
                            </p>
                        </div>
                        <div>
                            <h6>Bursar, Kilimo High School - Nakuru County</h6>
                        </div>
                    </div>
                    <div className="testimony">
                        <div className="testimony-top">
                            <img src={Testimony8} alt="bursar_Waguthiru_Secondary"/>
                        </div>
                        <div className="testimony-bottom">
                            <p>There was no hestitation from the school in aquiring samis after after with bechmarked
                                the system during the trial period and saw that it was able solve all the challenges
                                that were initially facing
                            </p>
                        </div>
                        <div>
                            <h6>Bursar, Waguthiru Secondary School - Laikipia County</h6>
                        </div>
                    </div>
                    <div className="testimony">
                        <div className="testimony-top">
                            <img src={Testimony6} alt="bursar_St Agnes_Shibuye"/>
                        </div>
                        <div className="testimony-bottom">
                            <p>I was experiencing so many challenges when doing the account work, many were the
                                times I hit submission deadlines, which was not efficient at all. Personally Samis
                                was so timely in solving these predicaments because it is fast and accurate 
                            </p>
                        </div>
                        <div>
                            <h6>Bursar, St Agnes Shibuye</h6>
                        </div>
                    </div>
                    <div className="testimony">
                        <div className="testimony-top">
                            <img src={Testimony7} alt="bursar_St Teresa_Khanga"/>
                        </div>
                        <div className="testimony-bottom">
                            <p>The Samis finance module has never disappointed me when doing my accounting work.
                                The system is so user friendly and easy to manage
                            </p>
                        </div>
                        <div>
                            <h6>Bursar, St Teresa Khanga Secondary School - Murang'a</h6>
                        </div>
                    </div>
                    <div className="last-testimony">
                        <div className="testimony-top-1">
                            <span><i className="fa fa-cloud-download fa fa-lg" aria-hidden="true"></i></span>
                            <h4>Installation Service</h4>
                        </div>
                        <div><hr/></div>
                        <div className="testimony-bottom">
                            <p>We do installation of the system to all our clients for a free trial at a 
                                considerable fee depending on the size of the school
                            </p>
                        </div>
                        <div className="testimony-top-1">
                            <span><i className="fa fa-cogs fa fa-lg" aria-hidden="true"></i></span>
                            <h4>Training</h4>
                        </div>
                        <div><hr/></div>
                        <div className="testimony-bottom">
                            <p>We do training on how to use all our systems and our mobile app after an 
                                installation
                            </p>
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
    </div>
  )
}

export default Home;