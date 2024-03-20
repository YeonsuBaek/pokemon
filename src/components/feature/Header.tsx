import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="flex items-center justify-center h-12">
      <Link to="/">
        <h1 className="text-2xl font-bold">포켓몬, 고!</h1>
      </Link>
    </header>
  )
}

export default Header
