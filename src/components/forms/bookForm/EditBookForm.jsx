import useForm from "../../../hooks/useForm.js";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../../customInput/CustomInput.jsx";
import { editBookInputs } from "../../../assets/customInputs/bookInputs.js";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { updateBookAPi } from "../../../features/user/book/bookAPI.js";

const initialState = {};

const EditBookForm = () => {
  const { _id } = useParams();
  const navigate = useNavigate();
  const { form, setForm, handleOnChange } = useForm(initialState);
  const { books } = useSelector((state) => state.bookInfo);
  // console.log(books);

  useEffect(() => {
    if (_id !== form._id) {
      const selectedBook = books.find((book) => book._id === _id);
      selectedBook?._id ? setForm(selectedBook) : navigate("/user/books");
    }
  }, [setForm]);
  //this is for submitting the form
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const {
      addedBy,
      createdAt,
      lastUpdatedBy,
      slug,
      updatedAt,
      __v,
      isbn,
      available,
      ...rest
    } = form;
    console.log(rest);

    const result = await updateBookAPi(rest);
    console.log(result);
  };

  console.log(form);
  return (
    <div className="p-4">
      <h3>Add new book detail</h3>
      <hr />
      <Form className="m-2" onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3">
          <Form.Check
            name="status"
            type="switch"
            id="custom-switch"
            label={form.status?.toUpperCase()}
            onChange={handleOnChange}
            checked={form.status === "active"}
          />
        </Form.Group>

        {editBookInputs.map((input) => (
          <CustomInput
            key={input.name}
            {...input}
            onChange={handleOnChange}
            value={form[input.name]}
          />
        ))}
        <div>
          <hr />
          <h4>Additional Info</h4>
          <div className="mb-2">
            Added By: {form.addedBy?.name} <br />
            Date: {form.createdAt}
          </div>
          <div className="mb-3">
            Last Updated By: {form.lastUpdatedBy?.name} <br />
            Date: {form.updatedAt}
          </div>
        </div>
        <div className="d-grid">
          <Button type="submit">Add New Book</Button>
        </div>
      </Form>
    </div>
  );
};

export default EditBookForm;
