import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CheckCircle, XCircle, RefreshCcw, Home, Trophy } from 'lucide-react';
import { ScoreData } from '../types';

export const Score: React.FC = () => {
  const navigate = useNavigate();
  const [scoreData, setScoreData] = useState<ScoreData | null>(null);

  useEffect(() => {
    const storedScore = localStorage.getItem('latestScore');
    if (!storedScore) {
      navigate('/exams');
      return;
    }
    setScoreData(JSON.parse(storedScore));
  }, [navigate]);

  if (!scoreData) return null;

  const isPass = scoreData.percentage >= 60;
  
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden animate-in zoom-in-95 duration-300">
        <div className={`p-8 text-center ${isPass ? 'bg-gradient-to-br from-green-500 to-emerald-600' : 'bg-gradient-to-br from-orange-500 to-red-600'}`}>
          <div className="mx-auto w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
            {isPass ? <Trophy className="w-10 h-10 text-white" /> : <XCircle className="w-10 h-10 text-white" />}
          </div>
          
          <h1 className="text-3xl font-bold text-white mb-2">
            {isPass ? 'Great Job!' : 'Keep Practicing!'}
          </h1>
          <p className="text-white/90">
            You completed the <span className="font-semibold">{scoreData.subject}</span> exam
          </p>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center">
              <span className="block text-slate-500 text-xs uppercase tracking-wider font-semibold mb-1">Score</span>
              <span className="text-3xl font-bold text-slate-900">{scoreData.score}<span className="text-slate-400 text-lg">/{scoreData.total}</span></span>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center">
              <span className="block text-slate-500 text-xs uppercase tracking-wider font-semibold mb-1">Percentage</span>
              <span className={`text-3xl font-bold ${isPass ? 'text-green-600' : 'text-orange-500'}`}>
                {scoreData.percentage}%
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg text-sm text-green-700">
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Correct Answers</span>
              <span className="font-bold">{scoreData.score}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg text-sm text-red-700">
              <span className="flex items-center gap-2"><XCircle className="w-4 h-4" /> Incorrect Answers</span>
              <span className="font-bold">{scoreData.total - scoreData.score}</span>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            <button 
              onClick={() => navigate('/exams')} 
              className="w-full flex items-center justify-center gap-2 py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors"
            >
              <RefreshCcw className="w-4 h-4" />
              Try Another Exam
            </button>
            <Link 
              to="/" 
              className="w-full flex items-center justify-center gap-2 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition-colors"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};