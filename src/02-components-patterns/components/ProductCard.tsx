import styles from "../styles/styles.module.css";
import noImage from '../assets/no-image.jpg';
import { useProduct } from "../hooks/useProduct";
import { type ReactElement } from "react";

interface Props{
    product: Product;
    children?: ReactElement | ReactElement[];
        
}

interface Product{
    id: string;
    title: string;
    img?: string;
}

interface ProductButtonsProps {
    counter: number;
    increaseBy: (value:number) => void;
}

export const ProductImage = ({img=''}) =>{
    return(
        <img src={ img ? img : noImage } alt="No product img" className={styles.productImg} />
    )
};

export const ProductTitle = ({title}:{title:string}) =>{
    return (
        <span  className={styles.productDescription}>{title}</span>
    )
};

export const ProductButtons = ({counter,increaseBy}:ProductButtonsProps) =>{
    return (
        <div className={styles.buttonsContainer}>
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




export const ProductCard = ({children,product}:Props) => {

    const { counter, increaseBy } = useProduct();    

    return (
        <div className={styles.productCard}>
           {children}
            {/* <ProductImage img={product.img}  />
            
            <ProductTitle title={product.title}/>
            
            <ProductButtons counter={counter} increaseBy={increaseBy}/> */}
            
        </div>
    )
}

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;