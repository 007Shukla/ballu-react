import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <h1 className="heading">about our facility</h1>
      <h3 className="title">learn and explore our facility</h3>

      <div className="box-container responsive-grid">
        <div className="box">
          <div className="images">
            <img src="./images/about-1.png" alt="" />
          </div>
          <div className="content">
            <h3>ambulance services</h3>
            <p>MediEagle Healthcare provides 24×7 ambulance service in Lucknow with quality care in emergency and non-emergency situations. We offer bedside-to-bedside, safe, and cost-effective medical transportation. Our team includes qualified professionals, ensuring the highest level of pre-hospital, in-hospital, and post-hospital care. Book your ambulance in Lucknow anytime with MediEagle.</p>
            <a href="#"><button className="button">learn more</button></a>
          </div>
        </div>

        <div className="box">
          <div className="images">
            <img src="./images/about-2.png" alt="" />
          </div>
          <div className="content">
            <h3>emergency rooms</h3>
            <p>Emergency Rooms (ERs), also known as Emergency Departments (EDs), are 24×7 hospital units providing immediate care for urgent health issues. Staffed by specialized doctors and nurses, they handle everything from critical conditions to minor injuries. ERs often serve as the first point of contact for patients needing sudden or emergency care.</p>
            <a href="#"><button className="button">learn more</button></a>
          </div>
        </div>

        <div className="box">
          <div className="images">
            <img src="./images/about-3.png" alt="" />
          </div>
          <div className="content">
            <h3>free check-ups</h3>
            <p>Some prominent health insurance providers allow you to avail routine tests such as lipid profile, blood pressure, blood sugar tests, doctor consultations, etc., for free. Usually, such facilities are offered once a year based on the health policy you have chosen.</p>
            <a href="#"><button className="button">learn more</button></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;