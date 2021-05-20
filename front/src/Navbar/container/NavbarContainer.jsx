import React, { useState } from 'react'
import Navbar from "../components/Navbar"
import { useHistory } from "react-router-dom";

const NavbarContainer = () => {

const history = useHistory()
const [input, setInput] = useState("")

const handleChange = (e) => {
    setInput(e.target.value)
  }

const handleSubmit = (e) => {
  e.preventDefault()
  history.push(`/search?for=${input}`)
}

  return <Navbar handleChange={handleChange} handleSubmit={handleSubmit} input={input}/>
}

export default NavbarContainer
