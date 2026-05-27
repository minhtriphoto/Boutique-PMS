import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, Bot, User as UserIcon } from 'lucide-react';
import { motion } from 'motion/react';

interface Message {
  id: string;
  role: 'bot' | 'user';
  text: string;
  isInitial?: boolean;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    role: 'bot',
    text: 'Chào bạn! Tôi có thể giúp gì cho bạn hôm nay?\n\nDưới đây là một số việc tôi thường làm tốt:\n- Viết mô tả phòng VIP Mới\n- Soạn mẫu tin nhắn xin review\n- Tóm tắt doanh thu tháng trước\n- Tạo bài đăng FB thu hút khách',
    isInitial: true
  },
  {
    id: '2',
    role: 'user',
    text: 'Phân tích đánh giá tuần trước của căn Villa 1 giúp tôi với. Có vẻ khách phàn nàn hơi nhiều.'
  },
  {
    id: '3',
    role: 'bot',
    text: 'Dựa trên 8 đánh giá tuần qua từ Airbnb và Booking.com cho Villa 1, tôi đã tóm tắt các điểm chính sau:\n\n**Điểm tích cực (85%):** Khách rất thích không gian rộng rãi, hồ bơi sạch sẽ và view hoàng hôn đẹp. Thiết kế nội thất được khen ngợi.\n\n**Vấn đề cần khắc phục ngay (3 đánh giá):**\n- Máy sấy tóc ở phòng Master bị hỏng công tắc.\n- Nhiều muỗi vào ban đêm quanh khu vực BBQ.\n- Nước nóng ở phòng tắm tầng 2 đôi khi chập chờn.\n\n💡 **Gợi ý hành động:** Tôi có thể tạo Task Bảo Trì cho Máy sấy tóc và Máy nước nóng. Bạn có muốn tôi soạn một mẫu tin nhắn xin lỗi và tặng voucher cho khách không?'
  }
];

export function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newUserMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue.trim()
    };

    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');
    setIsTyping(true);

    // Mock AI response
    setTimeout(() => {
      const newBotMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        text: 'Cảm ơn yêu cầu của bạn. Tính năng gọi API thật đang được cấu hình. Tôi đã ghi nhận nội dung: "' + newUserMsg.text + '" và sẽ xử lý sớm!'
      };
      setMessages(prev => [...prev, newBotMsg]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col h-[calc(100vh-140px)]"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-semibold flex items-center gap-2 text-primary">
            <Sparkles size={24} /> Trợ lý AI (Gemini)
          </h2>
          <p className="text-on-surface-variant text-base mt-2">Hỗ trợ viết content, soạn tin nhắn và phân tích dữ liệu tự động</p>
        </div>
      </div>

      <div className="flex-1 bg-surface-container-lowest border border-outline-variant rounded-2xl shadow-sm flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
          
          {messages.map((msg) => (
            <div key={msg.id} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-10 h-10 rounded-xl flex justify-center items-center shrink-0 ${
                msg.role === 'user' 
                  ? 'bg-surface-container-high rounded-full' 
                  : 'bg-primary-container text-primary'
              }`}>
                {msg.role === 'user' ? <UserIcon size={20} className="text-on-surface-variant" /> : <Bot size={20} />}
              </div>
              <div className={`rounded-2xl p-4 text-sm max-w-[85%] whitespace-pre-line ${
                msg.role === 'user' 
                  ? 'bg-primary text-on-primary rounded-tr-sm' 
                  : 'bg-surface-container rounded-tl-sm'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary-container text-primary flex justify-center items-center shrink-0">
                <Bot size={20} />
              </div>
              <div className="bg-surface-container rounded-2xl rounded-tl-sm p-4 text-sm max-w-[85%] flex gap-1 items-center h-12">
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 border-t border-outline-variant bg-surface">
          <div className="relative flex items-center shadow-sm">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Nhập yêu cầu cho AI (vd: Viết giúp tôi báo cáo ngắn tỷ lệ lấp phòng...)" 
              className="w-full bg-surface-container-lowest border border-outline-variant rounded-2xl pl-5 pr-14 py-3.5 text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none"
            />
            <button 
              onClick={handleSend}
              disabled={!inputValue.trim()}
              className="absolute right-2 p-2 bg-primary flex items-center justify-center text-on-primary rounded-xl hover:opacity-90 disabled:opacity-50 transition-opacity"
            >
              <Send size={18} />
            </button>
          </div>
          <p className="text-center text-[10px] text-on-surface-variant mt-2">
            AI có thể mắc sai lầm. Hãy kiểm tra thông tin quan trọng hệ thống hoặc dữ liệu kế toán trước khi chia sẻ.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
