import React, { useState } from 'react';
import { FaRegClock, FaUser } from 'react-icons/fa';

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: 'Understanding the Basics of Web Development',
      author: 'John Doe',
      date: 'October 1, 2024',
      time: '10:00 AM',
      excerpt: 'Web development is a broad field that encompasses various aspects of creating websites and web applications...',
      image: 'https://www.enterpriseappstoday.com/wp-content/uploads/2023/01/Understanding-the-Basics-of-Web-Development.jpg', // Placeholder image
    },
    {
      id: 2,
      title: '10 Tips for Effective Online Learning',
      author: 'Jane Smith',
      date: 'September 25, 2024',
      time: '09:30 AM',
      excerpt: 'Online learning can be challenging, but with the right strategies, you can make the most of your experience...',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGOJ-_w0git5J-xJzhUdkgV2qRBDEVL2nJ0A&s', // Placeholder image
    },
    {
      id: 3,
      title: 'The Importance of Time Management for Students',
      author: 'Emily Johnson',
      date: 'September 18, 2024',
      time: '08:15 AM',
      excerpt: 'Time management is crucial for students to balance their studies, extracurricular activities, and personal life...',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVeNh3dZd_9T3sv3BLy8WaFpofVVM8relVlg&s', // Placeholder image
    },
    {
      id: 4,
      title: 'How to be A+ in your class?',
      author: 'Eng Abdalla',
      date: 'October 10, 2024',
      time: '05:51 AM',
      excerpt: 'To be an A+ student, start by staying organized and planning your study time effectively. Engage actively in class by asking questions and participating in discussions. Focus on studying smart by using effective techniques like spaced repetition. When you encounter challenges, don’t hesitate to seek help from teachers or classmates. Lastly, maintain a healthy balance by getting enough sleep and taking care of your well-being. Consistency and a positive mindset will help you achieve top grades.',
   
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVeNh3dZd_9T3sv3BLy8WaFpofVVM8relVlg&s', // Placeholder image
    },
    {
      id: 5,
      title: 'Waxbarasho',
      author: 'Eng Abdalla',
      date: 'Jan 21, 2025',
      time: '05:51 AM',
      excerpt: 'Waa Furaha Nolosha',
   
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjXcReSvbEQt78vW7sdG7-h3yZ2JcvSqb2kQ&s', // Placeholder image
    },
  ]);

  const [newPost, setNewPost] = useState({
    title: '',
    author: '',
    excerpt: '',
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setNewPost((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPost.title && newPost.author && newPost.excerpt && newPost.image) {
      const now = new Date();
      const reader = new FileReader();

      reader.onloadend = () => {
        const newPostEntry = {
          id: blogPosts.length + 1, // Simple id generation
          title: newPost.title,
          author: newPost.author,
          date: now.toLocaleDateString(), // Set current date
          time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), // Set current time
          excerpt: newPost.excerpt,
          image: reader.result, // Set the base64 image data
        };

        setBlogPosts((prevPosts) => [...prevPosts, newPostEntry]);
        setNewPost({ title: '', author: '', excerpt: '', image: null }); // Clear form
      };

      reader.readAsDataURL(newPost.image); // Convert image file to base64
    }
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold text-center text-blue-500 mb-8">Blog</h1>

      {/* Blog Post Form */}
      <form onSubmit={handleSubmit} className="mb-8 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-4">Post a New Blog</h2>
        <div className="mb-4">
          <input
            type="text"
            name="title"
            placeholder="Blog Title"
            value={newPost.title}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="author"
            placeholder="Author Name"
            value={newPost.author}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            name="excerpt"
            placeholder="Blog Excerpt"
            value={newPost.excerpt}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
            rows="4"
          />
        </div>
        <div className="mb-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Post Blog
        </button>
      </form>

      {/* Blog Posts Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-gray-800 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-110 hover:rotate-3 hover:shadow-lg duration-300 animate-slideInDown">
            <h2 className="text-2xl font-bold text-white">{post.title}</h2>
            <div className="flex items-center text-gray-400 mt-2">
              <FaUser className="mr-2" />
              <span>{post.author}</span>
              <FaRegClock className="mx-2" />
              <span>{post.date}</span> <span className="mx-2">at</span> <span>{post.time}</span>
            </div>
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="mt-4 mb-4 w-full h-48 object-cover rounded"
              />
            )}
            <p className="text-gray-300 mt-4">{post.excerpt}</p>
            <a href="#" className="text-blue-400 hover:underline mt-4 block">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;