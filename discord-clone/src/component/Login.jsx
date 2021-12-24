import "../css/login.css"
import {auth , provider } from "../firebase"

let Login =()=>{
    let signUp=()=>{
            auth.signInWithPopup(provider).catch((err) => alert(err.message));
    }
    return (
    <div className="login">
      <div className="login-logo">
        <img src="https://logos-download.com/wp-content/uploads/2021/01/Discord_Logo-1.png" />
      </div>

      <button className="loginBtn" onClick={signUp}> Sign in</button>
    </div>
    );
}
export default Login;