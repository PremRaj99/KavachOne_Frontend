import { FaStar } from "react-icons/fa";

export default function OurClient() {
  const clients = [
    {
      comment: `"KavachOne transformed our security posture. Their compliance expertise saved us countless hours and helped us meet stringent regulatory requirements."`,
      name: "Sarah Johnson",
      position: "CTO, TechCorp Solutions",
    },
    {
      comment: `"The team's dedication to our security needs was exceptional. They provided a tailored solution that addressed all our compliance concerns."`,
      name: "Michael Chen",
      position: "Security Director, FinanceHub",
    },
    {
      comment: `"Working with KavachOne gave us peace of mind knowing our customers' data is protected by industry-leading security protocols."`,
      name: "Lisa Rodriguez",
      position: "COO, HealthTrack Systems",
    },
  ];
  return (
    <div className="bg-gray-50 px-4 py-16 sm:px-32 flex flex-col gap-16">
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-3xl font-bold text-gray-800">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 text-center">
          Trusted by leading organizations to secure their most valuable assets
        </p>
      </div>
      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {clients.map(({ comment, name, position }, index) => (
          <div
            key={index}
            className="flex flex-col p-8 gap-4 bg-white rounded-lg shadow-md"
          >
            <div className="flex items-center gap-2 text-xl text-amber-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-gray-500 italic">{comment}</p>
            <div className="">
              <strong>{name}</strong>
              <p>{position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
