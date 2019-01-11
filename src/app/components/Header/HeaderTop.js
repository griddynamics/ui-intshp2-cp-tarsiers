import React from 'react';
import appConfig from '../../../config/appConfig';

const HeaderTop = () => {
  const renderLinks = list =>
    list.map(link => {
      const { id, href, icon } = link;

      return (
        <a key={id} href={href} rel="noopener noreferrer" target="_blank">
          <i className={icon} />
        </a>
      );
    });

  const { links } = appConfig.header;
  const socialLinks = <ul>{renderLinks(links)}</ul>;

  return (
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
      <div className="icons-right">{socialLinks}</div>
    </div>
  );
};

export default HeaderTop;
