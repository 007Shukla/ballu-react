import React, { useState } from 'react';
import axios from 'axios';
import { FaTimes } from 'react-icons/fa'; // Import the close icon

const RegistrationForm = ({ userType, onSuccess }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    ...(userType === 'patient' ? {
      dateOfBirth: '',
      gender: '',
      address: '',
      medicalHistory: ''
    } : {
      adminId: '',
      department: ''
    })
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const { confirmPassword, ...submitData } = formData;
      const endpoint = userType === 'patient' 
        ? '/api/patients/register' 
        : '/api/admins/register';
      
      const response = await axios.post(endpoint, submitData);
      
      if (response.data.success) {
        alert(`Registration successful! Welcome, ${formData.firstName}.`);
        if (onSuccess) onSuccess();
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert(error.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="registration-form-container">
      {/* Close button at top right */}
      <button 
        className="close-button" 
        onClick={onSuccess}
        aria-label="Close registration form"
      >
        <FaTimes />
      </button>
      
      <h2>{userType === 'patient' ? 'Patient' : 'Admin'} Registration</h2>
      
      <form onSubmit={handleSubmit} className="registration-form">
        {/* Name */}
        <div className="form-field">
          <label htmlFor="firstName">First Name</label>
          <input 
            type="text" 
            id="firstName" 
            name="firstName" 
            value={formData.firstName} 
            onChange={handleChange} 
            placeholder="First Name"
          />
          {errors.firstName && <p className="error-message">{errors.firstName}</p>}
        </div>

        <div className="form-field">
          <label htmlFor="lastName">Last Name</label>
          <input 
            type="text" 
            id="lastName" 
            name="lastName" 
            value={formData.lastName} 
            onChange={handleChange} 
            placeholder="Last Name"
          />
          {errors.lastName && <p className="error-message">{errors.lastName}</p>}
        </div>

        {/* Email */}
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="Email Address"
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        {/* Phone Number */}
        <div className="form-field">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input 
            type="text" 
            id="phoneNumber" 
            name="phoneNumber" 
            value={formData.phoneNumber} 
            onChange={handleChange} 
            placeholder="Phone Number"
          />
          {errors.phoneNumber && <p className="error-message">{errors.phoneNumber}</p>}
        </div>

        {/* Password */}
        <div className="form-field">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            placeholder="Password"
          />
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>

        {/* Confirm Password */}
        <div className="form-field">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input 
            type="password" 
            id="confirmPassword" 
            name="confirmPassword" 
            value={formData.confirmPassword} 
            onChange={handleChange} 
            placeholder="Confirm Password"
          />
          {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
        </div>

        <button 
          type="submit" 
          className="submit-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;