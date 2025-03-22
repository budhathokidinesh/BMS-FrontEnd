import useForm from "../../../hooks/useForm.js";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../../customInput/CustomInput.jsx";
import { editBookInputs } from "../../../assets/customInputs/bookInputs.js";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { updateBookAPi } from "../../../features/user/book/bookAPI.js";

const initialState = {};

const EditBookForm = () => {
  const { _id } = useParams();
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [imgToDelete, setImgToDelete] = useState([]);
  const { form, setForm, handleOnChange } = useForm(initialState);
  const { books } = useSelector((state) => state.bookInfo);
  // console.log(books);

  useEffect(() => {
    if (_id !== form._id) {
      const selectedBook = books.find((book) => book._id === _id);
      selectedBook?._id ? setForm(selectedBook) : navigate("/user/books");
    }
  }, [setForm]);

  const handleOnImageSelect = (e) => {
    console.log(e.target.files);
    const files = [...e.target.files];
    console.log(files);
    if (files.length > 2) {
      e.target.value = "";
      return alert("Max 2 images are allowed");
    }
    setImages([...e.target.files]);
  };
  //this is for submitting the form
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (imgToDelete.includes(form.imgUrl)) {
      return alert("You can not delete the selected thumbnail");
    }
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
    const formData = new FormData();

    for (const key in rest) {
      formData.append(key, rest[key]);
    }
    images.map((img) => formData.append("images", img));
    // formData.append("imgToDelete", imgToDelete);

    imgToDelete.map((img) => formData.append("imgToDelete", img));

    const result = await updateBookAPi(formData);
  };

  const handleOnImageToDelete = (e) => {
    const { checked, value } = e.target;

    checked
      ? setImgToDelete([...imgToDelete, value])
      : setImgToDelete(imgToDelete.filter((img) => img !== value));
  };

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
        {/* this is for displaying image already in this book  */}

        <div className="m-3  d-flex">
          {form?.imageList?.map((img) => (
            <div key={img} className="m-1">
              <Form.Check
                type="radio"
                name="imgUrl"
                value={img}
                checked={form.imgUrl === img}
                onChange={handleOnChange}
                label={"Thumbnail"}
              />
              <Form.Check
                type="checkbox"
                label="Delete"
                value={img}
                onChange={handleOnImageToDelete}
              />
              <img
                src={import.meta.env.VITE_BASE_API_URL + img.slice(6)}
                alt="some img"
                width="200px"
                height="100px"
                className="img-thumbnail"
              />
            </div>
          ))}
        </div>
        <Form.Group className="mb-3">
          <Form.Label>Upload More Images(Max 2 Images)</Form.Label>
          <Form.Control
            onChange={handleOnImageSelect}
            type="file"
            name="image"
            accept="image/*"
          />
        </Form.Group>
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
          <Button type="submit" variant="warning">
            Update Book
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default EditBookForm;
