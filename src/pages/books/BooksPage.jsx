import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { BookTable } from "../../components/tables/BookTable.jsx";
import { adminFetchAllBookAction } from "../../features/user/book/bookAction.js";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";

const BooksPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(adminFetchAllBookAction());
  }, [dispatch]);
  return (
    <div className="p-3">
      <h3>Books</h3>
      <hr />
      <div className="text-end">
        <Link to={"/user/new-book"}>
          <Button>
            {" "}
            <IoIosAddCircle />
            Add New Book
          </Button>
        </Link>
      </div>

      <div className="mt-4">
        <BookTable />
      </div>
    </div>
  );
};

export default BooksPage;
