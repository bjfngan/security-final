import React, { useState }from 'react'

function LoginForm ({Login, error}){
    const [loginInfo, setLoginInfo] = useState ({password: ""});

    const handleSubmit = e => {
        e.preventDefault()
        Login(loginInfo);
    }

        return (
          <div className="App">
            <header className="App-header">
              <h1 class="title">BTN710 Team 2 Final Submission </h1>
              <p>
                Please enter the password:
              </p>
            <div class="form-group">
              <form onSubmit={handleSubmit}>
                <input type="password" class="form-control-lg" id="password" placeholder="Enter password" onChange={e => setLoginInfo({password: e.target.value})}/>
               <button type='submit' class='btn btn-primary btn-size'> Login </button>
              </form>
            </div>
            </header>
          </div>
        );
    
}

export default LoginForm;