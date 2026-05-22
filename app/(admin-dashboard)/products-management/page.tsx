"use client";

import React, { useState } from "react";
import { Plus, Search, Edit3, Trash2 } from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
}

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  
  // ডামি ডাটা
  const products: Product[] = [
    { id: "1", name: "Premium Wireless Headphones", category: "Electronics", price: 129, stock: 45 },
    { id: "2", name: "Ergonomic Office Chair", category: "Furniture", price: 249, stock: 12 },
    { id: "3", name: "Waterproof Smartwatch", category: "Electronics", price: 89, stock: 88 },
    { id: "4", name: "Leather Travel Backpack", category: "Accessories", price: 145, stock: 23 },
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 space-y-4">
      {/* Top Controller */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          <Plus size={18} />
          <span>Add Product</span>
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-slate-100">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 text-slate-600 text-sm font-semibold border-b border-slate-100">
              <th className="p-4">Product Name</th>
              <th className="p-4">Category</th>
              <th className="p-4">Price</th>
              <th className="p-4">Stock</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="text-slate-700 text-sm divide-y divide-slate-50">
            {filteredProducts.map((product) => (
              <tr key={product.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="p-4 font-medium text-slate-900">{product.name}</td>
                <td className="p-4 text-slate-500">{product.category}</td>
                <td className="p-4">${product.price}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-md text-xs font-semibold ${product.stock < 15 ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'}`}>
                    {product.stock} pcs
                  </span>
                </td>
                <td className="p-4 text-right space-x-2">
                  <button onClick={() => alert(`Edit ${product.name}`)} className="text-indigo-600 hover:text-indigo-900 inline-flex p-1 rounded-md hover:bg-slate-100">
                    <Edit3 size={16} />
                  </button>
                  <button className="text-red-600 hover:text-red-900 inline-flex p-1 rounded-md hover:bg-slate-100">
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}