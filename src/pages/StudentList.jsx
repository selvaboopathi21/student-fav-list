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
      <h2>List of Students</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <label htmlFor="student-name">Student name: </label>
        <input
          id="student-name"
          type="text"
          value={studentName}
          onChange={(event) => {
            setStudentName(event.target.value);
            if (error) setError("");
          }}
          placeholder="Enter student name"
        />
        <button type="submit" style={{ marginLeft: "8px" }}>
          Add Student
        </button>
        {error && <p role="alert">{error}</p>}
      </form>
      <ul>
        {students.map((student) => {
          // Already favourite list-la irukana check panrom
          const isFav = favList.some((item) => item.id === student.id);

          return (
            
            <li key={student.id} style={{ margin: "10px 0" }}>
              <span>{student.id}. {student.name} </span>
              <button 
                onClick={() => addFavourite(student)}
                disabled={isFav}
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
