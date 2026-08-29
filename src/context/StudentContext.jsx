import { createContext, useState } from "react";

// The context is intentionally exported with its provider for this small app.
// eslint-disable-next-line react-refresh/only-export-components
export const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [students, setStudents] = useState([
    { id: 1, name: "Selva" },
    { id: 2, name: "Harish" },
    { id: 3, name: "prabhu" },
    { id: 4, name: "yuvaraj" },
    { id: 5, name: "shiva" },
  ]);
  const [favList, setFavList] = useState([]);

  function addStudent(name) {
    const trimmedName = name.trim();

    if (!trimmedName) {
      return false;
    }

    setStudents((currentStudents) => [
      ...currentStudents,
      {
        id: Math.max(0, ...currentStudents.map((student) => student.id)) + 1,
        name: trimmedName,
      },
    ]);

    return true;
  }

  function addFavourite(student) {
    setFavList((currentFavList) => {
      const isExist = currentFavList.some((item) => item.id === student.id);
      return isExist ? currentFavList : [...currentFavList, student];
    });
  }

  function removeFavourite(id) {
    setFavList((currentFavList) => currentFavList.filter((item) => item.id !== id));
  }

  return (
    <StudentContext.Provider
      value={{ students, favList, addStudent, addFavourite, removeFavourite }}
    >
      {children}
    </StudentContext.Provider>
  );
}
