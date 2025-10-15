import React from "react";

function Timetable({ data }) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Subject</th>
            <th>Time</th>
            <th>Teacher</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.day}</td>
              <td>{item.subject}</td>
              <td>{item.time}</td>
              <td>{item.teacher}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Timetable;
