import { useEffect } from "react";
import { useState } from "react"
import Head from './head/head'
import Players from './players/Players'
function App() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch('squad.json').then(res=>res.json()).then(data=>setPlayers(data))
  }, [])
  const [balance, setBalance] = useState(0);
  const addBalance = ()=> {
    setBalance(prevBal=> prevBal += 10000);
  }
  const buyPlayer = (price) => {
    setBalance((prev) => {
      if (prev <= 0 || prev < price) {
        return prev; 
      } else {
        return prev -= price; 
      }
    });
  };
  
  
  return (
    <>
    
      <Head addBalance={addBalance} balance={balance}></Head>
      <Players players = {players} buyPlayer = {buyPlayer}></Players>
      
    </>
  )
}

export default App
