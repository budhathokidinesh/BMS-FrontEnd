import { Link } from "react-router-dom";
import { NewBookForm } from "../../components/forms";
import { Button } from "react-bootstrap";

const NewBookPage = () => {
  return (
    <div>
      <div className="p-3">NewBookPage</div>

      <hr />
      <Link to={"/user/books"}>
        <Button variant="secondary">&lt;Back</Button>
      </Link>
      <NewBookForm />
    </div>
  );
};

export default NewBookPage;
