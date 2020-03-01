import React from 'react';

import Logo from '../../../components/Logo';
import Link from '../../../components/Link';

import './style.scss';

const Header = () => (
  <header className="header">
    <Link href="/">
      <Logo className="header__logo" height="40" />
    </Link>

    <nav>
      <Link href="/">Podcast Cover</Link>
    </nav>
  </header>
);

export default Header;
