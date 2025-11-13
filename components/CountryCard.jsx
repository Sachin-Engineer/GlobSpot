import React from 'react'
import { Link } from 'react-router-dom'

function CountryCard({country}) {

    return (
        <Link to={`/${country.name.common}`} className="country-card" state={country}>
            <div className="image">
                <img src={country.flags.png} alt="" />
            </div>

            <div className="content">
                <h2 className='card-title dotDotDot'>{country.name.common}</h2>
                <p className='population'><b>Population:</b> &nbsp;{country.population.toLocaleString('en-IN')}</p>
                <p className='region'><b>Region:</b> &nbsp;{country.region ?? 'No Region'}</p>
                <p className='capital dotDotDot'><b>Capital:</b> &nbsp;{country.capital.length !== 0 ? country.capital.join(', ') : 'N/A'}</p>
            </div>
        </Link>
    )
}

export default CountryCard