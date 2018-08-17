import React from 'react';

import './_banner.scss';

const banner = props =>
    (<div className="container">
      <div className="row">
        <div className="col-12">
          <div className="banner-container">
            <div className="banner-title">
              {props.bannerTitle}
            </div>
            <div className="banner-text">
              {props.bannerText}
            </div>
          </div>
        </div>
      </div>
    </div>);

export default banner;
