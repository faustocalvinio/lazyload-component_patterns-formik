import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext, type CSSProperties, type ReactElement } from 'react';
import { onChangeArgs, Product } from "../interfaces/products.interfaces";

export interface Props{
    product: Product;
    children?: ReactElement | ReactElement[];    
    className?: string;    
    style?: CSSProperties;
    onChange?: (args:onChangeArgs) => void;
    value?: number;
}

interface ProductContextProps {
    counter: number;
    increaseBy: (value:number) => void;
    product: Product;
}

export const ProductContext = createContext({} as ProductContextProps);

export const ProductCard = ({children,product,className,style,onChange,value}:Props) => {

    const { counter, increaseBy } = useProduct({
        onChange,
        product,
        value
    });   
        
    return (
        <ProductContext.Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div 
                className={`${styles.productCard}  ${className}`}
                style={ style }
             >

                {children}              
            </div>
        </ProductContext.Provider>
    )
}


