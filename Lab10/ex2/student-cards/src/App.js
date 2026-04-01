import React from "react";
import StudentCard from "./components/StudentCard";
import "./App.css";

function App() {
  const students = [
    { name: "Dhruv", department: "CSE - AI & ML", marks: 92 },
    { name: "Aarav", department: "Mechanical", marks: 85 },
    { name: "Priya", department: "ECE", marks: 88 }
  ];

  return (
    <div className="container">
      <h1>Student Cards</h1>

      <div className="card-container">
        {students.map((student, index) => (
          <StudentCard
            key={index}
            name={student.name}
            department={student.department}
            marks={student.marks}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
