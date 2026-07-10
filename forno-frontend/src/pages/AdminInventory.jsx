
import React, { useState } from 'react';
import AdminNavbar from '../components/AdminNavbar';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import { mockInventory } from '../data/mockData';
import { Plus, Minus } from 'lucide-react';

const AdminInventory = () => {
  const [inventory, setInventory] = useState(mockInventory);
  const [newItem, setNewItem] = useState({
    name: '',
    type: 'base',
    stock: 50,
    threshold: 20,
    unit: 'units'
  });

  const updateStock = (id, delta) => {
    setInventory((prev) =>
      prev.map(item =>
        item.id === id
          ? { ...item, stock: Math.max(0, item.stock + delta) }
          : item
      )
    );
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    setInventory((prev) => [
      ...prev,
      { ...newItem, id: 'i' + Date.now() }
    ]);
    setNewItem({ name: '', type: 'base', stock: 50, threshold: 20, unit: 'units' });
  };

  return (
    <div className="min-h-screen bg-charcoal/5">
      <AdminNavbar />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-fraunces text-4xl font-bold text-charcoal">
            Inventory Management
          </h1>
        </div>

        {/* Add New Item Form */}
        <Card className="p-6 mb-8">
          <h3 className="font-fraunces text-xl font-bold text-charcoal mb-4">
            Add New Inventory Item
          </h3>
          <form onSubmit={handleAddItem} className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <Input
              placeholder="Item name"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              className="md:col-span-2"
              required
            />
            <Select
              value={newItem.type}
              onChange={(e) => setNewItem({ ...newItem, type: e.target.value })}
            >
              <option value="base">Base</option>
              <option value="sauce">Sauce</option>
              <option value="cheese">Cheese</option>
              <option value="vegetable">Vegetable</option>
            </Select>
            <Input
              type="number"
              placeholder="Stock"
              value={newItem.stock}
              onChange={(e) => setNewItem({ ...newItem, stock: Number(e.target.value) })}
            />
            <Input
              type="number"
              placeholder="Threshold"
              value={newItem.threshold}
              onChange={(e) => setNewItem({ ...newItem, threshold: Number(e.target.value) })}
            />
            <Button type="submit">Add Item</Button>
          </form>
        </Card>

        {/* Inventory Table */}
        <Card className="overflow-hidden">
          <table className="w-full">
            <thead className="bg-charcoal/5">
              <tr>
                <th className="text-left py-4 px-6 font-semibold text-charcoal">Item</th>
                <th className="text-left py-4 px-6 font-semibold text-charcoal">Type</th>
                <th className="text-left py-4 px-6 font-semibold text-charcoal">Stock</th>
                <th className="text-left py-4 px-6 font-semibold text-charcoal">Threshold</th>
                <th className="text-left py-4 px-6 font-semibold text-charcoal">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-charcoal/10">
              {inventory.map(item => (
                <tr key={item.id} className={item.stock < item.threshold ? 'bg-deep-tomato/5' : ''}>
                  <td className="py-4 px-6">
                    <p className="font-semibold text-charcoal">{item.name}</p>
                  </td>
                  <td className="py-4 px-6">
                    <span className="capitalize text-charcoal/70">{item.type}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`
                      font-ibmMono font-bold text-lg
                      ${item.stock < item.threshold ? 'text-deep-tomato' : 'text-basil-green'}
                    `}>
                      {item.stock} {item.unit}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-charcoal/70">{item.threshold} {item.unit}</span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => updateStock(item.id, -10)}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="w-8 text-center font-ibmMono">{item.stock}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => updateStock(item.id, 10)}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
};

export default AdminInventory;
