import "./login.css";
import Navbar from "./navbar";

export default function Login() {
  return (
    <>
    <Navbar/>
    <div className="otp">
      <div className="heading">
        <h1>Login</h1>
        <p>or</p>
        <h1>Signup</h1>
      </div>
      
      <div className="number">
        <div className="offer">
        <h2>Flat ₹500 OFF</h2>
        <p>+ Free Shipping on 1st Order</p>
        </div>
        <div className="nine">+91</div>
        <input type="text" placeholder="Enter Mobile No" maxLength={10} />
        <p id="terms">
          By continuing, i agreeto the <p id="conditions"> terms & conditions</p>
        </p>
        <br />
        <button>verify otp</button>
      </div>
    </div>
    </>
  );
}
