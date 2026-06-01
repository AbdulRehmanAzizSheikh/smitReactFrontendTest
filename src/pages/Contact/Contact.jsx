import React, { useState } from 'react';
import Button from '../../components/button';

function Contact() {
  // 1. Controlled Components ke liye Single State Object
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  // Errors handles karne ke liye state
  const [errors, setErrors] = useState({});
  // Form submit success feedback ke liye state
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 2. Input Change Handler (Dynamic Key Updates)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));

    // Agar user type kar raha hai toh us field ka error clear kar do
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    }
  };

  // 3. Basic Validation Logic
  const validateForm = () => {
    let currentErrors = {};
    if (!formData.fullName.trim()) currentErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      currentErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      currentErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) currentErrors.message = 'Message cannot be empty';

    return currentErrors;
  };

  // 4. Form Submission Handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Page refresh hone se rokne ke liye

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitted(false);
    } else {
      // REQUIREMENT: Form submit hone par data console me display ho
      console.log('--- Form Submitted Successfully ---');
      console.log('Full Name:', formData.fullName);
      console.log('Email:', formData.email);
      console.log('Message:', formData.message);
      console.log('------------------------------------');

      // Success state toggling
      setIsSubmitted(true);
      setErrors({});

      // Form fields clear karne ke liye
      setFormData({ fullName: '', email: '', message: '' });

      // 3 seconds baad success message hatane ke liye
      setTimeout(() => setIsSubmitted(false), 4000);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Get In <span className="text-blue-600">Touch</span>
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Have questions? Fill out the form below to reach us.
          </p>
        </div>

        {/* Success Toast / Notification Alert */}
        {isSubmitted && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 text-sm font-medium rounded-xl flex items-center gap-2 animate-fade-in">
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Form submitted! Data logged to console.</span>
          </div>
        )}

        {/* Form Container */}
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>

          {/* Full Name Field */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 rounded-xl border bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 transition-all ${errors.fullName
                ? 'border-red-500 focus:ring-red-200 focus:bg-white'
                : 'border-gray-200 focus:ring-blue-100 focus:border-blue-500 focus:bg-white'
                }`}
              placeholder="John Doe"
            />
            {errors.fullName && <p className="text-xs text-red-500 font-medium mt-1">{errors.fullName}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 rounded-xl border bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 transition-all ${errors.email
                ? 'border-red-500 focus:ring-red-200 focus:bg-white'
                : 'border-gray-200 focus:ring-blue-100 focus:border-blue-500 focus:bg-white'
                }`}
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-xs text-red-500 font-medium mt-1">{errors.email}</p>}
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 rounded-xl border bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 transition-all resize-none ${errors.message
                ? 'border-red-500 focus:ring-red-200 focus:bg-white'
                : 'border-gray-200 focus:ring-blue-100 focus:border-blue-500 focus:bg-white'
                }`}
              placeholder="Type your message here..."
            ></textarea>
            {errors.message && <p className="text-xs text-red-500 font-medium mt-1">{errors.message}</p>}
          </div>
          <Button
            type="submit"
            variant="primary"
            className="w-full mt-2"
          >
            Send Message
          </Button>
        </form>

      </div>
    </div>
  );
}

export default Contact;