import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInput } from "../../components/customInput/CustomInput";
import { signupInputs } from "../../assets/customInputs/userSignupInputs";

const SignupPage = () => {
  return (
    <div className="d-flex justify-content-center">
      <Form style={{ width: "450px" }} className="card p-3 mt-4 mb-5 shadow-lg">
        <h3>Join our Book Shop</h3>
        <hr />
        {signupInputs.map((input) => (
          <CustomInput key={input.name} {...input} />
        ))}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignupPage;
