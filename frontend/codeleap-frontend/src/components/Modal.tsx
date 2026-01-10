import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal:React.FC<ModalProps> = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-codeleap-dark-gray/80 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white w-full max-w-165 rounded-2xl p-6 shadow-lg">
        {title && <h1 className="mb-6 text-black">{title}</h1>}
        {children}
      </div>
    </div>
  );
};

export default Modal;