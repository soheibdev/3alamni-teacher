import { useState, useRef, useEffect } from 'react';
import { conversationsData } from '../../data/mockData';
import { Send, MessageSquare, Clock, UserCircle, CheckCheck, Search } from 'lucide-react';
import './Messages.css';

const Messages = () => {
  const [conversations, setConversations] = useState(conversationsData);
  const [activeConv, setActiveConv] = useState(conversations[0]);
  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [activeConv?.messages]);

  const handleSend = () => {
    if (!newMessage.trim()) return;
    const now = new Date();
    const timeStr = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
    const msg = { id: Date.now(), text: newMessage, sender: 'teacher', time: timeStr };

    const updated = conversations.map(c =>
      c.id === activeConv.id ? { ...c, messages: [...c.messages, msg] } : c
    );
    setConversations(updated);
    setActiveConv({ ...activeConv, messages: [...activeConv.messages, msg] });
    setNewMessage('');

    // Simulate parent reply after 2 seconds
    setTimeout(() => {
      const replies = ['شكراً لكِ على الرد', 'جزاكِ الله خيراً', 'سنعمل على ذلك في البيت', 'تمام، فهمت'];
      const reply = { id: Date.now() + 1, text: replies[Math.floor(Math.random() * replies.length)], sender: 'parent', time: timeStr };
      setConversations(prev => prev.map(c =>
        c.id === activeConv.id ? { ...c, messages: [...c.messages, msg, reply] } : c
      ));
      setActiveConv(prev => ({ ...prev, messages: [...prev.messages, reply] }));
    }, 2000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  const filteredConversations = conversations.filter(c =>
    c.parentName.includes(searchTerm) || c.studentName.includes(searchTerm)
  );

  return (
    <div className="messages-page">
      <div className="page-header">
        <h2 className="page-title text-ink">
          <MessageSquare size={28} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '10px' }} />
          مراسلة الأهالي
        </h2>
      </div>

      <div className="messages-layout">
        {/* Contact List */}
        <div className="messages-list card">
          <div className="contacts-search">
            <Search size={16} className="contacts-search-icon" />
            <input
              type="text"
              placeholder="ابحث عن ولي أمر..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="contacts-search-input"
            />
          </div>
          {filteredConversations.map(conv => (
            <div
              key={conv.id}
              className={`message-item ${conv.id === activeConv.id ? 'active-contact' : ''} ${conv.unread ? 'unread' : ''}`}
              onClick={() => setActiveConv(conv)}
            >
              <div className="message-avatar bg-mint">{conv.avatar}</div>
              <div className="message-preview">
                <div className="message-header flex justify-between">
                  <span className="message-sender">{conv.parentName}</span>
                  <span className="message-time">{conv.messages[conv.messages.length - 1]?.time}</span>
                </div>
                <div className="message-text">
                  {conv.messages[conv.messages.length - 1]?.text}
                </div>
                <div className="message-student-name">{conv.studentName}</div>
              </div>
              {conv.unread && <span className="unread-dot"></span>}
            </div>
          ))}
        </div>

        {/* Chat Area */}
        <div className="message-chat card">
          <div className="chat-header">
            <div className="message-avatar bg-mint">
              <UserCircle size={24} />
            </div>
            <div className="chat-header-info">
              <span className="chat-name">{activeConv.parentName}</span>
              <span className="chat-student-label">ولي أمر: {activeConv.studentName}</span>
            </div>
          </div>

          <div className="chat-history">
            {activeConv.messages.map(msg => (
              <div key={msg.id} className={`chat-bubble ${msg.sender === 'teacher' ? 'sent' : 'received'}`}>
                {msg.text}
                <div className="chat-time">
                  <Clock size={11} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '3px' }} />
                  {msg.time}
                  {msg.sender === 'teacher' && <CheckCheck size={14} style={{ marginRight: '6px', color: '#6EC5FF' }} />}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          <div className="chat-input-area">
            <input
              type="text"
              placeholder="اكتب رسالتك هنا..."
              className="chat-input"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button className="send-btn bg-mint" onClick={handleSend}>
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
