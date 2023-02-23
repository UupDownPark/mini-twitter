import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Createlog from "./create-log";

const Home: NextPage = () => {
  const [islogin, setIslogin] = useState(false);
  const router = useRouter();
  return (
    <div className="w-full h-screen bg-gray-400 justify-center items-center p-10">
      {islogin ? null : <Createlog />}
    </div>
  );
};
export default Home;
