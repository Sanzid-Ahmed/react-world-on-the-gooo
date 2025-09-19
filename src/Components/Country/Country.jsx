import React from 'react';
import { useState } from "react";
import './Country.css'


const Country = ({country, handleVisitedCountries}) => {

    // eslint-disable-next-line no-undef
    const [visited, setVisited] = useState(false);

    // console.log(country.flags.flags);

    const handleVisited = () =>{
        if(visited){
            // eslint-disable-next-line no-undef
            setVisited(false);
        }
        else{
            setVisited(true);
        }

        handleVisitedCountries(country)
    }

    return (
        <div className={`country ${visited && 'country-visited'} `}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt}/>
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 30000 ? "Big Country" : "Small Country"}</p>
            <button onClick={handleVisited}>{visited?"Visited":"Not Visited"}</button>
        </div>
    );
};

export default Country;