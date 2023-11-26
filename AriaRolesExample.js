// AriaRolesExample.js
import React from 'react';
import './AriaRolesExample.css';

const AriaRolesExample = () => {
  return (
    <div className="aria-example">
      <h2>ARIA Roles Example</h2>

      {/* Navigation with ARIA roles */}
      <nav role="navigation" aria-label="Main Navigation">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Content section with ARIA roles */}
      <section role="region" aria-labelledby="content-heading">
        <h3 id="content-heading">Content Section</h3>
        <p>
        ARIA (Accessible Rich Internet Applications) roles are crucial for web accessibility. They provide a way to enhance the interpretation of web content by assistive technologies, improving the experience for users with disabilities. ARIA roles convey the purpose and structure of elements, making web applications more navigable and understandable for those using screen readers or other assistive devices. In short, ARIA roles promote inclusive design by ensuring that all users, regardless of abilities, can access and interact with web content effectively.</p>
      </section>

      {/* Form with ARIA roles */}
      <form role="form" aria-labelledby="form-heading">
        <h3 id="form-heading">User Registration</h3>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" aria-required="true" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" aria-required="true" />

        <button type="submit" role="button">Submit</button>
      </form>
    </div>
  );
}

export default AriaRolesExample;
