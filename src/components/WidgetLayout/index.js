import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';

import './style.scss';
import { useImageGeneration } from '../../hooks/image';
import Button from '../Button';

const WidgetLayout = ({ initialValues, validationSchema, renderWidget, imageSize, name, children }) => {
  const previewRef = useRef();
  const [generateImage] = useImageGeneration(previewRef, name, imageSize);

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={generateImage}>
      {formikBag => (
        <Form>
          <div className="widget-layout">
            <div className="widget-layout__form">{children}</div>

            <div className="widget-layout__preview" ref={previewRef}>
              {renderWidget(formikBag.values)}
            </div>

            <Button className="widget-layout__submit-btn" type="submit" theme="primary">
              Générer l'image
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default WidgetLayout;

WidgetLayout.propTypes = {
  initialValues: PropTypes.object.isRequired,
  validationSchema: PropTypes.object.isRequired,
  renderWidget: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
  imageSize: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
};
