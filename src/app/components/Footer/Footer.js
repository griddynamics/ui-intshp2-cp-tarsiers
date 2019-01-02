import React from 'react';
import { connect } from 'react-redux';

const Footer = props => {
  const { headerFooterVisibility } = props;
  const visible = headerFooterVisibility.value;

  return visible ? (
    <footer className="jc-center flx">
      <h2>footer</h2>
    </footer>
  ) : null;
};

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(Footer);
