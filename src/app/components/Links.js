import React from 'react';
import { Link } from 'react-router-dom';

const RouterLink = props => {
  const { value, href } = props;

  return (
    <Link to={href}>
      &bull;&nbsp;
      {value}
    </Link>
  );
};

const ExternalLink = props => {
  const { value, href } = props;

  return (
    <a href={href} rel="noopener noreferrer" target="_blank">
      &bull;&nbsp;
      {value}
    </a>
  );
};

export { RouterLink, ExternalLink };
