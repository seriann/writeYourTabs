import React, { useState } from 'react'
import SignUp from "../components/signUp"
import API from "../api/index"

const SignUpContainer = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const [image, setImage] = useState({})
  const [errBool, setErrBool] = useState(false)
  const [errMsg, setErrMsg] = useState("")
  const [name, setName] = useState("")

  const handleChange = (e) => {
    const { name } = e.target
    switch (name) {
      case "email":
        setEmail(e.target.value)
        break;
        case "name":
          setName(e.target.value)
          break;
      case "password":
        setPassword(e.target.value)
       break;
       case "username":
         setUsername(e.target.value)
        break;
      default:
        return;
    }
  }

  const handleImgError = ({error}) => {
    setErrMsg(error)
    setErrBool(true)
    setTimeout(()=>{ setErrBool(false) },5000)
    console.log(error)
  }

  const handleFile = (file) => {
    setImage(file)
    console.log(image);
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    API.post("/users",{
      name,
      email,
      password,
      username,
      image,
    })
       .then(res => res.data)
       .then(data => console.log("created",data))
       .catch(err=>console.log(err))
  }

  return(
    <SignUp
    username={username}
    image={image}
    name={name}
    email={email}
    password={password}
    errBool={errBool}
    errMsg={errMsg}
    handleSubmit={handleSubmit}
    handleChange={handleChange}
    handleImgError={handleImgError}
    handleFile={handleFile}
    />
  )
}

export default SignUpContainer
