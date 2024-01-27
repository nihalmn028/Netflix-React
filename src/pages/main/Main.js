import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Banner from '../../components/banner/Banner'
import Poster from '../../components/poster/Poster'
import { originals } from '../../Urls'
import { actions } from '../../Urls'
function Main() {
  return (
    <div>
      <Navbar/>
      <Banner/>
     
      <Poster url={actions} title=' Actions' issmall={true}/>
      <Poster url={originals} title='Netflix Originals'/>
    </div>
  )
}

export default Main