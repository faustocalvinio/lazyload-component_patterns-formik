import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";

import { products } from "../data/products";

const product = products[0]

export const ShoppingPage = () => {

    return (

        <div>
            <h1>Shopping Page! 🛒🤸</h1>
            <hr />                          
                        <ProductCard 
                            key={ product.id }                         
                            product={ product }                           
                            initialValues={{
                                count: 6,
                                maxCount: 15,
                            }}                          
                        >
                            {

                                ( args ) => (
                                    <>
                                        <ProductImage />
                                        <ProductTitle />
                                        <ProductButtons />                                       
                                        
                                    </>
                                )
                            }
                            
                        </ProductCard>                              
                                    
        </div>
    )
}
