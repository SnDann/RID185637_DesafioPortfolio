import React from 'react';

const blogPosts = [
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    title: 'Making a design system from scratch',
    author: 'Design Patterns',
    date: '12 Feb 2020',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
  },
  {
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    title: 'Creating pixel perfect icons in Figma',
    author: 'Figma Icons',
    date: '12 Feb 2020',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
  }
];

function Blog() {
  return (
    <section>
      <h2 className="section-title">Blog</h2>
      <div className="cards-row">
        {blogPosts.map((post, idx) => (
          <div className="card" key={idx} style={{minWidth: 0}}>
            <img src={post.image} alt={post.title} />
            <div style={{fontWeight: 600, fontSize: '1.1rem', marginBottom: 4}}>{post.title}</div>
            <div style={{color: '#6b7280', fontSize: '0.95rem', marginBottom: 8}}>{post.author} | {post.date}</div>
            <div style={{fontSize: '0.98rem', color: '#444'}}>{post.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog; 