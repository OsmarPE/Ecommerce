
import { propsProductsBodyType } from '../types'
import Button from './Button'
import Product from './Product'



function ProductsBody({products,deleteProductToCart}:propsProductsBodyType) {
    
    return (
        <div className="cart__content">
            <div className="cart__products">
            {
                products.map( (product) => <Product key={product.id} product={product} deleteProductToCart={deleteProductToCart} /> )
            }
            </div>
            <footer className="cart__footer">
                <Button title="Checkout" /> 
            </footer>

        </div>
    )
}

export default ProductsBody