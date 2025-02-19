import React, { useRef, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { CustomInput } from "../../components/customInput/CustomInput.jsx";
import useForm from "../../hooks/useForm.js";

const initialState = {};
const ForgotPassword = () => {
  const emailRef = useRef("");
  const [showPassResetForm, setShowPassResetForm] = useState(false);
  const { form, passwordErrors, handleOnChange } = useForm(initialState);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    console.log(email);
  };
  console.log(form);
  const handleOnPasswordResetSubmit = (e) => {
    e.preventDefault();
    console.log(form);
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
              <Button type="submit">Request OTP</Button>
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
