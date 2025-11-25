import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GraduationCap, Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl text-slate-800 tracking-tight">
              EduLearn
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive("/")
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Home
            </Link>
            <Link
              to="/exams"
              className={`text-sm font-medium transition-colors ${
                isActive("/exams")
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Exams
            </Link>
            <Link
              to="/classes"
              className={`text-sm font-medium transition-colors ${
                isActive("/classes")
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Classes
            </Link>
            <Link
              to="/leaderboard"
              className={`text-sm font-medium transition-colors ${
                isActive("/leaderboard")
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Leaderboard
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${
                isActive("/about")
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              About
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="px-4 py-2 space-y-2 flex flex-col">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`text-sm font-medium transition-colors ${
                isActive("/")
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Home
            </Link>
            <Link
              to="/exams"
              onClick={() => setIsOpen(false)}
              className={`text-sm font-medium transition-colors ${
                isActive("/exams")
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Exams
            </Link>
            <Link
              to="/classes"
              onClick={() => setIsOpen(false)}
              className={`text-sm font-medium transition-colors ${
                isActive("/classes")
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Classes
            </Link>
            <Link
              to="/leaderboard"
              className={`text-sm font-medium transition-colors ${
                isActive("/leaderboard")
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Leaderboard
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className={`text-sm font-medium transition-colors ${
                isActive("/about")
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import { GraduationCap } from "lucide-react";

// export const Navbar: React.FC = () => {
//   const location = useLocation();

//   const isActive = (path: string) => location.pathname === path;

//   return (
//     <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
//       <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <Link to="/" className="flex items-center gap-2 group">
//               <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
//                 <GraduationCap className="h-6 w-6 text-white" />
//               </div>
//               <span className="font-bold text-xl text-slate-800 tracking-tight">
//                 EduLearn
//               </span>
//             </Link>
//           </div>
//           <div className="flex items-center space-x-8">
//             <Link
//               to="/"
//               className={`text-sm font-medium transition-colors ${
//                 isActive("/")
//                   ? "text-blue-600"
//                   : "text-slate-600 hover:text-slate-900"
//               }`}
//             >
//               Home
//             </Link>
//             <Link
//               to="/exams"
//               className={`text-sm font-medium transition-colors ${
//                 isActive("/exams")
//                   ? "text-blue-600"
//                   : "text-slate-600 hover:text-slate-900"
//               }`}
//             >
//               Exams
//             </Link>
//             <Link
//               to="/classes"
//               className={`text-sm font-medium transition-colors ${
//                 isActive("/classes")
//                   ? "text-blue-600"
//                   : "text-slate-600 hover:text-slate-900"
//               }`}
//             >
//               Classes
//             </Link>
//             <Link
//               to="/about"
//               className={`text-sm font-medium transition-colors ${
//                 isActive("/about")
//                   ? "text-blue-600"
//                   : "text-slate-600 hover:text-slate-900"
//               }`}
//             >
//               About
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };
