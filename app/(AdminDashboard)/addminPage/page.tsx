'use client';
import React, { useEffect, useState } from 'react';

interface Product {
  _id: string;
  name: string;
  chef: string;
  supplier: string;
  taste: string;
  category: string;
  details: string;
  photo: string;
  price: number;
}

const AdminPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [editing, setEditing] = useState<Product | null>(null);

  // Fetch all coffee data
  const fetchData = async () => {
    const res = await fetch('/api/product');
    const data = await res.json();
    setProducts(data.users || []);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Delete coffee
  const handleDelete = async (id: string) => {
    const res = await fetch(`/api/product/${id}`, { method: 'DELETE' });
    if (res.ok) {
      fetchData(); // refresh list
    }
  };

  // Update coffee
  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editing) return;

    const res = await fetch(`/api/product/${editing._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editing),
    });

    if (res.ok) {
      setEditing(null);
      fetchData();
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Coffee Panel</h1>

      {/* Edit Form */}
      {editing && (
        <form onSubmit={handleUpdate} className="mb-8 space-y-2 border p-4 rounded">
          <h2 className="text-xl font-semibold">Update Coffee: {editing.name}</h2>
          {Object.entries(editing).map(([key, value]) =>
            key !== '_id' ? (
              <input
                key={key}
                type="text"
                value={value}
                onChange={(e) => setEditing({ ...editing, [key]: e.target.value })}
                className="w-full p-2 border rounded"
                placeholder={key}
              />
            ) : null
          )}
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
            Update
          </button>
          <button type="button" onClick={() => setEditing(null)} className="ml-2 text-red-500">
            Cancel
          </button>
        </form>
      )}

      {/* Coffee List */}
      <div className="grid gap-4">
        {products.map((item) => (
          <div key={item._id} className="p-4 border rounded flex justify-between items-center">
            <div>
              <h2 className="font-bold">{item.name}</h2>
              <p className="text-sm">{item.details}</p>
              <p className="text-xs text-gray-500">Price: ${item?.price?.toFixed(2)}</p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => setEditing(item)}
                className="px-3 py-1 bg-yellow-400 text-black rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item._id)}
                className="px-3 py-1 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
