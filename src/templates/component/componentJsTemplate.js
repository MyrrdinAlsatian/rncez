module.exports = `import React from 'react';
import PropTypes from 'prop-types';
import styles from './TemplateName.module.scss';

const TemplateName = () => {
  return(
  <div className={styles.TemplateName} data-testid="TemplateName">
    TemplateName Component
  </div>
)};

TemplateName.propTypes = {};

TemplateName.defaultProps = {};


export default TemplateName;
`;
