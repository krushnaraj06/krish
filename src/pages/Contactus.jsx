import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    country: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    // Example of form submission using fetch API to a backend endpoint
    // You would need to create a backend API to handle this request
    fetch('https://krishchemusa.com/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Form submitted successfully:', data);
        setSuccess(true);
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          city: '',
          state: '',
          country: '',
          message: ''
        });
        setTimeout(() => setSuccess(false), 5000);
      })
      .catch(error => {
        console.error('Error submitting form:', error);
        setError('Failed to send your message. Please try again later.');
      })
      .finally(() => {
        setLoading(false);
      });

    // Alternative: for a simple solution without a backend, you can use the mailto link
    // This will open the user's email client with pre-filled information
    /*
    const subject = `Contact Form: ${formData.name} from ${formData.company}`;
    const body = `
      Name: ${formData.name}
      Company: ${formData.company}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Location: ${formData.city}, ${formData.state}, ${formData.country}
      
      Message:
      ${formData.message}
    `;
    
    window.location.href = `mailto:your-email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    */
  };

  return (
    <div className="max-w-6xl mx-auto px-[10px] py-16">
      <h1 className="text-4xl font-bold text-center mb-2 mt-[20px]">Get In Touch</h1>
      <p className="text-center text-gray-600 mb-12">
        Get in touch with us for product inquiries, pricing information, or any other questions you may have.
      </p>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            ></textarea>
          </div>
        </div>
        
        <div className="md:col-span-2 flex justify-center mt-6">
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-3 bg-teal-500 text-white font-medium rounded-md hover:bg-teal-600 transition-colors duration-300 disabled:bg-gray-400"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </div>
        
        {success && (
          <div className="md:col-span-2 mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            Thank you! Your message has been sent successfully.
          </div>
        )}
        
        {error && (
          <div className="md:col-span-2 mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}
      </form>

      {/* Contact Information Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
    

        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
          <div className="text-teal-500 mb-4" style={{ color: 'rgb(20, 184, 166)' }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 className="font-bold text-gray-800 uppercase text-sm mb-2">WORKS</h3>
          <a href="https://maps.app.goo.gl/uS4ZJyvcehiAJVaK9" target="_blank" rel="noopener noreferrer" className="text-teal-500 text-xs font-medium mt-3" style={{ color: 'rgb(20, 184, 166)' }}>
          5463 Dierks Dr Rockford, II 61108
          </a>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
          <div className="text-teal-500 mb-4" style={{ color: 'rgb(20, 184, 166)' }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h3 className="font-bold text-gray-800 uppercase text-sm mb-2">LET'S TALK</h3>
          <a href="tel:+1(267)901880" className="text-teal-500 text-xs mt-1" style={{ color: 'rgb(20, 184, 166)' }}>+1(267)901880</a>
          <a href="tel:+1(815)3294126" className="text-teal-500 text-xs mt-1" style={{ color: 'rgb(20, 184, 166)' }}>+1(815)3294126 </a>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
          <div className="text-teal-500 mb-4" style={{ color: 'rgb(20, 184, 166)' }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="font-bold text-gray-800 uppercase text-sm mb-2">E-MAIL US</h3>
          <a href="mailto:info@krishchemusa.com" className="text-teal-500 text-xs mt-3" style={{ color: 'rgb(20, 184, 166)' }}>
            info@krishchemusa.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;