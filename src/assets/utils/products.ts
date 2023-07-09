import { galleryType, productsType } from '../../types'
import product1 from '../images/image-product-1.jpg'
import product2 from '../images/image-product-2.jpg'
import product3 from '../images/image-product-3.jpg'
import product4 from '../images/image-product-4.jpg'
import productT1 from '../images/image-product-1-thumbnail.jpg'
import productT2 from '../images/image-product-2-thumbnail.jpg'
import productT3 from '../images/image-product-3-thumbnail.jpg'
import productT4 from '../images/image-product-4-thumbnail.jpg'
export const gallery: galleryType[] = [
    {
      path: product1,
      pathPreview: productT1
    },
    {
      path: product2,
      pathPreview: productT2
    },
    {
      path: product3,
      pathPreview: productT3
    },
    {
      path: product4,
      pathPreview: productT4
    },
  ]

  export const productsStore: productsType[] = [
    {
      id: 1,
      image: productT1,
      name: 'Fall Limited Edition Sneakers',
      price: 125,
      quantity: 3,
      total: 275
    },
    {
      id: 2,
      image: productT2,
      name: 'Summer Collection Sandals',
      price: 80,
      quantity: 2,
      total: 160
    },
    {
      id: 3,
      image: productT3,
      name: 'Winter Boots',
      price: 200,
      quantity: 1,
      total: 200
    }
  ];