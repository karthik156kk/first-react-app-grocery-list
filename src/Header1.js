import React from 'react'
const Header1 = (
                  // props
                  {title} //like object destructuring
                  ) => {
/*   const headerStyle = {
      backgroundColor: 'gray',
      color: 'white' 
  } */
  return (
    <header
    // style={{
    //   backgroundColor: 'gray',
    //   color: 'white'
    // }}
    // style={headerStyle}
    >
        <h1>{title}</h1>
    </header>
  )
}

Header1.defaultProps = {
  title : 'default title '
}
export default Header1