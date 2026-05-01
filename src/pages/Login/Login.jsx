import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, LogIn, AlertCircle } from 'lucide-react';
import { useAuth } from '../../services/AuthContext';
import Button from '../../components/Button';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // If already logged in, redirect
  if (isAuthenticated) {
    navigate('/', { replace: true });
    return null;
  }

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    const result = login(email, password);
    if (result.success) {
      navigate('/');
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card card">
        <div className="login-header">
          <h1 className="text-mango">عَلِّمْني</h1>
          <h2>تسجيل دخول المعلم</h2>
        </div>
        
        {error && (
          <div className="login-error">
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label><Mail size={16} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '6px' }} />البريد الإلكتروني</label>
            <div className="input-with-icon">
              <Mail size={18} className="input-icon" />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="أدخل بريدك الإلكتروني"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label><Lock size={16} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '6px' }} />كلمة المرور</label>
            <div className="input-with-icon">
              <Lock size={18} className="input-icon" />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="أدخل كلمة المرور"
                required
              />
            </div>
          </div>
          <Button type="submit" variant="primary" className="login-btn">
            <LogIn size={20} style={{ marginLeft: '8px' }} />دخول
          </Button>
        </form>

        <div className="login-hint">
          <p>بيانات الدخول التجريبية:</p>
          <code>teacher@gmail.com / admin@123</code>
        </div>
      </div>
    </div>
  );
};

export default Login;
