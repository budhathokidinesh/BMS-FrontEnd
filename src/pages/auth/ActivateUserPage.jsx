import React, { useEffect, useRef, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import {
  useNavigate,
  useResolvedPath,
  useSearchParams,
} from "react-router-dom";
import { Alert } from "react-bootstrap";
import { activateNewUserAPi } from "../../services/authAPI.js";

const ActivateUser = () => {
  const [isPending, setIsPending] = useState(true);
  const [response, setResponse] = useState({});
  const shouldFetchRef = useRef(true);
  const navigate = useNavigate();

  //this is for capturing session id and token from activate user page
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("sessionId");
  const t = searchParams.get("t");
  console.log(sessionId, t);

  //call api
  useEffect(() => {
    if (sessionId && t && shouldFetchRef.current) {
      // const callUserActivateApi = async () => {
      //   const result = await activateNewUserAPi({ sessionId, t });
      // };
      // callUserActivateApi()
      (async () => {
        const result = await activateNewUserAPi({ sessionId, t });
        setResponse(result);
        setIsPending(false);
      })();
      shouldFetchRef.current = false;
    }
    if (response.status === "success") {
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  }, [sessionId, t, response.status, navigate]);
  console.log(response);
  return (
    <div className="py-6 p-5">
      {isPending && (
        <div className="m-auto mt-5" style={{ width: "450px" }}>
          <div className="d-flex justify-content-center">
            <Spinner animation="border" variant="primary" />
          </div>

          <div>
            Please do not go back or refresh the browser. Please wait .....
          </div>
        </div>
      )}
      {response?.message && (
        <Alert variant={response.status === "success" ? "success" : "danger"}>
          {response.message}
        </Alert>
      )}
    </div>
  );
};

export default ActivateUser;
