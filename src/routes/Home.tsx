import classNames from 'classnames'
import React from 'react'
import Navbar from '../components/Navbar'

interface Props {
  
}

const Home = (props: Props) => {
  const homeClass = classNames({
    'h-full bg-gray-500': true
  })

  return (
    <div className={homeClass}> 
      <Navbar />
    </div>
  )
}

export default Home;