import * as React from 'react';

import '../scss/Header.scss';

import User from './User';

const Header = () => (
  <header className="header">
    <p className="header__statistics">Statistics will follow here</p>
    <User />
  </header>
);

export default Header;