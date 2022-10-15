import React from 'react'
import './style.css'
export const EmailForm = () => {
  return (
    <>
    <h1 className="footer-item-title">Subscribe to newsletter</h1>
          <div className="email-section">
            <input
              type="email"
              id="Email"
              name="Email"
              placeholder="Enter your email"
              className="email-input"
              required
            />
            <button type='submit' className="subscribe-btn">Subscribe</button>
          </div>
    </>
  )
}
export default EmailForm