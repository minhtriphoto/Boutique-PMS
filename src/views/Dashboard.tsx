import React from 'react';
import { 
  Bed, 
  Wallet, 
  TrendingUp, 
  AlertTriangle, 
  Calendar, 
  LogIn, 
  LogOut, 
  ChevronRight,
  AlertCircle
} from 'lucide-react';
import { motion } from 'motion/react';

export function Dashboard() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-7xl mx-auto"
    >
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-primary">Chào buổi sáng, Linh!</h2>
          <p className="text-on-surface-variant text-base mt-2">Hôm nay có 8 khách đến và 6 khách đi. Chúc bạn một ngày làm việc hiệu quả.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-6">
        {/* Room Inventory Status */}
        <div className="md:col-span-4 lg:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
              <Bed size={20} />
              Trạng Thái Phòng
            </h3>
            <span className="text-xs font-semibold text-on-surface-variant px-3 py-1 bg-surface-container rounded-full">Hôm nay, 24 Th10</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-surface-bright border border-outline-variant/50">
              <p className="text-sm font-medium text-on-surface-variant mb-1">Tổng Số Phòng</p>
              <p className="text-3xl font-bold text-primary">20</p>
            </div>
            <div className="p-4 rounded-xl bg-primary-container/10 border border-primary-container/20">
              <p className="text-sm font-medium text-primary mb-1">Trống</p>
              <p className="text-3xl font-bold text-primary">05</p>
            </div>
            <div className="p-4 rounded-xl bg-secondary-container/10 border border-secondary-container/20">
              <p className="text-sm font-medium text-secondary mb-1">Đang Có Khách</p>
              <p className="text-3xl font-bold text-secondary">12</p>
            </div>
            <div className="p-4 rounded-xl bg-tertiary-fixed/20 border border-tertiary-fixed-dim/30">
              <p className="text-sm font-medium text-tertiary mb-1">Đang Dọn Dẹp</p>
              <p className="text-3xl font-bold text-tertiary">03</p>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex justify-between text-xs font-semibold mb-2">
              <span className="text-on-surface-variant">Tỷ lệ lấp đầy: 60%</span>
              <span className="text-primary">+5% so với hôm qua</span>
            </div>
            <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden flex">
              <div className="h-full bg-primary" style={{ width: '60%' }}></div>
              <div className="h-full bg-tertiary" style={{ width: '15%' }}></div>
            </div>
          </div>
        </div>

        {/* Revenue Summary */}
        <div className="md:col-span-4 lg:col-span-4 bg-primary text-on-primary rounded-xl p-6 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Wallet size={20} />
              Doanh Thu
            </h3>
            <div className="space-y-6">
              <div>
                <p className="text-on-primary/70 text-sm font-medium">Hôm nay</p>
                <p className="text-3xl font-bold">5.500.000đ</p>
              </div>
              <div className="h-px bg-on-primary/10"></div>
              <div>
                <p className="text-on-primary/70 text-sm font-medium">Tháng này (Dự kiến)</p>
                <p className="text-3xl font-bold">120.000.000đ</p>
              </div>
              <div className="pt-4">
                <div className="flex items-center gap-2 text-primary-fixed bg-on-primary-fixed-variant/40 px-3 py-2 rounded-lg w-fit">
                  <TrendingUp size={16} />
                  <span className="text-xs font-semibold">Lợi nhuận dự kiến: +12%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-on-primary-fixed-variant/20 rounded-full blur-3xl"></div>
        </div>

        {/* Critical Alerts */}
        <div className="md:col-span-4 lg:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
          <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
            <AlertTriangle size={20} />
            Cảnh Báo Quan Trọng
          </h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-error-container/20 border border-error-container rounded-lg">
              <AlertCircle size={20} className="text-error shrink-0" />
              <div>
                <p className="text-sm font-medium text-on-error-container">Trùng lịch đặt phòng</p>
                <p className="text-xs text-on-error-container/80 mt-1">Phòng Deluxe 102 bị trùng ngày 25-27/10.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-secondary-container/20 border border-secondary-container rounded-lg">
              <Wallet size={20} className="text-secondary shrink-0" />
              <div>
                <p className="text-sm font-medium text-on-secondary-container">Chưa thanh toán</p>
                <p className="text-xs text-on-secondary-container/80 mt-1">Phòng 205 (Trần Anh) chưa thanh toán cọc.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Activity */}
        <div className="md:col-span-4 lg:col-span-5 bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
          <h3 className="text-lg font-semibold text-primary mb-6 flex items-center gap-2">
            <Calendar size={20} />
            Lịch Trình Tuần Này
          </h3>
          
          <div className="grid grid-cols-7 gap-2 mb-6">
            {['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'].map((day, i) => (
              <div key={day} className="text-center">
                <p className="text-[10px] text-on-surface-variant uppercase font-bold mb-2">{day}</p>
                <div className={`h-12 rounded-lg flex flex-col items-center justify-center 
                  ${i === 1 ? 'bg-primary text-on-primary shadow-sm' 
                  : i === 6 ? 'bg-secondary-container text-on-secondary-container' 
                  : 'bg-surface-container'}`}>
                  <span className="text-sm font-medium">{23 + i}</span>
                  {i === 2 && <div className="w-1 h-1 bg-error rounded-full mt-1"></div>}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-2 h-10 bg-primary rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Nguyễn Văn A (Phòng 101)</p>
                <p className="text-xs text-on-surface-variant">Check-in: 14:00</p>
              </div>
              <button className="text-primary font-bold text-xs uppercase tracking-wider">Check-in</button>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-2 h-10 bg-secondary rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Lê Thị B (Phòng 302)</p>
                <p className="text-xs text-on-surface-variant">Check-out: 12:00</p>
              </div>
              <button className="text-secondary font-bold text-xs uppercase tracking-wider">Check-out</button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="md:col-span-4 lg:col-span-3 bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
          <h3 className="text-lg font-semibold text-primary mb-4">Biểu Đồ Doanh Thu</h3>
          
          <div className="h-32 w-full flex items-end gap-2 mb-6">
            {[40, 65, 50, 85, 45, 100, 70].map((h, i) => (
              <div key={i} className="flex-1 bg-primary/20 hover:bg-primary transition-colors rounded-t-sm" style={{ height: `${h}%` }}></div>
            ))}
          </div>

          <div className="space-y-2">
            <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2">Thao tác nhanh</p>
            <div className="grid grid-cols-1 gap-2">
              <button className="w-full flex items-center justify-between p-3 rounded-lg border border-outline-variant hover:bg-surface-container transition-all text-left">
                <span className="flex items-center gap-2 text-sm font-medium"><LogIn size={18} className="text-primary" /> Check-in</span>
                <ChevronRight size={18} className="text-on-surface-variant" />
              </button>
              <button className="w-full flex items-center justify-between p-3 rounded-lg border border-outline-variant hover:bg-surface-container transition-all text-left">
                <span className="flex items-center gap-2 text-sm font-medium"><LogOut size={18} className="text-secondary" /> Check-out</span>
                <ChevronRight size={18} className="text-on-surface-variant" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
