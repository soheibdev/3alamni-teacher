import { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
  LineChart, Line, PieChart, Pie, Cell
} from 'recharts';
import {
  ClipboardCheck, AlertTriangle, Award, BarChart3, Users, Sparkles,
  TrendingUp, BookOpen, BookType, Activity, Star, Bell, Clock
} from 'lucide-react';
import {
  weeklyPerformanceData, studentsData, monthlyProgressData,
  activityDistribution, recentActivities
} from '../../data/mockData';
import './Dashboard.css';

const Dashboard = () => {
  const [activeChart, setActiveChart] = useState('weekly');
  const totalStudents = studentsData.length;
  const activeStudents = studentsData.filter(s => s.status === 'نشط' || s.status === 'متفوق').length;
  const topStudents = [...studentsData].sort((a, b) => b.performance - a.performance).slice(0, 3);
  const needAttention = studentsData.filter(s => s.performance < 65);

  return (
    <div className="dashboard-page">
      <h2 className="page-title text-ink">
        <TrendingUp size={28} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '10px' }} />
        لوحة المُعَلِّم - الصف الثالث
      </h2>

      {/* KPI Cards */}
      <div className="kpi-row">
        <div className="stat-card card">
          <div className="stat-icon bg-mint"><Users size={24} color="white" /></div>
          <div className="stat-value">{totalStudents}</div>
          <div className="stat-label">إجمالي الطلاب</div>
        </div>
        <div className="stat-card card">
          <div className="stat-icon bg-sky"><Activity size={24} color="white" /></div>
          <div className="stat-value">{activeStudents}</div>
          <div className="stat-label">طلاب نشطون</div>
        </div>
        <div className="stat-card card">
          <div className="stat-icon bg-mango"><BookOpen size={24} color="white" /></div>
          <div className="stat-value">6</div>
          <div className="stat-label">دروس منشأة</div>
        </div>
        <div className="stat-card card">
          <div className="stat-icon bg-grape"><BookType size={24} color="white" /></div>
          <div className="stat-value">5</div>
          <div className="stat-label">قصص منشأة</div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="charts-row">
        {/* Line + Bar toggle chart */}
        <div className="chart-section card" style={{ flex: 2 }}>
          <div className="chart-header-row">
            <h3 className="section-title">
              <BarChart3 size={20} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '8px' }} />
              تقدم الطلاب
            </h3>
            <div className="chart-tabs">
              <button className={`chart-tab ${activeChart === 'weekly' ? 'active' : ''}`} onClick={() => setActiveChart('weekly')}>أسبوعي</button>
              <button className={`chart-tab ${activeChart === 'monthly' ? 'active' : ''}`} onClick={() => setActiveChart('monthly')}>شهري</button>
            </div>
          </div>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={250}>
              {activeChart === 'weekly' ? (
                <BarChart data={weeklyPerformanceData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="day" axisLine={false} tickLine={false} />
                  <YAxis hide={true} />
                  <Tooltip cursor={{ fill: 'transparent' }} />
                  <Bar dataKey="score" fill="var(--color-mint)" radius={[8, 8, 8, 8]} barSize={40} />
                </BarChart>
              ) : (
                <LineChart data={monthlyProgressData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis hide={true} />
                  <Tooltip />
                  <Line type="monotone" dataKey="avg" stroke="var(--color-mint)" strokeWidth={3} dot={{ r: 5, fill: 'var(--color-mint)' }} />
                </LineChart>
              )}
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="chart-section card" style={{ flex: 1 }}>
          <h3 className="section-title">توزيع الأنشطة</h3>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={activityDistribution} cx="50%" cy="50%" innerRadius={50} outerRadius={90} dataKey="value" paddingAngle={4}>
                  {activityDistribution.map((entry, index) => (
                    <Cell key={index} fill={entry.color.replace('var(--color-sky)', '#6EC5FF').replace('var(--color-coral)', '#FF6F91').replace('var(--color-mint)', '#3DD1C8').replace('var(--color-sunny)', '#FFD166')} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="pie-legend">
              {activityDistribution.map((item, i) => (
                <div key={i} className="legend-item">
                  <span className="legend-dot" style={{ backgroundColor: item.color.replace('var(--color-sky)', '#6EC5FF').replace('var(--color-coral)', '#FF6F91').replace('var(--color-mint)', '#3DD1C8').replace('var(--color-sunny)', '#FFD166') }}></span>
                  <span>{item.name} ({item.value}%)</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="bottom-row">
        {/* AI Suggestions + Activity Feed */}
        <div className="bottom-right">
          <div className="ai-suggestions card">
            <div className="ai-header">
              <Sparkles size={20} className="text-grape" />
              <span className="text-grape font-bold">اقتراحات الذكاء</span>
            </div>
            <p className="ai-text">
              لاحظت أن <strong>٦ طلاب</strong> يجدون صعوبة في التشكيل. أقترح إضافة تمرين «نطق الحركات» لمدة ١٠ دقائق.
            </p>
            <button className="btn btn-primary" style={{ backgroundColor: 'var(--color-grape)', width: '100%', marginTop: '12px' }}>أسند التمرين تلقائياً</button>
          </div>

          {/* Recent Activity Feed */}
          <div className="activity-feed card">
            <h3 className="section-title">
              <Bell size={18} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '8px' }} />
              آخر الأنشطة
            </h3>
            <div className="feed-list">
              {recentActivities.map(activity => (
                <div key={activity.id} className="feed-item">
                  <div className="feed-dot" style={{ backgroundColor: activity.color.replace(/var\(--color-(\w+)\)/, (_, c) => ({ sky:'#6EC5FF', mint:'#3DD1C8', grape:'#B98CFF', sunny:'#FFD166', mango:'#FF8A3D', coral:'#FF6F91' }[c] || '#ccc')) }}></div>
                  <div className="feed-content">
                    <p className="feed-text">{activity.text}</p>
                    <span className="feed-time"><Clock size={12} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '3px' }} />{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Students Overview + Top/Attention */}
        <div className="bottom-left">
          {/* Top Students */}
          <div className="card top-students-card">
            <h3 className="section-title">
              <Star size={18} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '8px' }} />
              أفضل الطلاب
            </h3>
            <div className="top-students-list">
              {topStudents.map((student, i) => (
                <div key={student.id} className="top-student-item">
                  <span className="top-rank">{i + 1}</span>
                  <div className="student-avatar" style={{ backgroundColor: student.color }}>{student.avatar}</div>
                  <span className="student-name">{student.name}</span>
                  <span className="top-score">{student.performance}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Need Attention */}
          {needAttention.length > 0 && (
            <div className="card attention-card">
              <h3 className="section-title">
                <AlertTriangle size={18} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '8px' }} />
                يحتاجون متابعة
              </h3>
              <div className="attention-list">
                {needAttention.map(student => (
                  <div key={student.id} className="attention-item">
                    <div className="student-avatar" style={{ backgroundColor: student.color }}>{student.avatar}</div>
                    <div className="attention-info">
                      <span className="student-name">{student.name}</span>
                      <span className="attention-weakness">نقطة ضعف: {student.weakness}</span>
                    </div>
                    <span className="attention-score">{student.performance}%</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Weekly Summary */}
          <div className="card weekly-summary-card">
            <h3 className="section-title">
              <ClipboardCheck size={18} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '8px' }} />
              ملخص الأسبوع
            </h3>
            <div className="summary-stats">
              <div className="summary-item"><span className="summary-value">182</span><span className="summary-label">واجب منجز</span></div>
              <div className="summary-item"><span className="summary-value">94%</span><span className="summary-label">نسبة الحضور</span></div>
              <div className="summary-item"><span className="summary-value">78</span><span className="summary-label">متوسط الأداء</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
