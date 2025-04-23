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
    setBalance((prev) => prev -= price)
  };
  const checkBalance = (price) => {
    if (price < balance || balance <= 0) {
      return false
    }
    return true
  }
  
  
  return (
    <>
    
      <Head addBalance={addBalance} balance={balance}></Head>
      <Players players = {players} buyPlayer = {buyPlayer} balance ={balance} checkBalance ={checkBalance}></Players>
      
    </>
  )
}

export default App
