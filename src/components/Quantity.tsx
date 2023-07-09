
import Minus from '../assets/icons/Minus'
import Plus from '../assets/icons/Plus'
import { propsQuantity } from '../types'


function Quantity({countProducts, setCountProducts}:propsQuantity) {

    return (
        <div className="quantity">
            <button className="quantity__less quantity__item" onClick={() => setCountProducts( countProducts => countProducts > 0 ? countProducts  - 1 : 0 ) } >
                <Minus/>
            </button>
            <p className="quantity__number quantity__item">{countProducts}</p>
            <button className="quantity__plus quantity__item" onClick={() => setCountProducts( countProducts => countProducts + 1 ) } >
                <Plus/>
            </button>
        </div>
    )
}

export default Quantity