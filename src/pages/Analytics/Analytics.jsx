import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { BarChart3, Users, AlertTriangle, Star, TrendingUp, Activity } from 'lucide-react';
import { studentsData, monthlyProgressData, activityDistribution } from '../../data/mockData';
import './Analytics.css';

const COLORS = ['#6EC5FF', '#FF6F91', '#3DD1C8', '#FFD166', '#B98CFF', '#FF8A3D'];

const Analytics = () => {
  const sorted = [...studentsData].sort((a, b) => b.performance - a.performance);
  const needAttention = studentsData.filter(s => s.performance < 65);
  const avgPerformance = Math.round(studentsData.reduce((sum, s) => sum + s.performance, 0) / studentsData.length);
  const avgAttendance = Math.round(studentsData.reduce((sum, s) => sum + s.attendance, 0) / studentsData.length);

  const subjectData = [
    { name: 'قراءة', avg: Math.round(studentsData.reduce((s, st) => s + st.subjects.قراءة, 0) / studentsData.length) },
    { name: 'كتابة', avg: Math.round(studentsData.reduce((s, st) => s + st.subjects.كتابة, 0) / studentsData.length) },
    { name: 'قواعد', avg: Math.round(studentsData.reduce((s, st) => s + st.subjects.قواعد, 0) / studentsData.length) },
  ];

  return (
    <div className="analytics-page">
      <h2 className="page-title text-ink">
        <BarChart3 size={28} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '10px' }} />
        تحليلات متقدمة
      </h2>

      {/* Summary KPIs */}
      <div className="analytics-kpis">
        <div className="analytics-kpi card"><Activity size={24} color="var(--color-mint)" /><div className="kpi-val">{avgPerformance}%</div><div className="kpi-lbl">متوسط الأداء</div></div>
        <div className="analytics-kpi card"><Users size={24} color="var(--color-sky)" /><div className="kpi-val">{avgAttendance}%</div><div className="kpi-lbl">متوسط الحضور</div></div>
        <div className="analytics-kpi card"><Star size={24} color="var(--color-sunny)" /><div className="kpi-val">{sorted[0]?.name}</div><div className="kpi-lbl">أفضل طالب</div></div>
        <div className="analytics-kpi card"><AlertTriangle size={24} color="var(--color-coral)" /><div className="kpi-val">{needAttention.length}</div><div className="kpi-lbl">يحتاجون متابعة</div></div>
      </div>

      <div className="analytics-charts-grid">
        {/* Monthly Progress */}
        <div className="card analytics-chart-card">
          <h3><TrendingUp size={18} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '8px' }} />تقدم الطلاب الشهري</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={monthlyProgressData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" axisLine={false} tickLine={false} />
              <YAxis hide />
              <Tooltip />
              <Line type="monotone" dataKey="avg" stroke="#3DD1C8" strokeWidth={3} dot={{ r: 5, fill: '#3DD1C8' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Subject Performance */}
        <div className="card analytics-chart-card">
          <h3><BarChart3 size={18} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '8px' }} />الأداء حسب المادة</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={subjectData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis hide />
              <Tooltip />
              <Bar dataKey="avg" radius={[8,8,8,8]} barSize={50}>
                {subjectData.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="analytics-bottom-grid">
        {/* Leaderboard */}
        <div className="card analytics-chart-card">
          <h3><Star size={18} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '8px' }} />ترتيب الطلاب</h3>
          <div className="leaderboard">
            {sorted.map((s, i) => (
              <div key={s.id} className="leaderboard-row">
                <span className="lb-rank">{i + 1}</span>
                <div className="student-avatar" style={{ backgroundColor: s.color, width: 36, height: 36, borderRadius: '50%', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: 14 }}>{s.avatar}</div>
                <span className="lb-name">{s.name}</span>
                <div className="lb-bar-wrapper"><div className="lb-bar" style={{ width: `${s.performance}%` }}></div></div>
                <span className="lb-score">{s.performance}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Distribution Pie */}
        <div className="card analytics-chart-card">
          <h3>توزيع النشاطات</h3>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={activityDistribution} cx="50%" cy="50%" innerRadius={45} outerRadius={85} dataKey="value" paddingAngle={4}>
                {activityDistribution.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="pie-legend" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            {activityDistribution.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13 }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: COLORS[i], display: 'inline-block' }}></span>
                {item.name} ({item.value}%)
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
