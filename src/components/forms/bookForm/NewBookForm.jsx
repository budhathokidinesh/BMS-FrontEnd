import React from "react";
import useForm from "../../../hooks/useForm.js";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../../customInput/CustomInput.jsx";
import { newBookInputs } from "../../../assets/customInputs/bookInputs.js";
import { postNewBookAction } from "../../../features/user/book/bookAction.js";
import { useState } from "react";
const initialState = {};
const NewBookForm = () => {
  const { form, setForm, handleOnChange } = useForm(initialState);
  //this is for creating the image state
  const [image, setImage] = useState();

  const handleOnImageSelect = (e) => {
    setImage(e.target.files[0]);
  };
  //this is for submitting the form
  const handleOnSubmit = (e) => {
    e.preventDefault();
    //this is for converting data into form data
    const formData = new FormData();
    console.log(form);

    for (const key in form) {
      formData.append(key, form[key]);
    }
    formData.append("image", image);
    postNewBookAction(formData);
  };
  return (
    <div className="p-4">
      <h3>Add new book detail</h3>
      <hr />
      <Form className="m-2" onSubmit={handleOnSubmit}>
        {newBookInputs.map((input) => (
          <CustomInput key={input.name} {...input} onChange={handleOnChange} />
        ))}
        {/* this is for attaching the file  */}
        <Form.Group className="mb-3">
          <Form.Control
            onChange={handleOnImageSelect}
            type="file"
            name="image"
            required
          />
        </Form.Group>

        <div className="d-grid">
          <Button type="submit">Add New Book</Button>
        </div>
      </Form>
    </div>
  );
};

export default NewBookForm;
