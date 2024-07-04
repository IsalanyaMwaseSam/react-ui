import React from 'react'
import { Link } from 'react-router-dom'
import { getOrderStatus } from '../lib/utils'

const RecentOrderData = [
        {
          id: 1,
          product_id: 101,
          customer_id: 1001,
          customer_name: 'Alice Smith',
          order_date: '2023-07-01',
          order_total: 250.75,
          current_order_status: 'SHIPPED',
          shipment_address: '123 Main St, Springfield, IL'
        },
        {
          id: 2,
          product_id: 102,
          customer_id: 1002,
          customer_name: 'Bob Johnson',
          order_date: '2023-07-02',
          order_total: 150.50,
          current_order_status: 'OUT_FOR_DELIVERY',
          shipment_address: '456 Oak St, Lincoln, NE'
        },
        {
          id: 3,
          product_id: 103,
          customer_id: 1003,
          customer_name: 'Charlie Davis',
          order_date: '2023-07-03',
          order_total: 350.00,
          current_order_status: 'DELIVERED',
          shipment_address: '789 Pine St, Madison, WI'
        },
        {
          id: 4,
          product_id: 104,
          customer_id: 1004,
          customer_name: 'David Evans',
          order_date: '2023-07-04',
          order_total: 275.25,
          current_order_status: 'SHIPPED',
          shipment_address: '101 Maple St, Des Moines, IA'
        },
        {
          id: 5,
          product_id: 105,
          customer_id: 1005,
          customer_name: 'Eve Martinez',
          order_date: '2023-07-05',
          order_total: 180.00,
          current_order_status: 'PLACEC',
          shipment_address: '202 Elm St, Omaha, NE'
        },
        {
          id: 6,
          product_id: 106,
          customer_id: 1006,
          customer_name: 'Frank Brown',
          order_date: '2023-07-06',
          order_total: 220.40,
          current_order_status: 'CONFIRMED',
          shipment_address: '303 Cedar St, Fargo, ND'
        },
        {
          id: 7,
          product_id: 107,
          customer_id: 1007,
          customer_name: 'Grace Wilson',
          order_date: '2023-07-07',
          order_total: 300.60,
          current_order_status: 'DELIVERED',
          shipment_address: '404 Birch St, Sioux Falls, SD'
        },
        {
          id: 8,
          product_id: 108,
          customer_id: 1008,
          customer_name: 'Hank Taylor',
          order_date: '2023-07-08',
          order_total: 195.90,
          current_order_status: 'OUT_FOR_DELIVERY',
          shipment_address: '505 Spruce St, Wichita, KS'
        },
        {
          id: 9,
          product_id: 109,
          customer_id: 1009,
          customer_name: 'Ivy Moore',
          order_date: '2023-07-09',
          order_total: 260.30,
          current_order_status: 'PLACED',
          shipment_address: '606 Walnut St, Topeka, KS'
        },
        {
          id: 10,
          product_id: 110,
          customer_id: 1010,
          customer_name: 'Jack White',
          order_date: '2023-07-10',
          order_total: 410.00,
          current_order_status: 'PLACED',
          shipment_address: '707 Chestnut St, Kansas City, MO'
        }
       
]

function RecentOrders() {
  return (
    <div className='bg-white px-4 pt-3 rounded-sm border border-gray-200 flex-1 flex-col mb-32'>
      <strong className='text-gray-700 font-medium'>Recent orders</strong>
      <div className='mt-3 '>
        <table className='w-full text-gray-700 border-x border-gray-200 rounded-sm'>
            <thead>
            <tr>
                <td>ID</td>
                <td>Product ID</td>
                <td>Customer Name</td>
                <td>Order Date</td>
                <td>Order Total</td>
                <td>Shipping Address</td>
                <td>Order Status</td>
            </tr>
            </thead>
            <tbody>
                {RecentOrderData.map((order) => (
                    <tr key={order.id}>
                         <td><Link to={`/product/${order.id}`}>#{order.id}</Link></td>
                        <td><Link to={`/product/${order.product_id}`}>{order.product_id}</Link></td>
                        <td><Link to={`/customer/${order.customer_name}`}>{order.customer_name}</Link></td>
                        <td> {order.order_date}</td>
                        <td> {order.order_total}</td>
                        <td> {order.shipment_address}</td>
                        <td> {getOrderStatus(order.current_order_status)}</td>
                    </tr>
                ))}   
            </tbody>

        </table>
      </div>
    </div>
  )
}

export default RecentOrders
