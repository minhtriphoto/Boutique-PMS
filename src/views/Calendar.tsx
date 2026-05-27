import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Filter, ChevronsUpDown, CheckCircle, Bed, LogOut, Banknote, LineChart, TrendingUp, AlertTriangle, CalendarOff } from 'lucide-react';
import { motion } from 'motion/react';

export function Calendar() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('Tất cả loại phòng');

  const filterOptions = ['Tất cả loại phòng', 'Deluxe', 'Suite', 'Standard'];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex-1 flex flex-col gap-6"
    >
      {/* Calendar Header / Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-primary">Lịch phòng</h2>
          <p className="text-on-surface-variant">Quản lý trạng thái và đặt phòng trực quan</p>
        </div>

        <div className="flex items-center gap-2 bg-surface-container-lowest p-1 rounded-xl shadow-sm border border-outline-variant">
          <button className="px-4 py-2 rounded-lg text-sm font-medium bg-primary text-on-primary">Tuần</button>
          <button className="px-4 py-2 rounded-lg text-sm font-medium text-on-surface-variant hover:bg-surface-container">Tháng</button>
          <div className="h-6 w-[1px] bg-outline-variant mx-1"></div>
          <div className="flex items-center gap-1 px-2">
            <button className="p-1 hover:bg-surface-container rounded-md"><ChevronLeft size={20} /></button>
            <span className="font-bold text-sm px-2 whitespace-nowrap">15 - 28 Tháng 5, 2024</span>
            <button className="p-1 hover:bg-surface-container rounded-md"><ChevronRight size={20} /></button>
          </div>
        </div>

        <div className="flex items-center gap-2 relative">
          <button 
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-outline-variant text-sm font-medium bg-surface-container-lowest hover:bg-surface-container-low transition-colors"
          >
            <Filter size={18} />
            Lọc: {selectedFilter}
          </button>
          
          {filterOpen && (
            <div className="absolute top-12 right-0 bg-surface-container-lowest border border-outline-variant rounded-xl shadow-lg w-48 py-2 z-50">
              {filterOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => {
                    setSelectedFilter(opt);
                    setFilterOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-surface-container transition-colors ${selectedFilter === opt ? 'font-bold text-primary bg-primary-container/10' : 'text-on-surface'}`}
                >
                  {opt}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Color Legend */}
      <div className="flex flex-wrap gap-4 px-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
          <span className="text-xs font-semibold text-on-surface-variant">Đã xác nhận</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-amber-400"></div>
          <span className="text-xs font-semibold text-on-surface-variant">Đã cọc</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <span className="text-xs font-semibold text-on-surface-variant">Đang ở</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-slate-400"></div>
          <span className="text-xs font-semibold text-on-surface-variant">Đã trả phòng</span>
        </div>
        <div className="flex items-center gap-2 ml-auto">
          <div className="w-3 h-3 rounded bg-red-100 border border-red-200"></div>
          <span className="text-xs font-semibold text-on-surface-variant">Bảo trì</span>
        </div>
      </div>

      {/* Booking Grid Canvas */}
      <div className="flex-1 bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm overflow-hidden flex flex-col min-h-[400px]">
        
        {/* Grid Header */}
        <div className="grid grid-cols-[180px_repeat(14,minmax(100px,1fr))] border-b border-outline-variant bg-surface-container-low select-none">
          <div className="p-4 font-bold text-primary flex items-center justify-between sticky left-0 z-20 bg-surface-container-low">
            <span>Phòng</span>
            <ChevronsUpDown size={18} />
          </div>
          
          {/* Days Labels (Static sample for 14 days) */}
          <div className="flex flex-col items-center justify-center py-2 border-l border-outline-variant bg-primary-container/10">
            <span className="text-xs font-bold text-primary">T2</span>
            <span className="text-xl font-bold text-primary">15</span>
          </div>
          <div className="flex flex-col items-center justify-center py-2 border-l border-outline-variant">
            <span className="text-xs text-on-surface-variant">T3</span>
            <span className="text-xl font-medium">16</span>
          </div>
          <div className="flex flex-col items-center justify-center py-2 border-l border-outline-variant">
            <span className="text-xs text-on-surface-variant">T4</span>
            <span className="text-xl font-medium">17</span>
          </div>
          <div className="flex flex-col items-center justify-center py-2 border-l border-outline-variant">
            <span className="text-xs text-on-surface-variant">T5</span>
            <span className="text-xl font-medium">18</span>
          </div>
          <div className="flex flex-col items-center justify-center py-2 border-l border-outline-variant">
            <span className="text-xs text-on-surface-variant">T6</span>
            <span className="text-xl font-medium">19</span>
          </div>
          <div className="flex flex-col items-center justify-center py-2 border-l border-outline-variant bg-secondary-container/20">
            <span className="text-xs text-secondary font-bold">T7</span>
            <span className="text-xl font-bold text-secondary">20</span>
          </div>
          <div className="flex flex-col items-center justify-center py-2 border-l border-outline-variant bg-secondary-container/20">
            <span className="text-xs text-secondary font-bold">CN</span>
            <span className="text-xl font-bold text-secondary">21</span>
          </div>
          <div className="flex flex-col items-center justify-center py-2 border-l border-outline-variant">
            <span className="text-xs text-on-surface-variant">T2</span>
            <span className="text-xl font-medium">22</span>
          </div>
          <div className="flex flex-col items-center justify-center py-2 border-l border-outline-variant">
            <span className="text-xs text-on-surface-variant">T3</span>
            <span className="text-xl font-medium">23</span>
          </div>
          <div className="flex flex-col items-center justify-center py-2 border-l border-outline-variant">
            <span className="text-xs text-on-surface-variant">T4</span>
            <span className="text-xl font-medium">24</span>
          </div>
          <div className="flex flex-col items-center justify-center py-2 border-l border-outline-variant">
            <span className="text-xs text-on-surface-variant">T5</span>
            <span className="text-xl font-medium">25</span>
          </div>
          <div className="flex flex-col items-center justify-center py-2 border-l border-outline-variant">
            <span className="text-xs text-on-surface-variant">T6</span>
            <span className="text-xl font-medium">26</span>
          </div>
          <div className="flex flex-col items-center justify-center py-2 border-l border-outline-variant bg-secondary-container/20">
            <span className="text-xs text-secondary font-bold">T7</span>
            <span className="text-xl font-bold text-secondary">27</span>
          </div>
          <div className="flex flex-col items-center justify-center py-2 border-l border-outline-variant bg-secondary-container/20">
            <span className="text-xs text-secondary font-bold">CN</span>
            <span className="text-xl font-bold text-secondary">28</span>
          </div>
        </div>

        {/* Scrollable Grid Body */}
        <div className="flex-1 overflow-x-auto overflow-y-auto custom-scrollbar relative">
          
          {/* Grid Row: Room 101 */}
          <div className="grid grid-cols-[180px_repeat(14,minmax(100px,1fr))] group">
            <div className="p-4 border-b border-outline-variant bg-surface-container-lowest sticky left-0 z-10 flex flex-col">
              <span className="font-bold text-on-surface">P.101 (Deluxe)</span>
              <span className="text-[10px] text-emerald-600 font-bold uppercase">Sẵn sàng</span>
            </div>
            {/* Day Columns */}
            <div className="border-b border-l border-outline-variant relative bg-slate-50/30"></div>
            <div className="border-b border-l border-outline-variant relative"></div>
            <div className="border-b border-l border-outline-variant relative">
              {/* Booking Pill */}
              <div className="absolute top-2 left-1 w-[290px] h-10 bg-emerald-500 text-white rounded-lg px-3 flex items-center gap-2 cursor-pointer z-20 shadow-sm hover:-translate-y-px transition-transform">
                <CheckCircle size={18} />
                <span className="text-sm font-bold truncate">Trần Minh Tâm</span>
              </div>
            </div>
            <div className="border-b border-l border-outline-variant relative"></div>
            <div className="border-b border-l border-outline-variant relative"></div>
            <div className="border-b border-l border-outline-variant relative bg-secondary-container/5"></div>
            <div className="border-b border-l border-outline-variant relative bg-secondary-container/5"></div>
            <div className="border-b border-l border-outline-variant relative">
              {/* Booking Pill */}
              <div className="absolute top-2 left-1 w-[390px] h-10 bg-blue-500 text-white rounded-lg px-3 flex items-center gap-2 cursor-pointer z-20 shadow-sm hover:-translate-y-px transition-transform">
                <Bed size={18} />
                <span className="text-sm font-bold truncate">Lê Thị Hoa (OTA)</span>
              </div>
            </div>
            <div className="border-b border-l border-outline-variant relative"></div>
            <div className="border-b border-l border-outline-variant relative"></div>
            <div className="border-b border-l border-outline-variant relative"></div>
            <div className="border-b border-l border-outline-variant relative"></div>
            <div className="border-b border-l border-outline-variant relative bg-secondary-container/5"></div>
            <div className="border-b border-l border-outline-variant relative bg-secondary-container/5"></div>
          </div>

          {/* Grid Row: Room 102 */}
          <div className="grid grid-cols-[180px_repeat(14,minmax(100px,1fr))] group">
            <div className="p-4 border-b border-outline-variant bg-surface-container-lowest sticky left-0 z-10 flex flex-col">
              <span className="font-bold text-on-surface">P.102 (Suite)</span>
              <span className="text-[10px] text-amber-600 font-bold uppercase">Chờ dọn</span>
            </div>
            <div className="border-b border-l border-outline-variant relative bg-slate-50/30">
              <div className="absolute top-2 left-[-100px] w-[200px] h-10 bg-slate-400 text-white rounded-lg px-3 flex items-center gap-2 cursor-pointer z-20 shadow-sm opacity-60">
                <LogOut size={18} />
                <span className="text-sm font-bold truncate">Nguyễn An</span>
              </div>
            </div>
            <div className="border-b border-l border-outline-variant relative"></div>
            <div className="border-b border-l border-outline-variant relative"></div>
            <div className="border-b border-l border-outline-variant relative">
              <div className="absolute top-2 left-1 w-[190px] h-10 bg-amber-400 text-on-secondary-fixed font-bold rounded-lg px-3 flex items-center gap-2 cursor-pointer z-20 shadow-sm hover:-translate-y-px transition-transform">
                <Banknote size={18} />
                <span className="text-sm truncate">Hoàng Anh (Đã cọc)</span>
              </div>
            </div>
            <div className="border-b border-l border-outline-variant relative"></div>
            <div className="border-b border-l border-outline-variant relative bg-secondary-container/5"></div>
            <div className="border-b border-l border-outline-variant relative bg-secondary-container/5"></div>
            <div className="border-b border-l border-outline-variant relative"></div>
            <div className="border-b border-l border-outline-variant relative"></div>
            <div className="border-b border-l border-outline-variant relative"></div>
            <div className="border-b border-l border-outline-variant relative"></div>
            <div className="border-b border-l border-outline-variant relative"></div>
            <div className="border-b border-l border-outline-variant relative bg-secondary-container/5"></div>
            <div className="border-b border-l border-outline-variant relative bg-secondary-container/5"></div>
          </div>

          {/* Grid Row: Room 103 */}
          <div className="grid grid-cols-[180px_repeat(14,minmax(100px,1fr))] group">
            <div className="p-4 border-b border-outline-variant bg-surface-container-lowest sticky left-0 z-10 flex flex-col">
              <span className="font-bold text-on-surface">P.103 (Standard)</span>
              <span className="text-[10px] text-red-600 font-bold uppercase">Bảo trì</span>
            </div>
            <div className="border-b border-l border-outline-variant relative bg-red-50/50">
              <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(186,26,26,0.05)_10px,rgba(186,26,26,0.05)_20px)]"></div>
            </div>
            <div className="border-b border-l border-outline-variant relative bg-red-50/50">
              <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(186,26,26,0.05)_10px,rgba(186,26,26,0.05)_20px)]"></div>
            </div>
            <div className="border-b border-l border-outline-variant relative"></div>
            <div className="border-b border-l border-outline-variant relative"></div>
            <div className="border-b border-l border-outline-variant relative"></div>
            <div className="border-b border-l border-outline-variant relative bg-secondary-container/5"></div>
            <div className="border-b border-l border-outline-variant relative bg-secondary-container/5"></div>
            <div className="border-b border-l border-outline-variant relative"></div>
            <div className="border-b border-l border-outline-variant relative"></div>
            <div className="border-b border-l border-outline-variant relative"></div>
            <div className="border-b border-l border-outline-variant relative"></div>
            <div className="border-b border-l border-outline-variant relative"></div>
            <div className="border-b border-l border-outline-variant relative bg-secondary-container/5"></div>
            <div className="border-b border-l border-outline-variant relative bg-secondary-container/5"></div>
          </div>
          
           {/* Grid Row: Room 201 */}
           <div className="grid grid-cols-[180px_repeat(14,minmax(100px,1fr))] group">
            <div className="p-4 border-b border-outline-variant bg-surface-container-lowest sticky left-0 z-10 flex flex-col">
              <span className="font-bold text-on-surface">P.201 (Deluxe)</span>
              <span className="text-[10px] text-emerald-600 font-bold uppercase">Sẵn sàng</span>
            </div>
            <div className="border-b border-l border-outline-variant relative"></div>
            <div className="border-b border-l border-outline-variant relative"></div>
            <div className="border-b border-l border-outline-variant relative"></div>
            <div className="border-b border-l border-outline-variant relative"></div>
            <div className="border-b border-l border-outline-variant relative"></div>
            <div className="border-b border-l border-outline-variant relative bg-secondary-container/5"></div>
            <div className="border-b border-l border-outline-variant relative bg-secondary-container/5"></div>
            <div className="border-b border-l border-outline-variant relative"></div>
            <div className="border-b border-l border-outline-variant relative"></div>
            <div className="border-b border-l border-outline-variant relative"></div>
            <div className="border-b border-l border-outline-variant relative"></div>
            <div className="border-b border-l border-outline-variant relative"></div>
            <div className="border-b border-l border-outline-variant relative bg-secondary-container/5"></div>
            <div className="border-b border-l border-outline-variant relative bg-secondary-container/5"></div>
          </div>
          
          <div className="grid grid-cols-[180px_repeat(14,minmax(100px,1fr))] group invisible">
            <div className="p-4"> </div>
          </div>
          
        </div>
      </div>

      {/* Bento Stats Footer */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2">
        <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-primary-container/20 rounded-full flex items-center justify-center text-primary">
            <LineChart size={24} />
          </div>
          <div>
            <p className="text-xs font-semibold text-on-surface-variant">Công suất phòng</p>
            <h4 className="text-xl font-bold">84%</h4>
          </div>
        </div>
        
        <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-secondary-container/20 rounded-full flex items-center justify-center text-secondary">
            <TrendingUp size={24} />
          </div>
          <div>
            <p className="text-xs font-semibold text-on-surface-variant">Doanh thu dự kiến</p>
            <h4 className="text-xl font-bold">24.5M</h4>
          </div>
        </div>
        
        <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-error-container/20 rounded-full flex items-center justify-center text-error">
            <AlertTriangle size={24} />
          </div>
          <div>
            <p className="text-xs font-semibold text-on-surface-variant">Yêu cầu dọn dẹp</p>
            <h4 className="text-xl font-bold">3 phòng</h4>
          </div>
        </div>
        
        <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-surface-container-low rounded-full flex items-center justify-center text-on-surface">
            <CalendarOff size={24} />
          </div>
          <div>
            <p className="text-xs font-semibold text-on-surface-variant">Sắp hết hạn cọc</p>
            <h4 className="text-xl font-bold">2 khách</h4>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
