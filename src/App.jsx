import { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { StudentProvider } from "./context/StudentContext";
import { StudentList } from "./pages/StudentList";
import { FavouriteList } from "./pages/FavouriteList";

function Navigation() {
  const { pathname } = useLocation();
  const linkClass = (path) => `rounded-lg px-3 py-2 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cocoa-600 ${pathname === path ? "bg-cocoa-700 text-white" : "text-cocoa-700 hover:bg-cocoa-100 hover:text-cocoa-900"}`;

  return (
    <nav aria-label="Main navigation" className="flex gap-1">
      <Link to="/" className={linkClass("/")}>Students</Link>
      <Link to="/favourites" className={linkClass("/favourites")}>Favourites</Link>
    </nav>
  );
}

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

  return (
    <StudentProvider>
      <BrowserRouter>
        <div
          ref={appRef}
          className="relative min-h-screen overflow-hidden bg-cocoa-50 text-cocoa-900"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 opacity-60 [background:radial-gradient(20rem_circle_at_var(--pointer-x,_50%)_var(--pointer-y,_15%),rgba(223,197,173,0.55),transparent_70%)]"
          />
          <div className="relative mx-auto min-h-screen max-w-4xl px-4 py-8 sm:px-6">
            <header className="mb-6 flex flex-col gap-4 rounded-2xl border border-cocoa-200 bg-white px-5 py-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cocoa-500">
                  Student space
                </p>
                <h1 className="mt-1 text-xl font-bold text-cocoa-900">Favourite Finder</h1>
              </div>
              <Navigation />
            </header>

            <main className="rounded-2xl border border-cocoa-200 bg-white p-5 shadow-sm sm:p-7">
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
