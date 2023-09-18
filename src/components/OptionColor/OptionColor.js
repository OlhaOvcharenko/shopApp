import React from 'react';
import clsx from 'clsx';
import styles from './OptionColor.module.scss';
import PropTypes from 'prop-types';

const OptionColor = (props) => {

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  const handleClickColor = (color) => {
    props.setCurrentColor(color);
  };

  return (
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
        {props.colors.map((color) => (
          <li key={color}>
            <button
              type="button"
              onClick={() => handleClickColor(color)}
              className={clsx(
                prepareColorClassName(color),
                color === props.currentColor && styles.active
              )}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

OptionColor.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired, 
  setCurrentColor: PropTypes.func.isRequired, 
  currentColor: PropTypes.string.isRequired, 
}

export default OptionColor;