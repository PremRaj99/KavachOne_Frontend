
export default function TrustedBy() {
  const lists = [
    "Acme Corp",
    "TechVision",
    "Global Finance",
    "MediTrust",
    "DataSecure",
    "CloudNine",
  ];
  return (
    <div className="text-center flex flex-col items-center gap-8 py-16 px-4 bg-gray-50">
      <h3 className="text-gray-500 font-bold text-xl">
        Trusted by Industry Leaders
      </h3>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {lists.map((list, index) => (
          <span key={index} className="text-blue-900 text-lg font-bold">{list}</span>
        ))}
      </div>
    </div>
  );
}
