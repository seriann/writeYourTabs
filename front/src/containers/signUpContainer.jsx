import React, { useState } from 'react'
import SignUp from "../components/signUp"

/*class SignUpContainer extends React.Component{
constructor(props){
  super(props)
  this.state= {
    email: "",
    password:"",
    username:"",
    photo:{},
  }
  this.handChange = this.handChange.bind(this)
}

handChange(e){
  const { name } = e.target
  const { value } = e.target
  const obj = {}
  obj[name] = value
  this.setState(obj)
}

  render(){
    return(
      <SignUp />
    )
  }
}*/

const SignUpContainer = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const [photo, setPhoto] = useState({})

  const handleChange = (e) => {
    const { name } = e.target
    switch (name) {
      case "email":
        setEmail(e.target.value)
        break;
      case "password":
        setPassword(e.target.value)
       break;
       case "username":
         setUsername(e.target.value)
        break;
        case "photo":
          setPhoto(e.target.value)
          console.log(photo);
         break;
      default:
        return;
    }
  }

  return(
    <SignUp
    getFile={getFile}
    username={username}
    photo={photo}
    setPhoto={setPhoto}
    handleChange={handleChange}
    email={email}
    password={password}
    />
  )
}

export default SignUpContainer
