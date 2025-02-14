import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInput } from "../../components/customInput/CustomInput";
import { signupInputs } from "../../assets/customInputs/userSignupInputs";
import useForm from "../../hooks/useForm.js";
import { signupNewUserAPi } from "../../services/authAPI.js";

const initialState = {};
const SignupPage = () => {
  const { form, setForm, handleOnChange, passwordErrors } =
    useForm(initialState);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { confirmPassword, ...rest } = form;

    if (confirmPassword !== rest.password)
      return alert("Password do not match");
    const result = await signupNewUserAPi(rest);
    console.log(result);
  };
  console.log(passwordErrors);
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
        <div className="py-3">
          <ul className="text-danger">
            {passwordErrors.length > 0 &&
              passwordErrors.map((msg) => <li key={msg}>{msg}</li>)}
          </ul>
        </div>

        {/* {passwordErrors.length > 0 && (
          <Button variant="primary" type="submit" disabled>
            Submit
          </Button>:
        )} */}
        <Button
          variant="primary"
          type="submit"
          disabled={passwordErrors.length}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignupPage;
