import React from 'react';
import { useContext } from 'react';
import  { ThemeContext } from './App';

const Post = ({ title, content, author, date }) => {
  const darkMode = useContext(ThemeContext);
  return (
    <div className= {darkMode?"card mb-4 bg-dark text-white": "card mb-4 bg-white text-dark"} >
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{content}</p>
        <div className="card-footer text-muted">
          <div className="row">
            <div className="col">
              <p className="mb-0">Author: {author}</p>
            </div>
            <div className="col text-right">
              <p className="mb-0">Date: {date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
