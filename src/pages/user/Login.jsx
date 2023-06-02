import { Suspense, lazy, useEffect, useState } from "react";
const Form = lazy(() => import("../../components/Form"));
import { sendRequest } from "../../api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const token =
    localStorage.getItem("userJwt") || localStorage.getItem("hrJwt");
  const role = localStorage.getItem("role");
  useEffect(() => {
    if (token) {
      role == "Hr"
        ? navigate("/employees")
        : navigate(`/${localStorage.getItem("empid")}/employee`);
    }
  }, []);
  const submitData = async (role) => {
    setLoading(true);
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
      localStorage.clear();
      if (res.data.data.role == "Employee") {
        await localStorage.setItem("userJwt", res.data.token);
        await localStorage.setItem("empid", res.data.data._id);
        await localStorage.setItem("role", res.data.data.role);
        navigate(`/${res.data.data._id}/employee`);
      } else if (res.data.data.role == "Hr") {
        await localStorage.setItem("role", res.data.data.role);
        await localStorage.setItem("hrJwt", res.data.token);
        navigate("/employees");
      }
    } catch (error) {
      const message = error?.response?.data?.message;
      setError(message ?? "Something gone wrong");
      setTimeout(() => setError(""), 2000);
    }
    setLoading(false);
  };
  return (
    <div>
      <Suspense fallback={<h1 className="text-center mt-10">Loading...</h1>}>
        <Form
          title={"Sign in to your account"}
          firstField={"Email address"}
          secondField={"Password"}
          button={"Sign in"}
          loading={loading}
          setFirstField={(data) => setEmail(data)}
          setSecondField={(data) => setPassword(data)}
          error={error}
          submitData={(role) => submitData(role)}
        />
      </Suspense>
    </div>
  );
}
