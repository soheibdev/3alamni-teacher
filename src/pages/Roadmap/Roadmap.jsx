import { roadmapData } from '../../data/mockData';
import { CheckCircle, Circle, Map, Compass, BookMarked } from 'lucide-react';
import './Roadmap.css';

const Roadmap = () => {
  return (
    <div className="roadmap-page">
      <div className="page-header">
        <h2 className="page-title text-ink"><Map size={28} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '10px' }} />خارطة الطريق الأسبوعية</h2>
        <p className="page-subtitle"><Compass size={16} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '6px' }} />نظم تسلسل الدروس لطلابك</p>
      </div>

      <div className="roadmap-container card">
        <div className="roadmap-timeline">
          {roadmapData.map((item, index) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-status">
                {item.status === 'completed' ? (
                  <CheckCircle className="status-icon text-mint" size={32} />
                ) : item.status === 'current' ? (
                  <div className="status-icon-current bg-sunny"></div>
                ) : (
                  <Circle className="status-icon text-border" size={32} />
                )}
                {index < roadmapData.length - 1 && <div className="timeline-line"></div>}
              </div>
              
              <div className={`timeline-content ${item.status}`}>
                <h3 className="timeline-week">{item.week}</h3>
                <div className="timeline-topic card">
                  <BookMarked size={16} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '8px' }} />{item.topic}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
