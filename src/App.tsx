import React from "react";
import { Sidebar } from "./components/layout/Sidebar";
import { TopBar } from "./components/layout/TopBar";
import { MobileNav } from "./components/layout/MobileNav";
import { Dashboard } from "./views/Dashboard";
import { Calendar } from "./views/Calendar";
import { Finance } from "./views/Finance";
import { Housekeeping } from "./views/Housekeeping";
import { Bookings } from "./views/Bookings";
import { Customers } from "./views/Customers";
import { Maintenance } from "./views/Maintenance";
import { Assets } from "./views/Assets";
import { Reports } from "./views/Reports";
import { Settings } from "./views/Settings";
import { Rooms } from "./views/Rooms";
import { Reviews } from "./views/Reviews";
import { Documents } from "./views/Documents";
import { AIAssistant } from "./views/AIAssistant";
import { Tab } from "./types";
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
  Settings as SettingsIcon,
  DoorClosed,
  Star,
  FileText,
  Sparkles,
  Plus,
  X,
} from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = React.useState<Tab>("dashboard");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleNavigate = () => {
      setActiveTab("bookings");
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent("openAddNewBooking"));
      }, 100);
    };
    const handleNavigateWithFilter = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail) {
        (window as any).__pendingBookingsFilter = customEvent.detail;
      }
      setActiveTab("bookings");
    };
    const handleNavigateRoomsWithFilter = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail) {
        (window as any).__pendingRoomsFilter = customEvent.detail;
      }
      setActiveTab("rooms");
    };
    const handleNavigateToTab = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail) {
        setActiveTab(customEvent.detail);
      }
    };

    window.addEventListener("navigateAndOpenBooking", handleNavigate);
    window.addEventListener(
      "navigateBookingsWithFilter",
      handleNavigateWithFilter,
    );
    window.addEventListener(
      "navigateRoomsWithFilter",
      handleNavigateRoomsWithFilter,
    );
    window.addEventListener("navigateToTab", handleNavigateToTab);

    return () => {
      window.removeEventListener("navigateAndOpenBooking", handleNavigate);
      window.removeEventListener(
        "navigateBookingsWithFilter",
        handleNavigateWithFilter,
      );
      window.removeEventListener(
        "navigateRoomsWithFilter",
        handleNavigateRoomsWithFilter,
      );
      window.removeEventListener("navigateToTab", handleNavigateToTab);
    };
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "calendar":
        return <Calendar />;
      case "finance":
        return <Finance />;
      case "housekeeping":
        return <Housekeeping />;
      case "bookings":
        return <Bookings />;
      case "rooms":
        return <Rooms />;
      case "customers":
        return <Customers />;
      case "maintenance":
        return <Maintenance />;
      case "assets":
        return <Assets />;
      case "reports":
        return <Reports />;
      case "reviews":
        return <Reviews />;
      case "documents":
        return <Documents />;
      case "ai-assistant":
        return <AIAssistant />;
      case "settings":
        return <Settings />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-64 text-on-surface-variant">
            <p className="text-lg">
              This view is currently under construction.
            </p>
          </div>
        );
    }
  };

  const navItems = [
    { id: "dashboard", label: "Tổng quan (Dashboard)", icon: LayoutDashboard },
    { id: "calendar", label: "Lịch phòng (Calendar)", icon: CalendarIcon },
    { id: "bookings", label: "Đơn đặt phòng (Bookings)", icon: BookOpen },
    { id: "rooms", label: "Quản lý Phòng (Rooms)", icon: DoorClosed },
    { id: "customers", label: "Khách hàng (Customers)", icon: Users },
    { id: "housekeeping", label: "Buồng phòng (Housekeeping)", icon: Paintbrush },
    { id: "maintenance", label: "Bảo trì (Maintenance)", icon: Wrench },
    { id: "assets", label: "Tài sản (Assets)", icon: Box },
    { id: "finance", label: "Doanh thu & Thu chi", icon: Banknote },
    { id: "reports", label: "Báo cáo (Reports)", icon: LineChart },
    { id: "reviews", label: "Đánh giá (Reviews)", icon: Star },
    { id: "documents", label: "Hồ sơ & Tài liệu", icon: FileText },
    { id: "ai-assistant", label: "Trợ lý ảo AI", icon: Sparkles },
    { id: "settings", label: "Cài đặt (Settings)", icon: SettingsIcon },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <TopBar onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop with elegant fade-in blur */}
          <div
            className="fixed inset-0 bg-neutral-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          
          {/* Drawer content sliding in from the left */}
          <div className="fixed inset-y-0 left-0 w-[290px] bg-surface-container-lowest border-r border-outline-variant py-6 flex flex-col z-50 shadow-2xl animate-in slide-in-from-left duration-200">
            <div className="px-6 mb-6 flex justify-between items-center border-b border-outline-variant/30 pb-4">
              <div>
                <h1 className="text-xl font-bold text-primary">Boutique PMS</h1>
                <p className="text-xs text-on-surface-variant font-medium">Bảng quản lý khách sạn</p>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-surface-container text-on-surface-variant focus:outline-none"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex-1 space-y-1.5 px-3 overflow-y-auto custom-scrollbar pb-6">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id as Tab);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left
                      ${
                        isActive
                          ? "text-primary font-bold bg-primary-container/20 border-l-4 border-primary pl-3"
                          : "text-on-surface-variant hover:bg-surface-container/60"
                      }
                    `}
                  >
                    <Icon size={18} className={isActive ? "text-primary animate-pulse" : "text-on-surface-variant/75"} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>

            <div className="px-4 mt-auto pt-4 border-t border-outline-variant/50">
              <button
                onClick={() => {
                  setActiveTab("bookings");
                  setIsMobileMenuOpen(false);
                  setTimeout(() => {
                    window.dispatchEvent(new CustomEvent("openAddNewBooking"));
                  }, 100);
                }}
                className="w-full bg-primary text-on-primary font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-primary/10"
              >
                <Plus size={18} />
                Đặt phòng mới
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="lg:ml-[280px] pt-20 pb-24 px-4 md:px-gutter flex-1 relative z-0">
        <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 hidden lg:block pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 hidden lg:block pointer-events-none"></div>

        {renderContent()}
      </main>

      <MobileNav
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          setIsMobileMenuOpen(false); // Close drawer if clicking standard mobile tabs
        }}
        onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />
    </div>
  );
}
