import React, { useState } from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import aniga from '../images/aniga.jpg';  // Import CEO's image (adjust path as needed)

const testimonials = [
  {
    name: "John Doe",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjNl4kbZuQ683TXB4xWMzW1IjhPENUuPykOQ&s",
    quote: "Smart Study has been an amazing resource for my studies. The free PDFs and courses have helped me a lot in preparing for exams.",
    position: "Student"
  },
  {
    name: "Jane Smith",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuU0_G6L2-z1mmwQgbZ2j1oGI9h6YPgjH6E-OrL5bWdFvEB9Uo1JZtEJsoQhW49uRvLMA&usqp=CAU",
    quote: "I love how easy it is to access all the materials I need. The courses and exams on Smart Study are top-notch!",
    position: "Student"
  },
  {
    name: "Michael Brown",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFUSjHKFDj8gFlG3xCtaOc3QWgsjLqzB9uAg&s",
    quote: "The user interface is so easy to navigate, and I’ve been able to improve my grades thanks to the resources available here.",
    position: "Student"
  },
  {
    name: "Abdullah Ali",
    image: aniga,  // CEO/Founder Image
    quote: "At Smart Study, our mission is to empower students by providing them with the best resources for free. We're constantly evolving to offer the best courses, PDFs, and exam materials.",
    position: "CEO/Founder"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">What Our Students Say</h2>
        
        <div className="relative">
          {/* Testimonial Card */}
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-xs mx-auto">
            <div className="flex justify-center items-center rounded-full w-24 h-24 mb-4">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="object-cover rounded-full w-full h-full"
              />
            </div>
            <p className="text-gray-700 text-lg mb-4">
              <FaQuoteLeft className="inline-block text-gray-500 mr-2" />
              {testimonials[currentIndex].quote}
              <FaQuoteRight className="inline-block text-gray-500 ml-2" />
            </p>
            <p className="font-semibold text-gray-900">{testimonials[currentIndex].name}</p>
            <p className="text-gray-500">{testimonials[currentIndex].position}</p>
          </div>

          {/* Navigation buttons */}
          <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2">
            <button
              onClick={prevTestimonial}
              className="bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700"
            >
              &lt;
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
