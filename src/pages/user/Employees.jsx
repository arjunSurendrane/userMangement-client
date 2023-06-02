import React, { useState } from "react";
import Users from "../../components/Users";
import useSWR from "swr";
import { sendRequest } from "../../api";
import Header from "../../components/Header";
import AddUser from "../../components/AddUser";

export default function Employees() {
  const token = localStorage.getItem("hrJwt");
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const {
    isLoading,
    error,
    data: user,
    mutate,
  } = useSWR({ method: "get", token, link: "listAllEmployees" }, sendRequest);

  if (isLoading) {
    console.log("loading...");
  } else if (error) {
    console.log("error");
  } else {
    const employees = user?.data?.data?.employees;
    return (
      <>
        <div className="md:p-10 p-1">
          <div className="md:p-16 p-2">
            <div>
              <h1 className="text-lg font-bold">Employees</h1>
              <hr />
            </div>

            <div className="mt-5">
              <Users data={employees} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
