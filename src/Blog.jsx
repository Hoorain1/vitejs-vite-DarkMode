import React from 'react';
import Post from './Post';
import { useContext } from 'react';
import  { ThemeContext } from './App';

const Blog = () => {
  const darkMode = useContext(ThemeContext);
  const posts = [
    {
      id: 1,
      title: 'First Post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      author: 'John Doe',
      date: 'July 1, 2023',
    },
    {
      id: 2,
      title: 'Second Post',
      content:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      author: 'Jane Smith',
      date: 'July 5, 2023',
    },
  ];


  return (
    <div className={darkMode?'container bg-dark text-white':'container bg-white text-dark'}>
      <h1 className="mt-4 mb-4">Blog</h1>
      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          content={post.content}
          author={post.author}
          date={post.date}
        />
      ))}
    
    </div>
  );
};

export default Blog;
