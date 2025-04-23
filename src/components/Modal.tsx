import { useState, useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
};

const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
    const [isAnimating, setIsAnimating] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        };

        const handleClickOutside = (e: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                closeModal();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.addEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    const closeModal = () => {
        setIsAnimating(true);
        setTimeout(() => {
            onClose();
            setIsAnimating(false);
        }, 300);
    };

    if (!isOpen && !isAnimating) return null;

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${isAnimating ? 'animate-fadeOut' : 'animate-fadeIn'}`}>
            <div
                className="absolute inset-0 bg-black bg-opacity-50"
                onClick={closeModal}
            />

            <div
                ref={modalRef}
                className={`relative bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto ${isAnimating ? 'animate-slideOutDown' : 'animate-slideInUp'}`}
            >
                <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-10">
                    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                    <button
                        onClick={closeModal}
                        aria-label="Cerrar modal"
                        className="text-gray-500 hover:text-gray-700 transition-colors"
                    >
                        <FaTimes className="h-5 w-5" />
                    </button>
                </div>
                <div className="p-4">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal
