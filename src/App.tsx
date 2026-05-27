import React from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { TopBar } from './components/layout/TopBar';
import { MobileNav } from './components/layout/MobileNav';
import { Dashboard } from './views/Dashboard';
import { Calendar } from './views/Calendar';
import { Finance } from './views/Finance';
import { Housekeeping } from './views/Housekeeping';
import { Bookings } from './views/Bookings';
import { Customers } from './views/Customers';
import { Maintenance } from './views/Maintenance';
import { Assets } from './views/Assets';
import { Reports } from './views/Reports';
import { Settings } from './views/Settings';
import { Rooms } from './views/Rooms';
import { Reviews } from './views/Reviews';
import { Documents } from './views/Documents';
import { AIAssistant } from './views/AIAssistant';
import { Tab } from './types';

export default function App() {
  const [activeTab, setActiveTab] = React.useState<Tab>('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'calendar':
        return <Calendar />;
      case 'finance':
        return <Finance />;
      case 'housekeeping':
        return <Housekeeping />;
      case 'bookings':
        return <Bookings />;
      case 'rooms':
        return <Rooms />;
      case 'customers':
        return <Customers />;
      case 'maintenance':
        return <Maintenance />;
      case 'assets':
        return <Assets />;
      case 'reports':
        return <Reports />;
      case 'reviews':
        return <Reviews />;
      case 'documents':
        return <Documents />;
      case 'ai-assistant':
        return <AIAssistant />;
      case 'settings':
        return <Settings />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-64 text-on-surface-variant">
            <p className="text-lg">This view is currently under construction.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <TopBar onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
      
      <main className="lg:ml-[280px] pt-20 pb-24 px-4 md:px-gutter flex-1 relative z-0">
        <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 hidden lg:block pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 hidden lg:block pointer-events-none"></div>
        
        {renderContent()}
      </main>
      
      <MobileNav 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
      />
    </div>
  );
}
