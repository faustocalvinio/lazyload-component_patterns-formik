import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext } from "react";
import { Product, ProductCardProps } from "../interfaces/products.interfaces";


interface ProductContextProps {
    counter: number;
    increaseBy: (value:number) => void;
    product: Product;
}

export const ProductContext = createContext({} as ProductContextProps);

export const ProductCard = ({children,product}:ProductCardProps) => {

    const { counter, increaseBy } = useProduct();    

    return (
        <ProductContext.Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={styles.productCard}>
                {children}              
            </div>
        </ProductContext.Provider>
    )
}


