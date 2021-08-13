import React, { useState }from 'react';
import LoginForm from './Components/LoginForm';
import { DownloadPage } from './Components/DownloadPage';
import { ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const users = {
    password: "btn710@G#"
  }

  const [user, setUser] = useState({password: ""});
  const [error, setError] = useState("");
  const [loginFlag, setFlag] = useState(false)
  const errorToast = () => toast("Please enter the correct password.");

  const Login = loginInfo => {
    console.log(loginInfo)
    console.log(users.password)
    if (loginInfo.password == users.password){
      console.log("Logged In!")
      setFlag({loginFlag: true})
      console.log(loginFlag)
    }
    else {
      console.log("Incorrect Password")
    }
  }

      return (
        <div className="App">
          {(loginFlag) ? <DownloadPage setFlag/>
          :
          <LoginForm Login={Login} error={error}/>
          }

        </div>
      );
  
}

export default App;
