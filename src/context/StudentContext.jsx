import { createContext, useState } from "react";


export const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [favList, setFavList] = useState([]);

  function addFavourite(student) {
    const isExist = favList.some((item) => item.id === student.id);
    if (!isExist) setFavList([...favList, student]);
  }

  function removeFavourite(id) {
    setFavList(favList.filter((item) => item.id !== id));
  }

  return (
    <StudentContext.Provider value={{ favList, addFavourite, removeFavourite }}>
      {children}
    </StudentContext.Provider>
  );
}
