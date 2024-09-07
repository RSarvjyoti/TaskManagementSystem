import React from 'react'
import '../styles/footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; {new Date().getFullYear()} created by Sarvjyoti. Manage Your Taska</p>
      <p>
        <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
      </p>
    </div>
  )
}

export default Footer
