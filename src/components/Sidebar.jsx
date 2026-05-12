import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FolderKanban, CheckSquare, Calendar, TrendingUp, AlertTriangle, Users, Bell, FileText, Settings } from 'lucide-react';
const Sidebar = ({
  isOpen,
  onClose
}) => {
  const navItems = [{
    path: '/dashboard',
    icon: LayoutDashboard,
    label: 'Dashboard'
  }, {
    path: '/projects',
    icon: FolderKanban,
    label: 'Proyek'
  }, {
    path: '/tasks',
    icon: CheckSquare,
    label: 'Tugas'
  }, {
    path: '/schedule',
    icon: Calendar,
    label: 'Jadwal'
  }, {
    path: '/progress',
    icon: TrendingUp,
    label: 'Progres'
  }, {
    path: '/risks',
    icon: AlertTriangle,
    label: 'Risiko'
  }, {
    path: '/team',
    icon: Users,
    label: 'Tim'
  }, {
    path: '/notifications',
    icon: Bell,
    label: 'Notifikasi'
  }, {
    path: '/reports',
    icon: FileText,
    label: 'Laporan'
  }, {
    path: '/settings',
    icon: Settings,
    label: 'Settings'
  }];
  return <>
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={onClose} />}
      
      <aside className={`
          fixed top-0 left-0 h-full w-64 bg-card border-r border-border z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static
        `}>
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-border">
            <h1 className="text-2xl font-bold text-primary">ManPro3</h1>
            <p className="text-sm text-muted-foreground mt-1">Project Management</p>
          </div>
          
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-1">
              {navItems.map(item => <li key={item.path}>
                  <NavLink to={item.path} onClick={onClose} className={({
                isActive
              }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActive ? 'bg-primary text-primary-foreground font-medium' : 'text-muted-foreground hover:bg-muted hover:text-foreground'}`}>
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </NavLink>
                </li>)}
            </ul>
          </nav>
        </div>
      </aside>
    </>;
};
export default Sidebar;