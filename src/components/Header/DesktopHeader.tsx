import { Link } from "react-router-dom";
import Button from "../common/Button";

type HeaderType = {
  NavLink: {
    title: string;
    link: string;
  }[];
};

export default function DesktopHeader({ NavLink }: HeaderType) {
  return (
    <div className="w-full flex justify-between items-center px-32 py-4 shadow-gray-300 shadow">
      {/* Logo */}
      <div className="flex gap-2 items-center justify-center">
        <div className="w-8 h-8 bg-green-400 rounded-full"></div>
        <div className="text-3xl font-bold">KavachOne</div>
      </div>
      {/* Navigation */}
      <div className="flex gap-6 font-semibold">
        {NavLink.map(({ title, link }) => (
          <Link
            className=" hover:text-primary transition"
            key={title}
            to={link}
          >
            {title}
          </Link>
        ))}
      </div>
      {/* CTA Buttons */}
      <div className="flex gap-4">
        <Button varient="secondary">Login</Button>
        <Button>Book a demo</Button>
      </div>
    </div>
  );
}
