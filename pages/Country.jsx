import React, { useContext, useEffect, useState } from 'react'
import Button from '../components/Button'
import { useLocation, useParams } from 'react-router-dom'
import CountryDetailShimmer from '../components/CountryDetailShimmer.jsx'
import ThemeContext from '../contexts/ThemeContext.js'

function Country() {
  const countryName = useParams().Country
  const { state } = useLocation()
  // console.log(state)
  const [country, setCountry] = useState([])
  const [borderCountries, setBorderCountries] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [isDarkMode] = useContext(ThemeContext)

  useEffect(() => {
    if (state) {
      setCountry(state)
      setLoading(false)
      // console.log(state)
      fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true&fields=maps,borders`)
        .then(res => res.json())
        .then(([data]) => {
          // console.log(data.borders)
          if (data.borders && data.borders.length > 0) {
            Promise.all(
              data.borders.map(border => 
                fetch(`https://restcountries.com/v3.1/alpha/${border}?fields=name,cca3`)
                  .then(res => res.json())
              )
            ).then(borderData => setBorderCountries(borderData))
          }
        })
    }
    else {
      fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true&fields=name,flags,capital,cca3,population,region,subregion,maps,tld,currencies,languages,borders`)
        .then(res => res.json())
        .then(([data]) => {
          setCountry(data)
          setLoading(false)

          // Fetch border countries data
          if (data.borders && data.borders.length > 0) {
            Promise.all(
              data.borders.map(border =>
                fetch(`https://restcountries.com/v3.1/alpha/${border}?fields=name,cca3`)
                  .then(res => res.json())
              )
            ).then(borderData => setBorderCountries(borderData))
          }
        })
    }
  }, [countryName])

  return (
    <main className={isDarkMode ? 'darkmode' : ''}>
      <section>
        <div className="btn-container">
          <button onClick={() => { history.back() }}><i className="fa fas fa-arrow-left"></i> Back</button>
        </div>

        <div className="country-details">
          {
            isLoading ? (
              <CountryDetailShimmer />
            ) : (
              <>
                <div className="child left-detail">
                  <img src={country.flags?.svg} alt="" />
                </div>

                <div className="child right-detail">
                  <h2 className="country-name">{country.name?.common}</h2>

                  <div className="sub-detail">
                    <div className="child left">
                      <p><b>Native Name:</b>&nbsp; {country.name?.official}</p>
                      <p><b>Population:</b>&nbsp; {country?.population?.toLocaleString('en-IN')}</p>
                      <p><b>Region:</b>&nbsp; {country?.region}</p>
                      <p><b>Sub Region:</b>&nbsp; {country?.subregion}</p>
                      <p><b>Capital:</b>&nbsp; {country?.capital?.join(', ')}</p>
                    </div>

                    <div className="child right">
                      <p><b>Top Level Domain:</b>&nbsp; {country?.tld}</p>
                      <p><b>Currencies:</b>&nbsp; {country?.currencies ? Object.values(country.currencies).map(curr => curr.name).join(', ') : 'N/A'}</p>
                      <p><b>Language:</b>&nbsp; {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</p>
                    </div>
                  </div>

                  <div className={`border-countries ${borderCountries.length === 0 ? 'hidden' : ''}`}>
                    <b>Border Countries:</b>
                    <div className='border-countries-btn-box'>
                      {
                        borderCountries.length > 0 ?
                          borderCountries.map(border => (
                            <Button
                              key={border.cca3}
                              name={border.name?.common}
                            />
                          ))
                          :
                          <p>No Borders</p>
                      }
                    </div>
                  </div>
                </div>
              </>
            )
          }
        </div>
      </section>
    </main>
  )
}

export default Country