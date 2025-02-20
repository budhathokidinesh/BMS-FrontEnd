import React, { useEffect, useRef, useState } from "react";
import { Alert, Button, Card, Form, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CustomInput } from "../../components/customInput/CustomInput.jsx";
import useForm from "../../hooks/useForm.js";
import {
  requestPassResetOTPAPi,
  resetPassPAPi,
} from "../../services/authAPI.js";

const initialState = {};
const timeToRequestOTPAgain = 20; //60 seconds

const ForgotPassword = () => {
  const navigate = useNavigate();
  const emailRef = useRef("");
  const [showPassResetForm, setShowPassResetForm] = useState(false);
  const { form, passwordErrors, handleOnChange } = useForm(initialState);

  const [isOtpPending, setIsOtpPending] = useState(false);
  const [isOtpBtnDisabled, setIsOtpBtnDisabled] = useState(false);

  //this is for counter
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter > 0) {
      const timer = setInterval(() => {
        setCounter(counter - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setIsOtpBtnDisabled(false);
    }
  }, [counter]);
  //this handleOnSubmit is for request for otp
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;

    //call api
    setIsOtpPending(true);
    setIsOtpBtnDisabled(true);
    const response = await requestPassResetOTPAPi({ email });
    if (response?.status === "success") {
      setShowPassResetForm(true);
    }
    setIsOtpPending(false);
    // setIsOtpBtnDisabled(false);
    setCounter(timeToRequestOTPAgain);
  };
  console.log(form);

  //this is for submit the otp and password
  const handleOnPasswordResetSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const payload = {
      email,
      otp: form.otp,
      password: form.password,
    };
    const response = await resetPassPAPi(payload);
    if (response?.status === "success") {
      //redirect uset to login page
      setTimeout(() => navigate("/login"), 3000);
    }
  };

  return (
    <div className="signin-page d-flex justify-content-center align-items-center">
      <Card style={{ width: "23rem" }}>
        <Card.Body>
          <Card.Title>Forgot Password😡😡😡?</Card.Title>
          <p>
            Don't worry. Fill up the form bellow to request OTP to reset your
            password{" "}
          </p>
          <Form onSubmit={handleOnSubmit}>
            <CustomInput
              label="Email"
              name="email"
              type="email"
              required
              placeholder="abc@abc.com"
              passRef={emailRef}
            />

            <div className="d-grid">
              <Button type="submit" disabled={isOtpBtnDisabled}>
                {isOtpPending ? (
                  <Spinner varient="boarder" />
                ) : counter > 0 ? (
                  `Request OTP in ${counter}`
                ) : (
                  "Request OTP"
                )}
              </Button>
            </div>
          </Form>
          {showPassResetForm && (
            <>
              <hr />
              {/* show this form below when otp is requested */}
              <div>
                <Alert varient="success">
                  OTP is sent to your email please check your email including
                  your spam folder. Thanks
                </Alert>
                <Form onSubmit={handleOnPasswordResetSubmit}>
                  <CustomInput
                    label="OTP"
                    name="otp"
                    type="number"
                    required
                    placeholder="****"
                    onChange={handleOnChange}
                  />
                  <CustomInput
                    label="New Password"
                    name="password"
                    type="password"
                    required
                    placeholder="******"
                    onChange={handleOnChange}
                  />
                  <CustomInput
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    required
                    placeholder="******"
                    onChange={handleOnChange}
                  />
                  <div className="py-3">
                    <ul className="text-danger">
                      {passwordErrors.length > 0 &&
                        passwordErrors.map((msg) => <li key={msg}>{msg}</li>)}
                    </ul>
                  </div>
                  <div className="d-grid">
                    <Button type="submit" disabled={passwordErrors.length}>
                      Reset Password
                    </Button>
                  </div>
                </Form>
              </div>
            </>
          )}

          <div className="text-end my-3">
            Ready to Login? <a href="/login">Login Now</a>{" "}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ForgotPassword;
