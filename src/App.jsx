import React from 'react'
import './App.css'
import Bank from './components/bank.jsx'
import BancosPantalla from './components/bancosPantalla.jsx'
import VincularBank from './components/VincularBank.jsx'
import CommentBankIcon from '@mui/icons-material/CommentBank';

function App() {

  return (
    <div>
      <Bank />
      <BancosPantalla />
      <VincularBank icono={<CommentBankIcon />}/>
    </div>
  )
}

export default App
