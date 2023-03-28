import React from "react";

function CountryFilter({clients, setFilter}) {
    function filterByThis(event) {
        setFilter(event.target.value);
    }

    // Countries extraction
    let countries = ["All",];
    for (let client of clients) {
        if (!countries.includes(client.country)) {
            countries.push(client.country);
        }
    }

    // Building countries list
    let options = [];
    for (let country of countries) {
        options.push(<option value={country}>{country}</option>);
    }

    return (<select name="countries" id="countries" onChange={filterByThis}> {options} </select>);
}

export default CountryFilter;