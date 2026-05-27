import React from 'react';
import { Download, PieChart, BarChart3, TrendingUp, Calendar, FileText } from 'lucide-react';
import { motion } from 'motion/react';

export function Reports() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-6"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-primary">Báo Cáo & Phân Tích</h2>
          <p className="text-on-surface-variant text-base mt-2">Dữ liệu tổng hợp hiệu suất kinh doanh</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-on-primary rounded-xl text-sm font-medium hover:opacity-90 transition-opacity shadow-sm">
            <Download size={18} />
            Xuất Báo Cáo
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-surface-container-lowest border border-outline-variant p-6 rounded-2xl shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <BarChart3 size={20} className="text-primary" /> Doanh Thu Theo Kênh
            </h3>
            <select className="bg-surface text-sm border border-outline-variant rounded-lg px-3 py-1.5 outline-none">
              <option>Tháng 10/2023</option>
            </select>
          </div>
          
          <div className="h-64 flex items-end justify-around gap-2 px-4">
            {[40, 80, 55, 90, 75].map((h, i) => (
              <div key={i} className="flex flex-col items-center gap-3 w-full">
                <div className="w-full bg-primary/20 rounded-t-md hover:bg-primary transition-colors cursor-pointer" style={{ height: `${h}%` }}></div>
                <span className="text-xs font-semibold text-on-surface-variant uppercase">
                  {['Trực tiếp', 'Airbnb', 'Booking', 'Agoda', 'FB'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-2xl shadow-sm">
           <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <PieChart size={20} className="text-secondary" /> Tỷ lệ lấp đầy
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center h-48 border-4 border-surface-container rounded-full w-48 mx-auto relative mb-6">
            <span className="text-4xl font-bold text-primary">78%</span>
            <span className="text-xs text-on-surface-variant mt-1">Trung bình tháng</span>
            {/* Visual mock of pie chart */}
            <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
              <circle cx="96" cy="96" r="94" fill="none" stroke="currentColor" strokeWidth="4" className="text-primary" strokeDasharray="590" strokeDashoffset="130" />
            </svg>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-2 text-sm"><span className="w-3 h-3 rounded-full bg-primary"></span> Có khách</span>
              <span className="font-bold">78%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-2 text-sm"><span className="w-3 h-3 rounded-full bg-surface-container-high"></span> Trống</span>
              <span className="font-bold">22%</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl overflow-hidden shadow-sm">
        <div className="p-5 border-b border-outline-variant bg-surface-container-low/50">
          <h3 className="font-semibold flex items-center gap-2">
            <FileText size={20} className="text-primary" /> Báo cáo lưu trữ
          </h3>
        </div>
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
             { name: 'Báo cáo tháng 09/2023', size: '2.4 MB' },
             { name: 'Báo cáo tháng 08/2023', size: '2.1 MB' },
             { name: 'Báo cáo Quý 3/2023', size: '6.8 MB' },
             { name: 'Báo cáo năm 2022', size: '15.4 MB' },
          ].map((doc, i) => (
            <div key={i} className="flex gap-3 items-center p-3 border border-outline-variant rounded-xl hover:bg-surface-container cursor-pointer transition-colors">
              <div className="bg-error-container/20 text-error p-2 rounded-lg">
                <FileText size={20} />
              </div>
              <div>
                <p className="text-sm font-bold truncate">{doc.name}</p>
                <p className="text-xs text-on-surface-variant">{doc.size} • PDF</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
