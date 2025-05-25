import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate=useNavigate();
  const handleSignup = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (data.status === "success") {
        alert("Signup successful!");
        navigate("/")
      } else {
        alert(data.message || "Signup failed.");
      }
    } catch (error) {
      alert("An error occurred during signup.");
      console.error(error);
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Signup</button>
       <p>
              if you have an account <Link to={"/login"}>Login</Link>
            </p>
    </div>
  );
}

export default Signup;
