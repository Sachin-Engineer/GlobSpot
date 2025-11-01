import React from 'react'
import './CountryCardShimmer.css'

function CountryCardShimmer() {
    return (
        <div className="country-card shimmer-card">
            <div className="image bg-color">
                {/* <img src='' alt="" /> */}
            </div>

            <div className="content shimmer-flex">
                <h2 className='card-title ctitle bg-color'></h2>
                <p className='population text-1 bg-color'></p>
                <p className='region text-2 bg-color'></p>
                <p className='capital text-3 bg-color'></p>
            </div>
        </div>
    )
}

export default CountryCardShimmer