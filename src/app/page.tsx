"use client";
import Menu from "@/components/radialMenu/Menu";
import MenuItem from "@/components/radialMenu/MenuItem";
import { CirclePlus } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [show, setShow] = useState<boolean>(false);
  const handleItemClick = (
    event: React.MouseEvent,
    index: number,
    data: string
  ): void => {
    console.log(`[MenuItem] ${data} clicked`);
  };

  const menuItems = [
    { label: "Home", data: "1. Item" },
    { label: "About Us", data: "2. Item" },
    { label: "Bhartiya", data: "3. Item" },
    { label: "FAQ", data: "4. Item" },
    { label: "Contact Us", data: "5. Item" },
    { label: "Sponsors", data: "6. Item" },
  ];

  return (
    <div className=" w-screen h-screen flex justify-center items-center">
      {" "}
      <div className=" relative">
        <button
          onClick={() => setShow(!show)}
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out z-[1000] ${
            show ? "rotate-45" : "rotate-0"
          }`}
        >
          <CirclePlus size={50} color="#e8f538" />
        </button>
        <Menu
          centerX={0}
          centerY={0}
          innerRadius={100}
          outerRadius={200}
          show={show}
          animation={["fade", "scale"]}
          animationTimeout={150}
          drawBackground
        >
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              onItemClick={handleItemClick}
              data={item.data}
            >
              {item.label}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </div>
  );
}
