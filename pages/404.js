import React from "react";
import { Button } from "antd";
import Link from "next/link";
const ErrorPage = () => {
  return (
    <div className="flex  flex-col justify-center items-center h-screen w-full px-4">
      <span className="text-6xl"> 404 </span>
      <span className="text-3xl my-4"> This page could not be found</span>
      <Link
        href="/"
        className="bg-sky-500 hover:bg-sky-700 p-4 rounded-full mt-4"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
