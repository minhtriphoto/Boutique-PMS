import React, { useState } from 'react';
import { Plus, Search, Filter, Mail, Phone, MoreVertical, Star, Edit, Trash2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Modal } from '../components/ui/Modal';

export function Customers() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState<any>(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('Tất cả');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    type: 'Standard'
  });

  const [customers, setCustomers] = useState([
    { id: 1, name: 'Nguyễn Văn A', initials: 'NV', type: 'VIP', phone: '0901 234 501', email: 'user1@example.com', bookings: 3, spend: '1.5' },
    { id: 2, name: 'Trần Thị B', initials: 'TB', type: 'Standard', phone: '0901 234 502', email: 'user2@example.com', bookings: 5, spend: '3.0' },
    { id: 3, name: 'Lê Văn C', initials: 'LC', type: 'Standard', phone: '0901 234 503', email: 'user3@example.com', bookings: 7, spend: '4.5' },
    { id: 4, name: 'Phạm Minh D', initials: 'MD', type: 'VIP', phone: '0901 234 504', email: 'user4@example.com', bookings: 9, spend: '6.0' },
    { id: 5, name: 'Phan Lan', initials: 'PL', type: 'Standard', phone: '0901 234 505', email: 'user5@example.com', bookings: 11, spend: '7.5' },
    { id: 6, name: 'Hoàng Thái', initials: 'HT', type: 'Standard', phone: '0901 234 506', email: 'user6@example.com', bookings: 13, spend: '9.0' },
  ]);

  const handleDelete = (id: number) => {
    setCustomers(customers.filter(c => c.id !== id));
  };

  const openEditModal = (customer: any) => {
    setEditingCustomer(customer);
    setFormData({
      name: customer.name,
      phone: customer.phone,
      email: customer.email,
      type: customer.type
    });
    setIsAddModalOpen(true);
  };

  const openAddModal = () => {
    setEditingCustomer(null);
    setFormData({
      name: '',
      phone: '',
      email: '',
      type: 'Standard'
    });
    setIsAddModalOpen(true);
  };

  const closeModal = () => {
    setIsAddModalOpen(false);
    setEditingCustomer(null);
  };

  const handleSaveCustomer = () => {
    if (editingCustomer) {
      setCustomers(customers.map(c => c.id === editingCustomer.id ? {
        ...c,
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        type: formData.type,
        initials: (formData.name || 'KM').split(' ').map(n => n[0] || '').join('').slice(0, 2).toUpperCase()
      } : c));
    } else {
      setCustomers([
        ...customers,
        {
          id: Math.random(),
          name: formData.name || 'Khách mới',
          initials: (formData.name || 'KM').split(' ').map(n => n[0] || '').join('').slice(0, 2).toUpperCase(),
          phone: formData.phone || 'Chưa có',
          email: formData.email || '',
          type: formData.type || 'Standard',
          bookings: 0,
          spend: '0'
        }
      ]);
    }
    closeModal();
  };

  const filteredCustomers = customers.filter(c => {
    const matchSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        c.phone.includes(searchTerm) || 
                        c.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchType = typeFilter === 'Tất cả' || c.type === typeFilter;
    return matchSearch && matchType;
  });

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-6"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-primary">Khách Hàng</h2>
          <p className="text-on-surface-variant text-base mt-2">Quản lý hồ sơ, liên hệ và lịch sử lưu trú</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={openAddModal}
            className="flex items-center gap-2 px-6 py-2.5 bg-primary text-on-primary rounded-xl text-sm font-medium hover:opacity-90 transition-opacity shadow-sm"
          >
            <Plus size={18} />
            Thêm khách hàng
          </button>
        </div>
      </div>

      <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-5 shadow-sm flex flex-col md:flex-row items-center gap-4">
        <div className="relative w-full md:max-w-md">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
          <input 
            type="text" 
            placeholder="Tìm theo tên, SĐT, Email..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-surface border border-outline-variant rounded-xl text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none"
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="px-4 py-2.5 border border-outline-variant bg-surface-container-lowest rounded-xl text-sm font-medium hover:bg-surface-container outline-none focus:border-primary">
            <option>Tất cả</option>
            <option>VIP</option>
            <option>Standard</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCustomers.map((c) => (
          <div key={c.id} className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary-container/20 text-primary-container flex items-center justify-center font-bold text-lg">
                  {c.initials}
                </div>
                <div>
                  <h3 className="font-bold text-on-surface">
                    {c.name}
                  </h3>
                  {c.type === 'VIP' ? (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-600 uppercase tracking-wider mt-1">
                      <Star size={10} className="fill-amber-500" /> VIP
                    </span>
                  ) : (
                    <span className="text-xs text-on-surface-variant font-medium mt-1 inline-block">Standard</span>
                  )}
                </div>
              </div>
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={() => openEditModal(c)}
                  className="p-1 text-outline hover:text-primary transition-colors bg-surface-container rounded"
                >
                  <Edit size={16} />
                </button>
                <button 
                  onClick={() => handleDelete(c.id)}
                  className="p-1 text-outline hover:text-error transition-colors bg-surface-container rounded"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
            
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-sm text-on-surface-variant">
                <Phone size={16} /> {c.phone}
              </div>
              <div className="flex items-center gap-2 text-sm text-on-surface-variant">
                <Mail size={16} /> {c.email}
              </div>
            </div>

            <div className="pt-4 border-t border-outline-variant/50 flex justify-between items-center text-sm">
              <div className="text-on-surface-variant">
                Lượt đặt: <span className="font-bold text-on-surface">{c.bookings}</span>
              </div>
              <div className="text-on-surface-variant">
                Chi tiêu: <span className="font-bold text-secondary">{c.spend}M ₫</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isAddModalOpen}
        onClose={closeModal}
        title={editingCustomer ? "Chỉnh sửa khách hàng" : "Thêm khách hàng"}
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-on-surface">Họ và tên</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none"
              placeholder="VD: Nguyễn Văn A"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-on-surface">Số điện thoại</label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none"
                placeholder="VD: 0901234567"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-on-surface">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none"
                placeholder="VD: abc@gmail.com"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-on-surface">Loại khách hàng</label>
            <select
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none"
            >
              <option value="Standard">Standard</option>
              <option value="VIP">VIP</option>
            </select>
          </div>
          <div className="pt-4 border-t border-outline-variant flex justify-end gap-3 mt-4">
            <button
              onClick={closeModal}
              className="px-6 py-2.5 rounded-xl font-semibold text-on-surface-variant hover:bg-surface-container transition-colors"
            >
              Hủy
            </button>
            <button
              onClick={handleSaveCustomer}
              className="px-6 py-2.5 bg-primary text-on-primary rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              {editingCustomer ? "Lưu thông tin" : "Thêm khách hàng"}
            </button>
          </div>
        </div>
      </Modal>
    </motion.div>
  );
}
