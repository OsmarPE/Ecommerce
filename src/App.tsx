
import { useState } from 'react'
import './App.scss'
import Header from './includes/Header'
import Main from './includes/Main'
import Modal from './components/Modal'
import { gallery,productsStore } from './assets/utils/products'


function App() {

  const [count, setCount] = useState<number>(0)
  const [showCart, setshowCart] = useState<boolean>(false)
  const [select, setSelect] = useState<number>(0)
  const [showModal, setShowModal] = useState<boolean>(false)
  
  return (
    <>
      <Header count={count} setshowCart={setshowCart} showCart={showCart} />
      <Main  select={select} setSelect={setSelect} setCount={setCount} showCart={showCart} gallery={gallery} productsStore={productsStore} setShowModal={setShowModal} />
      {
        showModal && <Modal gallery={gallery} select={select} setSelect={setSelect} setShowModal={setShowModal} />
      }
      
    </>
  )
}

export default App
