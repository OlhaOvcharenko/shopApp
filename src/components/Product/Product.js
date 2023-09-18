import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import { useMemo } from 'react';

const Product = props => {

  //const initialSize = props.sizes[0].name;

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const getPrice = useMemo(() => {
    const findPrice = props.sizes.find((item) => item.name === currentSize);

    return props.basePrice + findPrice.additionalPrice;
    
  }, [props.basePrice, currentSize, props.sizes]);
  
  const price = () => {
    return getPrice;
  };

  const addToCart = () => {
    console.log(
      `
      Summary
      ===============
      Name: ${props.title}
      Price: ${price()}$
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
          <span className={styles.price}>Price: {price()}$</span>
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