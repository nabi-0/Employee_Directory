import React from "react";
//import Search from "./SearchForm"
//import API from "../utils/API";

function Directory(props) {
    const matched_employee = props.employee.filter(employee => employee.name.first.toLowerCase().includes(props.search.toLowerCase()));

    return (
        //html component//
        <table className="employee-group">
            <tr>
                <th>Employee</th>
                <th>Last Name:</th>
                <th>First Name:</th>
                <th>Email:</th>
                <th>Phone:</th>
            </tr>
            {matched_employee.map(peep => (
                <tr className="employee-group-item" key={peep.id}>
                    <td><img src={peep.picture?.thumbnail} alt="profile pic" /></td>
                    <td>{peep.name?.last}</td>
                    <td>{peep.name?.first}</td>
                    <td>{peep.email}</td>
                    <td>{peep.phone}</td>
                </tr>
            ))}
        </table >
    );
}

export default Directory;
