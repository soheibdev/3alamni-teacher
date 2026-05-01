import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../services/AuthContext';
import { 
  Home, 
  Users, 
  BookOpen, 
  Map, 
  MessageSquare, 
  LogOut,
  Bell,
  Search,
  Plus
} from 'lucide-react';
import styles from './MainLayout.module.css';

const MainLayout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navItems = [
    { path: '/', label: 'لوحة المعلم', icon: Home },
    { path: '/students', label: 'طُلّابي', icon: Users },
    { path: '/lessons', label: 'الدروس والقصص', icon: BookOpen },
    { path: '/roadmap', label: 'الخطة الدراسية', icon: Map },
    { path: '/messages', label: 'مراسلة الأهالي', icon: MessageSquare },
  ];

  return (
    <div className={styles.layout}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.logoContainer}>
          <div className={styles.logoIcon}>ع</div>
          <div>
            <h1 className="text-display">عَلِّمْني</h1>
            <span className={styles.logoSubtitle}>واجهة المعلم</span>
          </div>
        </div>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <NavLink 
              key={item.path} 
              to={item.path} 
              className={({ isActive }) => 
                isActive ? `${styles.navItem} ${styles.navItemActive}` : styles.navItem
              }
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <button onClick={handleLogout} className={styles.logoutBtn}>
          <LogOut size={20} />
          <span>تسجيل خروج</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className={styles.mainContent}>
        {/* Topbar */}
        <header className={styles.topbar}>
          <div className={styles.topbarRight}>
            <button className={styles.newBtn}>
              <Plus size={18} />
              <span>إنشاء جديد</span>
            </button>
            <button className={styles.iconBtn}>
              <Bell size={20} />
            </button>
            <div className={styles.searchBox}>
              <Search size={18} className={styles.searchIcon} />
              <input type="text" placeholder="ابحث عن طالب أو درس..." />
            </div>
          </div>
          <div className={styles.topbarLeft}>
            <div className={styles.profileInfo}>
              <span className={styles.teacherName}>أ. محمد سعيد</span>
              <span className={styles.schoolName}>مدرسة الأمل</span>
            </div>
            <div className={styles.profileAvatar}>أ.م</div>
          </div>
        </header>

        {/* Page Content */}
        <div className={styles.pageContent}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
