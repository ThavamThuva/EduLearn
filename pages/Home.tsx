import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Calculator,
  FlaskConical,
  GraduationCap,
} from "lucide-react";
import { EXAMS } from "../data/exams";
import { SubjectModal } from "../components/SubjectModal";
import { SubjectData } from "../types";

export const Home: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<SubjectData | null>(
    null
  );

  const iconMap: Record<string, React.FC<any>> = {
    Calculator: Calculator,
    FlaskConical: FlaskConical,
    BookOpen: BookOpen,
  };

  const bgClasses: Record<string, string> = {
    blue: "bg-blue-50 hover:bg-blue-100 border-blue-100",
    green: "bg-green-50 hover:bg-green-100 border-green-100",
    indigo: "bg-indigo-50 hover:bg-indigo-100 border-indigo-100",
  };

  const textClasses: Record<string, string> = {
    blue: "text-blue-600",
    green: "text-green-600",
    indigo: "text-indigo-600",
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col">
      {/* Hero Section */}
      <section className="py-12 lg:py-24 px-4 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="space-y-8 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-medium border border-green-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              New Exams Available
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Master Your Subjects <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Ace Your Exams
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              A comprehensive platform to test your knowledge in Mathematics,
              Science, and English. Track your progress and improve your scores
              today.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link
                to="/exams"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-all shadow-lg shadow-green-200 hover:shadow-xl hover:shadow-green-300 transform hover:-translate-y-0.5"
              >
                Start an Exam
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#subjects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-semibold hover:bg-slate-50 transition-all"
              >
                View Subjects
              </a>
            </div>
          </div>

          <div className="relative mx-auto lg:mx-0 w-full max-w-md lg:max-w-full">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-emerald-100 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000"
                alt="Students learning together"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Grid */}
      <section id="subjects" className="py-24 px-4 bg-slate-50 flex-grow">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">
              Available Subjects
            </h2>
            <p className="text-slate-600 mt-2">
              Click on a card to view detailed curriculum info
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.values(EXAMS).map((subject) => {
              const Icon = iconMap[subject.icon];
              const bgClass = bgClasses[subject.color];
              const textClass = textClasses[subject.color];

              return (
                <div
                  key={subject.id}
                  onClick={() => setSelectedSubject(subject)}
                  className={`group relative p-8 rounded-3xl border transition-all duration-300 cursor-pointer ${bgClass} hover:shadow-lg`}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-white shadow-sm group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-7 h-7 ${textClass}`} />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {subject.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {subject.description}
                  </p>

                  <div
                    className={`flex items-center text-sm font-semibold ${textClass}`}
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SubjectModal
        isOpen={!!selectedSubject}
        onClose={() => setSelectedSubject(null)}
        subject={selectedSubject}
      />
    </div>
  );
};

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowRight, BookOpen, Calculator, FlaskConical, GraduationCap } from 'lucide-react';
// import { EXAMS } from '../data/exams';
// import { SubjectModal } from '../components/SubjectModal';
// import { SubjectData } from '../types';

// export const Home: React.FC = () => {
//   const [selectedSubject, setSelectedSubject] = useState<SubjectData | null>(null);

//   const iconMap: Record<string, React.FC<any>> = {
//     Calculator: Calculator,
//     FlaskConical: FlaskConical,
//     BookOpen: BookOpen,
//   };

//   const bgClasses: Record<string, string> = {
//     blue: 'bg-blue-50 hover:bg-blue-100 border-blue-100',
//     green: 'bg-green-50 hover:bg-green-100 border-green-100',
//     indigo: 'bg-indigo-50 hover:bg-indigo-100 border-indigo-100',
//   };

//   const textClasses: Record<string, string> = {
//     blue: 'text-blue-600',
//     green: 'text-green-600',
//     indigo: 'text-indigo-600',
//   };

//   return (
//     <div className="min-h-[calc(100vh-4rem)] flex flex-col">
//       {/* Hero Section */}
//       <section className="py-20 px-4 text-center bg-white">
//         <div className="max-w-3xl mx-auto space-y-6">
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
//             <span className="relative flex h-2 w-2">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
//             </span>
//             New Exams Available
//           </div>
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
//             Master Your Subjects <br className="hidden sm:block" />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
//               Ace Your Exams
//             </span>
//           </h1>
//           <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
//             A comprehensive platform to test your knowledge in Mathematics, Science, and English.
//             Track your progress and improve your scores today.
//           </p>
//           <div className="pt-4 flex justify-center gap-4">
//             <Link
//               to="/exams"
//               className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transform hover:-translate-y-0.5"
//             >
//               Start an Exam
//               <ArrowRight className="w-4 h-4" />
//             </Link>
//             <a
//               href="#subjects"
//               className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-full font-semibold hover:bg-slate-50 transition-all"
//             >
//               View Subjects
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Subjects Grid */}
//       <section id="subjects" className="py-20 px-4 bg-slate-50 flex-grow">
//         <div className="max-w-5xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl font-bold text-slate-900">Available Subjects</h2>
//             <p className="text-slate-600 mt-2">Click on a card to view detailed curriculum info</p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {Object.values(EXAMS).map((subject) => {
//               const Icon = iconMap[subject.icon];
//               const bgClass = bgClasses[subject.color];
//               const textClass = textClasses[subject.color];

//               return (
//                 <div
//                   key={subject.id}
//                   onClick={() => setSelectedSubject(subject)}
//                   className={`group relative p-8 rounded-3xl border transition-all duration-300 cursor-pointer ${bgClass} hover:shadow-lg`}
//                 >
//                   <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-white shadow-sm group-hover:scale-110 transition-transform duration-300`}>
//                     <Icon className={`w-7 h-7 ${textClass}`} />
//                   </div>

//                   <h3 className="text-xl font-bold text-slate-900 mb-3">{subject.title}</h3>
//                   <p className="text-slate-600 text-sm leading-relaxed mb-6">
//                     {subject.description}
//                   </p>

//                   <div className={`flex items-center text-sm font-semibold ${textClass}`}>
//                     View Details
//                     <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       <SubjectModal
//         isOpen={!!selectedSubject}
//         onClose={() => setSelectedSubject(null)}
//         subject={selectedSubject}
//       />
//     </div>
//   );
// };
