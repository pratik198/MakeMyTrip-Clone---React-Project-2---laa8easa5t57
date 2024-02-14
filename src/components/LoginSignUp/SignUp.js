import React, { useState } from "react";
import "./SignUp.css";

function SignUp({ onClose }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleModalOpen = async () => {
    const projectid = "laa8easa5t57";
    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/bookingportals/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            projectID: projectid,
          },
          body: JSON.stringify({
            name: `${firstName} ${lastName}`,
            email: email,
            password: password,
            appType: "bookingportals",
          }),
        }
      );
      if (response.ok) {
        console.log("Signup successful!");
      } else {
        console.error("Signup failed!");
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
    onClose();
  };

  const handleChildClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div onClick={handleModalOpen} className="SignUp_Parent">
      <div onClick={handleChildClick} className="SignUp_child">
        <div className="SignUp_child_img_div">
          <img
            className="SignUp_child_img"
            src="https://imgak.mmtcdn.com/pwa_v3/pwa_header_assets/loginPersuassionOcean.webp"
            alt="Signup"
          />
        </div>
        <div className="SignUp_child_SignUp_div">
          <div className="SignUp_child_SignUp">
            <button className="SignUp_child_SignUp_lgnbtn">SignUp</button>
          </div>
          <div className="SignUp_child_SignUpdetail_div_fn_ln">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label>First Name</label>
              <input
                className="SignUp_comp_email_pass"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label>Last Name</label>
              <input
                className="SignUp_comp_email_pass"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="SignUp_child_SignUpdetail_div">
            <label style={{ marginTop: "10px" }}>Email</label>
            <input
              className="SignUp_comp_email_pass"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label style={{ marginTop: "10px" }}>Password</label>
            <input
              className="SignUp_comp_email_pass"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleModalOpen} className="SignUp_comp_btn">
            Create Account
          </button>
          <p style={{ marginTop: "30px", fontSize: "11px" }}>
            By proceeding, you agree to MakeMyTrip's{" "}
            <span style={{ color: "blue" }}>Privacy Policy</span>,{" "}
            <span style={{ color: "blue" }}>User Agreement</span> and{" "}
            <span style={{ color: "blue" }}>T&Cs</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
