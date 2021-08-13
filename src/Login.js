import React from 'react';

class Login extends React.Component {
    state = { password: '' };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
      e.preventDefault()
      //this.props.onSubmit({password});
    }
    render(){
        return (
          <div className="App">
            <header className="App-header">
              <h1 class="title">BTN710 Team 2 Final Submission </h1>
              <p>
                Please enter the password:
              </p>
            <div class="form-group">
              <form>
                <input type="password" class="form-control-lg" id="formPassword" placeholder="Enter password" onChange={this.handleChange}/>
               <button type='submit' class='btn btn-primary btn-size'> Login </button>
              </form>
            </div>
            </header>
          </div>
        );
    }
}

export default Login;