import { useEffect } from 'react';
import { X } from 'lucide-react';
import '../styles/Toast.css';

const Toast = ({ message, type = 'error', onClose, duration = 10000 }) => {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  return (
    <div className={`toast toast-${type}`}>
      <div className="toast-content">
        <span className="toast-message">{message}</span>
        <button className="toast-close" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default Toast;
