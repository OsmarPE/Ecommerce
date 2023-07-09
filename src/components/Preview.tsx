import { propsPreview } from "../types"

function Preview({objImg,index,select,setSelect}:propsPreview) {
    const {pathPreview} = objImg
    return (
    <button onClick={() => setSelect?.(index)} className={`preview__item ${index === select ? 'active' : ''}`}>
          <img className='preview__image' src={pathPreview} alt={`image${index + 1}`} />
    </button>
  )
}

export default Preview