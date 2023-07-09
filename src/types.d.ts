export interface galleryType {
    path: string,
    pathPreview: string
}

interface propsSelect{
    select?:number,
    setSelect?: (value: React.SetStateAction<number>) => void,
}

export interface propsPreview extends propsSelect{
    objImg: galleryType,
    index: number,
}



export interface productsType {
    id: number,
    image: string,
    name: string,
    price: number,
    quantity: number,
    total: number
}

export interface propsQuantity{
    countProducts:number,
    setCountProducts: React.Dispatch<React.SetStateAction<number>> 
}

export interface propsGallery {
    gallery:galleryType[],
    select:number,
    setSelect: (value: React.SetStateAction<number>) => void,
    children?:any
}

export interface propsModal extends propsGallery{
    setShowModal:React.Dispatch<React.SetStateAction<boolean>>,
    
}



export interface propsProductsBodyType{
    products:productsType[],
    deleteProductToCart:(id:number) => void
}

export interface propsProductType{
    product:productsType,
    deleteProductToCart:(id:number) => void}


export interface propsButton { 
    children?: any, 
    title: string, 
    handledSubmit?: (id: number) => void 
}

export interface propsMain{ 
    setCount: (number: number) => void,
    showCart:boolean,
    gallery:galleryType[],
    productsStore:productsType[],
    select:number,
    setSelect: (value: React.SetStateAction<number>) => void,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
    
}

export interface propsHeader{
    count:number,
    setshowCart:(show:boolean) => void,
    showCart:boolean,
    
}
