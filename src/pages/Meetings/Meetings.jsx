import { useState } from 'react';
import { eventsData } from '../../data/mockData';
import { Calendar, Plus, Clock, Users, GraduationCap, X } from 'lucide-react';
import './Meetings.css';

const Meetings = () => {
  const [events, setEvents] = useState(eventsData);
  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: '', date: '', time: '', type: 'meeting', description: '' });

  const handleAddEvent = () => {
    if (!newEvent.title || !newEvent.date) return;
    const event = { ...newEvent, id: Date.now() };
    setEvents([...events, event]);
    setNewEvent({ title: '', date: '', time: '', type: 'meeting', description: '' });
    setShowModal(false);
  };

  const handleDelete = (id) => setEvents(events.filter(e => e.id !== id));

  const sortedEvents = [...events].sort((a, b) => new Date(a.date) - new Date(b.date));
  const meetings = sortedEvents.filter(e => e.type === 'meeting');
  const seminars = sortedEvents.filter(e => e.type === 'seminar');

  return (
    <div className="meetings-page">
      <div className="page-header flex justify-between items-center">
        <h2 className="page-title text-ink">
          <Calendar size={28} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '10px' }} />
          اللقاءات والفعاليات
        </h2>
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          <Plus size={18} style={{ marginLeft: '6px' }} /> إضافة فعالية
        </button>
      </div>

      <div className="events-grid">
        {/* Meetings Column */}
        <div className="events-column">
          <h3 className="column-title"><Users size={20} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '8px' }} />اجتماعات أولياء الأمور</h3>
          <div className="events-list">
            {meetings.map(event => (
              <div key={event.id} className="event-card card meeting-type">
                <div className="event-type-badge meeting-badge"><Users size={14} /> اجتماع</div>
                <h4 className="event-title">{event.title}</h4>
                <div className="event-meta">
                  <span><Calendar size={14} /> {event.date}</span>
                  <span><Clock size={14} /> {event.time}</span>
                </div>
                <p className="event-desc">{event.description}</p>
                <button className="event-delete" onClick={() => handleDelete(event.id)}>
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Seminars Column */}
        <div className="events-column">
          <h3 className="column-title"><GraduationCap size={20} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '8px' }} />الندوات والورش</h3>
          <div className="events-list">
            {seminars.map(event => (
              <div key={event.id} className="event-card card seminar-type">
                <div className="event-type-badge seminar-badge"><GraduationCap size={14} /> ندوة</div>
                <h4 className="event-title">{event.title}</h4>
                <div className="event-meta">
                  <span><Calendar size={14} /> {event.date}</span>
                  <span><Clock size={14} /> {event.time}</span>
                </div>
                <p className="event-desc">{event.description}</p>
                <button className="event-delete" onClick={() => handleDelete(event.id)}>
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add Event Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-card card" onClick={e => e.stopPropagation()}>
            <h3><Plus size={20} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '8px' }} />إضافة فعالية جديدة</h3>
            <div className="modal-form">
              <div className="form-group">
                <label>العنوان</label>
                <input type="text" value={newEvent.title} onChange={e => setNewEvent({...newEvent, title: e.target.value})} placeholder="عنوان الفعالية" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>التاريخ</label>
                  <input type="date" value={newEvent.date} onChange={e => setNewEvent({...newEvent, date: e.target.value})} />
                </div>
                <div className="form-group">
                  <label>الوقت</label>
                  <input type="time" value={newEvent.time} onChange={e => setNewEvent({...newEvent, time: e.target.value})} />
                </div>
              </div>
              <div className="form-group">
                <label>النوع</label>
                <select value={newEvent.type} onChange={e => setNewEvent({...newEvent, type: e.target.value})}>
                  <option value="meeting">اجتماع</option>
                  <option value="seminar">ندوة</option>
                </select>
              </div>
              <div className="form-group">
                <label>الوصف</label>
                <textarea value={newEvent.description} onChange={e => setNewEvent({...newEvent, description: e.target.value})} placeholder="وصف الفعالية..." rows={3} />
              </div>
              <div className="modal-actions">
                <button className="btn btn-primary" onClick={handleAddEvent}>إضافة</button>
                <button className="btn btn-outline" onClick={() => setShowModal(false)}>إلغاء</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Meetings;
