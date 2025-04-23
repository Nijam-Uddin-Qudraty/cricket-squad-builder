import { useEffect } from "react";
import { useState } from "react"
import Head from './head/head'
import Players from './players/Players'
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { GiPartyPopper } from "react-icons/gi";
function App() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch('squad.json').then(res => res.json()).then(data => setPlayers(data))
  }, [])
  const [balance, setBalance] = useState(0);
  const addBalance = () => {
    setBalance(prevBal => prevBal += 10000);
    toast.success("10000$ has been added to your account", {
      position: "top-center",
      icon: <GiPartyPopper className="text-yellow-500"></GiPartyPopper>
    })
  }
  const buyPlayer = (price) => {
    setBalance((prev) => prev -= price);
  };
  const checkBalance = (price) => {
    return balance >= price;
  };
  
  
  
  return (
    <div>
      <Head addBalance = { addBalance } balance = { balance } ></Head >
    <Players players={players} buyPlayer={buyPlayer} balance={balance} checkBalance={checkBalance}></Players>
    <ToastContainer className=""></ToastContainer>
    </div>

  )
}

export default App
