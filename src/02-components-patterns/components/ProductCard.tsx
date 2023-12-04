/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext, type CSSProperties, type ReactElement } from 'react';
import { InitialValues, onChangeArgs, Product, ProductCardHandlers, ProductContextProps } from "../interfaces/products.interfaces";


export interface Props{
    product: Product;
    // children?: ReactElement | ReactElement[] | (() => JSX.Element) ;
    children: ( args:ProductCardHandlers ) => JSX.Element    
    className?: string;    
    style?: CSSProperties;
    onChange?: (args:onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}



export const ProductContext = createContext({} as ProductContextProps);

export const ProductCard = ({children,product,className,style,onChange,value,initialValues}:Props) => {

    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({
        onChange,
        initialValues,
        product,
        value
    });   
        
    return (
        <ProductContext.Provider value={{
            counter,
            increaseBy,
            maxCount,
            product
        }}>
            <div 
                className={`${styles.productCard}  ${className}`}
                style={ style }
             >

                { 
                    children({
                        count: counter,
                        isMaxCountReached,
                        maxCount: initialValues?.maxCount,
                        product,
                        increaseBy,
                        reset                        
                    }) 
                }              
            </div>
        </ProductContext.Provider>
    )
}


