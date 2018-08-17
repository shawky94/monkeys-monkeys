import React from 'react';

import NoHear from '../images/monkey-no-hear.png';
import NoSee from '../images/monkey-no-see.png';
import NoTalk from '../images/monkey-no-talk.png';

import './_rules.scss';




const NewsListing = props =>
  (<section className="rules" id="rules">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="rules-title">Team ethics</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-xs-12">

          <div className="rules-card">
            <div className="rules-card-img">
              <img src={NoTalk} />
            </div>
            <div className="rules-card-text">
              " Never Talk in bad way to each other "
            </div>
          </div>
        </div>

        <div className="col-md-4 col-xs-12">
          <div className="rules-card">
            <div className="rules-card-img">
              <img src={NoSee} />
            </div>
            <div className="rules-card-text">
              "Never see the  each other's faults"
            </div>
          </div>
        </div>

        <div className="col-md-4 col-xs-12">
          <div className="rules-card">
            <div className="rules-card-img">
              <img src={NoHear} />
            </div>
            <div className="rules-card-text">
              " Never listen to evil sounds in side us :D "
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>);

export default NewsListing;
