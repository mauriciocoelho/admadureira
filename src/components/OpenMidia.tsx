import React from 'react';

interface OpenMidiaProps {
    content: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

const OpenMidia: React.FC<OpenMidiaProps> = ({ content, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70" onClick={onClose}>
            <div className="relative bg-white rounded-lg shadow-lg max-w-lg mx-auto p-4" onClick={(e) => e.stopPropagation()}>
                <button className="absolute top-2 right-2 text-gray-700 hover:text-gray-900" onClick={onClose}>✕</button>
                <div className="w-full h-full">
                    {content}
                </div>
            </div>
        </div>
    );
};

export default OpenMidia;
