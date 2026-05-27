import React, { useState } from 'react';
import { Settings as SettingsIcon, User, Bell, Lock, Palette, Edit, Trash2, Plus } from 'lucide-react';
import { motion } from 'motion/react';
import { Modal } from '../components/ui/Modal';

type SettingTab = 'general' | 'roles' | 'notifications' | 'security' | 'appearance';

export function Settings() {
  const [activeTab, setActiveTab] = useState<SettingTab>('roles');
  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);
  
  const [users, setUsers] = useState([
    { id: 1, name: 'Nguyễn Văn Admin', email: 'admin@lotus.com', role: 'Quản trị viên (Admin)' },
    { id: 2, name: 'Lê Thị Quản Lý', email: 'manager@lotus.com', role: 'Quản lý vận hành' },
    { id: 3, name: 'Trần Lễ Tân', email: 'frontdesk@lotus.com', role: 'Sale/Lễ tân' },
    { id: 4, name: 'Phạm Dọn Phòng', email: 'housekeeping@lotus.com', role: 'Nhân viên dọn phòng' },
    { id: 5, name: 'Hoàng Kế Toán', email: 'accountant@lotus.com', role: 'Kế toán' },
  ]);

  const handleDeleteUser = (id: number) => {
    setUsers(users.filter(u => u.id !== id));
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-6"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h2 className="text-2xl font-semibold text-primary">Cài Đặt Hệ Thống</h2>
          <p className="text-on-surface-variant text-base mt-2">Quản lý tùy chọn, phân quyền và thông tin doanh nghiệp</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4 lg:col-span-3 space-y-2">
          <button 
            onClick={() => setActiveTab('general')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-left transition-colors ${activeTab === 'general' ? 'bg-surface-container-high text-primary' : 'text-on-surface-variant hover:bg-surface-container'}`}
          >
            <SettingsIcon size={20} /> Thông tin chung
          </button>
          <button 
            onClick={() => setActiveTab('roles')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-left transition-colors ${activeTab === 'roles' ? 'bg-surface-container-high text-primary' : 'text-on-surface-variant hover:bg-surface-container'}`}
          >
            <User size={20} /> Tài khoản & Phân quyền
          </button>
          <button 
            onClick={() => setActiveTab('notifications')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-left transition-colors ${activeTab === 'notifications' ? 'bg-surface-container-high text-primary' : 'text-on-surface-variant hover:bg-surface-container'}`}
          >
            <Bell size={20} /> Thông báo
          </button>
          <button 
            onClick={() => setActiveTab('security')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-left transition-colors ${activeTab === 'security' ? 'bg-surface-container-high text-primary' : 'text-on-surface-variant hover:bg-surface-container'}`}
          >
            <Lock size={20} /> Bảo mật
          </button>
          <button 
            onClick={() => setActiveTab('appearance')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-left transition-colors ${activeTab === 'appearance' ? 'bg-surface-container-high text-primary' : 'text-on-surface-variant hover:bg-surface-container'}`}
          >
            <Palette size={20} /> Giao diện
          </button>
        </div>

        <div className="md:col-span-8 lg:col-span-9 bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 sm:p-8 shadow-sm">
          {activeTab === 'general' && (
            <div>
              <h3 className="text-xl font-bold mb-6">Thông tin doanh nghiệp</h3>
              <div className="space-y-6 max-w-2xl">
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 bg-surface-container rounded-xl flex items-center justify-center border-2 border-dashed border-outline-variant">
                    <span className="text-outline text-sm text-center">Tải lên<br/>Logo</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-on-surface">Logo thương hiệu</h4>
                    <p className="text-sm text-on-surface-variant mb-3">Định dạng JPG, PNG. Dung lượng tối đa 2MB.</p>
                    <button className="px-4 py-2 border border-outline-variant rounded-lg text-sm font-semibold hover:bg-surface-container transition-colors">Chọn ảnh</button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-on-surface">Tên cơ sở lữu trú</label>
                    <input type="text" defaultValue="The Lotus Villa" className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-on-surface">Mã số thuế</label>
                    <input type="text" defaultValue="0123456789" className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none" />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <label className="text-sm font-semibold text-on-surface">Địa chỉ</label>
                    <input type="text" defaultValue="123 Đường Ngọc Trai, Phường X, Quận Y, TP. Z" className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-on-surface">Số điện thoại liên hệ</label>
                    <input type="text" defaultValue="090 111 2222" className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-on-surface">Email nhận thông báo</label>
                    <input type="text" defaultValue="hello@lotusvilla.com" className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none" />
                  </div>
                </div>

                <div className="pt-6 border-t border-outline-variant flex justify-end gap-3 mt-8">
                  <button className="px-6 py-2.5 rounded-xl font-semibold text-on-surface-variant hover:bg-surface-container transition-colors">Hủy</button>
                  <button className="px-6 py-2.5 bg-primary text-on-primary rounded-xl font-semibold hover:opacity-90 transition-opacity">Lưu Thay Đổi</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'roles' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Tài khoản & Phân quyền</h3>
                <button 
                  onClick={() => setIsRoleModalOpen(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-lg text-sm font-medium hover:opacity-90"
                >
                  <Plus size={16} /> Thêm tài khoản
                </button>
              </div>
              
              <div className="overflow-x-auto rounded-xl border border-outline-variant">
                <table className="w-full text-left">
                  <thead className="bg-surface-container-low border-b border-outline-variant">
                    <tr>
                      <th className="py-3 px-4 text-xs tracking-wider uppercase text-on-surface-variant">Họ và tên</th>
                      <th className="py-3 px-4 text-xs tracking-wider uppercase text-on-surface-variant">Email</th>
                      <th className="py-3 px-4 text-xs tracking-wider uppercase text-on-surface-variant">Vai trò</th>
                      <th className="py-3 px-4 text-xs tracking-wider uppercase text-on-surface-variant text-right">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant">
                    {users.map((u) => (
                      <tr key={u.id} className="hover:bg-surface-container-lowest">
                        <td className="py-3 px-4 font-semibold text-sm">{u.name}</td>
                        <td className="py-3 px-4 text-sm text-on-surface-variant">{u.email}</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 bg-surface-container rounded-md text-xs font-bold text-on-surface">{u.role}</span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <button 
                            onClick={() => setIsRoleModalOpen(true)}
                            className="p-1.5 text-outline hover:text-primary transition-colors"
                          >
                            <Edit size={16} />
                          </button>
                          <button 
                            onClick={() => handleDeleteUser(u.id)}
                            className="p-1.5 text-outline hover:text-error transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Placeholders for other tabs */}
          {['notifications', 'security', 'appearance'].includes(activeTab) && (
            <div className="text-center py-10 text-on-surface-variant">
              Tính năng đang được phát triển...
            </div>
          )}

        </div>
      </div>

      <Modal
        isOpen={isRoleModalOpen}
        onClose={() => setIsRoleModalOpen(false)}
        title="Quản lý Tài Khoản"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-on-surface">Tên nhân viên</label>
            <input type="text" className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none" placeholder="VD: Nguyễn Văn A" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-on-surface">Email (Tên đăng nhập)</label>
            <input type="email" className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none" placeholder="abc@lotus.com" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-on-surface">Mật khẩu tạm thời</label>
            <input type="password" placeholder="••••••••" className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-on-surface">Vai trò (Phân quyền)</label>
            <select className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none">
              <option>Admin/Chủ hộ</option>
              <option>Quản lý vận hành</option>
              <option>Sale/Lễ tân</option>
              <option>Nhân viên dọn phòng</option>
              <option>Kế toán</option>
            </select>
            <p className="text-xs text-on-surface-variant mt-1">Vai trò này sẽ quyết định quyền truy cập vào các menu của hệ thống.</p>
          </div>
          
          <div className="pt-4 border-t border-outline-variant flex justify-end gap-3 mt-4">
            <button
              onClick={() => setIsRoleModalOpen(false)}
              className="px-6 py-2.5 rounded-xl font-semibold text-on-surface-variant hover:bg-surface-container transition-colors"
            >
              Hủy
            </button>
            <button
              onClick={() => {
                setIsRoleModalOpen(false);
              }}
              className="px-6 py-2.5 bg-primary text-on-primary rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              Lưu tài khoản
            </button>
          </div>
        </div>
      </Modal>

    </motion.div>
  );
}
