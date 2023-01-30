import React from "react";
import "./BookingSlot.css";

const BookingSlot = ({ times }) => {
  const loaded = localStorage.getItem("reserved");
  console.log(loaded);
  return (
    <div className="myTable">
      <table>
        <tr>
          <th colSpan={times.length}>Available Times for today</th>
        </tr>
        <tr>
          {times.map((d) => (
            <td key={d}>{d}</td>
          ))}
        </tr>
        <tr>
          <th colSpan={times.length}>Your reserved time</th>
        </tr>
        <tr>
          <td colSpan={times.length}>{loaded}</td>
        </tr>
      </table>
    </div>
  );
};

export default BookingSlot;
