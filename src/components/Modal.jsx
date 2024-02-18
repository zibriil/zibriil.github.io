import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ open, onClose, children }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog
      className="w-[800px] h-screen bg-slate-50 z-10 animate-slideIn backdrop:backdrop-blur-sm rounded-xl outline-none shadow-3xl"
      ref={dialog}
      onClose={onClose}
    >
      {children}
    </dialog>,
    document.getElementById('modal')
  );
}
