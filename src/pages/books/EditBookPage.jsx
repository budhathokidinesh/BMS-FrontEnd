import { Button } from "react-bootstrap";
import { EditBookForm } from "../../components/forms";
import { Link } from "react-router-dom";

const EditBookPage = () => {
  return (
    <div className="p-3">
      <h3>Edit Book</h3>
      <hr />
      <Link to="/user/books">
        <Button varient="secondary">&lt;Back</Button>
      </Link>
      <div>
        <EditBookForm />
      </div>
    </div>
  );
};

export default EditBookPage;
