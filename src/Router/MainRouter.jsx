import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MainPage from '../Component/MainPage'
import Checkout from '../Component/Checkout'
import SaveTransaction from '../Component/SaveTransaction'

export default function MainRouter() {
  return (
    <Router>
        <Routes>
            <Route path="/main" element={<MainPage/>}></Route>
            <Route path="/checkout" element={<Checkout/>}></Route>
            <Route path="/saved" element={<SaveTransaction/>}></Route>
        </Routes>
    </Router>
  )
}
