import React from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from 'recharts';

const data = [
  { name: 'Alice', expense: 1200, income: 2300 },
  { name: 'Bob', expense: 800, income: 1500 },
  { name: 'Charlie', expense: 1600, income: 2500 },
  { name: 'David', expense: 1100, income: 2200 },
  { name: 'Eve', expense: 900, income: 1800 },
  { name: 'Frank', expense: 1300, income: 2400 },
  { name: 'Grace', expense: 1000, income: 2100 },
  { name: 'Hank', expense: 1400, income: 2600 },
  { name: 'Ivy', expense: 700, income: 1600 },
  { name: 'Jack', expense: 1500, income: 2700 }
];

function TransactionChart() {
  return (
    <div className='bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1'>
      <strong className='text-gray-700 font-medium'>Transactions</strong>
      <div className='w-full mt-3 text-xs flex-1'>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="income" fill='#0ea5e9' />
            <Bar dataKey="expense" fill='#ea580c' />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default TransactionChart;
