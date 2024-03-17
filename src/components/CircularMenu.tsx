"use client";
import Menu from "@/components/radialMenu/Menu";
import MenuItem from "@/components/radialMenu/MenuItem";

interface MenuProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function CircularMenu({ show, setShow }: MenuProps) {
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
    <div className=" relative">
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
          <MenuItem key={index} onItemClick={handleItemClick} data={item.data}>
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
