import React from "react";
import useForm from "../../../hooks/useForm.js";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../../customInput/CustomInput.jsx";
import { newBookInputs } from "../../../assets/customInputs/bookInputs.js";
import { postNewBookAction } from "../../../features/user/book/bookAction.js";
const initialState = {};
const NewBookForm = () => {
  const { form, setForm, handleOnChange } = useForm(initialState);
  //this is for submitting the form
  const handleOnSubmit = (e) => {
    e.preventDefault();
    postNewBookAction(form);
  };
  return (
    <div className="p-4">
      <h3>Add new book detail</h3>
      <hr />
      <Form className="m-2" onSubmit={handleOnSubmit}>
        {newBookInputs.map((input) => (
          <CustomInput key={input.name} {...input} onChange={handleOnChange} />
        ))}
        <div className="d-grid">
          <Button type="submit">Add New Book</Button>
        </div>
      </Form>
    </div>
  );
};

export default NewBookForm;
