import "./App.css";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import { FaHome } from "react-icons/fa";

function App() {
  // toast.error("hellow");
  return (
    <>
      <h1>Comming soon</h1>
      <Button>
        Click me
        <FaHome />
      </Button>

      <ToastContainer />
    </>
  );
}

export default App;
