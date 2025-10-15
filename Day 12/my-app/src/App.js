import React from "react";
import Timetable from "./Timetable"; // Correct import
import "./App.css";

function App() {
  const schedule = [
    { day: "Monday", subject: "DBMS", time: "9:00 - 10:00 AM", teacher: "Prof. Sharma" },
    { day: "Monday", subject: "AI", time: "10:00 - 11:00 AM", teacher: "Prof. Mehta" },
    { day: "Tuesday", subject: "Web Development", time: "9:00 - 10:00 AM", teacher: "Prof. Khan" },
    { day: "Wednesday", subject: "DSA", time: "11:00 - 12:00 PM", teacher: "Prof. Roy" },
    { day: "Thursday", subject: "Python Lab", time: "1:00 - 3:00 PM", teacher: "Prof. Gupta" },
    { day: "Friday", subject: "Computer Networks", time: "10:00 - 11:00 AM", teacher: "Prof. Rao" },
  ];

  return (
    <div className="App">
      <h1>📅 My Advanced Timetable (5th Sem)</h1>
      <Timetable data={schedule} />
    </div>
  );
}

export default App;
