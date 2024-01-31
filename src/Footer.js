import React from 'react'
const Footer = ({length}) => {
  return (
    <footer>
        <p>{length} list {length<2? 'item' : 'items'} are there</p>
    </footer>
  )
}


export default Footer