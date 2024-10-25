import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  // Initialize EmailJS with your public key
  useEffect(() => {
    emailjs.init('QXfc6Z8o_UVu7Rh1W'); // Your Public Key
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_iw7fdr8',      // Your Service ID
        'template_sbwe4ue',     // Your Template ID
        e.target
      )
      .then(
        (result) => {
          console.log('Email sent:', result.text);
          alert('Email sent successfully!');
        },
        (error) => {
          console.error('Email send error:', error);
          alert('Failed to send email. Please check the console for more details.');
        }
      );

    e.target.reset(); // Reset form after submission
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black p-8">
      <h1 className="text-4xl font-bold text-center text-white">Contact Us</h1>
      <p className="text-xl mt-4 text-center text-white">
        Reach out to us for any inquiries or assistance!
      </p>

      <form onSubmit={sendEmail} className="mt-8 max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Name:</label>
          <input
            type="text"
            name="user_name"
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Email:</label>
          <input
            type="email"
            name="user_email"
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Your Email"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Message:</label>
          <textarea
            name="message"
            className="w-full px-4 py-2 border rounded-lg"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
