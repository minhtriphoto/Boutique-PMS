import React from 'react';
import { 
  Filter, 
  Download, 
  Wallet, 
  ClipboardX, 
  Tag, 
  UserSearch, 
  Users, 
  Network, 
  Zap, 
  Shirt, 
  IdCard,
  CheckCircle2,
  Clock,
  Globe,
  Briefcase,
  Wind,
  Droplets,
  Wifi,
  Box,
  Wrench,
  Megaphone,
  Receipt,
  Home
} from 'lucide-react';
import { motion } from 'motion/react';

export function Finance() {
  const expenseCategories = [
    { name: 'Phí OTA', desc: 'Airbnb, Booking, Agoda', amount: '32.250.000₫', icon: Globe, bg: 'bg-blue-100', text: 'text-blue-600' },
    { name: 'Hoa hồng sale', desc: 'CTV & Đại lý', amount: '5.100.000₫', icon: Briefcase, bg: 'bg-indigo-100', text: 'text-indigo-600' },
    { name: 'Dọn phòng', desc: 'Chi phí dọn dẹp nội bộ', amount: '4.500.000₫', icon: Wind, bg: 'bg-emerald-100', text: 'text-emerald-600' },
    { name: 'Giặt là', desc: 'Outsource bên ngoài', amount: '3.950.000₫', icon: Shirt, bg: 'bg-teal-100', text: 'text-teal-600' },
    { name: 'Điện', desc: 'Hóa đơn tháng', amount: '12.400.000₫', icon: Zap, bg: 'bg-yellow-100', text: 'text-yellow-600' },
    { name: 'Nước', desc: 'Hóa đơn tháng', amount: '3.400.000₫', icon: Droplets, bg: 'bg-cyan-100', text: 'text-cyan-600' },
    { name: 'Internet', desc: 'Viettel / VNPT', amount: '800.000₫', icon: Wifi, bg: 'bg-sky-100', text: 'text-sky-600' },
    { name: 'Vật tư tiêu hao', desc: 'Sữa tắm, dầu gội, giấy...', amount: '2.500.000₫', icon: Box, bg: 'bg-orange-100', text: 'text-orange-600' },
    { name: 'Sửa chữa', desc: 'Bảo trì trang thiết bị', amount: '1.200.000₫', icon: Wrench, bg: 'bg-stone-100', text: 'text-stone-600' },
    { name: 'Quảng cáo', desc: 'Facebook, Google Ads', amount: '4.000.000₫', icon: Megaphone, bg: 'bg-pink-100', text: 'text-pink-600' },
    { name: 'Lương nhân viên', desc: 'Fulltime & Part-time', amount: '16.000.000₫', icon: IdCard, bg: 'bg-purple-100', text: 'text-purple-600' },
    { name: 'Thuế/phí', desc: 'Thuế môn bài, GTGT...', amount: '2.000.000₫', icon: Receipt, bg: 'bg-red-100', text: 'text-red-600' },
    { name: 'Khấu hao tài sản', desc: 'Máy móc, nội thất', amount: '8.000.000₫', icon: Tag, bg: 'bg-slate-100', text: 'text-slate-600' },
    { name: 'Tiền thuê nhà', desc: 'Mặt bằng kinh doanh', amount: '30.000.000₫', icon: Home, bg: 'bg-green-100', text: 'text-green-600' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-6"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
        <div>
          <h2 className="text-2xl font-semibold text-primary">Báo Cáo Tài Chính & Công Nợ</h2>
          <p className="text-on-surface-variant mt-1">Tổng quan dòng tiền và tình trạng thanh toán tháng 10/2023</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant text-on-surface-variant rounded-lg hover:bg-surface-container transition-colors text-sm font-medium bg-surface-container-lowest">
            <Filter size={18} />
            <span>Lọc Dữ Liệu</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-secondary text-on-secondary rounded-lg hover:opacity-90 transition-opacity text-sm font-medium">
            <Download size={18} />
            <span>Xuất File (Excel)</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Profit & Loss Summary Card */}
        <div className="col-span-12 lg:col-span-4 bg-surface-container-lowest/80 backdrop-blur-md p-6 rounded-xl flex flex-col justify-between overflow-hidden relative border border-outline-variant">
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Lợi Nhuận Ròng (P&L)</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">+12.5%</span>
            </div>
            <div className="text-4xl font-bold text-primary tracking-tighter">142.500.000₫</div>
            
            <div className="flex flex-col gap-2 mt-6">
              <div className="flex justify-between text-base">
                <span className="text-on-surface-variant">Tổng Doanh Thu</span>
                <span className="font-bold">215.000.000₫</span>
              </div>
              <div className="flex justify-between text-base">
                <span className="text-on-surface-variant">Tổng Chi Phí</span>
                <span className="text-error font-bold">-72.500.000₫</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-4 border-t border-outline-variant flex items-center justify-between text-sm">
            <span className="text-on-surface-variant">Hạn chốt: 31/10/2023</span>
            <span className="text-secondary font-bold cursor-pointer hover:underline">Xem chi tiết</span>
          </div>
        </div>

        {/* Revenue Chart Area (Mockup) */}
        <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest border border-outline-variant p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-on-surface">Xu Hướng Doanh Thu & Chi Phí</h3>
            <div className="flex bg-surface-container p-1 rounded-lg">
              <button className="px-3 py-1 bg-surface-container-lowest rounded-md shadow-sm text-xs font-bold">Tháng</button>
              <button className="px-3 py-1 text-xs text-on-surface-variant font-medium hover:bg-surface-container-low rounded-md transition-colors">Quý</button>
              <button className="px-3 py-1 text-xs text-on-surface-variant font-medium hover:bg-surface-container-low rounded-md transition-colors">Năm</button>
            </div>
          </div>
          
          <div className="h-[180px] w-full flex items-end justify-between px-2 gap-4">
            <div className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full flex gap-1 items-end h-full">
                <div className="flex-1 bg-primary/20 rounded-t-sm h-[60%]"></div>
                <div className="flex-1 bg-secondary/30 rounded-t-sm h-[30%]"></div>
              </div>
              <span className="text-[10px] text-on-surface-variant font-bold">T7</span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full flex gap-1 items-end h-full">
                <div className="flex-1 bg-primary/20 rounded-t-sm h-[75%]"></div>
                <div className="flex-1 bg-secondary/30 rounded-t-sm h-[40%]"></div>
              </div>
              <span className="text-[10px] text-on-surface-variant font-bold">T8</span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full flex gap-1 items-end h-full">
                <div className="flex-1 bg-primary/20 rounded-t-sm h-[90%]"></div>
                <div className="flex-1 bg-secondary/30 rounded-t-sm h-[50%]"></div>
              </div>
              <span className="text-[10px] text-on-surface-variant font-bold">T9</span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full flex gap-1 items-end h-full">
                <div className="flex-1 bg-primary rounded-t-sm h-[100%] shadow-lg shadow-primary/20"></div>
                <div className="flex-1 bg-secondary rounded-t-sm h-[45%] shadow-lg shadow-secondary/20"></div>
              </div>
              <span className="text-[10px] text-primary font-bold">T10</span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-2 opacity-40">
              <div className="w-full flex gap-1 items-end h-full border-b-2 border-dashed border-outline-variant">
                <div className="flex-1 bg-outline-variant rounded-t-sm h-[80%]"></div>
                <div className="flex-1 bg-outline-variant rounded-t-sm h-[35%]"></div>
              </div>
              <span className="text-[10px] text-on-surface-variant font-bold">T11</span>
            </div>
          </div>
        </div>

        {/* Expense Breakdown */}
        <div className="col-span-12 lg:col-span-7 bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm flex flex-col">
          <div className="p-6 border-b border-outline-variant flex items-center justify-between">
            <h3 className="text-lg font-semibold text-on-surface">Danh Mục Chi Phí</h3>
            <span className="text-sm text-on-surface-variant font-medium">Tổng: 72.500.000₫</span>
          </div>
          <div className="divide-y divide-outline-variant flex-1 overflow-y-auto max-h-[400px]">
            {expenseCategories.map((item, idx) => (
              <div key={idx} className="p-4 hover:bg-surface-container-low transition-colors flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.bg} ${item.text}`}>
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-on-surface">{item.name}</p>
                    <p className="text-xs text-on-surface-variant">{item.desc}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-on-surface">{item.amount}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Debt Tracking Section */}
        <div className="col-span-12 lg:col-span-5 flex flex-col gap-6">
          <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-on-surface flex items-center gap-2">
                <Wallet className="text-secondary" size={20} />
                Khoản thu từ OTA
              </h4>
              <span className="text-xs font-bold bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded">SẮP VỀ</span>
            </div>
            <div className="space-y-4 text-sm mt-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center border border-outline-variant font-bold text-[10px]">AIR</span>
                  <span>Airbnb (Payout Pending)</span>
                </div>
                <span className="font-bold">45.000.000₫</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center border border-outline-variant font-bold text-[10px]">BOK</span>
                  <span>Booking.com (Monthly)</span>
                </div>
                <span className="font-bold">22.150.000₫</span>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-on-surface flex items-center gap-2">
                <ClipboardX className="text-error" size={20} />
                Công nợ cần trả
              </h4>
            </div>
            <div className="space-y-4 text-sm mt-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-error-container text-on-error-container flex items-center justify-center">
                    <Tag size={16} />
                  </div>
                  <span>Hoa hồng Sales Agents</span>
                </div>
                <span className="font-bold text-error">12.400.000₫</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center border border-outline-variant">
                    <UserSearch className="text-on-surface-variant" size={16} />
                  </div>
                  <span>Khách hàng hoàn tiền (Refund)</span>
                </div>
                <span className="font-bold text-error">3.500.000₫</span>
              </div>
            </div>
          </div>

          <div className="bg-primary text-on-primary p-6 rounded-xl shadow-lg relative overflow-hidden group cursor-pointer h-full flex flex-col justify-center min-h-[140px]">
            <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
              <Users size={120} />
            </div>
            <h4 className="text-lg font-semibold mb-2">Dư nợ từ Khách hàng</h4>
            <p className="text-on-primary-container text-4xl font-bold tracking-tight">8.240.000₫</p>
            <p className="text-xs mt-4 text-on-primary/80 flex items-center gap-1 font-medium">
              4 đơn đặt phòng chưa thanh toán đủ
            </p>
          </div>
        </div>

        {/* Detailed Transactions */}
        <div className="col-span-12 bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
          <div className="p-6 border-b border-outline-variant flex items-center justify-between flex-wrap gap-4">
            <h3 className="text-lg font-semibold text-on-surface">Giao dịch gần đây</h3>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-surface rounded-full text-xs font-semibold border border-outline-variant text-on-surface-variant cursor-pointer hover:bg-surface-container transition-colors">Tất cả</span>
              <span className="px-3 py-1 bg-surface-container-lowest rounded-full text-xs font-semibold border border-outline-variant text-on-surface-variant cursor-pointer hover:bg-surface-container transition-colors">Chỉ chi phí</span>
              <span className="px-3 py-1 bg-surface-container-lowest rounded-full text-xs font-semibold border border-outline-variant text-on-surface-variant cursor-pointer hover:bg-surface-container transition-colors">Công nợ</span>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-surface-container text-on-surface-variant text-sm font-semibold">
                  <th className="p-4 rounded-tl-lg">Ngày</th>
                  <th className="p-4">Mô tả</th>
                  <th className="p-4">Phân loại</th>
                  <th className="p-4">Trạng thái</th>
                  <th className="p-4 text-right rounded-tr-lg">Số tiền</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant text-sm">
                <tr className="hover:bg-surface-container-lowest transition-colors">
                  <td className="p-4 text-on-surface-variant">25/10/2023</td>
                  <td className="p-4 font-bold text-on-surface">Thanh toán Booking #HOM-992</td>
                  <td className="p-4"><span className="px-2 py-0.5 bg-primary-fixed text-on-primary-fixed-variant rounded-full text-xs font-semibold">Phòng</span></td>
                  <td className="p-4"><span className="flex items-center gap-1 text-primary font-medium"><CheckCircle2 size={16} /> Hoàn tất</span></td>
                  <td className="p-4 text-right font-bold text-primary">+4.500.000₫</td>
                </tr>
                <tr className="hover:bg-surface-container-lowest transition-colors">
                  <td className="p-4 text-on-surface-variant">24/10/2023</td>
                  <td className="p-4 font-bold text-on-surface">Tiền điện tháng 10 - Tòa A</td>
                  <td className="p-4"><span className="px-2 py-0.5 bg-secondary-container text-on-secondary-container rounded-full text-xs font-semibold">Tiện ích</span></td>
                  <td className="p-4"><span className="flex items-center gap-1 text-primary font-medium"><CheckCircle2 size={16} /> Hoàn tất</span></td>
                  <td className="p-4 text-right font-bold text-error">-8.200.000₫</td>
                </tr>
                <tr className="hover:bg-surface-container-lowest transition-colors">
                  <td className="p-4 text-on-surface-variant">23/10/2023</td>
                  <td className="p-4 font-bold text-on-surface">Hoa hồng Airbnb - MS: 82182</td>
                  <td className="p-4"><span className="px-2 py-0.5 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-full text-xs font-semibold">Chi phí OTA</span></td>
                  <td className="p-4"><span className="flex items-center gap-1 text-on-surface-variant font-medium"><Clock size={16} /> Đang chờ</span></td>
                  <td className="p-4 text-right font-bold text-error">-1.200.000₫</td>
                </tr>
                <tr className="hover:bg-surface-container-lowest transition-colors">
                  <td className="p-4 text-on-surface-variant">22/10/2023</td>
                  <td className="p-4 font-bold text-on-surface">Cọc phòng #HOM-1002 (Linh Nguyen)</td>
                  <td className="p-4"><span className="px-2 py-0.5 bg-primary-fixed text-on-primary-fixed-variant rounded-full text-xs font-semibold">Phòng</span></td>
                  <td className="p-4"><span className="flex items-center gap-1 text-primary font-medium"><CheckCircle2 size={16} /> Hoàn tất</span></td>
                  <td className="p-4 text-right font-bold text-primary">+2.000.000₫</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 text-center">
            <button className="text-primary font-bold text-sm tracking-wide hover:underline inline-flex items-center">Xem thêm giao dịch</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
