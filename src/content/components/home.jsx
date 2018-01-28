import React from 'react';
import './home.css';

function Home() {
  return (
    <div className="center">
      <h1 className="name">Julián Sotelo</h1>
      <h4 className="profession">Ingeniero Multimedia</h4>
      <div className="social-container">
        <i className="fa fa-twitter" aria-hidden="true" />
        <i className="fa fa-github" aria-hidden="true" />
        <i className="fa fa-linkedin" aria-hidden="true" />
        <i className="fa fa-envelope" aria-hidden="true" />
      </div>
    </div>
  );
}

export default Home;
