import React from "react";
import {
  LayoutDashboard,
  Calendar as CalendarIcon,
  BookOpen,
  Users,
  Paintbrush,
  Wrench,
  Box,
  Banknote,
  LineChart,
  Settings,
  UserCircle,
  HelpCircle,
  Plus,
  DoorClosed,
  Star,
  FileText,
  Sparkles,
} from "lucide-react";
import { Tab } from "../../types";

interface SidebarProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const navItems: {
    id: string;
    label: string;
    icon: any;
    disabled?: boolean;
  }[] = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "calendar", label: "Calendar", icon: CalendarIcon },
    { id: "bookings", label: "Bookings", icon: BookOpen },
    { id: "rooms", label: "Rooms", icon: DoorClosed },
    { id: "customers", label: "Customers", icon: Users },
    { id: "housekeeping", label: "Housekeeping", icon: Paintbrush },
    { id: "maintenance", label: "Maintenance", icon: Wrench },
    { id: "assets", label: "Assets", icon: Box },
    { id: "finance", label: "Finance", icon: Banknote },
    { id: "reports", label: "Reports", icon: LineChart },
    { id: "reviews", label: "Reviews", icon: Star },
    { id: "documents", label: "Legal & Docs", icon: FileText },
    { id: "ai-assistant", label: "AI Assistant", icon: Sparkles },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <aside className="w-[280px] h-full fixed left-0 top-0 hidden lg:flex flex-col bg-surface border-r border-outline-variant py-stack-lg z-50">
      <div className="px-6 mb-8">
        <h1 className="text-2xl font-bold text-primary">Boutique PMS</h1>
        <p className="text-sm text-on-surface-variant">Management Suite</p>
      </div>

      <nav className="flex-1 space-y-1 px-3 overflow-y-auto custom-scrollbar">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => !item.disabled && setActiveTab(item.id as Tab)}
              disabled={item.disabled}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-left
                ${
                  isActive
                    ? "text-primary font-bold border-r-4 border-primary bg-surface-container-high rounded-r-none"
                    : "text-on-surface-variant hover:bg-surface-container"
                }
                ${item.disabled ? "opacity-50 cursor-not-allowed hidden" : ""}
              `}
            >
              <Icon size={20} />
              <span className="text-base">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="px-3 mt-auto pt-4 border-t border-outline-variant space-y-1">
        <button
          onClick={() => {
            setActiveTab("bookings");
            setTimeout(() => {
              window.dispatchEvent(new CustomEvent("openAddNewBooking"));
            }, 100);
          }}
          className="w-full bg-primary text-on-primary font-medium py-3 rounded-xl flex items-center justify-center gap-2 mb-4 hover:opacity-90 transition-opacity"
        >
          <Plus size={20} />
          Add New Booking
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors text-left">
          <UserCircle size={20} />
          <span className="text-base">My Profile</span>
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors text-left">
          <HelpCircle size={20} />
          <span className="text-base">Help</span>
        </button>
      </div>
    </aside>
  );
}
