import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';
import { type CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';

export interface ProductImageProps {
    className?: string;
    img?:string;
    style?: CSSProperties;
}

export const ProductImage = ( { img,className,style }: ProductImageProps) =>{

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
        <img style={style} src={ imageToShow } alt="No product img" className={`${className} ${styles.productImg}`} />
    )
};