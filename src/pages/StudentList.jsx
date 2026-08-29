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
      <div className="mb-7">
        <p className="text-sm font-semibold text-cocoa-500">Manage your class</p>
        <h2 className="mt-1 text-3xl font-bold tracking-tight text-cocoa-900">List of Students</h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mb-8 rounded-2xl border border-cocoa-200 bg-cocoa-50/80 p-4 sm:flex sm:items-end sm:gap-3"
      >
        <div className="flex-1">
          <label htmlFor="student-name" className="mb-2 block text-sm font-semibold text-cocoa-700">
            Student name
          </label>
        <input
          id="student-name"
          type="text"
          value={studentName}
          onChange={(event) => {
            setStudentName(event.target.value);
            if (error) setError("");
          }}
          placeholder="Enter student name"
          className="w-full rounded-xl border border-cocoa-200 bg-white px-4 py-2.5 text-cocoa-900 outline-none transition placeholder:text-cocoa-500/70 focus:border-cocoa-500 focus:ring-4 focus:ring-cocoa-200"
        />
        </div>
        <button
          type="submit"
          className="mt-3 w-full rounded-xl bg-cocoa-700 px-5 py-2.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-cocoa-600 hover:shadow-lg hover:shadow-cocoa-700/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cocoa-600 sm:mt-0 sm:w-auto"
        >
          Add Student
        </button>
        {error && <p role="alert" className="mt-2 text-sm font-medium text-red-700 sm:absolute">{error}</p>}
      </form>
      <ul className="space-y-3">
        {students.map((student) => {
          const isFav = favList.some((item) => item.id === student.id);

          return (
            <li
              key={student.id}
              className="flex items-center justify-between gap-4 rounded-2xl border border-cocoa-100 bg-white p-4 transition duration-200 hover:-translate-y-0.5 hover:border-cocoa-200 hover:shadow-md hover:shadow-cocoa-900/5"
            >
              <span className="flex items-center gap-3 font-semibold text-cocoa-900">
                <span className="grid size-9 place-items-center rounded-full bg-cocoa-100 text-sm text-cocoa-700">
                  {student.id}
                </span>
                {student.name}
              </span>
              <button
                onClick={() => addFavourite(student)}
                disabled={isFav}
                className="shrink-0 rounded-lg border border-cocoa-200 px-3 py-2 text-sm font-semibold text-cocoa-700 transition hover:border-cocoa-500 hover:bg-cocoa-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cocoa-600 disabled:cursor-not-allowed disabled:border-cocoa-100 disabled:bg-cocoa-100/60 disabled:text-cocoa-500"
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
