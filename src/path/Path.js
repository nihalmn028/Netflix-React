import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from '../pages/home/Home';
import Main from '../pages/main/Main';
function Path() {
  return (
    <div>
      <BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/main" element={<Main/>}></Route>

    </Routes></BrowserRouter>
    </div>
  )
}

export default Path