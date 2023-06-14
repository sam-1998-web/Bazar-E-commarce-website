import React from 'react'
import Productscard from './Productscard'

const Products = ({products}) => {
  // console.log(products)
  return (
    <div className='py-10'>
      <div className='flex flex-col items-center gap-4'>
        <h1 className='etxt-2xl bg-black text-white py-2 w-80 text-center '>shopping everyday</h1>
        <span className='w-20 h-[3px] bg-black'></span>
        <p className='max-w-[700px] text-gray-600 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At explicabo ducimus, nemo tempora dicta aut ex. Corrupti quia esse placeat, tempora quasi deleniti nostrum consequatur, asperiores unde quidem porro quisquam.</p>
      </div>
      <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10'>
        {
          products.map((item)=>(
            <Productscard key={item._id} product={item} />
          ))
        }
      </div>
    </div>
  )
}

export default Products
