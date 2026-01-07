import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <>
    <h1>About</h1>
    <div className='flex justify-between'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/cart'>Cart</NavLink>
    </div>
    
    <div>Hello everyone <br />
      We are a team of passionate creators and problem-solvers driven by innovation. Our mission is to build digital experiences that are not only functional but also intuitive and engaging. We believe in the power of clean code, thoughtful design, and putting the user first.

      Our Tech Stack: React, Node.js, and modern web technologies.
    </div>
    </>
  )
}

export default About