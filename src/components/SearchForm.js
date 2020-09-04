import React, { useState } from "react";

//import Directory from "./Directory";

function SearchForm(props) {

    return (
        <div>
            <div className="jumbotron search-bar">
                <h1 className="title">Employee Directory</h1>
                <div className="form-group">
                    <input
                        className="form-input"
                        type="text"
                        placeholder="Search"
                        // created an onChange event to handle the setSearch, then setSearch passes the value to search
                        onChange={(e) => props.setsearch(e.target.value)}
                    ></input>
                </div>
            </div>
        </div>
    );
}

export default SearchForm;