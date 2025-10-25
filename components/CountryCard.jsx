import React from 'react'

function CountryCard({ flag, name, population, region, capital }) {
    return (
        <div className="country-card">
            <div className="image">
                <img src={flag} alt="" />
            </div>

            <div className="content">
                <h2 className='card-title'>{name}</h2>
                <p className='population'><b>Population:</b> &nbsp; {population}</p>
                <p className='region'><b>Region:</b> &nbsp; {region ?? 'No Region'}</p>
                <p className='capital'><b>Capital:</b> &nbsp; {capital ?? 'No Capital'}</p>
            </div>
        </div>
    )
}

export default CountryCard