import React from 'react';
import PropTypes from 'prop-types';
import './home-layout.css';

const Layout = props => (
  <section className="HomeLayout">
    {props.children}
  </section>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
