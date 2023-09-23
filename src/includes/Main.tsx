import Cart from "../assets/icons/Cart"


import { productsType, propsMain } from "../types"
import { useEffect, useState } from "react"
import Button from "../components/Button"
import ProductsBody from "../components/ProductsBody"
import Gallery from "../components/Gallery"
import Queantity from "../components/Quantity"



function Main({ setCount, showCart,gallery,productsStore,select,setSelect,setShowModal }: propsMain) {

  
  const [products, setproducts] = useState<productsType[]>([])
  const [countProducts, setCountProducts] = useState<number>(0)

  useEffect(() => {
    setCount(products.length)
  }, [products])

  
  


  function deleteProductToCart(id: number) {
    const newProducts: productsType[] = products.filter(product => product.id !== id ? product : '')
    setproducts(newProducts)

  }

  function addProductToCart(id: number): void {
    const product:productsType | undefined = productsStore.find(product => product.id === id) // find index products store
    const productExist: productsType | undefined = products.find(product => product.id === id) // find index of product exist in products[]

    let newProducts: productsType[] = []

    if (countProducts === 0) return

    if (productExist) {

      newProducts = products.map(item => item.id !== id ? item : {
        ...item,
        quantity: productExist.quantity + countProducts,
        total: productExist.price * (productExist.quantity + countProducts)
      })

      setproducts(newProducts);

      return
    }

    if (product) {
      product.quantity = countProducts
      product.total = product.price * product.quantity
    
      setproducts([...products, product])


    }else{
      console.log('no existe');
      
    }

  }

  return (
    <main className='main'>
  
      <section className={showCart ? 'cart active' : 'cart'}  >
        <div className="cart__heading">
          <h2 className="cart__title"> Cart</h2>
        </div>
        <div className={products.length !== 0 ? "cart__body" : 'cart__body empty'}>
          {
            products.length !== 0 ? (

              <ProductsBody products={products} deleteProductToCart={deleteProductToCart} />

            ) : (

              <h3 className="cart__empty"> Your cart is empty</h3>

            )
          }
        </div>
      </section>

      <div className="main__left">
        <div className="main__left-content">
          <Gallery gallery={gallery} select={select} setSelect={setSelect} >
              <button className="gallery__btn-modal" onClick={() => setShowModal?.(showModal => !showModal)}></button>
          </Gallery>
        </div>

      </div>
      <div className="main__right">
        <h2 className="main__subtitle">SNEAKER COMPANY</h2>
        <h1 className="main__title">Fall Limited Edition Sneakers</h1>
        <p className="main__copy">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

        <section className="main__prices">
          <p className="main__price">$125.00 <span className="main__price-descount">50%</span> </p>
          <span className="main__price-before">$250.00</span>
        </section>

        <div className="main__actions">
          <Queantity countProducts={countProducts} setCountProducts={setCountProducts}/>
          <Button title={'Add to Card'} handledSubmit={addProductToCart}>
            <Cart fill="white" />
          </Button>
        </div>
      </div>
    </main>
  )
}

export default Main