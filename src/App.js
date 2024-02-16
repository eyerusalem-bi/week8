// App.js

import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <h1>Fashion Blog</h1>
        <nav aria-label="Main Navigation" role="navigation">
         <div className='home'>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Fashion</a></li>
            <li><a href="#">Beauty</a></li>
            <li><a href="#">Lifestyle</a></li>
            <li><a href="#">About</a></li>
          
          </ul>
          </div>
        </nav>
      </header>
      
      <main>
        <Article 
          imgSrc="street.jpg"
          altText="Image 1"
          title="How to Style a Casual Outfit for Fall"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui vel lectus bibendum euismod. Fusce eu dapibus nunc. Donec varius enim nec neque faucibus, ac placerat turpis hendrerit."
        />
        
        <Article 
          imgSrc="vintage.jpg"
          altText="Image 2"
          title="10 Must-Have Makeup Products for Summer"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui vel lectus bibendum euismod. Fusce eu dapibus nunc. Donec varius enim nec neque faucibus, ac placerat turpis hendrerit."
        />
      </main>
      
      <footer>
        <nav aria-label="Footer Navigation" role="navigation">
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>
        <p>&copy; 2024 Fashion Blog</p>
      </footer>
    </div>
  );
}

function Article({ imgSrc, altText, title, content }) {
  return (
    <article>
      <img src={imgSrc} alt={altText} />
      <h2>{title}</h2>
      <p>{content}</p>
      <a href="#">Read more</a>
    </article>
  );
}

export default App;





