import styles from '../styles/styles.module.css';

import {  type CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';

export interface ProductTitleProps {
    className?: string;
    title?: string ;
    style?: CSSProperties;
}

export const ProductTitle = ({title,className,style}:ProductTitleProps) =>{

    const { product } = useContext(ProductContext)
    
    return (
        <span style={style} className={`${className} ${styles.productDescription}`}>
            { title ? title : product.title }
        </span>
    )
};