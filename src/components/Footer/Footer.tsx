import { LuLinkedin } from "react-icons/lu";
import { cn } from "../../utils/cn";
import SubFooter from "./SubFooter";
import { FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

export default function Footer() {
  const QuickLinks = [
    {
      title: "Solutions",
      link: "/solutions",
    },
    {
      title: "Platform",
      link: "/platform",
    },
    {
      title: "Success Stories",
      link: "/success-stories",
    },
    {
      title: "Resources",
      link: "/resources",
    },
    {
      title: "Careers",
      link: "/careers",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];
  const serviceLinks = [
    {
      title: "Security Assessment",
      link: "/security-assessment",
    },
    {
      title: "Compliance Management",
      link: "/compliance-management",
    },
    {
      title: "Data Privacy",
      link: "/data-privacy",
    },
    {
      title: "Risk Mitigation",
      link: "/risk-mitigation",
    },
    {
      title: "Threat Intelligence",
      link: "/threat-intelligence",
    },
    {
      title: "Security Training",
      link: "/security-training",
    },
  ];
  const contactLinks = [
    {
      title: `123 Security Avenue, Suite 500
                San Francisco, CA 94105`,
      link: "/addess",
      logo: <CiLocationOn />
    },
    {
      title: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      logo: <IoCallOutline />
    },
    {
      title: "info@kavachone.com",
      link: "mailto:info@kavachone.com",
      logo: <CiMail />
    },
  ];
  return (
    <>
      <div
        className={cn(
          "grid lg:grid-cols-4 md:grid-cols-2 w-full  gap-8 bg-gray-700 px-4 py-4 md:px-32 md:py-10 text-white"
        )}
      >
        {/* Logo and company Detail */}
        <div className="flex flex-col gap-4 w-full">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-green-400"></div>
            <div className="text-3xl font-bold">KavachOne</div>
          </div>
          <p>
            Enterprise-grade security and compliance solutions for modern
            businesses.
          </p>
          {/* Social Link */}
          <div className="flex gap-2">
            <LuLinkedin className="text-lg hover:text-primary transition" />
            <FiTwitter className="text-lg hover:text-primary transition" />
          </div>
        </div>
        {/* Quick Links */}
        <div className="flex flex-col gap-4 w-full">
          <h3 className="font-bold text-xl">Quick Links</h3>
          <div className="flex flex-col gap-2">
            {QuickLinks.map(({ link, title }) => (
              <Link
                to={link}
                key={title}
                className="text-gray-300 hover:text-white"
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
        {/* Services */}
        <div className="flex flex-col gap-4 w-full">
          <h3 className="font-bold text-xl">Services</h3>
          <div className="flex flex-col gap-2">
            {serviceLinks.map(({ link, title }) => (
              <Link
                to={link}
                key={title}
                className="text-gray-300 hover:text-white"
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
        {/* Contact Us */}
        <div className="flex flex-col gap-4 w-full">
          <h3 className="font-bold text-xl">Contact Us</h3>
          <div className="flex flex-col gap-2">
            {contactLinks.map(({ link, title, logo }) => (
              <Link
                to={link}
                key={title}
                className="text-gray-300 hover:text-white flex gap-2"
              >
                {logo}
                {title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <SubFooter />
    </>
  );
}
