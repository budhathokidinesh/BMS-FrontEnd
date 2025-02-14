import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInput } from "../../components/customInput/CustomInput";
import { signupInputs } from "../../assets/customInputs/userSignupInputs";
import useForm from "../../hooks/useForm.js";

const initialState = {};
const SignupPage = () => {
  const { form, setForm, handleOnChange } = useForm(initialState);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="d-flex justify-content-center">
      <Form
        style={{ width: "450px" }}
        onSubmit={handleOnSubmit}
        className="card p-3 mt-4 mb-5 shadow-lg"
      >
        <h3>Join our Book Shop</h3>
        <hr />
        {signupInputs.map((input) => (
          <CustomInput key={input.name} {...input} onChange={handleOnChange} />
        ))}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignupPage;
