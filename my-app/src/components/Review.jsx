
import React, { useState } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar, FaQuoteLeft, FaUser } from 'react-icons/fa';

function Review() {
  const [activeTab, setActiveTab] = useState('all');

  const reviews = [
    {
      id: 1,
      name: "Rahul Sharma",
      rating: 5,
      date: "15 May 2023",
      comment: "The cardiology department provided excellent care during my treatment. Doctors were knowledgeable and staff was very supportive.",
      department: "cardiology"
    },
    {
      id: 2,
      name: "Priya Patel",
      rating: 4.5,
      date: "22 April 2023",
      comment: "Great pediatric care for my child. The facilities are clean and child-friendly. Would have given 5 stars if waiting time was shorter.",
      department: "pediatrics"
    },
    {
      id: 3,
      name: "Amit Singh",
      rating: 5,
      date: "10 April 2023",
      comment: "Emergency services saved my father's life. Quick response and professional handling of the situation.",
      department: "emergency"
    },
    {
      id: 4,
      name: "Neha Gupta",
      rating: 4,
      date: "28 March 2023",
      comment: "Good orthopedic care post my knee surgery. Physiotherapy sessions were particularly helpful.",
      department: "orthopedics"
    },
    {
      id: 5,
      name: "Vikram Joshi",
      rating: 3.5,
      date: "15 March 2023",
      comment: "Overall good experience but the billing process could be more transparent.",
      department: "general"
    },
    {
      id: 6,
      name: "Ananya Reddy",
      rating: 5,
      date: "5 March 2023",
      comment: "The maternity ward staff was incredibly caring during my delivery. Made the experience much easier.",
      department: "maternity"
    }
  ];

  const filteredReviews = activeTab === 'all' 
    ? reviews 
    : reviews.filter(review => review.department === activeTab);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="star filled" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="star half-filled" />);
      } else {
        stars.push(<FaRegStar key={i} className="star" />);
      }
    }
    return stars;
  };

  return (
    <section id='review' className="reviews-section">
      <div className="container">
        <h2 className="section-title">Patient Testimonials</h2>
        <p className="section-subtitle">What our patients say about us</p>
        
        <div className="department-filter">
          <button 
            className={`filter-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Departments
          </button>
          <button 
            className={`filter-btn ${activeTab === 'cardiology' ? 'active' : ''}`}
            onClick={() => setActiveTab('cardiology')}
          >
            Cardiology
          </button>
          <button 
            className={`filter-btn ${activeTab === 'pediatrics' ? 'active' : ''}`}
            onClick={() => setActiveTab('pediatrics')}
          >
            Pediatrics
          </button>
          <button 
            className={`filter-btn ${activeTab === 'emergency' ? 'active' : ''}`}
            onClick={() => setActiveTab('emergency')}
          >
            Emergency
          </button>
          <button 
            className={`filter-btn ${activeTab === 'orthopedics' ? 'active' : ''}`}
            onClick={() => setActiveTab('orthopedics')}
          >
            Orthopedics
          </button>
        </div>
        
        <div className="reviews-grid">
          {filteredReviews.map(review => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="user-avatar">
                  <FaUser />
                </div>
                <div className="user-info">
                  <h4>{review.name}</h4>
                  <div className="review-meta">
                    <div className="stars">
                      {renderStars(review.rating)}
                    </div>
                    <span className="review-date">{review.date}</span>
                  </div>
                </div>
              </div>
              <div className="review-content">
                <FaQuoteLeft className="quote-icon" />
                <p>{review.comment}</p>
              </div>
              <div className="review-department">
                <span>{review.department}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="review-cta">
          <h3>Share Your Experience</h3>
          <p>We value your feedback to help us improve our services</p>
          <button className="btn-review">Write a Review</button>
        </div>
      </div>
    </section>
  );
}

export default Review;