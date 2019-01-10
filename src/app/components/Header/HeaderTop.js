import React from 'react';

const HeaderTop = () => (
  <div className="header-top">
    <span>
      <a href="mailto:info@shopy.com">
        <i className="far fa-envelope">
          <span> info@shopy.com</span>
        </i>
      </a>
    </span>
    <i className="fa fa-phone">
      <span> 453 - 5553 - 996</span>
    </i>
    <div className="icons-right">
      <a href="https://twitter.com/griddynamics" rel="noopener noreferrer" target="_blank">
        <i className="fab fa-twitter" />
      </a>
      <a href="https://www.linkedin.com/company/grid-dynamics/" rel="noopener noreferrer" target="_blank">
        <i className="fab fa-linkedin" />
      </a>
      <a href="https://www.facebook.com/griddynamics" rel="noopener noreferrer" target="_blank">
        <i className="fab fa-facebook-f" />
      </a>
      <a href="https://plus.google.com/115302417170674279390" rel="noopener noreferrer" target="_blank">
        <i className="fab fa-google-plus" />
      </a>
    </div>
  </div>
);

export default HeaderTop;
