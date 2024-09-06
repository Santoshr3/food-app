const Login = () => {
    return (
      <div className="content">
        <div className="container">
          <div className="authform">
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button>Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Login;
  