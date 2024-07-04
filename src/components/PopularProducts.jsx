import React from 'react'
import { Link } from 'react-router-dom'

const popularProductsData = [
    {
      id: 1,
      product_name: 'Wireless Headphones',
      product_thumbnail: 'https://www.tilyexpress.ug/wp-content/uploads/2022/07/71o8Q5XJS5L._AC_SL1500_.webp',
      product_price: 99.99,
      product_stock: 120
    },
    {
      id: 2,
      product_name: 'Smartphone',
      product_thumbnail: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-m33-1.jpg',
      product_price: 799.99,
      product_stock: 0
    },
    {
      id: 3,
      product_name: 'Laptop',
      product_thumbnail: 'https://img.freepik.com/free-photo/laptop-white-background-3d-rendering-computer-generated-image_1142-57805.jpg?t=st=1720104093~exp=1720107693~hmac=a95699d3e8e46171ee50c32df1425fdd59648a00109a1c976e97918a8e776cb3&w=740',
      product_price: 1299.99,
      product_stock: 45
    },
    {
      id: 4,
      product_name: 'Smart Watch',
      product_thumbnail: 'https://img.freepik.com/free-vector/smart-watch-realistic-image-black_1284-11873.jpg?t=st=1720104760~exp=1720108360~hmac=0ceeff0ca84fe4a67f1caeeb06edf0a4af566d3619d437364253980ebe3d8285&w=740',
      product_price: 199.99,
      product_stock: 200
    },
    {
      id: 5,
      product_name: 'Bluetooth Speaker',
      product_thumbnail: 'https://img.freepik.com/free-photo/still-life-tech-device_23-2150722656.jpg?t=st=1720104709~exp=1720108309~hmac=71a419cf08d33dbedb07fa934e534b8bc80332fb1f4ad493c5c2e010bc68d5b3&w=360',
      product_price: 49.99,
      product_stock: 150
    }
  ];
  
function PopularProducts() {
  return (
    <div className='bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 w-[20rem] mb-32'>
      <strong>Popular Products</strong>
      <div className='mt-4 flex-col gap-3'>
        {popularProductsData.map(product => (
            <Link to={`/product/${product.id}`} className='flex hover:no-underline'>
                <div className='w-10 h-10 min-w-10 bg-gray-200 rounded-sm overflow-hidden'>
                    <img className="w-full h-full object-cover" src={product.product_thumbnail} alt={product.product_name}/>
                </div>
                <div className='ml-4 flex-1'>
                    <p className='text-sm test-gray-800'>{product.product_name}</p>
                    <span className={`text-sm font-medium' ${product.product_stock === 0 ? 'text-orange-500': 'text-green-400'}`}>
                        {product.product_stock === 0 ? 'Out of Stock': product.product_stock + ' in stock'}
                    </span>
                </div>
                <div className='text-xs text-gray-400 pl-2'>
                    {product.product_price}
                </div>
            </Link>
        ))}
      </div>
    </div> 
  )
}

export default PopularProducts
