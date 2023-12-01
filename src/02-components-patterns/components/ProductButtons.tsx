import styles from '../styles/styles.module.css';

import { ProductContext } from "./ProductCard";
import { type CSSProperties, useContext } from 'react';

export interface ProductButtonsProps{
    className?: string; 
    style?: CSSProperties
}

export const ProductButtons = ({className,style}:ProductButtonsProps) =>{
    
    const {increaseBy , counter} = useContext(ProductContext);

    return (
        <div style={style} className={`${className} ${styles.buttonsContainer}`}>
            <button 
                className={styles.buttonAdd}
                onClick={() => increaseBy(-1)}
            >-</button>
            <div className={styles.countLabel}>{counter}</div>
            <button 
                className={styles.buttonAdd}
                onClick={() => increaseBy(+1)}
            >+</button>
        </div>
    )
}; 