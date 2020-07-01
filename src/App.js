import React from "react";
import Table from "./components/Table/Table";

function App() {
    let students = [
        {
            name: "Sinta",
            age: 18,
            sex: "female",
            address: "Grobogan",
        },
        {
            name: "Junita",
            age: 18,
            sex: "female",
            address: "Putat",
        },
        {
            name: "Indah",
            age: 16,
            sex: "female",
            address: "Kudus",
        },
        {
            name: "Riko",
            age: 21,
            sex: "male",
            address: "Jakarta",
        },
    ];

    return (
        <div>
            <Table students={students} />
        </div>
    );
}

export default App;
