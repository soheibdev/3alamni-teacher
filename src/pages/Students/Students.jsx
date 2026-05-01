import { Users, MessageCircle, GraduationCap, Activity } from 'lucide-react';
import { studentsData } from '../../data/mockData';
import './Students.css';

const Students = () => {
  return (
    <div className="students-page">
      <div className="page-header">
        <h2 className="page-title text-ink"><Users size={28} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '10px' }} />إدارة الطلاب</h2>
      </div>

      <div className="students-grid">
        {studentsData.map(student => (
          <div key={student.id} className="student-profile-card card">
            <div className="profile-header">
              <div className="student-avatar large" style={{ backgroundColor: student.color }}>
                {student.avatar}
              </div>
              <h3 className="profile-name">{student.name}</h3>
              <span className="profile-level"><GraduationCap size={14} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '4px' }} />{student.level}</span>
            </div>
            
            <div className="profile-stats">
              <div className="stat-item">
                <span className="stat-label"><Activity size={14} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '4px' }} />مستوى الأداء</span>
                <span className="stat-value font-display text-mint">{student.performance}%</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">نقطة الضعف</span>
                <span className="stat-value text-coral font-bold">{student.weakness}</span>
              </div>
            </div>

            <div className="profile-contact">
              <div className="contact-info">
                <strong>التواصل:</strong> {student.parentContact}
              </div>
              <button className="btn btn-outline w-full mt-4"><MessageCircle size={16} style={{ marginLeft: '6px' }} />مراسلة ولي الأمر</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;
