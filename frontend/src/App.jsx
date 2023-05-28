import axios from "axios"

import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)
  const [profileData, setProfileData] = useState(null)

  function getData() {
    axios({
      method: "GET",
      url: "http://127.0.0.1:5000/profile",
    })
    .then((response) => {
      const res = response.data
      setProfileData(({
        profile_name: res.name,
        test: res.test
      }))
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response)
      }
    })
  }

  return (
    <>
      <p>To get your profile details: </p><button onClick={getData}>Click me</button>
        {profileData && <div>
              <p>Profile name: {profileData.profile_name}</p>
              <p>test: {profileData.test}</p>
            </div>
        }
    </>
  )
}

export default App
