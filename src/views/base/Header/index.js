import React from 'react';
import { Link } from 'react-navi';

import Logo from '../../../components/Logo';

import './style.scss';

const Header = () => (
  <header className="header">
    <Link href="/">
      <Logo className="header__logo" height="40" />
    </Link>

    <nav>
      <Link href="/">Programme / Résultats</Link>
      <Link href="/podcast-cover-results">Podcast Cover</Link>
      <Link href="/players-rating">Players Rating</Link>
    </nav>
  </header>
);

export default Header;
