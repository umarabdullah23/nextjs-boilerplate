'use client';

import { useQuery } from '@tanstack/react-query';
import { Card } from '@/components/ui/card';
import axios from 'axios';

const fetchProducts = async () => {
  const { data } = await axios.get('https://reqres.in/api/products');
  return data;
};

export default function Dashboard() {
  const { isPending, error, data } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  if (isPending) return <div className="p-8">Loading...</div>;

  if (error)
    return <div className="p-8">An error occurred: {error.message}</div>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Products Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.data.map((product) => (
          <Card key={product.id} className="p-6">
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.year}</p>
            <div
              className="w-full h-40 rounded-lg mb-4"
              style={{ backgroundColor: product.color }}
            />
            <p className="text-sm text-gray-500">
              Pantone value: {product.pantone_value}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
