import React from 'react';
import PropTypes from 'prop-types';
import { Link as LinkNavi } from 'react-navi';

const Link = ({ href, children, ...props }) => (
  <LinkNavi href={`${process.env.REACT_APP_ROUTER_BASENAME}${href}`} {...props}>
    {children}
  </LinkNavi>
);

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Link;
