import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SharedLayout } from './SharedLayout/SharedLayout'
import { HomePage } from 'pages/HomePage/HomePage'
import {MoviePage } from 'pages/MoviePage/MoviePage'
import { MovieDetailsPage } from 'pages/MovieDetailsPage/MovieDetailsPage'
import { CastList } from './CastList/CastList'
import { Reviews } from './Reviews/Reviews'
import { ErrorPage } from 'pages/ErrorPage/ErrorPage'



export const App = () => {
  return (
    <>
      <Routes>
        |<Route path='/' element={<SharedLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='movies' element={<MoviePage/>}/>
            <Route path=':moviesId' element={<MovieDetailsPage/>}>
              <Route path='cast' element={<CastList/>}/>
              <Route path='Reviews' element={<Reviews/>}/>
            </Route>
        </Route> 
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </>
  )
}