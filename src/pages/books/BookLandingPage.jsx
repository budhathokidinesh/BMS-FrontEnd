import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const BookLandingPage = () => {
  const { slug } = useParams();
  const { publicBooks } = useSelector((state) => state.bookInfo);
  const [book, setBook] = useState({});

  useEffect(() => {
    const selectedBook = publicBooks?.find((book) => book.slug === slug);
    setBook(selectedBook);
  }, [publicBooks]);
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <img
              src={import.meta.env.VITE_BASE_API_URL + book?.imgUrl?.slice(6)}
              alt=""
            />
          </div>
        </Col>
        <Col>Book Info section</Col>
      </Row>
      <Row>
        <Col>Bottom section</Col>
      </Row>
    </Container>
  );
};

export default BookLandingPage;
