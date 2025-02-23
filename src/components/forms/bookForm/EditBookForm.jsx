import useForm from "../../../hooks/useForm.js";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../../customInput/CustomInput.jsx";
import { editBookInputs } from "../../../assets/customInputs/bookInputs.js";
import { postNewBookAction } from "../../../features/user/book/bookAction.js";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const initialState = {};
const EditBookForm = () => {
  const { _id } = useParams();
  const navigate = useNavigate();
  const { form, setForm, handleOnChange } = useForm(initialState);

  //to pull all the books from the redux state
  const { books } = useSelector((state) => state.bookInfo);

  useEffect(() => {
    if (_id !== form._id) {
      const selectedBook = books.find((book) => book._id === _id);
      selectedBook?._id ? setForm(selectedBook) : navigate("/user/books");
    }
  }, [setForm]);

  //this is for submitting the form
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const {
      addedBy,
      createdAt,
      updatedAt,
      slug,
      lastUpdatedBy,
      __v,
      isbn,
      available,
      ...rest
    } = form;
    console.log(rest);
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
            label={form.status.toUpperCase()}
            onChange={handleOnChange}
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
        <div className="mb-2">
          <hr />
          <h4>Additional Info.</h4>
          <div className="mb-2">
            Added By: {form.addedBy.name} <br />
            Date: {form.createdAt}
          </div>
          <div>
            Last Updated By: {form.lastUpdatedBy.name} <br />
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
