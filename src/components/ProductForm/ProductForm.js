import React from 'react';
import styles from './Productform.module.scss';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';

const ProductForm = (props) => {
    return (
        <form>

        <OptionSize sizes={props.sizes} setCurrentSize={props.setCurrentSize} currentSize={props.currentSize}/>

        <OptionColor colors={props.colors} setCurrentColor={props.setCurrentColor} 
        currentColor={props.currentColor} prepareColorClassName={props.prepareColorClassName}/>

        <Button className={styles.button} type="submit">
          <span className="fa fa-shopping-cart" />
        </Button>

      </form>
      
    );
  };
  
  export default ProductForm;