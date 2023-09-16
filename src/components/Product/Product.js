import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Product = props => {

  const initialSize = props.sizes[0].name;

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(initialSize);

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  const handleClickColor = (color) => {
    setCurrentColor(color);
  };

  const handleClickSize = (size) => {
    setCurrentSize(size);
  };


  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>{props.basePrice}$</span>
        </header>
        <form>

          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            
            <ul className={styles.choices}>
              {props.sizes.map((size) => (
                <li key={size.name}>
                  <button type="button" className={clsx(styles.sizeButton, {
                      [styles.active]: size.name === currentSize,
                    })}
                    onClick={() => handleClickSize(size.name)}
                    >
                    {size.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map((color) => (
                <li key={color}>
                  <button
                    type="button"
                    className={clsx(prepareColorClassName(color), {
                      [styles.active]: color === currentColor,
                    })}
                    onClick={() => handleClickColor(color)}
                  />
                </li>
              ))}
            </ul>
          </div>

          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>

        </form>
      </div>
    </article>
  )
};

Product.propTypes = {
  name: PropTypes.string.isRequired, // Required string
  title: PropTypes.string.isRequired, // Required string
  basePrice: PropTypes.number.isRequired, // Required number
  colors: PropTypes.arrayOf(PropTypes.string).isRequired, // Required array of strings
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired, // Required string
      additionalPrice: PropTypes.number.isRequired, // Required number
    })
  ).isRequired, // Required array of objects with specific shape
};

export default Product;