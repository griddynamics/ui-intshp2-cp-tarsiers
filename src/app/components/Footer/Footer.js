import React from 'react';

const Footer = props => {
  const { visible } = props;
  return visible ? (
    <footer className="jc-center flx">
      <h2>footer</h2>
    </footer>
  ) : null;
};

export default Footer;
