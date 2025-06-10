


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const errors = [];
    if (password.length < 12) errors.push('12+ characters');
    if (!/[A-Z]/.test(password)) errors.push('1 uppercase letter');
    if (!/[!@#$%^&*]/.test(password)) errors.push('1 special character');
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});
    
    // Validate password
    const passwordErrors = validatePassword(formData.password);
    if (passwordErrors.length > 0) {
      setErrors({ password: passwordErrors });
      setIsLoading(false);
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setErrors({ confirmPassword: ['Passwords do not match'] });
      setIsLoading(false);
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      setSuccess(true);
      setTimeout(() => navigate('/login'), 2000);
    }, 1500);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2 className="auth-title">Create Account</h2>
          <p className="auth-subtitle">Join us today</p>
        </div>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className={`form-group ${formData.username ? 'filled' : ''}`}>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <label htmlFor="username">Username</label>
            <div className="underline"></div>
          </div>
          
          <div className={`form-group ${formData.email ? 'filled' : ''}`}>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email</label>
            <div className="underline"></div>
          </div>
          
          <div className={`form-group ${formData.password ? 'filled' : ''}`}>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <label htmlFor="password">Password</label>
            <div className="underline"></div>
            {errors.password && (
              <div className="password-errors animate-fadein">
                {errors.password.map((err, i) => (
                  <span key={i} className="error-item">✗ {err}</span>
                ))}
              </div>
            )}
          </div>
          
          <div className={`form-group ${formData.confirmPassword ? 'filled' : ''}`}>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="underline"></div>
            {errors.confirmPassword && (
              <div className="error-message animate-shake">
                {errors.confirmPassword[0]}
              </div>
            )}
          </div>
          
          <button 
            type="submit" 
            className={`auth-button ${isLoading ? 'loading' : ''}`}
            disabled={isLoading || success}
          >
            {isLoading ? (
              <span className="spinner"></span>
            ) : success ? (
              '✓ Account Created!'
            ) : (
              'Sign Up'
            )}
          </button>
        </form>
        
        <div className="auth-footer">
          <p>Already have an account? <a href="/login" className="auth-link">Login</a></p>
        </div>
        
        <div className="floating-shapes">
          <div className="shape circle"></div>
          <div className="shape triangle"></div>
          <div className="shape square"></div>
        </div>
        
        {success && (
          <div className="success-overlay animate-fadein">
            <div className="success-message">
              <div className="checkmark">✓</div>
              <h3>Account Created Successfully!</h3>
              <p>Redirecting to login page...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;