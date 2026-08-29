import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

export function FavouriteList() {
  const { favList, removeFavourite } = useContext(StudentContext);

  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold text-cocoa-900">Favourite Students</h2>
      {favList.length === 0 ? (
        <p className="text-cocoa-700">No favourite students added yet</p>
      ) : (
        <ul className="space-y-2">
          {favList.map((student) => (
            <li key={student.id} className="flex items-center justify-between gap-4 rounded-xl border border-cocoa-100 p-3 transition hover:border-cocoa-200 hover:bg-cocoa-50">
              <span className="font-medium text-cocoa-900">{student.name}</span>
              <button
                onClick={() => removeFavourite(student.id)}
                className="rounded-lg border border-cocoa-200 px-3 py-2 text-sm font-semibold text-cocoa-700 transition hover:border-cocoa-500 hover:bg-cocoa-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cocoa-600 disabled:cursor-not-allowed disabled:border-transparent disabled:bg-cocoa-100 disabled:text-cocoa-500"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
