import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { EXAMS } from '../data/exams';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export const ExamPaper: React.FC = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const navigate = useNavigate();
  
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [error, setError] = useState<string | null>(null);

  // Validate subject
  const subject = subjectId && EXAMS[subjectId] ? EXAMS[subjectId] : null;

  useEffect(() => {
    if (!subject) {
      navigate('/exams');
    }
  }, [subject, navigate]);

  if (!subject) return null;

  const handleOptionSelect = (questionId: number, optionIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
    // Clear error if user interacts
    if (error) setError(null);
  };

  const calculateScore = () => {
    let score = 0;
    subject.questions.forEach(q => {
      if (answers[q.id] === q.answer) {
        score++;
      }
    });
    return score;
  };

  const handleSubmit = () => {
    // Validate all answered
    const allAnswered = subject.questions.every(q => answers[q.id] !== undefined);
    
    if (!allAnswered) {
      setError("Please answer all questions before submitting.");
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const score = calculateScore();
    const total = subject.questions.length;
    
    // Save to localStorage
    const scoreData = {
      subject: subject.title,
      score,
      total,
      percentage: (score / total) * 100,
      timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('latestScore', JSON.stringify(scoreData));
    navigate('/score');
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-30 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-slate-900">{subject.title} Exam</h1>
            <p className="text-sm text-slate-500">Answer all {subject.questions.length} questions</p>
          </div>
          <div className="hidden sm:block text-right">
             <div className="text-sm font-medium text-slate-900">Time Remaining</div>
             <div className="text-xs text-slate-500">No time limit</div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 mt-8">
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-700 animate-in fade-in slide-in-from-top-2">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p className="text-sm font-medium">{error}</p>
          </div>
        )}

        <div className="space-y-8">
          {subject.questions.map((q, index) => (
            <div key={q.id} className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-600 text-sm">
                  {index + 1}
                </div>
                <h3 className="text-lg font-medium text-slate-900 pt-1 leading-snug">
                  {q.question}
                </h3>
              </div>

              <div className="space-y-3 pl-0 sm:pl-12">
                {q.options.map((option, optIndex) => {
                  const isSelected = answers[q.id] === optIndex;
                  return (
                    <label 
                      key={optIndex}
                      className={`
                        relative flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-200
                        ${isSelected 
                          ? 'border-blue-600 bg-blue-50' 
                          : 'border-slate-100 hover:border-slate-200 hover:bg-slate-50'}
                      `}
                    >
                      <input 
                        type="radio" 
                        name={`question-${q.id}`} 
                        className="sr-only"
                        onChange={() => handleOptionSelect(q.id, optIndex)}
                        checked={isSelected}
                      />
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 transition-colors ${isSelected ? 'border-blue-600 bg-blue-600' : 'border-slate-300'}`}>
                        {isSelected && <div className="w-2 h-2 bg-white rounded-full" />}
                      </div>
                      <span className={`font-medium ${isSelected ? 'text-blue-900' : 'text-slate-700'}`}>
                        {option}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-end">
          <button
            onClick={handleSubmit}
            className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl focus:ring-4 focus:ring-blue-200"
          >
            Submit Exam
          </button>
        </div>
      </div>
    </div>
  );
};