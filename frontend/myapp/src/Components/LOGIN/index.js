import { Component } from "react"
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import './index.css'

const roles = [
  {id: 'USER',displayText: 'User'},
  {id: 'SCIENTIST',displayText: 'Scientist'},
  {id: 'ANALYST',displayText: 'Analyst'},
  {id: 'ADMIN',displayText: 'Admin'},
]

class LoginPage extends Component{
  state = {
    userName: '',
    password: '',
    role: roles[0].id,
    isNameEmpty: false,
    isPasswordEmpty: false,
  }

  onSubmit = event => {
    event.preventDefault()
    const {userName,password, role} = this.state
    if(userName === '' || password === '') {
      alert("Enter Your Credentials!!!")
    } else {
      if (role === 'USER') {
        const userDetails = {
          userName,
          password,
          role,
        }
        console.log(userDetails)
      } else if (role === 'ADMIN') {
        const adminDetails = {
          userName,
          password,
          role,
        }
        console.log(adminDetails)
      } else if (role === 'ANALYST') {
        const analystDetails = {
          userName,
          password,
          role,
        }
        console.log(analystDetails)
      } else if (role === 'SCIENTIST') {
        const adminDetails = {
          userName,
          password,
          role,
        }
        console.log(adminDetails)
      }
      this.setState({userName: '', password: '', role: roles[0].id})
    }
  }

  onChangeUSername = event => {
    this.setState({userName: event.target.value})
    console.log("on change name")
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeRole = event => {
    this.setState({role: event.target.value})
  }

  onBlurName = () => {
    const {userName} = this.state
    if(userName === '') {
      this.setState({isNameEmpty: true})
    } else {
      this.setState({isNameEmpty: false})
    }
  }

  onBlurPassword = () => {
    const {password} = this.state
    if(password === '') {
      this.setState({isPasswordEmpty: true})
    } else {
      this.setState({isPasswordEmpty: false})
    }
  }

  render(){
    const {userName, password, role, isNameEmpty, isPasswordEmpty} = this.state
    console.log("rendering")
    return (
      <div className="login-pg-container">
        <form className="login-card-container" onSubmit={this.onSubmit}>
          <h1 className="main-heading">Log in</h1>
          <div className="input-text">
            <TextField
              id="outlined-required"
              label="name"
              type="text"
              placeholder="Enter Your Name"
              autoComplete="off"
              onChange={this.onChangeUSername}
              value={userName}
              className="input-text" 
              onBlur={this.onBlurName}
            />
            {isNameEmpty ? <p className="error-msg">Enter the Name</p> : null}
          </div>
          <div className="input-text">
            <TextField
              id="outlined-password-input"
              label="password"
              type="password"
              value={password}
              placeholder="Enter your Password"
              autoComplete="current-password"
              onChange={this.onChangePassword}
              className="input-text" 
              onBlur={this.onBlurPassword}
            />
            {isPasswordEmpty ? <p className="error-msg">Enter the Password</p> : null}
          </div>
          <div className="input-text">
            <select
              id="outlined-select-option"
              value={role}
              className="select-role"
              onChange={this.onChangeRole}
            >
              {roles.map((name) => (
                <option
                  key={name.id}
                  value={name.id}
                  className="options"
                >
                  {name.displayText}
                </option>
              ))}
            </select>
          </div>
          <Button type="submit" variant="contained" size="medium">Submit</Button>
        </form>
    </div>
    )
  }
}

export default LoginPage
