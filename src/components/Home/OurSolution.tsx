import { IoDocumentTextOutline, IoShieldOutline } from "react-icons/io5";
import { LuDatabase } from "react-icons/lu";
import { MdErrorOutline } from "react-icons/md";

export default function OurSolution() {
  const lists = [
    {
      logo: <IoShieldOutline />,
      title: "Security Assessment",
      desc: "Comprehensive evaluation of your security posture with actionable recommendations.",
    },
    {
      logo: <IoDocumentTextOutline />,
      title: "Compliance Management",
      desc: "Navigate complex regulatory requirements with our expert guidance and tools.",
    },
    {
      logo: <LuDatabase />,
      title: "Data Privacy",
      desc: "Ensure your customer data is protected and compliant with global privacy laws.",
    },
    {
      logo: <MdErrorOutline />,
      title: "Risk Mitigation",
      desc: "Identify and address potential security threats before they impact your business.",
    },
  ];
  return (
    <div className="bg-gray-50 px-4 py-16 sm:px-32 flex flex-col gap-16">
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-3xl font-bold text-gray-800">Our Solutions</h2>
        <p className="text-gray-600 text-center">
          Comprehensive security and compliance solutions tailored to your
          business needs
        </p>
      </div>
      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {lists.map(({ logo, title, desc }, index) => (
          <div
            className="flex flex-col items-start gap-4 p-8 bg-white rounded-xl shadow-lg"
            key={index}
          >
            {/* Logo */}
            <div className="w-16 h-16 text-3xl rounded-xl bg-primary/20 text-primary font-bold flex items-center justify-center">
              {logo}
            </div>
            <h4 className="text-xl font-bold">{title}</h4>
            <p className="text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
