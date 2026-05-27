import React from 'react';
import { Home, Calendar, LayoutList, Bell, Menu } from 'lucide-react';
import { Tab } from '../../types';

interface MobileNavProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
  onMenuClick: () => void;
}

export function MobileNav({ activeTab, setActiveTab, onMenuClick }: MobileNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-2 pb-safe-offset-2 bg-surface-container-lowest border-t border-outline-variant shadow-lg lg:hidden z-50 rounded-t-xl">
      <button 
        onClick={() => setActiveTab('dashboard')}
        className={`flex flex-col items-center justify-center p-2 rounded-lg 
          ${activeTab === 'dashboard' ? 'text-primary' : 'text-on-surface-variant'}`}
      >
        <Home size={24} />
        <span className="text-[10px] mt-1 font-medium">Home</span>
      </button>
      
      <button 
        onClick={() => setActiveTab('calendar')}
        className={`flex flex-col items-center justify-center p-2 rounded-lg 
          ${activeTab === 'calendar' ? 'text-primary' : 'text-on-surface-variant'}`}
      >
        <Calendar size={24} />
        <span className="text-[10px] mt-1 font-medium">Lịch</span>
      </button>
      
      <button 
        onClick={() => setActiveTab('bookings')}
        className={`flex flex-col items-center justify-center px-5 py-2 rounded-full
          ${activeTab === 'bookings' ? 'bg-primary-container text-on-primary-container' : 'text-on-surface-variant'}`}
      >
        <LayoutList size={24} />
        <span className="text-[10px] mt-0.5 font-bold">Đặt phòng</span>
      </button>

      <button className="flex flex-col items-center justify-center p-2 text-on-surface-variant relative">
        <Bell size={24} />
        <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
        <span className="text-[10px] mt-1 font-medium">Thông báo</span>
      </button>

      <button 
        onClick={onMenuClick}
        className="flex flex-col items-center justify-center p-2 text-on-surface-variant"
      >
        <Menu size={24} />
        <span className="text-[10px] mt-1 font-medium">Thêm</span>
      </button>
    </nav>
  );
}
