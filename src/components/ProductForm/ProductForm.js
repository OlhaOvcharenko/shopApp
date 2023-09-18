import React from 'react';
import styles from './Productform.module.scss';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import PropTypes from 'prop-types';

const ProductForm = (props) => {

  const handleAddToCart = (event) => {
    event.preventDefault();

    props.addToCart();
  };

  return (
      <form onSubmit={handleAddToCart}>

      <OptionSize sizes={props.sizes} setCurrentSize={props.setCurrentSize} currentSize={props.currentSize}/>

      <OptionColor colors={props.colors} setCurrentColor={props.setCurrentColor} currentColor={props.currentColor}/>

      <Button className={styles.button} type="submit">
        <span className="fa fa-shopping-cart" />
      </Button>

    </form>
    
  );
};

ProductForm.propTypes = {
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired, 
      additionalPrice: PropTypes.number.isRequired, 
    })
  ).isRequired, 
  setCurrentSize: PropTypes.func.isRequired,
  currentSize: PropTypes.string.isRequired, 
  colors: PropTypes.arrayOf(PropTypes.string).isRequired, 
  setCurrentColor: PropTypes.func.isRequired, 
  currentColor: PropTypes.string.isRequired, 
  addToCart: PropTypes.func.isRequired,
};
  
  export default ProductForm;