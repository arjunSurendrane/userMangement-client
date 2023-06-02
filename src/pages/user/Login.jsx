import { Suspense, lazy, useEffect, useState } from "react";
const Form = lazy(() => import("../../components/Form"));
import { sendRequest } from "../../api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();
  const token =
    localStorage.getItem("userJwt") || localStorage.getItem("hrJwt");
  useEffect(() => {
    if (token) {
      navigate("/employees");
    }
  }, []);
  const submitData = async (role) => {
    try {
      let submit;
      if (role == "HR") {
        console.log("here");
        submit = {
          link: "hrLogin",
          data: { email, password },
          method: "post",
        };
      } else {
        console.log("here");
        submit = {
          link: "employeeLogin",
          data: { email, password },
          method: "post",
        };
      }
      const res = await sendRequest(submit);
      if (res.data.data.role == "Employee") {
        localStorage.setItem("userJwt", res.data.token);
      } else if (res.data.data.role == "Hr") {
        localStorage.setItem("hrJwt", res.data.token);
      }
      localStorage.setItem("empid", res.data.data._id);
      role == "HR"
        ? navigate("/employees")
        : navigate(`/${res.data.data._id}/employee`);
    } catch (error) {
      const message = error?.response?.data?.message;
      setError(message ?? "Something gone wrong");
      setTimeout(() => setError(""), 2000);
    }
  };
  return (
    <div>
      <Suspense fallback={<h1 className="text-center mt-10">Loading...</h1>}>
        <Form
          title={"Sign in to your account"}
          firstField={"Email address"}
          secondField={"Password"}
          button={"Sign in"}
          setFirstField={(data) => setEmail(data)}
          setSecondField={(data) => setPassword(data)}
          error={error}
          submitData={(role) => submitData(role)}
        />
      </Suspense>
    </div>
  );
}
