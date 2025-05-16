import React from 'react';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin,
  FaAmbulance,
  FaClinicMedical,
  FaProcedures,
  FaUserMd,
  FaCalendarAlt,
  FaFileMedical,
  FaShieldAlt
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Quick Links Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/"><FaClinicMedical className="footer-icon" /> Home</Link></li>
            <li><Link to="/about"><FaUserMd className="footer-icon" /> About Us</Link></li>
            <li><Link to="/doctors"><FaUserMd className="footer-icon" /> Our Doctors</Link></li>
            <li><Link to="/services"><FaProcedures className="footer-icon" /> Services</Link></li>
            <li><Link to="/blog"><FaFileMedical className="footer-icon" /> Blog</Link></li>
            <li><Link to="/contact"><FaPhone className="footer-icon" /> Contact</Link></li>
            <li><Link to="/appointments"><FaCalendarAlt className="footer-icon" /> Book Appointment</Link></li>
          </ul>
        </div>

        {/* Medical Services Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Medical Services</h3>
          <ul className="footer-links">
            <li><Link to="/services/emergency"><FaAmbulance className="footer-icon" /> Emergency Care</Link></li>
            <li><Link to="/services/cardiology">❤️ Cardiology</Link></li>
            <li><Link to="/services/neurology">🧠 Neurology</Link></li>
            <li><Link to="/services/pediatrics">👶 Pediatrics</Link></li>
            <li><Link to="/services/orthopedics">🦴 Orthopedics</Link></li>
            <li><Link to="/services/dermatology">🧴 Dermatology</Link></li>
            <li><Link to="/services/dental">🦷 Dental Care</Link></li>
          </ul>
        </div>

        {/* Patient Resources Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Patient Resources</h3>
          <ul className="footer-links">
            <li><Link to="/resources/insurance">🏥 Insurance Information</Link></li>
            <li><Link to="/resources/billing">💳 Billing & Payments</Link></li>
            <li><Link to="/resources/medical-records">📁 Medical Records</Link></li>
            <li><Link to="/resources/patient-rights">📜 Patient Rights</Link></li>
            <li><Link to="/resources/visitor-info">🕒 Visitor Information</Link></li>
            <li><Link to="/resources/faq">❓ FAQs</Link></li>
            <li><Link to="/resources/support-groups">👥 Support Groups</Link></li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact Us</h3>
          <div className="contact-info">
            <p><FaMapMarkerAlt className="footer-icon" /> 123 Medical St, Health City, HC 12345</p>
            <p><FaPhone className="footer-icon" /> Emergency: +1 (123) 456-7890</p>
            <p><FaPhone className="footer-icon" /> Appointments: +1 (123) 456-7891</p>
            <p><FaEnvelope className="footer-icon" /> info@doctorscares.com</p>
            
            <div className="social-links">
              <a href="#" aria-label="Facebook"><FaFacebook className="social-icon" /></a>
              <a href="#" aria-label="Twitter"><FaTwitter className="social-icon" /></a>
              <a href="#" aria-label="Instagram"><FaInstagram className="social-icon" /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin className="social-icon" /></a>
            </div>
          </div>
        </div>

        {/* Hospital Information Section */}
      
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} Doctors Cares Hospital. All Rights Reserved.</p>
          
          <div className="legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/sitemap">Sitemap</Link>
            <Link to="/accessibility">Accessibility</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/feedback">Feedback</Link>
          </div>
        </div>

        <div className="accreditations">
          <p>Accredited by:</p>
          <div className="accreditation-logos">
            <span>JCI</span>
            <span>NABH</span>
            <span>ISO 9001</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;