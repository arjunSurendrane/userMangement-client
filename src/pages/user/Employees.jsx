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
    console.log(user);
    const employees = user?.data?.data?.employees;
    console.log({ employees });
    return (
      <>
        <div className="p-10">
          <div className="p-16">
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
