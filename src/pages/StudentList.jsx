import { useContext, useState } from "react";
import { StudentContext } from "../context/StudentContext";

export function StudentList() {
  const { favList, addFavourite } = useContext(StudentContext);
  const [students, setStudents] = useState([
    { id: 1, name: "Selva" },
    { id: 2, name: "Prabhu" },
    { id: 3, name: "Harish" },
    { id: 4, name: "Yuvaraj" },
    { id: 5, name: "Shiva" },
  ]);
  const [studentName, setStudentName] = useState("");

  function addStudent(event) {
    event.preventDefault();

    if (!studentName.trim()) return;

    setStudents([
      ...students,
      { id: students.length + 1, name: studentName.trim() },
    ]);
    setStudentName("");
  }

  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold text-cocoa-900">List of Students</h2>
      <form onSubmit={addStudent} className="mb-6 flex flex-col gap-2 rounded-xl bg-cocoa-50 p-4 sm:flex-row">
        <input
          type="text"
          value={studentName}
          onChange={(event) => setStudentName(event.target.value)}
          placeholder="Enter student name"
          className="min-w-0 flex-1 rounded-lg border border-cocoa-200 bg-white px-3 py-2 text-cocoa-900 outline-none placeholder:text-cocoa-500 focus:border-cocoa-500 focus:ring-2 focus:ring-cocoa-200"
        />
        <button
          type="submit"
          className="rounded-lg border border-cocoa-700 bg-cocoa-700 px-3 py-2 text-sm font-semibold text-white transition hover:bg-cocoa-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cocoa-600 disabled:cursor-not-allowed disabled:border-transparent disabled:bg-cocoa-100 disabled:text-cocoa-500"
        >
          Add Student
        </button>
      </form>
      <ul className="space-y-2">
        {students.map((student) => {
          const isFav = favList.some((item) => item.id === student.id);
          return (
            <li key={student.id} className="flex items-center justify-between gap-4 rounded-xl border border-cocoa-100 p-3 transition hover:border-cocoa-200 hover:bg-cocoa-50">
              <span className="font-medium text-cocoa-900">
                {student.id}. {student.name}
              </span>
              <button
                onClick={() => addFavourite(student)}
                disabled={isFav}
                className="rounded-lg border border-cocoa-200 px-3 py-2 text-sm font-semibold text-cocoa-700 transition hover:border-cocoa-500 hover:bg-cocoa-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cocoa-600 disabled:cursor-not-allowed disabled:border-transparent disabled:bg-cocoa-100 disabled:text-cocoa-500"
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
