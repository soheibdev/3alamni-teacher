import { Search, Bell, PlusCircle } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-search">
        <Search className="search-icon" size={20} />
        <input type="text" placeholder="ابحث عن طالب أو درس..." className="search-input" />
      </div>

      <div className="header-actions">
        <button className="notification-btn">
          <Bell size={20} />
          <span className="notification-badge"></span>
        </button>
        <button className="new-btn bg-mint">
          <PlusCircle size={18} style={{ marginLeft: '6px' }} /> إنشاء جديد
        </button>
      </div>
    </header>
  );
};

export default Header;
