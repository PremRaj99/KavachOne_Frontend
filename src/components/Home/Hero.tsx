import { FaStar } from "react-icons/fa";
import Button from "../common/Button";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col items-center gap-8 md:py-16 py-8 px-4 max-w-4xl mx-auto">
        <div className="flex flex-col items-center  gap-2">
          {/* Stars */}
          <div className="flex items-center gap-2 text-2xl text-amber-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          {/* Slogan */}
          <p className="text-xl font-semibold text-primary">
            "Absolutely a must! We love it!"
          </p>
        </div>
        {/* Main Title */}
        <h1 className="lg:text-6xl md:text-4xl text-center font-bold">
          Enterprise security isn't easy,
          <br />
          <span className="text-primary">
            with KavachOne, it doesn't need to be.
          </span>
        </h1>
        {/* description */}
        <p className="text-center text-gray-500 lg:text-xl">
          Security teams are experts in protection, not complex tools. That's
          why we designed KavachOne - the AI-powered security audit tool that
          covers everything from vulnerability assessment to compliance
          monitoring, and more in just 60 seconds.
        </p>
        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 scale-110">
          <Button>Book a demo</Button>
          <Button varient="secondary">See a sample audit</Button>
        </div>
      </div>
      <div className="relative">
        <div className="flex items-center px-4 sm:px-32 py-16">
          <div className="bg-gray-700 w-full rounded-lg">
            <div className="bg-gray-800 w-full rounded-lg">
              {/* Header */}
              <div className="flex gap-2 p-4">
                {/* Triple navigation */}
                <div className="w-4 h-4 bg-red-600 rounded-full"></div>
                <div className="w-4 h-4 bg-amber-400 rounded-full"></div>
                <div className="w-4 h-4 bg-green-600 rounded-full"></div>
              </div>
            </div>
            <p className="text-white p-8 text-center">
              Security Dashboard Preview
            </p>
          </div>
        </div>
        {/* background circle */}
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-green-500/20 [clip-path:circle(100%_at_100%_100%)] rotate-90 -z-10"></div>
      </div>
    </>
  );
}
