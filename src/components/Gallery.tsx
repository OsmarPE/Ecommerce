import Next from "../assets/icons/Next"
import Previous from "../assets/icons/Previous"
import { propsGallery } from "../types"
import ItemGallery from "./ItemGallery"
import Preview from "./Preview"


function Gallery({setSelect,select,gallery,children}:propsGallery) {
  return (
    <>
        <div className="hidden">
         {children}
         <section className="gallery ">
          <div className="gallery__body" style={{ transform: `translateX(-${select * 25}%)` }}>
            {
              gallery.map((img, index) => <ItemGallery  key={index} index={index} objImg={img} />)
            }
          </div>
          <button onClick={() => setSelect(select => select !== 0 ? select - 1 : gallery.length - 1)} className="gallery__btn gallery__btn--left">
            <Previous />
          </button>
          <button onClick={() => setSelect(select => select < gallery.length - 1 ? select + 1 : 0)} className="gallery__btn gallery__btn--right">
            <Next />

          </button>
        </section>

        </div>
        <section className="preview">
          {
            gallery.map((img, index) => <Preview key={index} select={select} setSelect={setSelect} objImg={img} index={index} />)
          }
        </section>
    </>
  )
}

export default Gallery