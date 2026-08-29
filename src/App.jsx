import { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { StudentProvider } from "./context/StudentContext";
import { StudentList } from "./pages/StudentList";
import { FavouriteList } from "./pages/FavouriteList";

export default function App() {
  const appRef = useRef(null);

  useEffect(() => {
    function moveGlow(event) {
      appRef.current?.style.setProperty("--pointer-x", `${event.clientX}px`);
      appRef.current?.style.setProperty("--pointer-y", `${event.clientY}px`);
    }

    window.addEventListener("pointermove", moveGlow);
    return () => window.removeEventListener("pointermove", moveGlow);
  }, []);

  const navClass = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-semibold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cocoa-600 ${
      isActive
        ? "bg-cocoa-700 text-white shadow-sm"
        : "text-cocoa-700 hover:bg-cocoa-100 hover:text-cocoa-900"
    }`;

  return (
    <StudentProvider>
      <BrowserRouter>
        <div
          ref={appRef}
          className="relative min-h-screen overflow-hidden bg-cocoa-50 text-cocoa-900"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 opacity-80 [background:radial-gradient(24rem_circle_at_var(--pointer-x,_50%)_var(--pointer-y,_15%),rgba(223,197,173,0.72),transparent_70%)]"
          />
          <div className="relative mx-auto min-h-screen max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
            <header className="mb-8 flex flex-col gap-4 rounded-3xl border border-cocoa-200/70 bg-white/75 p-4 shadow-[0_12px_30px_rgba(94,50,31,0.08)] backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cocoa-500">
                  Student space
                </p>
                <h1 className="mt-1 text-xl font-bold text-cocoa-900">Favourite Finder</h1>
              </div>
              <nav aria-label="Main navigation" className="flex w-full gap-2 sm:w-auto">
                <NavLink to="/" end className={navClass}>
                  Students
                </NavLink>
                <NavLink to="/favourites" className={navClass}>
                  Favourites
                </NavLink>
              </nav>
            </header>

            <main className="rounded-3xl border border-cocoa-200/70 bg-white/80 p-5 shadow-[0_16px_40px_rgba(94,50,31,0.1)] backdrop-blur sm:p-8">
              <Routes>
                <Route path="/" element={<StudentList />} />
                <Route path="/favourites" element={<FavouriteList />} />
              </Routes>
            </main>
          </div>
        </div>
      </BrowserRouter>
    </StudentProvider>
  );
}
