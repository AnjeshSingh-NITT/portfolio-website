import React from 'react';

const blogPosts = [
  {
    title: "Understanding Dynamic Programming",
    excerpt: "A deep dive into dynamic programming concepts and techniques...",
    date: "2024-03-15",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=2400"
  },
  {
    title: "Modern React Best Practices",
    excerpt: "Exploring the latest patterns and practices in React development...",
    date: "2024-03-10",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=2400"
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-bl from-purple-600/5 to-blue-600/5 pointer-events-none" />
      
      <div className="relative">
        <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Blog
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mb-12" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 border border-gray-700/50"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center text-sm text-gray-400 mb-3">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  Read More 
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;