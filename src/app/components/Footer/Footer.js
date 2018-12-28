import React from "react";

const Footer = (props) => {
    return (props.visible) ? <footer className ="jc-center flx"><h2>footer</h2></footer> : null;
}

export default Footer;
