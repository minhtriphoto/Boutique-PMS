import React from 'react';
import { Star, MessageSquareHeart, MoreVertical, TrendingUp, AlertCircle, ExternalLink, Filter } from 'lucide-react';
import { motion } from 'motion/react';

export function Reviews() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-6"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-primary">Review & Chăm Sóc Khách</h2>
          <p className="text-on-surface-variant text-base mt-2">Phản hồi khách hàng và quản lý danh tiếng nội bộ</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-2xl shadow-sm text-center">
          <h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-wider mb-2">Đánh giá chung</h3>
          <div className="text-5xl font-black text-amber-500 mb-2">4.8</div>
          <div className="flex items-center justify-center gap-1 text-amber-500 mb-2">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} className={i === 5 ? "fill-amber-500/50" : "fill-amber-500"} />)}
          </div>
          <p className="text-sm font-medium text-on-surface-variant">Dựa trên 128 đánh giá (tháng này)</p>
        </div>

        <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-2xl shadow-sm">
          <h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-wider mb-4">Theo nguồn</h3>
          <div className="space-y-3">
             <div className="flex items-center justify-between text-sm">
                <span className="font-semibold">Booking.com</span>
                <span className="flex text-amber-500 font-bold items-center gap-1">8.9/10</span>
             </div>
             <div className="w-full bg-surface-container rounded-full h-1.5"><div className="bg-blue-600 h-1.5 rounded-full" style={{width: '89%'}}></div></div>
             
             <div className="flex items-center justify-between text-sm">
                <span className="font-semibold">Airbnb</span>
                <span className="flex text-amber-500 font-bold items-center gap-1">4.9/5</span>
             </div>
             <div className="w-full bg-surface-container rounded-full h-1.5"><div className="bg-rose-500 h-1.5 rounded-full" style={{width: '95%'}}></div></div>

             <div className="flex items-center justify-between text-sm">
                <span className="font-semibold">Google Maps</span>
                <span className="flex text-amber-500 font-bold items-center gap-1">4.7/5</span>
             </div>
             <div className="w-full bg-surface-container rounded-full h-1.5"><div className="bg-emerald-500 h-1.5 rounded-full" style={{width: '90%'}}></div></div>
          </div>
        </div>

        <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-2xl shadow-sm">
          <h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-wider mb-4">Trạng thái phản hồi</h3>
          <div className="space-y-4">
             <div className="bg-error-container/20 border border-error/20 p-3 rounded-xl flex justify-between items-center text-error cursor-pointer">
               <span className="font-bold flex items-center gap-2"><AlertCircle size={18}/> Chờ xử lý (1-2 sao)</span>
               <span className="font-bold">02</span>
             </div>
             <div className="bg-surface-container p-3 rounded-xl flex justify-between items-center text-on-surface cursor-pointer">
               <span className="font-medium flex items-center gap-2"><MessageSquareHeart size={18}/> Chưa trả lời</span>
               <span className="font-bold">12</span>
             </div>
             <div className="bg-primary-container/20 p-3 rounded-xl flex justify-between items-center text-primary cursor-pointer">
               <span className="font-medium flex items-center gap-2"><Star size={18}/> Review mới</span>
               <span className="font-bold">08</span>
             </div>
          </div>
        </div>
      </div>

      <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl overflow-hidden shadow-sm flex flex-col md:flex-row h-[600px] mt-2">
        <div className="w-full md:w-1/3 border-r border-outline-variant bg-surface-container-low/30 overflow-y-auto">
          <div className="p-4 border-b border-outline-variant font-semibold flex justify-between items-center sticky top-0 bg-surface z-10">
            Hộp thư đánh giá
            <Filter size={16} className="text-on-surface-variant cursor-pointer" />
          </div>
          {[
            { name: 'Michael Jenkins', platform: 'Airbnb', rating: 5, date: 'Hôm nay', excerpt: 'Phòng cực kỳ sạch sẽ và tiện nghi. Check-in siêu nhanh.', replied: false },
            { name: 'Thanh Huyen', platform: 'Booking', rating: 2, date: 'Hôm qua', excerpt: 'Điều hòa hơi ồn, nhân viên dọn vệ sinh quên thay khăn mới.', replied: false, alert: true },
            { name: 'Dave B.', platform: 'Google', rating: 4, date: '2 ngày trước', excerpt: 'Great location, friendly host. The wifi was a bit slow in the evening.', replied: true },
          ].map((r, i) => (
            <div key={i} className={`p-4 border-b border-outline-variant cursor-pointer hover:bg-surface-container transition-colors ${i === 0 ? 'bg-surface-container' : ''}`}>
              <div className="flex justify-between items-start mb-1">
                <span className="font-bold text-sm tracking-tight">{r.name}</span>
                <span className="text-[10px] text-on-surface-variant">{r.date}</span>
              </div>
              <div className="flex gap-1 items-center mb-2">
                {[1,2,3,4,5].map(star => <Star key={star} size={10} className={star <= r.rating ? "fill-amber-500 text-amber-500" : "fill-outline/20 text-outline/20"} />)}
                <span className="text-[10px] font-bold ml-1 text-on-surface-variant bg-surface px-1.5 rounded">{r.platform}</span>
                {r.alert && <span className="w-2 h-2 rounded-full bg-error ml-auto animate-pulse"></span>}
              </div>
              <p className="text-xs text-on-surface-variant line-clamp-2">{r.excerpt}</p>
            </div>
          ))}
        </div>

        <div className="w-full md:w-2/3 flex flex-col items-center justify-center p-8 text-center bg-surface/50">
          <div className="w-16 h-16 bg-surface-container rounded-2xl flex items-center justify-center mb-4 text-primary">
            <MessageSquareHeart size={32} />
          </div>
          <h3 className="font-bold text-lg mb-2">Chọn một đánh giá để phản hồi</h3>
          <p className="text-sm text-on-surface-variant max-w-sm">Liên kết các tài khoản OTA trong phần Cài Đặt để trả lời đánh giá trực tiếp từ đây bằng AI Assistant.</p>
        </div>
      </div>
    </motion.div>
  );
}
