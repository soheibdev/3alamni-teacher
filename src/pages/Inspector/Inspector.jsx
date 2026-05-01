import { useState } from 'react';
import { inspectorData } from '../../data/mockData';
import { Shield, Star, CheckCircle, Clock, AlertCircle, FileText, TrendingUp, MessageSquare } from 'lucide-react';
import './Inspector.css';

const Inspector = () => {
  const [activeTab, setActiveTab] = useState('evaluations');
  const [rating, setRating] = useState(inspectorData.overallRating);
  const [hoverRating, setHoverRating] = useState(0);
  const { name, lastVisit, evaluations, recommendations } = inspectorData;

  const handleRatingClick = (newRating) => {
    setRating(newRating);
  };

  const renderStars = (ratingValue, interactive = false) => {
    return Array.from({ length: 5 }, (_, i) => {
      const starValue = i + 1;
      const displayRating = interactive ? (hoverRating || rating) : ratingValue;
      
      return (
        <Star 
          key={i} 
          size={interactive ? 28 : 18} 
          fill={starValue <= Math.round(displayRating) ? '#FFD166' : 'none'} 
          color={starValue <= Math.round(displayRating) ? '#FFD166' : '#E0E0E0'} 
          className={interactive ? 'interactive-star' : ''}
          onClick={() => interactive && handleRatingClick(starValue)}
          onMouseEnter={() => interactive && setHoverRating(starValue)}
          onMouseLeave={() => interactive && setHoverRating(0)}
        />
      );
    });
  };

  return (
    <div className="inspector-page">
      <h2 className="page-title text-ink">
        <Shield size={28} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '10px' }} />
        المفتش التربوي
      </h2>

      {/* Inspector Info Card */}
      <div className="inspector-info card flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="inspector-avatar bg-grape">
            <Shield size={32} color="white" />
          </div>
          <div className="inspector-details">
            <h3>{name}</h3>
            <p>آخر زيارة: {lastVisit}</p>
          </div>
        </div>
        
        <div className="inspector-rating-box bg-bg card">
          <p className="rating-label">تقييمك للمفتش</p>
          <div className="inspector-interactive-rating">
            {renderStars(rating, true)}
            <span className="rating-number">{rating.toFixed(1)}/5</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="inspector-tabs">
        <button className={`inspector-tab ${activeTab === 'evaluations' ? 'active' : ''}`} onClick={() => setActiveTab('evaluations')}>
          <FileText size={16} /> التقييمات
        </button>
        <button className={`inspector-tab ${activeTab === 'recommendations' ? 'active' : ''}`} onClick={() => setActiveTab('recommendations')}>
          <MessageSquare size={16} /> التوصيات
        </button>
      </div>

      {/* Content */}
      {activeTab === 'evaluations' && (
        <div className="evaluations-list">
          {evaluations.map(ev => (
            <div key={ev.id} className="evaluation-card card">
              <div className="eval-header">
                <h3><FileText size={18} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '6px' }} />{ev.title}</h3>
                <span className="eval-date"><Clock size={14} /> {ev.date}</span>
              </div>
              <div className="eval-rating">{renderStars(ev.rating)} <span>{ev.rating}/5</span></div>

              <div className="eval-sections">
                <div className="eval-section strengths">
                  <h4><CheckCircle size={16} color="var(--color-mint)" /> نقاط القوة</h4>
                  <ul>{ev.strengths.map((s, i) => <li key={i}>{s}</li>)}</ul>
                </div>
                <div className="eval-section improvements">
                  <h4><TrendingUp size={16} color="var(--color-mango)" /> مجالات التحسين</h4>
                  <ul>{ev.improvements.map((s, i) => <li key={i}>{s}</li>)}</ul>
                </div>
              </div>

              <div className="eval-notes">
                <strong>ملاحظات:</strong> {ev.notes}
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'recommendations' && (
        <div className="recommendations-list">
          {recommendations.map(rec => (
            <div key={rec.id} className={`recommendation-card card rec-${rec.status === 'مكتمل' ? 'done' : rec.status === 'قيد التنفيذ' ? 'progress' : 'new'}`}>
              <div className="rec-icon">
                {rec.status === 'مكتمل' ? <CheckCircle size={20} color="var(--color-mint)" /> :
                 rec.status === 'قيد التنفيذ' ? <Clock size={20} color="var(--color-sunny)" /> :
                 <AlertCircle size={20} color="var(--color-coral)" />}
              </div>
              <div className="rec-content">
                <p className="rec-text">{rec.text}</p>
                <div className="rec-meta">
                  <span className={`rec-status status-${rec.status === 'مكتمل' ? 'done' : rec.status === 'قيد التنفيذ' ? 'progress' : 'new'}`}>{rec.status}</span>
                  <span className={`rec-priority priority-${rec.priority === 'عالي' ? 'high' : 'medium'}`}>أولوية: {rec.priority}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Inspector;
