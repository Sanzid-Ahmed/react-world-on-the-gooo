import React, { use } from 'react';
import { useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([])


    const handleVisitedCountries = (country) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }


    const handleVisitedFlag = (flag) => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }


    const contriesData = use(countriesPromise);
    const countries = contriesData.countries
    console.log(countries);
    return (
        <div>
            <h1>In the countries: {countries.length}</h1>
            <h3>Total country visited: {visitedCountries.length}</h3>
            <h3>Total flags visited: {visitedFlags.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div className='visited-flags-container'>
                {
                    visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
                }
            </div>
            <div className='Countries'>
                {
                    countries.map(country => <Country
                        key={country.cca3.cca3}
                        country={country}
                        handleVisitedCountries = {handleVisitedCountries}
                        handleVisitedFlag = {handleVisitedFlag}
                        ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;