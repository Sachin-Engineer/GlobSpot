import React from 'react'
import './CountryDetailShimmer.css'

function CountryDetailShimmer() {
    return (
        <>
            <div className="child left-detail img detail-bg-color">
                <img src='' alt="" />
            </div>

            <div className="child right-detail">
                <h2 className="country-name c-name detail-bg-color"></h2>

                <div className="sub-detail">
                    <div className="child left">
                        <p className='text-1 detail-bg-color'></p>
                        <p className='text-2 detail-bg-color'></p>
                        <p className='text-3 detail-bg-color'></p>
                        <p className='text-4 detail-bg-color'></p>
                        <p className='text-5 detail-bg-color'></p>
                    </div>

                    <div className="child right">
                        <p className='text-6 detail-bg-color'></p>
                        <p className='text-7 detail-bg-color'></p>
                        <p className='text-8 detail-bg-color'></p>
                    </div>
                </div>

                <div className='border-countries b-country detail-bg-color'>
                    
                </div>
            </div>
        </>
    )
}

export default CountryDetailShimmer