import React from 'react'
import { Link } from 'react-router-dom'

function CountryCard({ flag, name, population, region, capital }) {
    return (
        <Link to={`/${name}`} className="country-card">
            <div className="image">
                <img src={flag} alt="" />
            </div>

            <div className="content">
                <h2 className='card-title dotDotDot'>{name}</h2>
                <p className='population'><b>Population:</b> &nbsp;{population.toLocaleString('en-IN')}</p>
                <p className='region'><b>Region:</b> &nbsp;{region ?? 'No Region'}</p>
                <p className='capital dotDotDot'><b>Capital:</b> &nbsp;{capital.join(', ')}</p>
            </div>
        </Link>
    )
}

export default CountryCard