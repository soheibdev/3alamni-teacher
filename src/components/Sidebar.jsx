import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, BookOpen, MessageCircle, Map, BookType, LogOut, GraduationCap, Shield, Calendar, BarChart3 } from 'lucide-react';
import { useAuth } from '../services/AuthContext';
import './Sidebar.css';

const Sidebar = () => {
  const { logout } = useAuth();
  const menuItems = [
    { name: 'لوحة المعلم', icon: <LayoutDashboard size={20} />, path: '/' },
    { name: 'طلابي', icon: <Users size={20} />, path: '/students' },
    { name: 'الدروس والواجبات', icon: <BookOpen size={20} />, path: '/lessons' },
    { name: 'القصص', icon: <BookType size={20} />, path: '/stories' },
    { name: 'خارطة الطريق', icon: <Map size={20} />, path: '/roadmap' },
    { name: 'مراسلة الأهالي', icon: <MessageCircle size={20} />, path: '/messages' },
    { name: 'المفتش التربوي', icon: <Shield size={20} />, path: '/inspector' },
    { name: 'اللقاءات والفعاليات', icon: <Calendar size={20} />, path: '/meetings' },
    { name: 'تحليلات متقدمة', icon: <BarChart3 size={20} />, path: '/analytics' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon-wrapper">
          <GraduationCap size={28} className="text-mango" />
        </div>
        <h1 className="text-mango">عَلِّمْني</h1>
        <p className="text-ink">واجهة المُعَلِّم</p>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : 'text-ink'}`}
            title={item.name}
          >
            <span className="icon-wrapper">{item.icon}</span>
            <span className="link-text">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button className="sidebar-link sidebar-logout text-ink" title="تسجيل الخروج" onClick={logout}>
          <span className="icon-wrapper"><LogOut size={20} /></span>
          <span className="link-text">تسجيل الخروج</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
