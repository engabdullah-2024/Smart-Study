import React from 'react';
import { FaRegClock, FaUser } from 'react-icons/fa';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Understanding the Basics of Web Development',
      author: 'John Doe',
      date: 'October 1, 2024',
      excerpt: 'Web development is a broad field that encompasses various aspects of creating websites and web applications...',
    },
    {
      id: 2,
      title: '10 Tips for Effective Online Learning',
      author: 'Jane Smith',
      date: 'September 25, 2024',
      excerpt: 'Online learning can be challenging, but with the right strategies, you can make the most of your experience...',
    },
    {
      id: 3,
      title: 'The Importance of Time Management for Students',
      author: 'Emily Johnson',
      date: 'September 18, 2024',
      excerpt: 'Time management is crucial for students to balance their studies, extracurricular activities, and personal life...',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black p-8">
      <h1 className="text-4xl font-bold text-center text-white mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-gray-800 rounded-lg shadow-lg p-6  transition-transform transform hover:scale-110 hover:rotate-3 hover:shadow-lg duration-300">
            <h2 className="text-2xl font-bold text-white">{post.title}</h2>
            <div className="flex items-center text-gray-400 mt-2">
              <FaUser className="mr-2" />
              <span>{post.author}</span>
              <FaRegClock className="mx-2" />
              <span>{post.date}</span>
            </div>
            <p className="text-gray-300 mt-4">{post.excerpt}</p>
            <a href="#" className="text-blue-400 hover:underline mt-4 block">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage