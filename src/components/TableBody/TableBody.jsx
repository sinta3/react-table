import React from "react";

function TableBody(props) {
    const rows = props.students.map((student, index) => (
        <tr key={index}>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.sex}</td>
            <td>{student.address}</td>
        </tr>
    ));
    return <tbody>{rows}</tbody>;
}

export default TableBody;
