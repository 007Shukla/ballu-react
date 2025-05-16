import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaUniversity, FaAward, FaClinicMedical, FaTimes } from 'react-icons/fa';
import { MdBookOnline, MdWork } from 'react-icons/md';
import doctor1 from '../../public/images/doctor-1.jpg';
import doctor2 from '../../public/images/doctor-2.jpg';
import doctor3 from '../../public/images/doctor-3.jpg';
import doctor4 from '../../public/images/doctor-4.jpg';
import doctor5 from '../../public/images/doctor-5.jpg';
import doctor6 from '../../public/images/doctor-6.jpg';
import doctor7 from '../../public/images/doctor-7.jpg';





const Doctors = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      image: doctor1,
      degrees: ["MD", "PhD"],
      experience: "15 years",
      workplace: "City General Hospital, New York",
      description: "Renowned expert in diagnosing and treating heart diseases, with a focus on innovative cardiovascular therapies."
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Neurologist",
      image: doctor2,
      degrees: ["MD", "MPH"],
      experience: "12 years",
      workplace: "Harborview Medical Center, Seattle",
      description: "Specialist in neurological disorders including stroke, epilepsy, and multiple sclerosis, dedicated to patient-first care."
    },
    {
      id: 3,
      name: "Dr. Emily Wilson",
      specialty: "Pediatrician",
      image: doctor3,
      degrees: ["MD", "FAAP"],
      experience: "10 years",
      workplace: "Children's National Hospital, Washington D.C.",
      description: "Focused on providing comprehensive healthcare for children from infancy through adolescence, ensuring healthy growth and development."
    },
    {
      id: 4,
      name: "Dr. Robert Garcia",
      specialty: "Orthopedic Surgeon",
      image: doctor4,
      degrees: ["MD", "FACS"],
      experience: "18 years",
      workplace: "Cleveland Clinic, Ohio",
      description: "Highly skilled in treating complex musculoskeletal injuries and joint replacement surgeries with advanced techniques."
    },
    {
      id: 5,
      name: "Dr. Priya Deshmukh",
      specialty: "Dermatologist",
      image: doctor5,
      degrees: ["MBBS", "MD Dermatology"],
      experience: "9 years",
      workplace: "Apollo Hospitals, Mumbai",
      description: "Expert in treating skin, hair, and nail disorders, specializing in cosmetic dermatology and laser treatments."
    },
    {
      id: 6,
      name: "Dr. Daniel Thompson",
      specialty: "Oncologist",
      image: doctor6,
      degrees: ["MD", "DNB"],
      experience: "14 years",
      workplace: "Memorial Sloan Kettering Cancer Center, New York",
      description: "Leading oncologist with extensive experience in personalized cancer therapies and compassionate care."
    },
    {
      id: 7,
      name: "Dr. Aisha Rahman",
      specialty: "Psychiatrist",
      image: doctor7,
      degrees: ["MD", "FAPA"],
      experience: "11 years",
      workplace: "Mayo Clinic, Minnesota",
      description: "Committed to improving mental health through evidence-based therapies, specializing in anxiety, depression, and PTSD treatment."
    }
  ];
  

  const visibleDoctors = [];
  const visibleCount = 3; // Number of doctors to show at once
  
  for (let i = 0; i < visibleCount; i++) {
    const index = (currentSlide + i) % doctors.length;
    visibleDoctors.push(doctors[index]);
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === doctors.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? doctors.length - 1 : prev - 1));
  };

  const handleBookAppointment = (doctor) => {
    setSelectedDoctor(doctor);
    setShowAppointmentModal(true);
  };

  const handleCloseModal = () => {
    setShowAppointmentModal(false);
    setSelectedDoctor(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      message: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const appointmentData = {
      doctorName: selectedDoctor.name,
      doctorSpecialty: selectedDoctor.specialty,
      ...formData
    };
    console.log('Appointment booked:', appointmentData);
    alert(`Appointment booked with ${selectedDoctor.name} for ${formData.date} at ${formData.time}`);
    handleCloseModal();
  };

  return (
    <section id="doctors" className="doctors-section">
      <div className="container">
        <h1 className="section-heading">Our Medical Experts</h1>
        <h3 className="section-subtitle">Meet Our Highly Qualified Doctors</h3>

        <div className="doctors-slider">
          <button className="slider-btn prev" onClick={prevSlide}>
            <FaChevronLeft />
          </button>
          
          <div className="doctors-container">
            {visibleDoctors.map((doctor) => (
              <div className="doctor-card" key={doctor.id}>
                <div className="doctor-image">
                  <img src={doctor.image} alt={doctor.name} />
                </div>
                <div className="doctor-info">
                  <h3>{doctor.name}</h3>
                  <span className="specialty">{doctor.specialty}</span>
                  <p className="description">{doctor.description}</p>
                  
                  <div className="doctor-details">
                    <p><FaUniversity /> {doctor.degrees.join(', ')}</p>
                    <p><FaAward /> {doctor.experience} experience</p>
                    <p><FaClinicMedical /> {doctor.workplace}</p>
                  </div>
                  
                  <button 
                    className="appointment-btn"
                    onClick={() => handleBookAppointment(doctor)}
                  >
                    <MdBookOnline /> Book Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button className="slider-btn next" onClick={nextSlide}>
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Appointment Modal */}
      {showAppointmentModal && selectedDoctor && (
        <div className="appointment-modal">
          <div className="modal-content">
            <button className="close-btn" onClick={handleCloseModal}>
              <FaTimes />
            </button>
            
            <h2>Book Appointment with {selectedDoctor.name}</h2>
            <p className="doctor-specialty">{selectedDoctor.specialty}</p>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Your Name</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label>Email</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label>Phone</label>
                <input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Date</label>
                  <input 
                    type="date" 
                    name="date" 
                    value={formData.date}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label>Time</label>
                  <input 
                    type="time" 
                    name="time" 
                    value={formData.time}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label>Message (Optional)</label>
                <textarea 
                  name="message" 
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>
              
              <button type="submit" className="submit-btn">
                Confirm Appointment
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Doctors;