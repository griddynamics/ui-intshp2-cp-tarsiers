import React from 'react';
import RouteSchema from '../../routes/routeSchema';

const Content = props => {
  const { toggleHeaderAndFooterVisibility } = props;
  return <RouteSchema toggleHeaderAndFooterVisibility={toggleHeaderAndFooterVisibility} />;
};

export default Content;
