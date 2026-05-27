import React from 'react';
import { Menu, Search, Bell } from 'lucide-react';

interface TopBarProps {
  onMenuClick: () => void;
}

export function TopBar({ onMenuClick }: TopBarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-surface/80 backdrop-blur-md border-b border-outline-variant z-40 lg:ml-[280px] flex justify-between items-center px-4 md:px-gutter shadow-sm">
      <div className="flex items-center gap-4 flex-1 max-w-xl">
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-full hover:bg-surface-container text-primary"
        >
          <Menu size={24} />
        </button>
        <div className="relative w-full hidden md:block">
          <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
          <input 
            type="text"
            placeholder="Tìm kiếm đặt phòng, khách hàng..." 
            className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-full text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4 md:gap-6">
        <button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-full relative">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border border-surface"></span>
        </button>
        
        <div className="h-8 w-[1px] bg-outline-variant hidden md:block"></div>
        
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-on-surface">Linh Nguyễn</p>
            <p className="text-[10px] text-on-surface-variant uppercase tracking-wider">Quản lý cơ sở</p>
          </div>
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYIbPNC0gZDUDK4Z4UrbtnHtSU0pFApZqAoahYEunk2MAEYHDCcs5oYcFw0aP_AeJwKlt2FsCiF9JO81ucF_ld-sHCOC_VlG5yYXT7VWMws3QA9XIJyYKj3Bg67p7AtOXJrVbfuggIUHDWmGlkUT5MkLaej5GkLyba3lVfaSMKXYp8SzZ86zJ2KKc_TU04UZJkGCmthD4Zz9hbZhhzBYfcc-pJ9s0HgObHhdbkC8I54d0H6h9YnRf0-HOGq6CtZ35Ig0_S5B3upw" 
            alt="User Profile" 
            className="w-10 h-10 rounded-full border border-outline-variant object-cover"
          />
        </div>
      </div>
    </header>
  );
}
