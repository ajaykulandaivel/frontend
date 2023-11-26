// Semantic.js
import React from 'react';
import './Semantic.css';

const SemanticComponent = () => {
  return (
    <div>
      <header>
        <h1>Semantic Page </h1>
      </header>

      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>

      <section>
        <article>
          <h2></h2>
          <p> The use of semantic HTML goes beyond syntactical correctness; it plays a crucial role in creating accessible, readable, and maintainable web pages. It forms the foundation for good SEO practices, clear document structure, and a positive user experience.</p>
        </article>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} My Semantic React App</p>
      </footer>
    </div>
  );
}

export default SemanticComponent;
