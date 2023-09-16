import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = props => {

  const initialSize = props.sizes[0].name;

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(initialSize);

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  const getPrice = () => {

    const findPrice = props.sizes.find((item) => item.name === currentSize);
    return props.basePrice + findPrice.additionalPrice;
  };


  const addToCart = (event) => {
    event.preventDefault(); // Prevent the default form submission and page refresh

    console.log(
      `
      Summary
      ===============
      Name: ${props.title}
      Price: ${getPrice()}
      Size: ${currentSize}
      Color: ${currentColor}
      `
    );
  };

  return (
    <article className={styles.product}>
      <ProductImage title={props.title} name={props.name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm onSubmit={addToCart} 
          sizes={props.sizes}
          setCurrentSize={setCurrentSize}
          currentSize={currentSize}
          colors={props.colors}
          setCurrentColor={setCurrentColor}
          currentColor={currentColor}
          prepareColorClassName={prepareColorClassName} />
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