import Delete from '../assets/icons/Delete'
import { propsProductType } from '../types'

function Product({product,deleteProductToCart}:propsProductType) {
    const {id,image,name,price,quantity,total} = product
    return (
        <div className="product">
            <img className="product__image" src={image} alt="" />
            <div className="product__details">
                <p className="product__name">{name}</p>
                <p className="product__count">${price}.00 x {quantity} <strong className="product__count--total">${total}.00</strong> </p>
            </div>
            <button className="product__delete" onClick={() => deleteProductToCart(id)}>
                <Delete />
            </button>
        </div>
    )
}

export default Product