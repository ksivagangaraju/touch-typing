import React from 'react'
import '../TouchTyping/index.css'
import './index.css'

const NotFound = () => (
    <div className="not-found-container">
        <img src="https://res.cloudinary.com/dpmyvq5te/image/upload/v1675474878/Covid19/Group_7484_shalpp.png" className="not-found-image" alt="not found" />
        <p className='inst'>Not Found Page</p>
        <a href="/">
            <button className='button' type='button'>Back</button>
        </a>
    </div>
)

export default NotFound