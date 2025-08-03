
export default function Experience() {
  const lists = [
    "Industry-certified security experts",
    "Tailored compliance frameworks",
    "Continuous threat monitoring",
    "Regular security updates",
  ];

  const cardData = [
    {
      numeric: "99.9%",
      title: "Security Success Rate",
    },
    {
      numeric: "500+",
      title: "Clients Protected",
    },
    {
      numeric: "24/7",
      title: "Support & Monitoring",
    },
    {
      numeric: "15+",
      title: "Years of Experience",
    },
  ];
  return (
    <div className="py-16 px-8 md:px-32 grid md:grid-cols-2 gap-10 items-center">
      <div className="flex flex-col gap-8 ">
        <h2 className="md:text-4xl text-3xl font-bold text-gray-700">
          Why Leading Businesses Choose KavachOne
        </h2>
        <p className="text-gray-600">
          We deliver enterprise-grade security and compliance solutions that
          protect your business without slowing you down. Our expert team
          ensures you stay ahead of evolving threats and regulations.
        </p>
        <ul className="flex flex-col gap-4 text-gray-600">
          {lists.map((list) => (
            <li className="flex gap-4 items-center" key={list}>
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
              {list}
            </li>
          ))}
        </ul>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-2 gap-4">
        {cardData.map(({ numeric, title }, index) => (
          <div key={index} className="bg-primary/20 rounded-xl p-8 text-center">
            <span className="text-3xl font-bold text-primary">{numeric}</span>
            <p className="text-gray-600">{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
