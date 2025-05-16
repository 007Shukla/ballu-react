// Blog.jsx
import React from 'react';

function Blog() {
  const articles = [
    {
      id: 1,
      title: "Advances in Cardiac Care",
      excerpt: "Learn about our new minimally invasive procedures...",
      date: "May 15, 2023",
      category: "Cardiology"
    },
    {
      id: 2,
      title: "Managing Diabetes Effectively",
      excerpt: "Nutrition tips and lifestyle changes for better management...",
      date: "April 28, 2023",
      category: "Endocrinology"
    },
    {
      id: 3,
      title: "Pediatric Care During Flu Season",
      excerpt: "How to protect your children during peak flu months...",
      date: "March 10, 2023",
      category: "Pediatrics"
    }
  ];

  return (
    <section id='blog' className="blog-section">
      <div className="container">
        <h2 className="section-title">Hospital News & Articles</h2>
        <p className="section-subtitle">Stay updated with the latest health information</p>
        
        <div className="blog-grid">
          {articles.map(article => (
            <article key={article.id} className="blog-card">
              <div className="card-header">
                <span className="category-badge">{article.category}</span>
                <span className="article-date">{article.date}</span>
              </div>
              <h3 className="article-title">{article.title}</h3>
              <p className="article-excerpt">{article.excerpt}</p>
              <button className="read-more-btn">Read More →</button>
            </article>
          ))}
        </div>
        
        <div className="view-all-container">
          <button className="view-all-btn">View All Articles</button>
        </div>
      </div>
    </section>
  );
}

export default Blog;