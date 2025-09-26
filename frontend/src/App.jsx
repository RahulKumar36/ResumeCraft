import React from "react";
import {Routes,Route} from 'react-router-dom'
import LandingPage from "./pages/landingPage";
import { Dashboard } from "./pages/Dashboard";
import EditResume from "./components/EditResume";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/resume/:resumeId' element={<EditResume/>}></Route>

      </Routes>

      <Toaster toastOptions={{
          className:"",
          style:{
            fontSize: "13px"
          }

        }}>

        </Toaster>
    </>
  )
}

export default App;