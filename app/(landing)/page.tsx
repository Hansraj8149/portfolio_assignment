import  Navbar  from '@/components/Navbar'
import React from 'react'
import Hero from '@/components/Hero'
import Project from '@/components/Project'
import Skill from '@/components/Skill'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
const Landing = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Project/>
      <Skill/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Landing
