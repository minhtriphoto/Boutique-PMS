import React, { useState } from 'react';
import { 
  Download, 
  Plus, 
  Calendar as CalendarIcon, 
  RefreshCw, 
  Globe, 
  Store, 
  Users, 
  Eye, 
  Edit, 
  Wallet, 
  XCircle, 
  History,
  TrendingUp,
  Bed,
  Trash2
} from 'lucide-react';
import { motion } from 'motion/react';
import { Modal } from '../components/ui/Modal';

export function Bookings() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingBooking, setEditingBooking] = useState<any>(null);

  const [statusFilter, setStatusFilter] = useState('Tất cả trạng thái');
  const [channelFilter, setChannelFilter] = useState('Tất cả các kênh');

  const oldCustomers = ['Nguyễn Văn A', 'Trần Thị B', 'Lê Văn C', 'Phạm Minh D', 'Phan Lan', 'Hoàng Thái'];

  const [formData, setFormData] = useState({
    name: '', phone: '', channel: 'Trực tiếp', checkIn: '', checkOut: '', room: 'Lotus-102'
  });
  const [bookingError, setBookingError] = useState('');

  const [bookings, setBookings] = useState([
    {
      id: '#BK-8829',
      name: 'Nguyễn Văn A',
      phone: '0901 234 567',
      isVIP: true,
      dates: '12/10 - 14/10',
      checkIn: '2024-05-12',
      checkOut: '2024-05-14',
      nights: 2,
      room: 'Lotus-102',
      total: '2.400.000₫',
      deposit: '500.000₫',
      balance: '1.900.000₫',
      status: 'Đã xác nhận',
      statusType: 'emerald',
      paymentStatus: 'Cọc một phần',
      paymentType: 'amber',
      channel: 'Airbnb',
      channelIcon: Globe,
      channelColor: 'text-blue-600'
    },
    {
      id: '#BK-8830',
      name: 'Trần Thị B',
      phone: '0912 345 678',
      isVIP: false,
      dates: '14/10 - 15/10',
      checkIn: '2024-05-14',
      checkOut: '2024-05-15',
      nights: 1,
      room: 'Bamboo-201',
      total: '1.200.000₫',
      deposit: '1.200.000₫',
      balance: '0₫',
      status: 'Đang ở',
      statusType: 'blue',
      paymentStatus: 'Đã thanh toán',
      paymentType: 'emerald',
      channel: 'Trực tiếp',
      channelIcon: Store,
      channelColor: 'text-primary'
    },
    {
      id: '#BK-8831',
      name: 'Lê Văn C',
      phone: '0988 777 666',
      isVIP: false,
      isBad: true,
      dates: '20/10 - 22/10',
      checkIn: '2024-05-20',
      checkOut: '2024-05-22',
      nights: 2,
      room: 'Suite-P1',
      total: '5.500.000₫',
      deposit: '0₫',
      balance: '5.500.000₫',
      status: 'Chờ xác nhận',
      statusType: 'amber',
      paymentStatus: 'Chưa cọc',
      paymentType: 'error',
      channel: 'Booking.com',
      channelIcon: Globe,
      channelColor: 'text-orange-500'
    }
  ]);

  const handleDelete = (id: string) => {
    setBookings(bookings.filter(b => b.id !== id));
  };

  const openAddModal = () => {
    setEditingBooking(null);
    setFormData({ name: '', phone: '', channel: 'Trực tiếp', checkIn: '', checkOut: '', room: 'Lotus-102' });
    setBookingError('');
    setIsAddModalOpen(true);
  };

  const openEditModal = (booking: any) => {
    setEditingBooking(booking);
    setFormData({
      name: booking?.name || '',
      phone: booking?.phone || '',
      channel: booking?.channel || 'Trực tiếp',
      checkIn: booking?.checkIn || '',
      checkOut: booking?.checkOut || '',
      room: booking?.room || 'Lotus-102'
    });
    setBookingError('');
    setIsAddModalOpen(true);
  };

  const closeModal = () => {
    setIsAddModalOpen(false);
    setEditingBooking(null);
  };

  const handleSave = () => {
    setBookingError('');
    if (!formData.checkIn || !formData.checkOut) {
      setBookingError('Vui lòng chọn ngày nhận và trả phòng');
      return;
    }
    const inDate = new Date(formData.checkIn);
    const outDate = new Date(formData.checkOut);

    if (inDate >= outDate) {
      setBookingError('Ngày trả phòng phải sau ngày nhận phòng');
      return;
    }

    const hasOverlap = bookings.some(b => {
      if (editingBooking && b.id === editingBooking.id) return false;
      if (b.room !== formData.room) return false;
      if (!b.checkIn || !b.checkOut) return false;
      
      const bIn = new Date(b.checkIn);
      const bOut = new Date(b.checkOut);

      return inDate < bOut && outDate > bIn;
    });

    if (hasOverlap) {
      setBookingError(`Trùng lịch! Phòng ${formData.room} đã có người đặt trong khoảng thời gian này.`);
      return;
    }

    closeModal();
  };

  const handleExportExcel = () => {
    alert("Chức năng tải xuống (Excel) đã được kích hoạt. File dữ liệu sẽ được tải về thiết bị.");
  };

  const filteredBookings = bookings.filter(b => {
    const passStatus = statusFilter === 'Tất cả trạng thái' || b.status === statusFilter;
    const passChannel = channelFilter === 'Tất cả các kênh' || b.channel === channelFilter;
    return passStatus && passChannel;
  });

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-6"
    >
      {/* Header Actions */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-primary">Danh sách đặt phòng</h2>
          <p className="text-on-surface-variant text-base mt-2">Tổng cộng {filteredBookings.length} lượt đặt trong hệ thống</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button onClick={handleExportExcel} className="flex items-center gap-2 px-4 py-2.5 bg-surface-container-lowest border border-outline-variant rounded-xl text-sm font-medium hover:bg-surface-container transition-colors shadow-sm">
            <Download size={18} />
            Xuất Excel
          </button>
          <button 
            onClick={openAddModal}
            className="flex items-center gap-2 px-6 py-2.5 bg-primary text-on-primary rounded-xl text-sm font-medium hover:opacity-90 transition-opacity shadow-sm"
          >
            <Plus size={18} />
            Tạo đặt phòng mới
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-5 shadow-sm flex flex-col md:flex-row flex-wrap items-end gap-5 relative z-10">
        <div className="flex-1 w-full md:w-auto min-w-[200px]">
          <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2 ml-1">Trạng thái</label>
          <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl py-2.5 px-4 text-sm font-medium focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all">
            <option>Tất cả trạng thái</option>
            <option>Đã xác nhận</option>
            <option>Đang ở</option>
            <option>Chờ xác nhận</option>
            <option>Đã trả phòng</option>
            <option>Đã hủy</option>
          </select>
        </div>
        <div className="flex-1 w-full md:w-auto min-w-[200px]">
          <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2 ml-1">Kênh bán hàng</label>
          <select value={channelFilter} onChange={e => setChannelFilter(e.target.value)} className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl py-2.5 px-4 text-sm font-medium focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all">
            <option>Tất cả các kênh</option>
            <option>Trực tiếp</option>
            <option>Airbnb</option>
            <option>Booking.com</option>
            <option>Facebook</option>
          </select>
        </div>
        <div className="flex-1 w-full md:w-auto min-w-[280px]">
          <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2 ml-1">Khoảng thời gian (Từ - Đến)</label>
          <div className="flex items-center gap-2">
            <input 
              type="date" 
              className="w-full py-2.5 px-3 bg-surface-container-lowest border border-outline-variant rounded-xl text-sm font-medium focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
            />
            <span className="text-outline-variant">-</span>
            <input 
              type="date" 
              className="w-full py-2.5 px-3 bg-surface-container-lowest border border-outline-variant rounded-xl text-sm font-medium focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
            />
          </div>
        </div>
        <button onClick={() => { setStatusFilter('Tất cả trạng thái'); setChannelFilter('Tất cả các kênh'); }} className="p-3 bg-surface-container border border-outline-variant text-on-surface-variant rounded-xl hover:bg-surface-container-high transition-colors self-center md:self-end">
          <RefreshCw size={18} />
        </button>
      </div>

      {/* Table Container */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left min-w-[1100px]">
            <thead className="bg-surface-container-low border-b border-outline-variant">
              <tr>
                <th className="py-4 px-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest whitespace-nowrap">Mã ĐP</th>
                <th className="py-4 px-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest whitespace-nowrap">Khách hàng</th>
                <th className="py-4 px-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest whitespace-nowrap">Ngày nhận/trả</th>
                <th className="py-4 px-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest whitespace-nowrap">Phòng</th>
                <th className="py-4 px-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest whitespace-nowrap text-right">Tổng tiền</th>
                <th className="py-4 px-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest whitespace-nowrap text-right">Số dư</th>
                <th className="py-4 px-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest whitespace-nowrap text-center">Trạng thái</th>
                <th className="py-4 px-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest whitespace-nowrap text-center">Thanh toán</th>
                <th className="py-4 px-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest whitespace-nowrap">Kênh</th>
                <th className="py-4 px-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest whitespace-nowrap text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {filteredBookings.map((b) => (
                <tr key={b.id} className="hover:bg-surface-bright transition-colors group">
                  <td className="py-4 px-5">
                    <span className="text-sm font-bold text-primary tracking-wide">{b.id}</span>
                  </td>
                  <td className="py-4 px-5">
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-bold text-on-surface">{b.name}</p>
                          {b.isVIP && <span className="bg-primary-container/10 text-primary-container text-[9px] px-1.5 py-0.5 rounded uppercase font-bold border border-primary-container/20">Loyal</span>}
                          {b.isBad && <span className="text-[11px] font-bold text-error tracking-wide">Khách nợ xấu</span>}
                        </div>
                        <p className="text-[12px] text-on-surface-variant mt-0.5">{b.phone}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-5">
                    <div className="text-sm">
                      <p className="font-bold text-on-surface">{b.dates}</p>
                      <p className="text-xs text-on-surface-variant mt-0.5">{b.nights} đêm</p>
                    </div>
                  </td>
                  <td className="py-4 px-5 font-semibold text-sm">{b.room}</td>
                  <td className="py-4 px-5 text-right">
                    <p className="text-sm font-bold text-on-surface whitespace-nowrap">{b.total}</p>
                    <p className="text-[10px] font-medium text-on-surface-variant mt-0.5 whitespace-nowrap">Cọc: {b.deposit}</p>
                  </td>
                  <td className="py-4 px-5 text-right">
                    <span className={`text-sm font-bold whitespace-nowrap ${b.balance === '0₫' ? 'text-emerald-600' : 'text-error'}`}>{b.balance}</span>
                  </td>
                  <td className="py-4 px-5 text-center">
                    <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide border
                      ${b.statusType === 'emerald' ? 'bg-emerald-100/50 text-emerald-800 border-emerald-200' : ''}
                      ${b.statusType === 'blue' ? 'bg-blue-100/50 text-blue-800 border-blue-200' : ''}
                      ${b.statusType === 'amber' ? 'bg-amber-100/50 text-amber-800 border-amber-200' : ''}
                    `}>
                      {b.status}
                    </span>
                  </td>
                  <td className="py-4 px-5 text-center">
                    <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide border
                      ${b.paymentType === 'emerald' ? 'bg-emerald-100/50 text-emerald-800 border-emerald-200' : ''}
                      ${b.paymentType === 'amber' ? 'bg-amber-100/50 text-amber-800 border-amber-200' : ''}
                      ${b.paymentType === 'error' ? 'bg-error-container/50 text-on-error-container border-error/20' : ''}
                    `}>
                      {b.paymentStatus}
                    </span>
                  </td>
                  <td className="py-4 px-5">
                    <div className="flex items-center gap-2">
                      <b.channelIcon size={16} className={b.channelColor} />
                      <span className="text-sm font-medium">{b.channel}</span>
                    </div>
                  </td>
                  <td className="py-4 px-5 text-right">
                    <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-outline-variant hover:text-primary hover:bg-surface-container rounded-lg transition-all" title="Xem chi tiết">
                        <Eye size={18} />
                      </button>
                      <button 
                        onClick={() => openEditModal(b)}
                        className="p-2 text-outline-variant hover:text-primary hover:bg-surface-container rounded-lg transition-all" title="Sửa"
                      >
                        <Edit size={18} />
                      </button>
                      <button 
                        onClick={() => handleDelete(b.id)}
                        className="p-2 text-outline-variant hover:text-error hover:bg-surface-container rounded-lg transition-all" title="Xóa"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="bg-surface-container-low px-6 py-4 flex flex-col sm:flex-row items-center justify-between border-t border-outline-variant gap-4">
          <div className="text-sm font-medium text-on-surface-variant">
            Hiển thị 1 - {filteredBookings.length} của {filteredBookings.length} đặt phòng
          </div>
        </div>
      </div>

      <Modal
        isOpen={isAddModalOpen}
        onClose={closeModal}
        title={editingBooking ? "Chỉnh sửa đặt phòng" : "Tạo đặt phòng mới"}
      >
        <div className="space-y-4">
          {bookingError && (
            <div className="p-3 bg-error-container text-on-error-container text-sm font-semibold rounded-lg flex items-center gap-2">
              <XCircle size={18} />
              {bookingError}
            </div>
          )}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-on-surface">Tên khách hàng</label>
            <input 
              list="old-customers" 
              type="text" 
              value={formData.name} 
              onChange={e => setFormData({...formData, name: e.target.value})} 
              className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none" 
              placeholder="Nhập tên khách hàng" 
            />
            <datalist id="old-customers">
              {oldCustomers.map(c => <option key={c} value={c} />)}
            </datalist>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-on-surface">Số điện thoại</label>
              <input 
                type="text" 
                value={formData.phone} 
                onChange={e => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none" 
                placeholder="Nhập SĐT" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-on-surface">Kênh bán</label>
              <select 
                value={formData.channel} 
                onChange={e => setFormData({...formData, channel: e.target.value})}
                className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none"
              >
                <option>Trực tiếp</option>
                <option>Airbnb</option>
                <option>Booking.com</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-on-surface">Ngày nhận phòng</label>
              <input 
                type="date" 
                value={formData.checkIn}
                onChange={e => setFormData({...formData, checkIn: e.target.value})}
                className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-on-surface">Ngày trả phòng</label>
              <input 
                type="date" 
                value={formData.checkOut}
                onChange={e => setFormData({...formData, checkOut: e.target.value})}
                className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none" 
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-on-surface">Phòng/Loại phòng</label>
            <select 
              value={formData.room}
              onChange={e => setFormData({...formData, room: e.target.value})}
              className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none"
            >
              <option>Lotus-102</option>
              <option>Bamboo-201</option>
              <option>Suite-P1</option>
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
              onClick={handleSave}
              className="px-6 py-2.5 bg-primary text-on-primary rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              {editingBooking ? "Lưu thay đổi" : "Tạo đặt phòng"}
            </button>
          </div>
        </div>
      </Modal>

    </motion.div>
  );
}
