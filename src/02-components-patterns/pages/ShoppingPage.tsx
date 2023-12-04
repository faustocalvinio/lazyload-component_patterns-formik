/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import { Product } from "../interfaces/products.interfaces";
import "../styles/custom-styles.css";


const product1 = {
    id:'1',
    title:'Coffee Mug - Card',
    img: './coffee-mug.png'
}
const product2 = {
    id:'2',
    title:'Coffee Mug 2 - Meme',
    img: './coffeemug2.png'
}

const products: Product[] = [product1,product2]

interface ProductInCart extends Product {
    count: number;
}

export const ShoppingPage = () => {


    const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ProductInCart }>({});


    function onProductCountChange( { count,product }: { count: number, product: Product } ) {
        // console.log('onproductcountchange',count);
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
        })
    
    }

    return (
        <div>
            <h1>Shopping Page! 🛒🤸</h1>
            <hr />   
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}
            >
                {
                    products.map( product => (
                        <ProductCard 
                            key={ product.id }                         
                            product={ product }
                            className="bg-dark text-white"
                            onChange={ onProductCountChange }
                            value={ shoppingCart[product.id]?.count || 0  }
                        >
                            <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                            <ProductTitle className="text-bold" />
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>   
                    ))
                }

                

            </div>   
            <div className="shopping-cart">
               
                {
                    Object.entries(shoppingCart).map( ([key,product]) => (
                        <ProductCard 
                            key={key}
                            product={ product }
                            className="bg-dark text-white"
                            style={{ width: '100px' }}
                            value={product.count}
                            onChange={ onProductCountChange }
                        >
                            <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                            <ProductButtons 
                                className="custom-buttons" 
                                style={{ display: 'flex', justifyContent: 'center' }}
                            />
                        </ProductCard>
                    ))
                }
            </div>


                <div>
                    <code>
                        {JSON.stringify(shoppingCart)}
                    </code>
                </div>

        </div>
    )
}
