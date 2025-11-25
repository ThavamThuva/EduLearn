import React from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { ExamList } from "./pages/ExamList";
import { ExamPaper } from "./pages/ExamPaper";
import { Score } from "./pages/Score";
import { About } from "./pages/About";
import { Classes } from "./pages/Classes";

// Layout wrapper to conditionally render Navbar
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  // Don't show Navbar on Score page for a more immersive result card
  const showNavbar = location.pathname !== "/score";

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900">
      {showNavbar && <Navbar />}
      <main className="flex-grow">{children}</main>
      {showNavbar && <Footer />}
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
          <Route path="/about" element={<About />} />
          <Route path="/classes" element={<Classes />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
