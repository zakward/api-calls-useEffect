import { useState, useEffect } from 'react'
import axios from "axios"


function App() {
  
  const [leagueChamps, setLeagueChamps] = useState([])
  const [count, setCount] = useState(0)
  function incCount(){
    setCount(prevCount => prevCount + 1)
  }

// https://swapi.dev/api/people/1
// https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json

  const [starWarsData, setStarWarsData] = useState([])

  useEffect(() => {
    axios.get("https://swapi.dev/api/people/")
    .then(res => setStarWarsData(res.data.results))
    .catch(err => console.log(err))
    console.log('Component Mounted')
  }, [])

  console.log(starWarsData)

  // axios.get("https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json")
  //   .then(res => console.log(Object.values(res.data.data)))
  //   .catch(err => console.log(err))


    console.log("Component Rendered")

  return (
    <div className = "container">
      <h1>API CALLS</h1>
        <p>axios</p>
        <p>fetch</p>
        <p>the response</p>
        <p>infinite loops</p>
        <p>useEffect</p>
        <button onClick={incCount}>Click Me</button>
    </div>
  )
}

export default App
