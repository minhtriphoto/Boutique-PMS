import React, { useState } from 'react';
import { Plus, AlertTriangle, Clock, CheckCircle2, MoreVertical, Wrench, Trash2, Edit } from 'lucide-react';
import { motion } from 'motion/react';
import { Modal } from '../components/ui/Modal';

export function Maintenance() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<any>(null);

  const [tasks, setTasks] = useState([
    { id: 1, room: 'P.301', issue: 'Máy lạnh không mát', priority: 'Cao', status: 'Mới', time: '1 giờ trước' },
    { id: 2, room: 'Hành lang T2', issue: 'Cháy bóng đèn LED', priority: 'Thấp', status: 'Đang xử lý', time: '3 giờ trước' },
    { id: 3, room: 'P.105', issue: 'Vòi sen rỉ nước', priority: 'Trung bình', status: 'Hoàn thành', time: '1 ngày trước' }
  ]);

  const handleDelete = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const openEditModal = (task: any) => {
    setEditingTask(task);
    setIsAddModalOpen(true);
  };

  const closeModal = () => {
    setIsAddModalOpen(false);
    setEditingTask(null);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-6"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-primary">Bảo Trì & Sửa Chữa</h2>
          <p className="text-on-surface-variant text-base mt-2">Theo dõi tình trạng thiết bị và yêu cầu bảo trì</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => { setEditingTask(null); setIsAddModalOpen(true); }}
            className="flex items-center gap-2 px-6 py-2.5 bg-primary text-on-primary rounded-xl text-sm font-medium hover:opacity-90 transition-opacity shadow-sm"
          >
            <Plus size={18} />
            Tạo Phiếu Bảo Trì
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Yêu Cầu Mới', value: '05', icon: AlertTriangle, color: 'text-error', bg: 'bg-error-container/20' },
          { label: 'Đang Xử Lý', value: '02', icon: Wrench, color: 'text-secondary', bg: 'bg-secondary-container/20' },
          { label: 'Hoàn Thành', value: '18', icon: CheckCircle2, color: 'text-primary', bg: 'bg-primary-container/20' },
          { label: 'Bảo Trì Định Kỳ', value: '03', icon: Clock, color: 'text-blue-500', bg: 'bg-blue-100' }
        ].map((stat, i) => (
          <div key={i} className="bg-surface-container-lowest border border-outline-variant p-4 rounded-xl flex items-center gap-4 shadow-sm">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${stat.bg} ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wide">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl overflow-hidden shadow-sm mt-4">
        <div className="p-5 border-b border-outline-variant flex justify-between items-center bg-surface-container-low/50">
          <h3 className="font-semibold">Danh sách yêu cầu</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-surface-container-low/30 border-b border-outline-variant">
              <tr>
                <th className="py-4 px-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">Phòng/Khu vực</th>
                <th className="py-4 px-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">Vấn đề</th>
                <th className="py-4 px-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">Mức độ</th>
                <th className="py-4 px-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">Trạng thái</th>
                <th className="py-4 px-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">Cập nhật</th>
                <th className="py-4 px-5 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {tasks.map((item) => (
                <tr key={item.id} className="hover:bg-surface-bright transition-colors group">
                  <td className="py-4 px-5 font-bold">{item.room}</td>
                  <td className="py-4 px-5 text-sm">{item.issue}</td>
                  <td className="py-4 px-5">
                    <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded 
                      ${item.priority === 'Cao' ? 'bg-error-container text-on-error-container' : 
                      item.priority === 'Trung bình' ? 'bg-amber-100 text-amber-800' : 
                      'bg-surface-container text-on-surface-variant'}`
                    }>
                      {item.priority}
                    </span>
                  </td>
                  <td className="py-4 px-5">
                    <span className={`text-[11px] font-bold 
                      ${item.status === 'Mới' ? 'text-error' : 
                      item.status === 'Đang xử lý' ? 'text-secondary' : 
                      'text-primary'}`
                    }>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-4 px-5 text-sm text-on-surface-variant">{item.time}</td>
                  <td className="py-4 px-5 text-right">
                    <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button 
                        onClick={() => openEditModal(item)}
                        className="p-1.5 text-outline hover:text-primary hover:bg-surface-container rounded transition-all"
                      >
                        <Edit size={16} />
                      </button>
                      <button 
                        onClick={() => handleDelete(item.id)}
                        className="p-1.5 text-outline hover:text-error hover:bg-surface-container rounded transition-all"
                      >
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
        title={editingTask ? "Chỉnh sửa Phiếu Bảo Trì" : "Tạo Phiếu Bảo Trì"}
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-on-surface">Phòng/Khu vực</label>
            <select defaultValue={editingTask?.room} className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none">
              <optgroup label="Tầng 1">
                <option value="P.101">P.101</option>
                <option value="P.102">P.102</option>
                <option value="P.105">P.105</option>
              </optgroup>
              <optgroup label="Tầng 2">
                <option value="P.201">P.201</option>
                <option value="P.204">P.204</option>
              </optgroup>
              <optgroup label="Tầng 3">
                <option value="P.301">P.301</option>
              </optgroup>
              <optgroup label="Tầng 4">
                <option value="P.405">P.405</option>
              </optgroup>
              <optgroup label="Villa">
                <option value="Villa-1">Villa-1</option>
              </optgroup>
              <optgroup label="Khu vực chung">
                <option value="Hành lang T1">Hành lang T1</option>
                <option value="Hành lang T2">Hành lang T2</option>
                <option value="Lễ tân">Lễ tân</option>
                <option value="Sân vườn">Sân vườn</option>
              </optgroup>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-on-surface">Vấn đề</label>
            <input type="text" defaultValue={editingTask?.issue} className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none" placeholder="Mô tả ngắn gọn sự cố..." />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-on-surface">Mức độ ưu tiên</label>
              <select defaultValue={editingTask?.priority} className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none">
                <option value="Thấp">Thấp</option>
                <option value="Trung bình">Trung bình</option>
                <option value="Cao">Cao</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-on-surface">Trạng thái</label>
              <select defaultValue={editingTask?.status} className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none">
                <option value="Mới">Mới</option>
                <option value="Đang xử lý">Đang xử lý</option>
                <option value="Hoàn thành">Hoàn thành</option>
              </select>
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
              {editingTask ? "Lưu thay đổi" : "Tạo phiếu"}
            </button>
          </div>
        </div>
      </Modal>
    </motion.div>
  );
}
