import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Calculator, FlaskConical, Clock, Award, ChevronRight } from 'lucide-react';
import { EXAMS } from '../data/exams';

export const ExamList: React.FC = () => {
  const navigate = useNavigate();

  const iconMap: Record<string, React.FC<any>> = {
    Calculator: Calculator,
    FlaskConical: FlaskConical,
    BookOpen: BookOpen,
  };

  const handleExamSelect = (subjectId: string) => {
    navigate(`/exam-paper/${subjectId}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-slate-900">Select an Exam</h1>
          <p className="text-slate-600 mt-2">Choose a subject to begin your assessment. Good luck!</p>
        </div>

        <div className="grid gap-6">
          {Object.values(EXAMS).map((subject) => {
            const Icon = iconMap[subject.icon];
            
            return (
              <div 
                key={subject.id}
                onClick={() => handleExamSelect(subject.id)}
                className="group bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all cursor-pointer flex flex-col sm:flex-row items-center gap-6"
              >
                <div className={`p-4 rounded-xl ${
                  subject.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  subject.color === 'green' ? 'bg-green-100 text-green-600' :
                  'bg-indigo-100 text-indigo-600'
                }`}>
                  <Icon className="w-8 h-8" />
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl font-bold text-slate-900">{subject.title}</h3>
                  <p className="text-slate-500 text-sm mt-1">{subject.description}</p>
                  
                  <div className="flex items-center justify-center sm:justify-start gap-4 mt-4 text-sm text-slate-400">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>15 mins</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      <span>{subject.questions.length} Questions</span>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:block">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};