import React from 'react'
import { NavLink } from 'react-router-dom'
import css from './Header.module.css'

export const Header = () => {
  return (
    <div className={css.headerContainer}>
   <header className={css.header}>
    <nav className={css.navigation}>
        <NavLink to={'/'} end className={({ isActive }) => (isActive ? css.linkActive : css.link)}>Home</NavLink>
        <NavLink to={'/movies'} end className={({ isActive }) => (isActive ? css.linkActive : css.link)} >Movies</NavLink>
    </nav> 
   </header>
   </div>
  )
}
