import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log("Success:", data);
      alert("Message sent successfully!");
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (err) {
      console.error("Error:", err);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="contact">
      <h1 className="heading">contact us</h1>
      <h3 className="title">you can talk to us any times,</h3>

      <div className="row">
        <div className="images">
          <img src="./images/form.png" alt="" />
        </div>

        <form className="form-container" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="fullName"
            placeholder="full name" 
            className="form-input"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <input 
            type="email" 
            name="email"
            placeholder="enter your email" 
            className="form-input"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input 
            type="number" 
            name="phone"
            placeholder="phone" 
            className="form-input"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea 
            className="form-textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <input type="submit" value="send" className="form-submit" />
        </form>
      </div>
    </section>
  );
};

export default Contact;