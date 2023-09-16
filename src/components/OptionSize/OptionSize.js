import React from 'react';
import clsx from 'clsx';
import styles from './OptionSize.module.scss';

const OptionSize = (props) => {

  const handleClickSize = (size) => {
    props.setCurrentSize(size);
  };

    return (
        <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <ul className={styles.choices}>
          {props.sizes.map((size) => (
            <li key={size.name}>
              <button type="button" className={clsx(styles.sizes, {
                  [styles.active]: size.name === props.currentSize,
                })}
                onClick={() => handleClickSize(size.name)}
                >
                {size.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default OptionSize;