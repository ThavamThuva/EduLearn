import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { ExamList } from './pages/ExamList';
import { ExamPaper } from './pages/ExamPaper';
import { Score } from './pages/Score';

// Layout wrapper to conditionally render Navbar
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  // Don't show Navbar on Score page for a more immersive result card
  const showNavbar = location.pathname !== '/score';

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900">
      {showNavbar && <Navbar />}
      <main className="flex-grow">
        {children}
      </main>
      {showNavbar && (
        <footer className="bg-white border-t border-slate-200 py-8 text-center text-slate-500 text-sm">
          <p>© 2024 EduLearn Platform. All rights reserved.</p>
        </footer>
      )}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exams" element={<ExamList />} />
          <Route path="/exam-paper/:subjectId" element={<ExamPaper />} />
          <Route path="/score" element={<Score />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;