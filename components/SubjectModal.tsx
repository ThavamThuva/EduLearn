import React, { useEffect, useRef } from 'react';
import { X, BookOpen, Calculator, FlaskConical } from 'lucide-react';
import { SubjectData } from '../types';

interface SubjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  subject: SubjectData | null;
}

const iconMap: Record<string, React.FC<any>> = {
  Calculator: Calculator,
  FlaskConical: FlaskConical,
  BookOpen: BookOpen,
};

export const SubjectModal: React.FC<SubjectModalProps> = ({ isOpen, onClose, subject }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !subject) return null;

  const Icon = iconMap[subject.icon] || BookOpen;
  
  const colorClasses: Record<string, string> = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    indigo: 'bg-indigo-100 text-indigo-600',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm transition-opacity animate-in fade-in duration-200">
      <div 
        ref={modalRef}
        className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden transform transition-all animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        <div className="relative p-6 sm:p-8">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-600"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col items-center text-center">
            <div className={`p-4 rounded-2xl mb-6 ${colorClasses[subject.color] || 'bg-slate-100'}`}>
              <Icon className="w-10 h-10" />
            </div>
            
            <h2 className="text-2xl font-bold text-slate-900 mb-2">{subject.title}</h2>
            <div className="w-16 h-1 bg-slate-200 rounded-full mb-6"></div>
            
            <p className="text-slate-600 leading-relaxed text-lg mb-8">
              {subject.fullDescription}
            </p>
            
            <div className="w-full grid grid-cols-2 gap-4 text-left text-sm text-slate-500 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div>
                <span className="block font-semibold text-slate-700 mb-1">Duration</span>
                15 Minutes
              </div>
              <div>
                <span className="block font-semibold text-slate-700 mb-1">Difficulty</span>
                Intermediate
              </div>
              <div>
                <span className="block font-semibold text-slate-700 mb-1">Questions</span>
                {subject.questions.length} MCQs
              </div>
              <div>
                <span className="block font-semibold text-slate-700 mb-1">Passing</span>
                60% Score
              </div>
            </div>

            <button 
              onClick={onClose}
              className="mt-8 w-full py-3 px-4 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors focus:ring-4 focus:ring-slate-200"
            >
              Close Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};