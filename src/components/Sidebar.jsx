import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";
import { AiFillDashboard } from "react-icons/ai";
import { IoBookSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { AiFillProfile } from "react-icons/ai";
import { MdOutlineRateReview } from "react-icons/md";

export const Sidebar = () => {
  return (
    <Stack gap={1}>
      <div className="p-1">
        <Link className="nav-link" to="/user">
          <AiFillDashboard />
          Dashboard
        </Link>
      </div>
      <div className="p-1">
        <Link className="nav-link" to="/user/books">
          <IoBookSharp />
          Books
        </Link>
      </div>
      <div className="p-1">
        <Link className="nav-link" to="/user/user-list">
          <FaUsers />
          All users
        </Link>
      </div>
      <div className="p-1">
        <Link className="nav-link" to="/user/borrow-history">
          <FaHistory />
          Borrow history
        </Link>
      </div>
      <div className="p-1">
        <Link className="nav-link" to="/user/reviews">
          <MdOutlineRateReview />
          Reviews
        </Link>
      </div>
      <div className="p-1">
        <Link className="nav-link" to="/user/profile">
          <AiFillProfile />
          Profile
        </Link>
      </div>
    </Stack>
  );
};
