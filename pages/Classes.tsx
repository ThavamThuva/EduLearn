import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  User,
  Video,
  CheckCircle,
  ExternalLink,
  Calculator,
  FlaskConical,
  BookOpen,
  Lock,
} from "lucide-react";
import { CLASSES } from "../data/classes";
import { EXAMS } from "../data/exams";
import { ClassSession } from "../types";

export const Classes: React.FC = () => {
  const [registrations, setRegistrations] = useState<Set<string>>(new Set());
  const [currentTime, setCurrentTime] = useState(new Date());

  // Load registrations from localStorage on mount
  useEffect(() => {
    const storedRegs = localStorage.getItem("classRegistrations");
    if (storedRegs) {
      setRegistrations(new Set(JSON.parse(storedRegs)));
    }
  }, []);

  // Update time every second to check "Join Now" status live
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleRegister = (cls: ClassSession) => {
    // 1. Open the Google Form in a new tab
    window.open(cls.registrationLink, "_blank");

    // 2. Mark as registered locally
    const newRegs = new Set(registrations);
    newRegs.add(cls.id);
    setRegistrations(newRegs);
    localStorage.setItem(
      "classRegistrations",
      JSON.stringify(Array.from(newRegs))
    );
  };

  const getSubjectIcon = (subjectId: string) => {
    switch (subjectId) {
      case "Maths":
        return Calculator;
      case "Science":
        return FlaskConical;
      case "English":
        return BookOpen;
      default:
        return BookOpen;
    }
  };

  const getSubjectColor = (subjectId: string) => {
    // Match colors from EXAMS data for consistency if possible, or fallback
    const color = EXAMS[subjectId]?.color;
    if (color === "blue") return "text-blue-600 bg-blue-100";
    if (color === "green") return "text-green-600 bg-green-100";
    if (color === "indigo") return "text-indigo-600 bg-indigo-100";
    return "text-slate-600 bg-slate-100";
  };

  const formatDateTime = (isoString: string) => {
    const date = new Date(isoString);
    return new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }).format(date);
  };

  const getTimeStatus = (startTimeStr: string) => {
    const start = new Date(startTimeStr);
    const diff = start.getTime() - currentTime.getTime();

    if (diff <= 0) return "started";

    // If less than 24 hours, show countdown
    if (diff < 24 * 60 * 60 * 1000) {
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      if (hours > 0) return `Starts in ${hours}h ${minutes}m`;
      return `Starts in ${minutes}m ${seconds}s`;
    }

    return "upcoming";
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 text-center sm:text-left">
          <h1 className="text-3xl font-bold text-slate-900">
            Live Online Classes
          </h1>
          <p className="text-slate-600 mt-2">
            Register for upcoming sessions and join directly from here.
          </p>
        </div>

        <div className="grid gap-6">
          {CLASSES.map((cls) => {
            const Icon = getSubjectIcon(cls.subjectId);
            const colorClass = getSubjectColor(cls.subjectId);
            const isRegistered = registrations.has(cls.id);
            const startTime = new Date(cls.startTime);
            const isStarted = currentTime >= startTime;
            const timeStatus = getTimeStatus(cls.startTime);

            // Logic: Can join if Registered AND Started
            const canJoin = isStarted && isRegistered;

            return (
              <div
                key={cls.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-6 md:items-center"
              >
                {/* Icon & Subject */}
                <div className="flex items-start gap-4 md:w-1/4">
                  <div className={`p-3 rounded-xl flex-shrink-0 ${colorClass}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                      {cls.subjectId}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 leading-tight">
                      {cls.title}
                    </h3>
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-slate-400" />
                    <span>{cls.instructor}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span>{formatDateTime(cls.startTime)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span>{cls.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Video className="w-4 h-4 text-slate-400" />
                    <span>{cls.platform}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 md:w-1/4 lg:w-auto">
                  {!isRegistered ? (
                    <button
                      onClick={() => handleRegister(cls)}
                      className="px-5 py-2.5 bg-white border border-green-600 text-green-600 rounded-xl font-semibold hover:bg-green-50 transition-colors text-center flex items-center justify-center gap-2"
                    >
                      <span>Register</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  ) : (
                    <div className="px-5 py-2.5 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl font-medium flex items-center justify-center gap-2 cursor-default">
                      <CheckCircle className="w-4 h-4" />
                      Registered
                    </div>
                  )}

                  <a
                    href={canJoin ? cls.meetingLink : undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      px-5 py-2.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all min-w-[140px]
                      ${
                        canJoin
                          ? "bg-green-600 text-white hover:bg-green-700 shadow-lg shadow-green-200 hover:shadow-xl hover:-translate-y-0.5"
                          : "bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200"
                      }
                    `}
                    onClick={(e) => !canJoin && e.preventDefault()}
                  >
                    {!canJoin && <Lock className="w-4 h-4" />}
                    {canJoin ? (
                      <>
                        Join Now
                        <ExternalLink className="w-4 h-4" />
                      </>
                    ) : (
                      <span className="text-xs">
                        {!isRegistered
                          ? "Register First"
                          : timeStatus === "started"
                          ? "Join Now"
                          : timeStatus}
                      </span>
                    )}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
