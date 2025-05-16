import React from 'react';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="row">
        <div className="images">
          <img src="./images/home.png" alt="" className="responsive-img" />
        </div>

        <div className="content">
          <h1><span>Stay</span> Safe, <span>Stay</span> Healthy.</h1>
          <p>Your health is your greatest asset. "Stay Safe, Stay Healthy" reflects our dedication to providing reliable care, trusted information, and a safe environment for all. Let's build a healthier future — together</p>
          <a href="#"><button className="button">read more</button></a>
        </div>
      </div>
    </section>
  );
};

export default Home;