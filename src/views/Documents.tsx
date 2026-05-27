import React from 'react';
import { FileText, Folder, UploadCloud, File, AlertTriangle, CheckCircle2, Search } from 'lucide-react';
import { motion } from 'motion/react';

export function Documents() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-6"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-primary">Hồ sơ Pháp lý & Chứng từ</h2>
          <p className="text-on-surface-variant text-base mt-2">Lưu trữ tập trung các tài liệu, hợp đồng và hóa đơn</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-on-primary rounded-xl text-sm font-medium hover:opacity-90 transition-opacity shadow-sm">
            <UploadCloud size={18} />
            Tải lên tài liệu
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 border border-outline-variant rounded-2xl p-4 bg-surface-container-lowest">
          <div className="relative mb-4">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
            <input 
              type="text" 
              placeholder="Tìm thư mục, file..." 
              className="w-full pl-9 pr-4 py-2 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none"
            />
          </div>
          
          <div className="space-y-1">
            <button className="w-full flex items-center gap-2 px-3 py-2 text-sm font-bold text-primary bg-primary-container/20 rounded-lg text-left">
              <Folder size={16} className="fill-primary text-primary" /> Hồ sơ pháp lý (PCCC, ANTT)
            </button>
            <button className="w-full flex items-center gap-2 px-3 py-2 text-sm font-medium text-on-surface-variant hover:bg-surface-container rounded-lg text-left transition-colors">
              <Folder size={16} className="fill-outline text-outline" /> Hợp đồng thuê nhà
            </button>
            <button className="w-full flex items-center gap-2 px-3 py-2 text-sm font-medium text-on-surface-variant hover:bg-surface-container rounded-lg text-left transition-colors">
              <Folder size={16} className="fill-outline text-outline" /> Hợp đồng nhân sự
            </button>
            <button className="w-full flex items-center gap-2 px-3 py-2 text-sm font-medium text-on-surface-variant hover:bg-surface-container rounded-lg text-left transition-colors">
              <Folder size={16} className="fill-outline text-outline" /> Báo cáo thuế / Hóa đơn
            </button>
            <button className="w-full flex items-center gap-2 px-3 py-2 text-sm font-medium text-on-surface-variant hover:bg-surface-container rounded-lg text-left transition-colors">
              <Folder size={16} className="fill-outline text-outline" /> Nội quy quy định nội bộ
            </button>
          </div>
        </div>

        <div className="lg:col-span-3 border border-outline-variant rounded-2xl bg-surface-container-lowest overflow-hidden flex flex-col">
          <div className="p-5 border-b border-outline-variant flex justify-between items-center bg-surface-container-low/50">
             <h3 className="font-bold flex items-center gap-2">
               <Folder size={20} className="fill-primary text-primary" /> Hồ sơ pháp lý (PCCC, ANTT)
             </h3>
          </div>
          
          <div className="flex-1 p-5">
            <div className="bg-amber-500/10 border border-amber-500/20 text-amber-800 p-4 rounded-xl flex items-start gap-3 mb-6">
              <AlertTriangle size={20} className="text-amber-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-sm">Giấy phép PCCC chuẩn bị hết hạn</p>
                <p className="text-xs mt-1">Giấy xác nhận đủ điều kiện PCCC sẽ hết hạn vào ngày 15/12/2023. Vui lòng chuẩn bị hồ sơ gia hạn sớm.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               {[
                 { name: 'Giấy phép ĐKKD.pdf', size: '2.1 MB', date: '10/05/2022', status: 'Hợp lệ', icon: <FileText className="text-blue-500" /> },
                 { name: 'Xác nhận PCCC.pdf', size: '4.5 MB', date: '15/12/2021', status: 'Sắp hết hạn', icon: <FileText className="text-amber-500" /> },
                 { name: 'Giấy phép ANTT.pdf', size: '1.8 MB', date: '20/01/2022', status: 'Hợp lệ', icon: <FileText className="text-emerald-500" /> },
                 { name: 'Biên bản k.tra PCCC_2023.pdf', size: '3.2 MB', date: '05/08/2023', status: 'Lưu trữ', icon: <FileText className="text-outline" /> },
               ].map((file, i) => (
                 <div key={i} className="border border-outline-variant rounded-xl p-4 flex flex-col hover:shadow-md hover:border-primary/50 transition-all cursor-pointer group bg-surface">
                   <div className="flex justify-between items-start mb-4">
                     <div className="p-3 bg-surface-container rounded-lg group-hover:bg-primary-container/20 group-hover:text-primary transition-colors">
                       {file.icon}
                     </div>
                     <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded 
                       ${file.status === 'Hợp lệ' ? 'bg-emerald-100 text-emerald-800' :
                         file.status === 'Sắp hết hạn' ? 'bg-amber-100 text-amber-800' : 'bg-surface-container text-on-surface-variant'
                       }`}>
                       {file.status}
                     </span>
                   </div>
                   <h4 className="font-bold text-sm truncate mb-1" title={file.name}>{file.name}</h4>
                   <div className="flex justify-between text-xs text-on-surface-variant font-medium">
                     <span>{file.size}</span>
                     <span>{file.date}</span>
                   </div>
                 </div>
               ))}
               
               <div className="border-2 border-dashed border-outline-variant rounded-xl p-4 flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-primary hover:border-primary transition-all cursor-pointer min-h-[140px]">
                 <UploadCloud size={24} className="mb-2" />
                 <span className="text-sm font-bold">Kéo thả để tải lên</span>
                 <span className="text-xs">hoặc nhấn để chọn file</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
