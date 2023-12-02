import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <>
        <div className="news-letter">
            <h1>Get Exclusive Offers on Your Email</h1>
            <p>Subscribe to our News Letter and Stay Updated</p>
            <div>
                <input type="email" name="email" id="email" placeholder='Your Email'/>
                <button>Subscribe</button>
            </div>
        </div> 
    </>
  )
}

export default NewsLetter
