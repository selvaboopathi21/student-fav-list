import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { StudentProvider } from "./context/StudentContext";
import { StudentList } from "./pages/StudentList";
import { FavouriteList } from "./pages/FavouriteList";

export default function App() {
  return (
    <StudentProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-cocoa-50 px-4 py-8 text-cocoa-900 sm:px-6">
          <h1 className="mx-auto mb-4 max-w-3xl text-center text-3xl font-bold tracking-tight text-cocoa-900 sm:text-4xl uppercase">
            Favourite Student List
          </h1>

          <nav className="mx-auto mb-6 flex max-w-3xl gap-2 rounded-2xl border border-cocoa-200 bg-white p-3 shadow-sm">
            <Link
              to="/students"
              className="rounded-lg px-3 py-2 text-sm font-semibold text-cocoa-700 transition hover:bg-cocoa-100 hover:text-cocoa-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cocoa-600"
            >
              List of Students
            </Link>
            <Link
              to="/favourites"
              className="rounded-lg px-3 py-2 text-sm font-semibold text-cocoa-700 transition hover:bg-cocoa-100 hover:text-cocoa-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cocoa-600"
            >
              Favourite Students
            </Link>
          </nav>

          <div className="mx-auto max-w-3xl rounded-2xl border border-cocoa-200 bg-white p-5 shadow-sm sm:p-7">
            <Routes>
              <Route path="/" element={<Navigate to="/students" replace />} />
              <Route path="/students" element={<StudentList />} />
              <Route path="/favourites" element={<FavouriteList />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </StudentProvider>
  );
}
