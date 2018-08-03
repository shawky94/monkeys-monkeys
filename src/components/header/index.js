import React from 'react';

import Icon from '../icon';
import Monkey from '../icon/monkey.icon';

import './_header.scss';

const Header = () =>
  (<header className="header">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="header-content">
            <nav className="header-nav">
              <ul className="header-nav-list">
                <li className="header-nav-list-item">
                  <Icon icon={Monkey} width={94} height={94} fill={'#fff'} />
                </li>
                <li className="header-nav-list-item">
                  <a href="#features">Home</a>
                </li>
                <li className="header-nav-list-item">
                  <a href="#howto">Projects</a>
                </li>
                <li className="header-nav-list-item">
                  <a href="#howto">Anouncments</a>
                </li>
                <li className="header-nav-list-item">
                  <a href="#howto">Schedule</a>
                </li>
                <li className="header-nav-list-item">
                  <a href="#howto">Blog</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>);

export default Header;
