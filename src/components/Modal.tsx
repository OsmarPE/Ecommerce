import { propsModal } from "../types"
import Gallery from "./Gallery"
import Close from '../assets/icons/Close'

function Modal({gallery,select,setSelect,setShowModal}:propsModal) {
  return (
    <div className="modal">
        <div className="modal__body hiddenButtons">
            <button className="modal__btn" onClick={() => setShowModal(showModal => !showModal)}>
                <Close className='icon__close' fill='#fff'/>
            </button>
            <Gallery gallery={gallery} select={select} setSelect={setSelect}/>
        </div>
    </div>
  )
}

export default Modal