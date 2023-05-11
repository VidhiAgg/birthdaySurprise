import React from 'react'
import {Link} from'react-router-dom'

const MainPage = () => {
  return (
    <div className='container'>
      <h1>Hii! Happy to see you here :-)</h1>
     <Link to ={'/message'} className='homeLink'> <h2>Click me! to start</h2> </Link>
    </div>
  )
}

export default MainPage