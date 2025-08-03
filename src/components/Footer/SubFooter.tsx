import { Link } from "react-router-dom";

export default function SubFooter() {
  const links = [
    {
      title: "Privacy Policy",
      link: "/privacy-policy",
    },
    {
      title: "Terms of Service",
      link: "/terms-of-service",
    },
    {
      title: "Cookie Policy",
      link: "/cookie-policy",
    },
  ];
  return (
    <div className="w-full px-4 py-6 sm:px-32 flex justify-between border-t border-black bg-gray-700 text-gray-300">
      {/* Copy Rights */}
      <div className="">© {new Date().getFullYear()} KavachOne. All rights reserved.</div>
      {/* Privacy & T&C link */}
      <div className="flex gap-4">
        {links.map(({ link, title }) => (
          <Link className=" hover:text-white" to={link} key={title}>
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
}
