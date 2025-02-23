import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const BookTable = () => {
  const { books } = useSelector((state) => state.bookInfo);
  const [displayBook, setDisplayBook] = useState([]);
  useEffect(() => {
    setDisplayBook(books);
  }, [books]);
  const handleOnSearch = (e) => {
    const { value } = e.target;
    const tempArg = books.filter((book) =>
      book.title.toLowerCase().includes(value.toLowerCase())
    );
    setDisplayBook(tempArg);
  };
  return (
    <div>
      <div className="d-flex justify-content-between mb-4">
        <div>{displayBook.length} book(s) found</div>
        <div>
          <Form.Control
            placeholder="Search book by name"
            onChange={handleOnSearch}
          />
        </div>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Thumbnail</th>
            <th>Name</th>
            <th>Is Available</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {displayBook.map(({ _id, status, title, imgUrl }, i) => (
            <tr key={_id}>
              <td>{i + 1}</td>
              <td
                className={status === "active" ? "text-success" : "text-danger"}
              >
                {status}
              </td>
              <td>
                <img src={imgUrl} alt="" width="100px" />
              </td>
              <td>{title}</td>
              <td>Yes, No: available date</td>
              <td>
                <Link to={"/user/edit-book/" + _id}>
                  <Button variant="warning">Edit</Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
