import React from 'react';
import './home.css';

function Home() {
  return (
    <div className="center">
      <h1 className="name">Julián Sotelo</h1>
      <h4 className="profession">Ingeniero Multimedia</h4>
      <div className="social-container">
        <a
          href="https://twitter.com/juansoos"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fa fa-twitter" aria-hidden="true" />
        </a>
        <a
          href="https://github.com/juansoos"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fa fa-github" aria-hidden="true" />
        </a>
        <a
          href="https://www.linkedin.com/in/juansoos"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fa fa-linkedin" aria-hidden="true" />
        </a>
        <a href="mailto:info@juansoos.com">
          <i className="fa fa-envelope" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

export default Home;
