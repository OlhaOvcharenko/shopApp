import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = props => {

  //const initialSize = props.sizes[0].name;

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const getPrice = () => {

    const findPrice = props.sizes.find((item) => item.name === currentSize);
    return props.basePrice + findPrice.additionalPrice;
  };


  const addToCart = () => {
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
        <ProductForm 
          sizes={props.sizes}
          setCurrentSize={setCurrentSize}
          currentSize={currentSize}
          colors={props.colors}
          setCurrentColor={setCurrentColor}
          currentColor={currentColor}
          addToCart = {addToCart}/>
      </div>
    </article>
  )
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired, 
  basePrice: PropTypes.number.isRequired,
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired, 
      additionalPrice: PropTypes.number.isRequired, 
    })
  ).isRequired,
}
  

export default Product;