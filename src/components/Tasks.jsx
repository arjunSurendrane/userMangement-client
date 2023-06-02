import { useState } from "react";

export default function Tasks({ data }) {
  return (
    <>
      {!data.length ? (
        <>
          <h1>No Tassk Data</h1>
        </>
      ) : (
        <>
          <ul role="list" className="divide-y divide-gray-100 mt-5">
            {data[0]?.data?.map((task) => (
              <li key={task?._id} className="flex justify-between gap-x-6 py-5">
                <div className="flex gap-x-4">
                  <div className="min-w-0 flex-auto">
                    {" "}
                    <p className="text-sm font-semibold leading-6 text-gray-900 capitalize">
                      {task?.taskName}
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm leading-6 text-gray-900">
                    {task?.rating || 0} ⭐
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
