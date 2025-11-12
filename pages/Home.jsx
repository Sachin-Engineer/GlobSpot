import React, { useContext, useEffect, useState } from 'react'
import CountryCard from '../components/CountryCard'
import CountryCardShimmer from '../components/CountryCardShimmer'
import ThemeContext from '../contexts/ThemeContext'
// import countries from './data.js'

function Home() {
    const [query, setQuery] = useState('')
    const [countries, setCountries] = useState([])
    const [region, setRegion] = useState('')
    const [isLoading, setLoading] = useState(true)
    const [isDarkMode] = useContext(ThemeContext)
    // console.log(isDarkMode)

    useEffect(() => {
        if (region === '') {
            fetch('https://restcountries.com/v3.1/all?fields=name,flags,capital,cca3,population,region,subregion,tld,currencies,languages')
                .then(res => res.json())
                .then(data => {
                    setCountries(data)
                    setLoading(false)
                })
        } else {
            fetch(`https://restcountries.com/v3.1/region/${region}?fields=name,flags,capital,cca3,population,region,subregion,tld,currencies,languages`)
                .then(res => res.json())
                .then(data => {
                    setCountries(data)
                    setLoading(false)
                })
        }
    }, [region])

    return (
        <>
            {/* <Header /> */}

            <main className={isDarkMode ? 'darkmode' : ''}>
                <div className="search-container">
                    <div className="search-box">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input onChange={(e) => setQuery(e.target.value)} id='search' type="search" placeholder="Search for a country..." />
                    </div>

                    <div className="region-box">
                        <select onChange={(e) => setRegion(e.target.value)} name="region" id="region">
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
                        isLoading ? (
                            Array.from({length: 20}).map((_, i) => {
                                return <CountryCardShimmer key={i} />
                            })
                        ) : (
                            countries.filter((country) => {
                                return country.name.common.toLowerCase().includes(query.toLowerCase())
                            }).map((country) => {
                                return (
                                    <CountryCard
                                        key={country.cca3}
                                        // flag={country.flags.png}
                                        // name={country.name.common}
                                        // population={country.population}
                                        // region={country.region}
                                        // capital={country.capital}
                                        country={country}
                                    />
                                )
                            })
                        )
                    }
                </section>
            </main>
        </>
    )
}

export default Home