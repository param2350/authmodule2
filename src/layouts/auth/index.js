import React, { useState } from "react";
import Signup from "./components/register";
import Login from "./components/login";
import OTP from "./components/otp";
import { loginApi, otpVerificationApi, signupApi } from "../../api/auth";
import { useNavigate } from "react-router-dom";

const AuthStates = {
  SIGNUP: "signup",
  LOGIN: "login",
  OTP: "otp",
};

const AuthenticationLayer = () => {
  const [authState, setAuthState] = useState(AuthStates.LOGIN);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onLoginClick = async (email, password) => {
    try {
      setLoading(true);
      await loginApi(email, password);
      setLoading(false);
      setAuthState(AuthStates.OTP);
    } catch (error) {
      setLoading(false);
      console.error("Login failed:", error);
    }
  };

  const onOtpVerify = async (otp) => {
    try {
      setLoading(true);
      await otpVerificationApi(otp);
      setLoading(false);
      navigate("/");
    } catch (error) {
      setLoading(false);
      console.error("OTP verification failed:", error);
    }
  };

  const onSignup = async (name, email, password) => {
    try {
      setLoading(true);
      await signupApi(name, email, password);
      setLoading(false);
      setAuthState(AuthStates.OTP);
    } catch (error) {
      setLoading(false);
      console.error("Signup failed:", error);
    }
  };

  return (
    <div>
      {authState === AuthStates.LOGIN && (
        <Login
          onSwitch={() => setAuthState(AuthStates.SIGNUP)}
          onLoginClick={onLoginClick}
        />
      )}
      {authState === AuthStates.OTP && <OTP onClick={onOtpVerify} />}
      {authState === AuthStates.SIGNUP && (
        <Signup
          onSwitch={() => setAuthState(AuthStates.LOGIN)}
          onSignUpClick={onSignup}
        />
      )}
      {loading && <p>Loading...</p>} {/* Display loading indicator */}
    </div>
  );
};

export default AuthenticationLayer;
