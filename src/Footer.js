import React from 'react'
const today = new Date();
const Footer = () => {
  return (
    <footer>Copyright &copy; {today.getFullYear()}</footer>
  )
}

export default Footer