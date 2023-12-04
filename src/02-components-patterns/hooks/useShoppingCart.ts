import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/products.interfaces';

export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ProductInCart }>({});

    function onProductCountChange( { count,product }: { count: number, product: Product } ) {
        
        setShoppingCart( oldShoppingCart => {

            if ( count === 0 ) {
                const { [product.id]: toDelete, ...rest } = oldShoppingCart;
                return {
                    ...rest,
                }
            } 
            return {
                ...oldShoppingCart,
                [product.id]: {...product,count}
            }
        });       
    }

    return {
        onProductCountChange,
        shoppingCart    
    }
}
