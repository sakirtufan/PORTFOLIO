import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'

export default function Home() {
  const buttons = [
    {name:'Portfolio', href: '/portfolio'},
    {name:'Work Experience', href: '/work'},
    {name:'Skills & Education', href: '/skills'},
    {name:'About', href: '/about'}
  ]
  return (
    <div>
      <Navbar buttons={buttons}/>
      <Hero buttons={buttons}/>
    </div>
  )
}

