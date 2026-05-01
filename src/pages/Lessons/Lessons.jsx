import { useState } from 'react';
import { lessonsData } from '../../data/mockData';
import { BookOpen, Edit2, Trash2, PlusCircle, Check, Target, Clock, FileText } from 'lucide-react';
import './Lessons.css';

const Lessons = () => {
  const [lessons, setLessons] = useState(lessonsData);
  const [showModal, setShowModal] = useState(false);
  const [editingLesson, setEditingLesson] = useState(null);
  
  const [formData, setFormData] = useState({
    title: '', category: 'قواعد', level: 'الصف الثالث', status: 'قادم', description: '', objectives: '', duration: ''
  });

  const handleDelete = (id) => {
    setLessons(lessons.filter(lesson => lesson.id !== id));
  };

  const handleEdit = (lesson) => {
    setEditingLesson(lesson);
    setFormData(lesson);
    setShowModal(true);
  };

  const handleAddNew = () => {
    setEditingLesson(null);
    setFormData({ title: '', category: 'قواعد', level: 'الصف الثالث', status: 'قادم', description: '', objectives: '', duration: '' });
    setShowModal(true);
  };

  const handleSave = () => {
    if (!formData.title || !formData.category) return;
    
    if (editingLesson) {
      setLessons(lessons.map(l => l.id === editingLesson.id ? { ...formData, id: l.id } : l));
    } else {
      const today = new Date().toISOString().split('T')[0];
      setLessons([...lessons, { ...formData, id: Date.now(), createdAt: today }]);
    }
    setShowModal(false);
  };

  return (
    <div className="lessons-page">
      <div className="page-header flex justify-between items-center">
        <h2 className="page-title text-ink"><BookOpen size={28} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '10px' }} />الدروس والواجبات</h2>
        <button className="btn btn-primary" onClick={handleAddNew}>
          <PlusCircle size={18} style={{ marginLeft: '6px' }} />إضافة درس
        </button>
      </div>

      <div className="lessons-list">
        {lessons.map(lesson => (
          <div key={lesson.id} className="lesson-card card">
            <div className="lesson-card-header flex items-center justify-between">
              <div className="lesson-info flex items-center gap-4">
                <div className="lesson-icon bg-sky bg-opacity-20 text-sky">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="lesson-title">{lesson.title}</h3>
                  <div className="lesson-meta text-gray-500">
                    <span>{lesson.category}</span> • <span>{lesson.level}</span>
                  </div>
                </div>
              </div>
              
              <div className="lesson-actions flex items-center gap-4">
                <span className={`status-badge status-${lesson.status === 'مكتمل' ? 'completed' : lesson.status === 'حالي' ? 'current' : 'upcoming'}`}>
                  {lesson.status}
                </span>
                <button className="action-btn edit-btn" title="تعديل" onClick={() => handleEdit(lesson)}>
                  <Edit2 size={18} />
                </button>
                <button className="action-btn delete-btn text-coral" title="حذف" onClick={() => handleDelete(lesson.id)}>
                  <Trash2 size={18} />
                </button>
              </div>
            </div>

            <div className="lesson-details">
              {lesson.description && (
                <div className="lesson-detail-row">
                  <FileText size={16} className="detail-icon" />
                  <p>{lesson.description}</p>
                </div>
              )}
              {lesson.objectives && (
                <div className="lesson-detail-row">
                  <Target size={16} className="detail-icon text-mint" />
                  <p><strong>الأهداف:</strong> {lesson.objectives}</p>
                </div>
              )}
              {lesson.duration && (
                <div className="lesson-detail-row">
                  <Clock size={16} className="detail-icon text-sunny" />
                  <p><strong>المدة الزمنية:</strong> {lesson.duration}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lesson Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-card card" onClick={e => e.stopPropagation()}>
            <h3>
              {editingLesson ? <Edit2 size={20} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '8px' }} /> : <PlusCircle size={20} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '8px' }} />}
              {editingLesson ? 'تعديل درس' : 'إضافة درس جديد'}
            </h3>
            
            <div className="modal-form">
              <div className="form-group">
                <label>عنوان الدرس</label>
                <input type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} placeholder="أدخل عنوان الدرس..." />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>التصنيف</label>
                  <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})}>
                    <option value="قواعد">قواعد</option>
                    <option value="إملاء">إملاء</option>
                    <option value="قراءة">قراءة</option>
                    <option value="كتابة">كتابة</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>المستوى</label>
                  <select value={formData.level} onChange={e => setFormData({...formData, level: e.target.value})}>
                    <option value="الصف الأول">الصف الأول</option>
                    <option value="الصف الثاني">الصف الثاني</option>
                    <option value="الصف الثالث">الصف الثالث</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>المدة الزمنية</label>
                  <input type="text" value={formData.duration} onChange={e => setFormData({...formData, duration: e.target.value})} placeholder="مثال: 45 دقيقة" />
                </div>
                <div className="form-group">
                  <label>الحالة</label>
                  <select value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})}>
                    <option value="قادم">قادم</option>
                    <option value="حالي">حالي</option>
                    <option value="مكتمل">مكتمل</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>وصف الدرس</label>
                <textarea value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} placeholder="وصف موجز للدرس..." rows={2} />
              </div>
              
              <div className="form-group">
                <label>أهداف الدرس</label>
                <textarea value={formData.objectives} onChange={e => setFormData({...formData, objectives: e.target.value})} placeholder="ماذا سيتعلم الطالب؟..." rows={2} />
              </div>

              <div className="modal-actions">
                <button className="btn btn-primary" onClick={handleSave}>
                  <Check size={18} style={{ marginLeft: '6px' }} /> حفظ
                </button>
                <button className="btn btn-outline" onClick={() => setShowModal(false)}>إلغاء</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lessons;
