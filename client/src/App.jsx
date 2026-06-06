import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import InterviewPage from "./pages/InterviewPage";
import InterviewHistory from './pages/InterviewHistory'
import Pricing from './pages/Pricing'
import InterviewReport from './pages/InterviewReport'

import Home from './pages/Home'
import Auth from './pages/Auth'
import { setUserData } from './redux/userSlice'

export const ServerUrl = "https://sameer-jeswani-ai-interview.onrender.com"

function App() {

  const dispatch = useDispatch()

  useEffect(() => {

    const getUser = async () => {

      try {

        const result = await axios.get(
          ServerUrl + "/api/user/current-user",
          {
            withCredentials: true
          }
        )

        dispatch(setUserData(result.data))

      } catch (error) {

        console.log(error)
        dispatch(setUserData(null))

      }
    }

    getUser()

  }, [dispatch])

  return (
    <div className='bg-white min-h-screen text-black'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/interview' element={<InterviewPage />} />
        <Route path='/history' element={<InterviewHistory />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/report/:id' element={<InterviewReport />} />
      </Routes>
    </div>
  )
}

export default App
