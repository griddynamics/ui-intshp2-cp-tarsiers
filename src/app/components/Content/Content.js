import React from "react";
import RouteSchema from "../../routes/routeSchema"

const Content = props => {
  return (
    <RouteSchema toggleHeaderAndFooterVisibility = {props.toggleHeaderAndFooterVisibility}/>
  );
};

export default Content;
