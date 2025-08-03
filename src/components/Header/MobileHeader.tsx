import { Link } from "react-router-dom";
import Button from "../common/Button";
import { FaBars } from "react-icons/fa";
import { cn } from "../../utils/cn";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

type HeaderType = {
  NavLink: {
    title: string;
    link: string;
  }[];
};

export default function MobileHeader({ NavLink }: HeaderType) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="w-full overflow-hidden flex flex-col px-4 py-4 shadow-gray-300 shadow">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex gap-2 items-center justify-center">
          <div className="w-6 h-6 bg-green-400 rounded-full"></div>
          <div className="text-2xl font-bold">KavachOne</div>
        </div>
        {/* Bar */}
        <FaBars
          onClick={() => setIsOpen((prev) => !prev)}
          className={cn("text-xl", isOpen && "hidden")}
        />
        <IoClose
          onClick={() => setIsOpen((prev) => !prev)}
          className={cn("text-2xl", !isOpen && "hidden")}
        />
      </div>

      <div className={cn("flex flex-col gap-4 pt-4", !isOpen && "hidden")}>
        {/* Navigation */}
        <div className="flex flex-col gap-2 font-semibold">
          {NavLink.map(({ title, link }) => (
            <Link
              className=" hover:text-primary transition w-full"
              key={title}
              to={link}
            >
              {title}
            </Link>
          ))}
        </div>
        {/* CTA Buttons */}
        <div className="flex flex-col gap-2">
          <Button varient="secondary">Login</Button>
          <Button>Book a demo</Button>
        </div>
      </div>
    </div>
  );
}
