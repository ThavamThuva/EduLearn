import React, { useState } from "react";
import { Trophy, Medal, Star, Crown, Filter } from "lucide-react";
import { LEADERBOARD_DATA } from "../data/leaderboard";
import { EXAMS } from "../data/exams";

export const Leaderboard: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<string>("All");

  const getRankStyles = (rank: number) => {
    switch (rank) {
      case 1:
        return {
          card: "bg-yellow-50 border-yellow-200",
          icon: "text-yellow-600",
          badge: "bg-yellow-100 text-yellow-700",
          iconComponent: Crown,
          label: "Gold",
        };
      case 2:
        return {
          card: "bg-slate-50 border-slate-200",
          icon: "text-slate-500",
          badge: "bg-slate-200 text-slate-700",
          iconComponent: Medal,
          label: "Silver",
        };
      case 3:
        return {
          card: "bg-orange-50 border-orange-200",
          icon: "text-orange-600",
          badge: "bg-orange-100 text-orange-800",
          iconComponent: Medal,
          label: "Bronze",
        };
      default:
        return {
          card: "bg-white border-slate-100",
          icon: "text-slate-400",
          badge: "bg-slate-50 text-slate-600",
          iconComponent: Star,
          label: "Rank",
        };
    }
  };

  // Filter and Sort Data
  const filteredData = LEADERBOARD_DATA.filter(
    (entry) => selectedSubject === "All" || entry.subject === selectedSubject
  )
    .sort((a, b) => b.score - a.score) // Sort descending
    .slice(0, 10); // Top 10

  const subjects = ["All", ...Object.keys(EXAMS)];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-yellow-100 rounded-full mb-4">
            <Trophy className="w-8 h-8 text-yellow-600" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900">
            Student Leaderboard
          </h1>
          <p className="text-slate-600 mt-2">
            Celebrating our top achievers and their outstanding scores.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {subjects.map((subjectKey) => {
            const label =
              subjectKey === "All" ? "All Subjects" : EXAMS[subjectKey]?.title;
            const isActive = selectedSubject === subjectKey;

            return (
              <button
                key={subjectKey}
                onClick={() => setSelectedSubject(subjectKey)}
                className={`
                  px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200
                  ${
                    isActive
                      ? "bg-slate-900 text-white shadow-md"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                  }
                `}
              >
                {label}
              </button>
            );
          })}
        </div>

        <div className="space-y-4">
          {/* Header Row (Hidden on mobile) */}
          <div className="hidden sm:grid grid-cols-12 gap-4 px-6 py-3 text-sm font-semibold text-slate-500 uppercase tracking-wider">
            <div className="col-span-2 text-center">Rank</div>
            <div className="col-span-6">Student</div>
            <div className="col-span-2 text-center">Subject</div>
            <div className="col-span-2 text-right">Score</div>
          </div>

          {filteredData.length > 0 ? (
            filteredData.map((student, index) => {
              const rank = index + 1;
              const style = getRankStyles(rank);
              const Icon = style.iconComponent;
              // Get display title for subject
              const subjectTitle =
                EXAMS[student.subject]?.title || student.subject;

              return (
                <div
                  key={student.id}
                  className={`
                    relative grid grid-cols-1 sm:grid-cols-12 gap-4 p-4 sm:p-6 rounded-2xl border transition-all hover:shadow-md items-center animate-in slide-in-from-bottom-2 fade-in duration-500
                    ${style.card}
                    ${rank <= 3 ? "shadow-sm" : ""}
                  `}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Rank */}
                  <div className="col-span-12 sm:col-span-2 flex items-center justify-start sm:justify-center gap-3 sm:gap-0 mb-2 sm:mb-0">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${style.badge}`}
                    >
                      {rank}
                    </div>
                    <span className="sm:hidden font-bold text-slate-700">
                      {style.label}
                    </span>
                  </div>

                  {/* Student Info */}
                  <div className="col-span-8 sm:col-span-6 flex items-center gap-4">
                    <div
                      className={`p-2 rounded-full bg-white shadow-sm border border-slate-100 hidden sm:block`}
                    >
                      <Icon className={`w-5 h-5 ${style.icon}`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg sm:text-base">
                        {student.name}
                      </h3>
                      <span className="sm:hidden text-sm text-slate-500">
                        {subjectTitle}
                      </span>
                    </div>
                  </div>

                  {/* Subject (Desktop) */}
                  <div className="hidden sm:block col-span-2 text-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-600">
                      {subjectTitle}
                    </span>
                  </div>

                  {/* Score */}
                  <div className="col-span-4 sm:col-span-2 flex items-center justify-end sm:justify-end absolute sm:static right-4 top-4">
                    <div className="text-right">
                      <span className="block font-bold text-xl sm:text-lg text-slate-900">
                        {student.score}%
                      </span>
                      <span className="block text-xs text-slate-500 font-medium">
                        Score
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 text-slate-500 bg-white rounded-2xl border border-slate-200 border-dashed">
              <Filter className="w-8 h-8 mx-auto mb-3 text-slate-300" />
              <p>No records found for this subject.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
