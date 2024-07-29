import { useState } from 'react'
import axios from "axios"


function App() {
  
  const [leagueChamps, setLeagueChamps] = useState([])
// https://swapi.dev/api/people/1
// https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json

  // axios.get("https://swapi.dev/api/people/")
  //   .then(res => console.log(res.data))
  //   .catch(err => console.log(err))

  axios.get("https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json")
    .then(res => console.log(Object.values(res.data.data)))
    .catch(err => console.log(err))

    console.log("Component Rendered")

  return (
    <div className = "container">
      <h1>API CALLS</h1>
        <p>axios</p>
        <p>fetch</p>
        <p>the response</p>
        <p>infinite loops</p>
        <p>useEffect</p>
    </div>
  )
}

export default App
