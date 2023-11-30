import {  ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components/ProductCard"

const product = {
    id:'1',
    title:'Coffee Mug - Card',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>ShoppingPage</h1>
        <hr />   
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
        }}
        >
            {/* <ProductCard product={ product }>
                <ProductCard.Image />
                <ProductCard.Title title="2" />
                <ProductCard.Buttons increaseBy={()=> {return} } counter={0}/>

            </ProductCard> */}
            
            <ProductCard product={ product }>
                <ProductImage />
                <ProductTitle title="2" />
                <ProductButtons increaseBy={()=> {return} } counter={0}/>
            </ProductCard>
        </div>    
    </div>
  )
}
