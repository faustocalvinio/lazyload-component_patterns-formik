import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';
import { useContext } from 'react';
import { ProductContext } from './ProductCard';

export const ProductImage = ( { img }: { img?:string}) =>{

    const { product } = useContext(ProductContext);
    let imageToShow: string;

    if ( img ) {
        imageToShow = img;
    } else if ( product.img ) {
        imageToShow = product.img;
    } else {
        imageToShow = noImage;
    }


    return(
        <img src={ imageToShow } alt="No product img" className={styles.productImg} />
    )
};