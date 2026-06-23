import React, { useState } from 'react';
import { 
  Clock, 
  RefreshCw, 
  CheckSquare, 
  MoreHorizontal, 
  ListChecks, 
  UserPlus, 
  Camera,
  CheckCircle2,
  Wrench,
  Plus,
  Trash2,
  Edit,
  Wind
} from 'lucide-react';
import { motion } from 'motion/react';
import { Modal } from '../components/ui/Modal';

export function Housekeeping() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<any>(null);

  const [tasks, setTasks] = useState([
    { id: 1, room: 'P.202', type: 'Dọn toàn diện (Full Clean)', priority: 'Cao', status: 'Đang chờ', icon: Wind },
    { id: 2, room: 'P.301', type: 'Bảo trì: Vòi sen rỉ nước', priority: 'Thường', status: 'Đang chờ', icon: Wrench },
    { id: 3, room: 'P.102', type: 'Dọn nhanh (Quick Clean)', priority: 'Thường', status: 'Đang làm', icon: RefreshCw },
    { id: 4, room: 'Villa 1', type: 'Dọn toàn diện', priority: 'Thường', status: 'Chờ kiểm tra', icon: CheckSquare },
  ]);

  const handleDelete = (id: number) => setTasks(tasks.filter(t => t.id !== id));

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
      {/* Quick Stats & Filters */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div className="flex gap-4 overflow-x-auto pb-2 w-full md:w-auto custom-scrollbar">
          <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant flex items-center gap-4 min-w-[160px] shadow-sm">
            <div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center text-primary">
              <Clock size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-outline uppercase tracking-wider">Chờ dọn</p>
              <p className="text-2xl font-bold">{tasks.filter(t => t.status === 'Đang chờ').length}</p>
            </div>
          </div>
          
          <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant flex items-center gap-4 min-w-[160px] shadow-sm">
            <div className="w-10 h-10 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary">
              <RefreshCw size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-outline uppercase tracking-wider">Đang làm</p>
              <p className="text-2xl font-bold">{tasks.filter(t => t.status === 'Đang làm').length}</p>
            </div>
          </div>
          
           <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant flex items-center gap-4 min-w-[160px] shadow-sm">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-primary">
              <CheckSquare size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-outline uppercase tracking-wider">Chờ kiểm tra</p>
              <p className="text-2xl font-bold">{tasks.filter(t => t.status === 'Chờ kiểm tra').length}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-surface-container p-1 rounded-lg">
            <button className="bg-surface-container-lowest px-4 py-1.5 rounded-md shadow-sm text-primary font-bold text-sm">Kanban</button>
            <button className="px-4 py-1.5 rounded-md text-on-surface-variant font-semibold text-sm hover:bg-surface-container-high transition-colors">Danh sách</button>
          </div>
          <button 
            onClick={() => { setEditingTask(null); setIsAddModalOpen(true); }}
            className="flex items-center gap-2 px-6 py-2 bg-primary text-on-primary rounded-xl text-sm font-medium hover:opacity-90 transition-opacity shadow-sm"
          >
            <Plus size={18} />
            Tạo tác vụ
          </button>
        </div>
      </section>

      {/* Kanban Board */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        
        {/* Column: Waiting */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-outline"></span>
              Đang chờ ({tasks.filter(t => t.status === 'Đang chờ').length})
            </h3>
          </div>
          
          <div className="flex flex-col gap-4 min-h-[500px]">
            {tasks.filter(t => t.status === 'Đang chờ').map(task => (
              <div key={task.id} className="bg-surface-container-lowest border border-outline-variant p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow group relative">
                <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                   <button onClick={() => openEditModal(task)} className="p-1 rounded bg-surface hover:text-primary"><Edit size={14}/></button>
                   <button onClick={() => handleDelete(task.id)} className="p-1 rounded bg-surface hover:text-error"><Trash2 size={14}/></button>
                </div>
                <div className="flex justify-between items-start mb-3">
                  <span className="text-2xl font-bold text-primary tracking-tight">{task.room}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${task.priority === 'Cao' ? 'bg-error-container text-on-error-container' : 'bg-secondary-container text-on-secondary-container'}`}>{task.priority}</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <task.icon size={18} className="text-outline" />
                  <p className="text-sm font-medium text-on-surface-variant">{task.type}</p>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-outline-variant/30">
                  <p className="text-xs text-outline italic">Chưa phân công</p>
                  <button className="text-primary font-bold text-xs hover:underline flex items-center gap-1 uppercase tracking-wide">
                    Nhận việc <span className="text-sm">&rarr;</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column: In Progress */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              Đang làm ({tasks.filter(t => t.status === 'Đang làm').length})
            </h3>
          </div>
          
          <div className="flex flex-col gap-4">
            {tasks.filter(t => t.status === 'Đang làm').map(task => (
              <div key={task.id} className="bg-secondary-container/10 border-2 border-secondary/20 p-4 rounded-xl shadow-sm relative overflow-hidden group">
                <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                   <button onClick={() => openEditModal(task)} className="p-1 rounded bg-surface text-on-surface-variant hover:text-primary"><Edit size={14}/></button>
                   <button onClick={() => handleDelete(task.id)} className="p-1 rounded bg-surface text-on-surface-variant hover:text-error"><Trash2 size={14}/></button>
                </div>
                <div className="absolute -right-6 -top-6 text-secondary/5">
                   <task.icon size={100} />
                </div>
                <div className="flex justify-between items-start mb-3 relative z-10 w-4/5">
                  <span className="text-2xl font-bold text-secondary tracking-tight">{task.room}</span>
                </div>
                <p className="text-sm font-bold text-secondary mb-4 relative z-10">{task.type}</p>
                <div className="grid grid-cols-2 gap-3 relative z-10 pt-4 border-t border-secondary/20 mt-4">
                  <button className="bg-surface-container-lowest border border-outline-variant py-2 rounded-lg text-xs font-bold hover:bg-surface-container transition-colors">Xong</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column: Needs Inspection */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              Chờ kiểm tra ({tasks.filter(t => t.status === 'Chờ kiểm tra').length})
            </h3>
          </div>
          
          <div className="flex flex-col gap-4">
            {tasks.filter(t => t.status === 'Chờ kiểm tra').map(task => (
              <div key={task.id} className="bg-surface-container-lowest border border-outline-variant p-5 rounded-xl shadow-sm border-l-4 border-l-primary relative group">
                <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                   <button onClick={() => openEditModal(task)} className="p-1 rounded bg-surface hover:text-primary"><Edit size={14}/></button>
                   <button onClick={() => handleDelete(task.id)} className="p-1 rounded bg-surface hover:text-error"><Trash2 size={14}/></button>
                </div>
                <div className="flex justify-between items-start mb-3">
                  <span className="text-2xl font-bold text-primary tracking-tight">{task.room}</span>
                </div>
                <p className="text-sm font-medium text-on-surface-variant mb-6">{task.type}</p>
                
                <div className="flex items-center justify-between">
                  <button className="text-error font-bold text-xs uppercase tracking-wide hover:underline p-2 -ml-2">Từ chối</button>
                  <button className="bg-primary text-on-primary px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wide hover:opacity-90 transition-opacity">Duyệt sạch</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal
        isOpen={isAddModalOpen}
        onClose={closeModal}
        title={editingTask ? "Chỉnh sửa tác vụ" : "Tạo tác vụ buồng phòng"}
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-on-surface">Phòng</label>
            <select defaultValue={editingTask?.room} className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none">
              <optgroup label="Phòng/Căn">
                <option value="P.101">P.101</option>
                <option value="P.102">P.102</option>
                <option value="P.201">P.201</option>
                <option value="P.202">P.202</option>
                <option value="P.301">P.301</option>
                <option value="Villa 1">Villa 1</option>
              </optgroup>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-on-surface">Loại tác vụ</label>
            <select defaultValue={editingTask ? (editingTask.type.includes('Dọn') ? 'Dọn phòng trống' : 'Vệ sinh chuyên sâu') : ''} className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none">
              <option>Dọn phòng trống</option>
              <option>Dọn phòng khách ở</option>
              <option>Vệ sinh chuyên sâu</option>
              <option>Kiểm tra</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-on-surface">Mức độ ưu tiên</label>
            <select defaultValue={editingTask?.priority} className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none">
              <option>Thường</option>
              <option>Cao</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-on-surface">Trạng thái</label>
            <select defaultValue={editingTask?.status} className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none">
              <option>Đang chờ</option>
              <option>Đang làm</option>
              <option>Chờ kiểm tra</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-on-surface">Ghi chú</label>
            <textarea className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none" rows={3} placeholder="Nhập ghi chú..."></textarea>
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
              {editingTask ? "Lưu thay đổi" : "Phân công"}
            </button>
          </div>
        </div>
      </Modal>
    </motion.div>
  );
}
