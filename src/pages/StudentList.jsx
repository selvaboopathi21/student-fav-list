import { useContext, useState } from "react";
import { StudentContext } from "../context/StudentContext";

export function StudentList() {
  const { students, favList, addStudent, addFavourite } = useContext(StudentContext);
  const [studentName, setStudentName] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!addStudent(studentName)) {
      setError("Please enter a student name.");
      return;
    }

    setStudentName("");
    setError("");
  }

  return (
    <div>
      <div className="mb-6">
        <p className="text-sm font-medium text-cocoa-500">Class directory</p>
        <h2 className="mt-1 text-2xl font-bold text-cocoa-900">Students</h2>
      </div>
      <form onSubmit={handleSubmit} className="mb-7 rounded-xl bg-cocoa-50 p-4">
        <label htmlFor="student-name" className="mb-2 block text-sm font-semibold text-cocoa-700">Add a student</label>
        <div className="flex flex-col gap-2 sm:flex-row">
        <input
          id="student-name"
          type="text"
          value={studentName}
          onChange={(event) => {
            setStudentName(event.target.value);
            if (error) setError("");
          }}
          placeholder="Enter student name"
          className="min-w-0 flex-1 rounded-lg border border-cocoa-200 bg-white px-3 py-2 text-cocoa-900 outline-none placeholder:text-cocoa-500 focus:border-cocoa-500 focus:ring-2 focus:ring-cocoa-200"
        />
        <button type="submit" className="rounded-lg bg-cocoa-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cocoa-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cocoa-600">
          Add Student
        </button>
        </div>
        {error && <p role="alert" className="mt-2 text-sm text-red-700">{error}</p>}
      </form>
      <ul className="space-y-2">
        {students.map((student) => {
          // Already favourite list-la irukana check panrom
          const isFav = favList.some((item) => item.id === student.id);

          return (
            <li key={student.id} className="flex items-center justify-between gap-4 rounded-xl border border-cocoa-100 p-3 transition hover:border-cocoa-200 hover:bg-cocoa-50/50">
              <span className="flex items-center gap-3 font-medium text-cocoa-900">
                <span className="grid size-8 place-items-center rounded-full bg-cocoa-100 text-sm font-semibold text-cocoa-700">{student.id}</span>
                {student.name}
              </span>
              <button
                onClick={() => addFavourite(student)}
                disabled={isFav}
                className="shrink-0 rounded-lg border border-cocoa-200 px-3 py-1.5 text-sm font-semibold text-cocoa-700 transition hover:border-cocoa-500 hover:bg-cocoa-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cocoa-600 disabled:cursor-not-allowed disabled:border-transparent disabled:bg-cocoa-100 disabled:text-cocoa-500"
              >
                {isFav ? "Added" : "Add to Favourite"}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
