import { useState, useEffect } from 'react'
import axios from "axios"


function App() {

  //creating state
  const [leagueChamps, setLeagueChamps] = useState([])
  const [count, setCount] = useState(1)
  const [starWarsData, setStarWarsData] = useState([])
  
  //incrementing count
  function incCount() {
    setCount(prevCount => prevCount + 1)
  }

  //get request on mount
  // useEffect(() => {
  //   axios.get(`https://swapi.dev/api/people/${count}`)
  //     .then(res => setStarWarsData(res.data))
  //     .catch(err => console.log(err))
  // }, [])

  useEffect(()=> {
    axios.get("https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json")
      .then(res => setLeagueChamps(Object.values(res.data.data)))
      .catch(err => console.log(err))
  }, [])

  const champsList = leagueChamps.map(champ => {
    return (
      <>
        <h2>{champ.name}</h2>
        <p>{champ.blurb}</p>
        <img src = {`https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/${champ.image.full}`}/>
      </>
    )
  })

  console.log(leagueChamps)
  
  return (
    <div className="container">
      <h1>{starWarsData.name}</h1>
      <h1>API CALLS</h1>
      <p>axios</p>
      <p>fetch</p>
      <p>the response</p>
      <p>infinite loops</p>
      <p>useEffect</p>
      <button onClick={incCount}>Click Me</button>
      {champsList}
    </div>
  )
}

export default App
