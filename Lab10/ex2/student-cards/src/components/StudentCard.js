import React from "react";

function StudentCard(props) {
  return (
    <div style={styles.card}>
      <h2>{props.name}</h2>
      <p><strong>Department:</strong> {props.department}</p>
      <p><strong>Marks:</strong> {props.marks}</p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "15px",
    margin: "10px",
    width: "200px",
    textAlign: "center",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)"
  }
};

export default StudentCard;
