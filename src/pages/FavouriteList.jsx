import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

export function FavouriteList() {
  // Context-la irundhu favList and removeFavourite extract panrom
  const { favList, removeFavourite } = useContext(StudentContext);

  return (
    <div>
      <div className="mb-6">
        <p className="text-sm font-medium text-cocoa-500">Your selected students</p>
        <h2 className="mt-1 text-2xl font-bold text-cocoa-900">Favourite Students</h2>
      </div>

      {favList.length === 0 ? (
        <div className="rounded-xl border border-dashed border-cocoa-200 bg-cocoa-50 p-8 text-center">
          <p className="font-semibold text-cocoa-700">No favourite students added yet</p>
          <p className="mt-1 text-sm text-cocoa-500">Choose students from the student list to see them here.</p>
        </div>
      ) : (
        <ul className="space-y-3">
          {favList.map((student) => (
            <li
              key={student.id}
              className="flex items-center justify-between gap-4 rounded-xl border border-cocoa-100 p-3 transition hover:border-cocoa-200 hover:bg-cocoa-50/50"
            >
              <span className="flex items-center gap-3 font-semibold text-cocoa-900">
                <span className="grid size-9 place-items-center rounded-full bg-cocoa-100 text-cocoa-700">♥</span>
                {student.name}
              </span>
              <button
                onClick={() => removeFavourite(student.id)}
                className="rounded-lg border border-cocoa-200 px-3 py-1.5 text-sm font-semibold text-cocoa-700 transition hover:border-red-300 hover:bg-red-50 hover:text-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cocoa-600"
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
