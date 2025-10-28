import React, { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import CountryCard from './components/CountryCard.jsx'
// import countries from './data.js'

function App() {
    const [query, setQuery] = useState('')

    const [countries, setCountries] = useState([])
    
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=name,flags,capital,cca3,population,region,maps')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <>
            <Header />

            <main>
                <div className="search-container">
                    <div className="search-box">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input onChange={(e) => setQuery(e.target.value)} id='search' type="search" placeholder="Search for a country..." />
                    </div>

                    <div className="region-box">
                        <select name="region" id="region">
                            <option value="" hidden>Filter by Region</option>
                            <option value="Africa">Africa</option>
                            <option value="Americas">Americas</option>
                            <option value="Asia">Asia</option>
                            <option value="Europe">Europe</option>
                            <option value="Oceania">Oceania</option>
                        </select>
                    </div>
                </div>

                <section className="countries-container">
                    {
                        countries.filter((country) => {
                            return country.name.common.toLowerCase().includes(query.toLowerCase())
                        }).map((country) => {
                            return (
                                <CountryCard
                                    key={country.cca3}
                                    flag={country.flags.png}
                                    name={country.name.common}
                                    population={country.population}
                                    region={country.region}
                                    capital={country.capital}
                                />
                            )
                        })
                    }
                </section>
            </main>
        </>
    )
}

export default App