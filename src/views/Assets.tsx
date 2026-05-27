import React, { useState } from 'react';
import { Plus, Search, Filter, Box, Laptop, Sofa, MoreVertical, Edit, Trash2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Modal } from '../components/ui/Modal';

export function Assets() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingAsset, setEditingAsset] = useState<any>(null);

  const [assets, setAssets] = useState([
    { id: 1, name: 'Giường King Size', category: 'Nội thất', icon: Sofa, qty: 10, bg: 'bg-amber-100', color: 'text-amber-600' },
    { id: 2, name: 'Sofa Da Bò', category: 'Nội thất', icon: Sofa, qty: 5, bg: 'bg-amber-100', color: 'text-amber-600' },
    { id: 3, name: 'Tivi Smart 55"', category: 'Điện tử', icon: Laptop, qty: 15, bg: 'bg-blue-100', color: 'text-blue-600' },
    { id: 4, name: 'Khăn tắm lớn', category: 'Vật dụng', icon: Box, qty: 120, bg: 'bg-emerald-100', color: 'text-emerald-600' },
  ]);

  const handleDelete = (id: number) => setAssets(assets.filter(a => a.id !== id));

  const openEditModal = (asset: any) => {
    setEditingAsset(asset);
    setIsAddModalOpen(true);
  };

  const closeModal = () => {
    setIsAddModalOpen(false);
    setEditingAsset(null);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-6"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-primary">Tài Sản & Vật Tư</h2>
          <p className="text-on-surface-variant text-base mt-2">Quản lý kho trang thiết bị, nội thất và vật dụng tiêu hao</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => { setEditingAsset(null); setIsAddModalOpen(true); }}
            className="flex items-center gap-2 px-6 py-2.5 bg-primary text-on-primary rounded-xl text-sm font-medium hover:opacity-90 transition-opacity shadow-sm"
          >
            <Plus size={18} />
            Thêm Tài Sản
          </button>
        </div>
      </div>

      <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-5 shadow-sm flex flex-col md:flex-row items-center gap-4">
        <div className="relative w-full md:max-w-md">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
          <input 
            type="text" 
            placeholder="Tìm theo tên vật tư, mã QR..." 
            className="w-full pl-10 pr-4 py-2.5 bg-surface border border-outline-variant rounded-xl text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none"
          />
        </div>
      </div>

      <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-surface-container-low/30 border-b border-outline-variant">
              <tr>
                <th className="py-4 px-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">Tên tài sản</th>
                <th className="py-4 px-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">Danh mục</th>
                <th className="py-4 px-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">Số lượng</th>
                <th className="py-4 px-5 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {assets.map((item) => (
                <tr key={item.id} className="hover:bg-surface-bright transition-colors group">
                  <td className="py-4 px-5 font-bold flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${item.bg} ${item.color}`}>
                      <item.icon size={16} />
                    </div>
                    {item.name}
                  </td>
                  <td className="py-4 px-5 text-sm">{item.category}</td>
                  <td className="py-4 px-5 font-semibold">{item.qty}</td>
                  <td className="py-4 px-5 text-right">
                    <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => openEditModal(item)} className="p-1.5 text-outline hover:text-primary hover:bg-surface-container rounded transition-all">
                        <Edit size={16} />
                      </button>
                      <button onClick={() => handleDelete(item.id)} className="p-1.5 text-outline hover:text-error hover:bg-surface-container rounded transition-all">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal
        isOpen={isAddModalOpen}
        onClose={closeModal}
        title={editingAsset ? "Chỉnh Sửa Tài Sản" : "Thêm Tài Sản/Vật Tư"}
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-on-surface">Tên tài sản</label>
            <input type="text" defaultValue={editingAsset?.name} className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none" placeholder="VD: Tivi Samsung 55 inch..." />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-on-surface">Danh mục</label>
              <select defaultValue={editingAsset?.category} className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none">
                <option value="Nội thất">Nội thất</option>
                <option value="Điện tử">Điện tử & Điện lạnh</option>
                <option value="Vật dụng">Vật dụng & Vệ sinh</option>
                <option value="Khác">Khác</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-on-surface">Số lượng</label>
              <input type="number" defaultValue={editingAsset?.qty || "1"} min="1" className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none" />
            </div>
          </div>
          
          <div className="pt-4 border-t border-outline-variant flex justify-end gap-3 mt-4">
            <button
              onClick={closeModal}
              className="px-6 py-2.5 rounded-xl font-semibold text-on-surface-variant hover:bg-surface-container transition-colors"
            >
              Hủy
            </button>
            <button
              onClick={closeModal}
              className="px-6 py-2.5 bg-primary text-on-primary rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              {editingAsset ? "Lưu thay đổi" : "Thêm tài sản"}
            </button>
          </div>
        </div>
      </Modal>
    </motion.div>
  );
}
