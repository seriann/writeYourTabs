import React, { useState } from 'react'
import SignUp from "../components/signUp"
import API from "../../../api/index"

const SignUpContainer = ({ goBack }) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const [image, setImage] = useState([])
  const [errBool, setErrBool] = useState(false)
  const [errMsg, setErrMsg] = useState("")
  const [name, setName] = useState("")
  const [isLoading, setIsLoading] = useState(false)

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
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()
    setIsLoading(true)

    try{
      const formData = new FormData()

      formData.append('name', name)
      formData.append('email', email)
      formData.append('password', password)
      formData.append('username', username)
      formData.append('image', image)

      const response = await API({
        url:'/users',
        method: 'POST',
        data:formData
      })
      setIsLoading(false)
      goBack()
      return response
    } catch (e) {
      console.log(e)
      setIsLoading(false)
      setErrBool(true)
      setErrMsg("try with other email or username")
      setTimeout(()=> {
        setErrMsg("")
        setErrorBool(false)
      },5000)
    }
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
    isLoading={isLoading}
    />
  )
}

export default SignUpContainer
