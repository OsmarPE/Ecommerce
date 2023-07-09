import { propsPreview } from "../types"

function ItemGallery({objImg,index}:propsPreview) {
  return (
    <picture className="gallery__item">
    <img className="gallery__imagen" key={index} src={objImg.path} alt={`image-${index}`}  />
  </picture>
  )
}

export default ItemGallery