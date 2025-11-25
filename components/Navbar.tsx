import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

export const Navbar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl text-slate-800 tracking-tight">EduLearn</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Home
            </Link>
            <Link 
              to="/exams" 
              className={`text-sm font-medium transition-colors ${isActive('/exams') ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Exams
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};