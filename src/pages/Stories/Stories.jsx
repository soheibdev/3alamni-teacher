import { useState } from 'react';
import { storiesData } from '../../data/mockData';
import { BookType, Edit2, Trash2, Headphones, AlignLeft, PlusCircle, Lightbulb, Clock, Brain, FileText, Check } from 'lucide-react';
import './Stories.css';

const Stories = () => {
  const [stories, setStories] = useState(storiesData);
  const [showModal, setShowModal] = useState(false);
  const [editingStory, setEditingStory] = useState(null);
  
  const [formData, setFormData] = useState({
    title: '', moral: '', type: 'نصي ومسموع', content: '', readingTime: '', difficulty: 'سهل'
  });

  const handleDelete = (id) => {
    setStories(stories.filter(story => story.id !== id));
  };

  const handleEdit = (story) => {
    setEditingStory(story);
    setFormData(story);
    setShowModal(true);
  };

  const handleAddNew = () => {
    setEditingStory(null);
    setFormData({ title: '', moral: '', type: 'نصي ومسموع', content: '', readingTime: '', difficulty: 'سهل' });
    setShowModal(true);
  };

  const handleSave = () => {
    if (!formData.title || !formData.moral) return;
    
    if (editingStory) {
      setStories(stories.map(s => s.id === editingStory.id ? { ...formData, id: s.id } : s));
    } else {
      setStories([...stories, { ...formData, id: Date.now() }]);
    }
    setShowModal(false);
  };

  return (
    <div className="stories-page">
      <div className="page-header flex justify-between items-center">
        <h2 className="page-title text-ink"><BookType size={28} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '10px' }} />القصص التفاعلية</h2>
        <button className="btn btn-primary" onClick={handleAddNew}>
          <PlusCircle size={18} style={{ marginLeft: '6px' }} />إضافة قصة
        </button>
      </div>

      <div className="stories-grid">
        {stories.map(story => (
          <div key={story.id} className="story-card card">
            <div className="story-icon bg-mango bg-opacity-20 text-mango">
              <BookType size={32} />
            </div>
            
            <h3 className="story-title">{story.title}</h3>
            
            <div className="story-moral">
              <span className="moral-label"><Lightbulb size={14} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '4px' }} />العبرة:</span> {story.moral}
            </div>

            <div className="story-meta-row">
              <div className="story-meta-item">
                <Clock size={14} />
                <span>{story.readingTime}</span>
              </div>
              <div className="story-meta-item">
                <Brain size={14} />
                <span>{story.difficulty}</span>
              </div>
            </div>

            <div className="story-type">
              {story.type.includes('مسموع') && <Headphones size={16} />}
              {story.type.includes('نصي') && <FileText size={16} />}
              <span>{story.type}</span>
            </div>

            <div className="story-actions">
              <button className="btn btn-outline flex-1" title="تعديل" onClick={() => handleEdit(story)}>
                <Edit2 size={16} /> تعديل
              </button>
              <button className="btn btn-outline text-coral" title="حذف" onClick={() => handleDelete(story.id)}>
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Story Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-card card" onClick={e => e.stopPropagation()}>
            <h3>
              {editingStory ? <Edit2 size={20} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '8px' }} /> : <PlusCircle size={20} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '8px' }} />}
              {editingStory ? 'تعديل قصة' : 'إضافة قصة جديدة'}
            </h3>
            
            <div className="modal-form">
              <div className="form-group">
                <label>عنوان القصة</label>
                <input type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} placeholder="أدخل عنوان القصة..." />
              </div>
              
              <div className="form-group">
                <label>العبرة / الدرس المستفاد</label>
                <input type="text" value={formData.moral} onChange={e => setFormData({...formData, moral: e.target.value})} placeholder="مثال: الصدق منجاة..." />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>وقت القراءة المقدر</label>
                  <input type="text" value={formData.readingTime} onChange={e => setFormData({...formData, readingTime: e.target.value})} placeholder="مثال: 5 دقائق" />
                </div>
                <div className="form-group">
                  <label>مستوى الصعوبة</label>
                  <select value={formData.difficulty} onChange={e => setFormData({...formData, difficulty: e.target.value})}>
                    <option value="سهل">سهل</option>
                    <option value="متوسط">متوسط</option>
                    <option value="صعب">صعب</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>نوع المحتوى</label>
                <select value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})}>
                  <option value="نصي ومسموع">نصي ومسموع</option>
                  <option value="نصي">نصي فقط</option>
                  <option value="مسموع">مسموع فقط</option>
                </select>
              </div>

              <div className="form-group">
                <label>محتوى القصة (اختياري)</label>
                <textarea value={formData.content} onChange={e => setFormData({...formData, content: e.target.value})} placeholder="اكتب محتوى القصة هنا..." rows={4} />
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

export default Stories;
