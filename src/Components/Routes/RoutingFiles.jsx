import React from 'react'
import React, { Component } from 'react'
import {Routes,Route} from 'react-router-dom'
import Searched_movie from '../Searched_movie'
import Single_movie from '../Single_movie'
import Top_rated_page from '../Top_rated_page'
import Upcoming from '../Upcoming'
import Home from '../Home'

export class RoutingFiles extends Component {
  render() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Searchmovie" element={<Searched_movie/>}/>
            <Route path="/singlemovie" element={<Single_movie/>}/>
            <Route path="/Topratedpage" element={<Top_rated_page/>}/>
            <Route path="/Upcoming" element={<Upcoming/>}/>

      </Routes> 
    )
  }
}

export default RoutingFiles