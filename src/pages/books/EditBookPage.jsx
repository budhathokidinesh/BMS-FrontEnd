import { Button } from "react-bootstrap";

import { Link, useNavigate, useParams } from "react-router-dom";
import { EditBookForm } from "../../components/forms";
import { deleteBookAPi } from "../../features/user/book/bookAPI";

const EditBookPage = () => {
  const navigate = useNavigate();
  const { _id } = useParams();
  const handleOnDelete = async () => {
    if (
      confirm(
        "Are you sure you want to delete this book. THis can't be undo. Thnaks"
      )
    ) {
      const result = await deleteBookAPi(_id);
      result.status === "success" && navigate("/user/books");
    }
  };
  return (
    <div className="p-3">
      <h3>Edit Book</h3>
      <hr />
      <Link to={"/user/books"}>
        <Button varient="secondary">&lt;Back</Button>
      </Link>
      <div>
        <EditBookForm />
      </div>
      <div className="d-grid p-4">
        <Button variant="danger" onClick={handleOnDelete}>
          Delete this book
        </Button>
      </div>
    </div>
  );
};

export default EditBookPage;
