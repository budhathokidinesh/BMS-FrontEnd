import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import c2 from "../../assets/c2.jpg";
import { Link } from "react-router-dom";

const CustomCard = ({
  imgUrl,
  title = "My first book",
  author = "Dinesh Budhathoki",
  slug = "Book-Title",
  year = 2024,
}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <div className="m-2">
        <Card.Img
          variant="top"
          src={import.meta.env.VITE_BASE_API_URL + imgUrl?.slice(6)}
          className="rounded"
          height="250px"
        />
      </div>

      <Card.Body className="text-center">
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {author} - {year}
        </Card.Text>
        <Link to={slug}>
          <Button variant="dark">More...</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
