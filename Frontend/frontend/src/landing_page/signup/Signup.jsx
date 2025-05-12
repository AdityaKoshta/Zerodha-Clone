import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
    mobile: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4001/signup", user, {
        headers: {
          "Content-Type": "application/json", // Explicitly telling the backend we're sending JSON
        },
        withCredentials: true,
      });
      if (response.data.success) {
        alert(response.data.message);
        window.location.href = "http://localhost:5174"; // Redirect after successful signup
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <h1 className="text-center">
        Open a free demat and trading account online
      </h1>
      <h5 className="text-muted fw-normal text-center mt-4">
        Start investing brokerage free and join a community of 1.5+ crore
        investors and traders
      </h5>
      <div className="row mt-5 d-flex align-items-center justify-content-center">
        <div className="col-6">
          <img src="/assets/account_open.svg" alt="Signup Illustration" />
        </div>
        <div className="col-6">
          <h2>Signup now</h2>
          <h6
            className="text-muted fw-normal mt-3"
            style={{ fontSize: "1.025rem" }}
          >
            Or track your existing application
          </h6>

          <form onSubmit={handleSubmit}>
            <input
              className="form-control p-3 mt-4 fw-medium fs-6"
              style={{ width: "65%" }}
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
            <input
              className="form-control p-3 mt-4 fw-medium fs-6"
              style={{ width: "65%" }}
              type="text"
              name="username"
              id="username"
              onChange={handleChange}
              placeholder="Username"
              required
            />
            <input
              className="form-control p-3 mt-4 fw-medium fs-6"
              style={{ width: "65%" }}
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              placeholder="Password"
              required
            />
            <input
              className="form-control p-3 mt-4 fw-medium fs-6"
              style={{ width: "65%" }}
              type="number"
              name="mobile"
              id="mobile"
              onChange={handleChange}
              placeholder="Enter your mobile number"
              required
            />

            <button
              type="submit"
              style={{ width: "40%" }}
              className="btn btn-primary p-2 m-auto fs-5 fw-semibold mt-2 mb-4"
            >
              Signup
            </button>
          </form>

          <p style={{ fontSize: "0.80rem" }}>
            By proceeding, you agree to the Zerodha terms & privacy policy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
