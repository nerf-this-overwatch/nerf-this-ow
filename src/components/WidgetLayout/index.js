import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import Button from '../Button';

// Wrapper
const WidgetLayout = ({ children }) => <div className="widget-layout">{children}</div>;

WidgetLayout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default WidgetLayout;

// Preview
export const WidgetLayoutPreview = ({ children }) => <div className="widget-layout__preview">{children}</div>;

WidgetLayoutPreview.propTypes = {
  children: PropTypes.any.isRequired,
};

// Form
export const WidgetLayoutForm = ({ onSubmit, children }) => (
  <form className="widget-layout__form" onSubmit={onSubmit}>
    {children}

    <div>
      <Button type="submit" theme="primary">
        Generate Image
      </Button>
    </div>
  </form>
);

WidgetLayoutForm.propTypes = {
  children: PropTypes.any.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
