"use client";

import CircularMenu from "@/components/CircularMenu";
import { SquareMenu, SquareX } from "lucide-react";
import { useState } from "react";

export default function Home({}) {
  const [show, setShow] = useState(false);
  return (
    <div className=" w-screen h-screen flex justify-center items-center relative">
      {!show ? (
        <SquareMenu
          width={40}
          height={40}
          className=" absolute m-2 top-0 right-0 cursor-pointer"
          onClick={() => setShow(true)}
        />
      ) : (
        <SquareX
          width={40}
          height={40}
          className=" absolute m-2 top-0 right-0 cursor-pointer"
          onClick={() => setShow(false)}
        />
      )}
      <CircularMenu show={show} setShow={setShow} />
    </div>
  );
}
