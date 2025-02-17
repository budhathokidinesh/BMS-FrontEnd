import React from "react";
import Button from "react-bootstrap/Button";
import { Card, Form } from "react-bootstrap";
import { CustomInput } from "../../components/customInput/CustomInput.jsx";
import useForm from "../../hooks/useForm.js";
import { signinUserAPi } from "../../services/authAPI.js";
import { fetchUserAction } from "../../features/user/userAction.js";
import { useDispatch } from "react-redux";

const initialState = {};
const SignInPage = () => {
  const { form, handleOnChange } = useForm(initialState);
  const dispatch = useDispatch();

  //this is for submitting the form
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    if (form.email && form.password) {
      const { payload } = await signinUserAPi(form);

      if (payload?.accessJWT) {
        sessionStorage.setItem("accessJWT", payload.accessJWT);
        localStorage.setItem("refreshJWT", payload.refreshJWT);

        //call api to get user profile
        dispatch(fetchUserAction());
      }

      //getting user and redirecting to dashboard
    } else {
      alert("Both input must be filled");
    }
  };
  return (
    <div className="signin-page d-flex justify-content-center align-items-center">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Welcome back to the shop</Card.Title>
          <Form onSubmit={handleOnSubmit}>
            <CustomInput
              label="Email"
              name="email"
              type="email"
              required
              placeholder="abc@abc.com"
              onChange={handleOnChange}
            />
            <CustomInput
              label="Password"
              name="password"
              type="password"
              required
              placeholder="******"
              onChange={handleOnChange}
            />
            <div className="d-grid">
              <Button type="submit">Submit</Button>
            </div>
          </Form>

          <div className="text-end my-3">
            Forgot password? <a href="/forgot-password">Reset now</a>{" "}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SignInPage;
